import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthState } from './model/auth.model';

export const selectAuthFeature = (state: AppState): AuthState =>
  state.authState;

const selectToken = createSelector(
  selectAuthFeature,
  (auth: AuthState) => auth.token
);

const selectIsLoggedIn = createSelector(
  selectAuthFeature,
  (auth: AuthState) => auth.isLoggedIn
);

const selectUserLoaded = createSelector(
  selectAuthFeature,
  (auth: AuthState) => auth.isUserLoaded
);

export const AUTH_SELECTORS = {
  selectToken,
  selectIsLoggedIn,
  selectUserLoaded,
};
