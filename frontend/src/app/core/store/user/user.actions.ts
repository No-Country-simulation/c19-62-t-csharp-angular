import { createAction, props } from '@ngrx/store';
import { UserState } from 'app/core/model/user.model';
import { UserEditRequest } from 'app/pages/web/views/user/interface/UserEditRequest.interface';

const getUserData = createAction(
  '[User] Save User Data',
  props<{ email: string }>()
);

const loadDataSuccessful = createAction('[User] Load Data Successful');

const editProfile = createAction(
  '[User] Edit Profile',
  props<{ user: Partial<UserEditRequest> }>()
);

const loadDataFailure = createAction(
  '[User] Load Data Failure',
  props<{ error: string }>()
);

const saveUserData = createAction(
  '[User] Get User Data',
  props<{ user: Partial<UserState> }>()
);

const USER_ACTIONS = {
  getUserData,
  loadDataSuccessful,
  loadDataFailure,
  saveUserData,
  editProfile,
};

export default USER_ACTIONS;
