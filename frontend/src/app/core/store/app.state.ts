import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './auth/model/auth.model';
import { authReducer } from './auth/auth.reducers';
import { AuthEffects } from './auth/auth.effects';

export const appEffects = [AuthEffects];

export interface AppState {
  authState: AuthState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  authState: authReducer,
};
