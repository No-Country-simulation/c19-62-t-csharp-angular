import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import { map } from 'rxjs';

export const userGuard: CanActivateFn = () => {
  const store = inject<Store<AppState>>(Store);

  return store
    .select((state) => state.authState.isLoggedIn)
    .pipe(
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          return false;
        }
        return true;
      })
    );
};
