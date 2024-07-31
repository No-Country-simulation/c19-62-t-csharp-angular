import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from '../model/auth.model';
import { authReducer } from './auth/auth.reducers';
import { AuthEffects } from './auth/auth.effects';
import { UserState } from '../model/user.model';
import { userReducer } from './user/user.reducers';
import { UserEffects } from './user/user.effects';

export interface AppState {
  authState: AuthState;
  userState: UserState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  authState: authReducer,
  userState: userReducer,
};

export const APP_EFFECTS = [AuthEffects, UserEffects];
