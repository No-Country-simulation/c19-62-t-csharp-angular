import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const store = inject<Store<AppState>>(Store);

  return store
    .select((state) => state.authState.isLoggedIn)
    .pipe(map((isLoggedIn) => !isLoggedIn));
};
