import { createReducer, on } from '@ngrx/store';
import { AuthState } from './model/auth.model';
import AUTH_ACTIONS from './auth.actions';

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
  isUserLoaded: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    AUTH_ACTIONS.authLogin,
    (state, { token }): AuthState => ({ ...state, isLoggedIn: true, token })
  ),
  on(
    AUTH_ACTIONS.authLogout,
    (state): AuthState => ({
      ...state,
      isLoggedIn: false,
      token: null,
    })
  )
);
