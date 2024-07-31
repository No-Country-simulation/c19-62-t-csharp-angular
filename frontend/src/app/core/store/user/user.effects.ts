import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import USER_ACTIONS from './user.actions';
import { Injectable } from '@angular/core';
import { AppState } from '../app.state';
import { catchError, exhaustMap, of, switchMap } from 'rxjs';
import { UserService } from 'app/pages/web/views/user/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
    private readonly userService: UserService
  ) {}

  public getUserData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(USER_ACTIONS.getUserData),
      exhaustMap(({ email }) => {
        return this.userService.getUserData(email).pipe(
          switchMap((userData) => {
            return of(
              USER_ACTIONS.saveUserData({ user: userData }),
              USER_ACTIONS.loadDataSuccessful()
            );
          })
        );
      }),
      catchError((error: HttpErrorResponse) =>
        of(USER_ACTIONS.loadDataFailure({ error: error.message }))
      )
    );
  });
}
