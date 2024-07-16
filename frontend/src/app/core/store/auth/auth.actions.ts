import { createAction, props } from '@ngrx/store';
import { AuthCredentials } from '../../../pages/auth/interfaces/AuthCredentials.interface';

const authLogin = createAction(
  '[Login Form] Login user',
  props<{ credentials: AuthCredentials }>()
);

const saveToken = createAction('[Auth] Save token', props<{ token: string }>());

const authLogout = createAction('[Auth] Logout user');

const auditToken = createAction('[Auth] Audit token');

const authError = createAction('[Auth] Error', props<{ error: string }>());

const AUTH_ACTIONS = {
  authLogin,
  authLogout,
  auditToken,
  saveToken,
  authError,
};

export default AUTH_ACTIONS;
