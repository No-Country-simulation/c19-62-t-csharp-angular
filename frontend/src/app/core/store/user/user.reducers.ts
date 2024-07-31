import { createReducer, on } from '@ngrx/store';
import { UserState } from 'app/core/model/user.model';
import USER_ACTIONS from './user.actions';

const initialState: UserState = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  role: null,
  coursesEnrolled: [],
  coursesFavorites: [],
  coursesCompleted: [],
  image: null,
  isLoaded: false,
  isError: false,
};

export const userReducer = createReducer(
  initialState,
  on(
    USER_ACTIONS.getUserData,
    (state): UserState => ({
      ...state,
      isLoaded: true,
      isError: false,
    })
  ),
  on(
    USER_ACTIONS.saveUserData,
    (state, { user }): UserState => ({
      ...state,
      firstName: user.firstName ?? null,
      lastName: user.lastName ?? null,
      email: user.email ?? null,
      password: user.password ?? null,
      role: user.role ?? null,
      image: user.image ?? null,
      coursesEnrolled: user.coursesEnrolled ?? [],
      coursesFavorites: user.coursesFavorites ?? [],
      coursesCompleted: user.coursesCompleted ?? [],
      isLoaded: true,
      isError: false,
    })
  ),
  on(
    USER_ACTIONS.loadDataSuccessful,
    (state): UserState => ({
      ...state,
      isLoaded: true,
      isError: false,
    })
  ),
  on(
    USER_ACTIONS.loadDataFailure,
    (state): UserState => ({
      ...state,
      isLoaded: false,
      isError: true,
    })
  )
);
