import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import AUTH_ACTIONS from './auth.actions';
import { map } from 'rxjs';
import { AUTH_SELECTORS } from './auth.selectors';
import { Router } from '@angular/router';
import { concatLatestFrom } from '@ngrx/operators';
import { Injectable } from '@angular/core';
import { AppState } from '../app.state';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
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
}
