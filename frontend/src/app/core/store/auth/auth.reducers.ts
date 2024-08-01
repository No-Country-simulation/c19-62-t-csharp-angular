import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../../model/auth.model';
import AUTH_ACTIONS from './auth.actions';

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
  isUserLoaded: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    AUTH_ACTIONS.authLogin,
    (state): AuthState => ({
      ...state,
      error: null,
      isUserLoaded: true,
    })
  ),
  on(
    AUTH_ACTIONS.saveToken,
    (state, { token }): AuthState => ({
      ...state,
      isLoggedIn: true,
      token,
      isUserLoaded: false,
    })
  ),
  on(
    AUTH_ACTIONS.authLogout,
    (state): AuthState => ({
      ...state,
      isLoggedIn: false,
      token: null,
    })
  ),
  on(
    AUTH_ACTIONS.authError,
    (state, { error }): AuthState => ({
      ...state,
      error,
      isUserLoaded: false,
    })
  ),
  on(
    AUTH_ACTIONS.AuthRegister,
    (state): AuthState => ({
      ...state,
      isUserLoaded: true,
    })
  ),
  on(
    AUTH_ACTIONS.clearError,
    (state): AuthState => ({
      ...state,
      error: null,
    })
  ),
  on(
    AUTH_ACTIONS.recoveryPassword,
    (state): AuthState => ({
      ...state,
      isUserLoaded: true,
    })
  )
);
