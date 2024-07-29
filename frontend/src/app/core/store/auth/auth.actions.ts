import { createAction, props } from '@ngrx/store';
import { AuthCredentials } from '../../../pages/web/views/auth/interfaces/AuthCredentials.interface';
import { AuthRegister } from 'app/pages/web/views/auth/interfaces/AuthRegister.interface';

const authLogin = createAction(
  '[Login Form] Login user',
  props<{ credentials: AuthCredentials }>()
);

const AuthRegister = createAction(
  '[Register Form] Register user',
  props<{ credentials: AuthRegister }>()
);

const saveToken = createAction('[Auth] Save token', props<{ token: string }>());

const authLogout = createAction('[Auth] Logout user');

const auditToken = createAction('[Auth] Audit token');

const authError = createAction('[Auth] Error', props<{ error: string }>());

const clearError = createAction('[Auth] Clear error');

const redirectTo = createAction('[Auth] Redirect to', props<{ url: string }>());

const recoveryPassword = createAction(
  '[Auth] Recover password',
  props<{ email: string }>()
);

const AUTH_ACTIONS = {
  authLogin,
  AuthRegister,
  authLogout,
  auditToken,
  saveToken,
  authError,
  clearError,
  recoveryPassword,
  redirectTo,
};

export default AUTH_ACTIONS;
