import { createAction, props } from '@ngrx/store';

const authLogin = createAction(
  '[Login Form] Login user',
  props<{ token: string }>()
);

const authLogout = createAction('[Auth] Logout user');

const auditToken = createAction('[Auth] Audit token');

const AUTH_ACTIONS = {
  authLogin,
  authLogout,
  auditToken,
};

export default AUTH_ACTIONS;
