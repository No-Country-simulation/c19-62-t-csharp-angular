import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import AUTH_ACTIONS from './auth.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AUTH_SELECTORS } from './auth.selectors';
import { Router } from '@angular/router';
import { concatLatestFrom } from '@ngrx/operators';
import { Injectable } from '@angular/core';
import { AppState } from '../app.state';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../pages/web/views/auth/services/auth.service';

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
          map(({ access_token }) => {
            this.router.navigate(['/user/profile']);
            return AUTH_ACTIONS.saveToken({ token: access_token });
          }),
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
          catchError((e: HttpErrorResponse) =>
            of(AUTH_ACTIONS.authError({ error: e.statusText }))
          )
        )
      )
    );
  });

  public authRecoveryPassword = createEffect(() => {
    return this.actions$.pipe(
      ofType(AUTH_ACTIONS.recoveryPassword),
      exhaustMap(({ email }) =>
        this.authService.recoveryPassword({ email }).pipe(
          map(() => AUTH_ACTIONS.redirectTo({ url: '/auth/login' })),
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
