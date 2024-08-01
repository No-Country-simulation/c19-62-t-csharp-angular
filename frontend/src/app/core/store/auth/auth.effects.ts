import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import AUTH_ACTIONS from './auth.actions';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { AUTH_SELECTORS } from './auth.selectors';
import { Router } from '@angular/router';
import { concatLatestFrom } from '@ngrx/operators';
import { Injectable } from '@angular/core';
import { AppState } from '../app.state';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../pages/web/views/auth/services/auth.service';
import { AuthErrorRegister } from 'app/pages/web/views/auth/interfaces/AuthResponse.interface';
import listFormat from 'app/shared/utils/listFormat';
import USER_ACTIONS from '../user/user.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly store: Store<AppState>
  ) {}

  public auditToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AUTH_ACTIONS.auditToken),
      concatLatestFrom(() => this.store.select(AUTH_SELECTORS.selectToken)),
      map(([, token]) => {
        if (!token) this.router.navigate(['/home']);
        return AUTH_ACTIONS.authLogout();
      })
    );
  });

  public authLogin = createEffect(() => {
    return this.actions$.pipe(
      ofType(AUTH_ACTIONS.authLogin),
      exhaustMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          switchMap(({ access_token }) =>
            of(
              AUTH_ACTIONS.saveToken({ token: access_token }),
              USER_ACTIONS.getUserData({ email: credentials.email }),
              AUTH_ACTIONS.redirectTo({ url: '/learn-teach/user/profile' })
            )
          ),
          catchError((e: HttpErrorResponse) =>
            of(AUTH_ACTIONS.authError({ error: e.statusText }))
          )
        )
      )
    );
  });

  public authRegister = createEffect(() => {
    return this.actions$.pipe(
      ofType(AUTH_ACTIONS.AuthRegister),
      exhaustMap(({ credentials }) =>
        this.authService.register(credentials).pipe(
          map(() => {
            return AUTH_ACTIONS.authLogin({
              credentials: {
                email: credentials.email,
                password: credentials.password,
              },
            });
          }),
          catchError((e: HttpErrorResponse) => {
            if (e.error?.$values?.length > 0) {
              const values: AuthErrorRegister[] = e.error.$values;
              const error = listFormat({
                values: values.map((err) => err.description),
                isLong: false,
                isConjunction: false,
              });

              return of(AUTH_ACTIONS.authError({ error }));
            }

            return of(AUTH_ACTIONS.authError({ error: e.message }));
          })
        )
      )
    );
  });

  public authRecoveryPassword = createEffect(() => {
    return this.actions$.pipe(
      ofType(AUTH_ACTIONS.recoveryPassword),
      exhaustMap(({ email }) =>
        this.authService.recoveryPassword({ email }).pipe(
          map(() =>
            AUTH_ACTIONS.redirectTo({ url: '/learn-teach/auth/login' })
          ),
          catchError((e: HttpErrorResponse) =>
            of(AUTH_ACTIONS.authError({ error: e.message }))
          )
        )
      )
    );
  });

  public AuthRedirect = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AUTH_ACTIONS.redirectTo),
        map(({ url }) => this.router.navigate([url]))
      );
    },
    { dispatch: false }
  );
}
