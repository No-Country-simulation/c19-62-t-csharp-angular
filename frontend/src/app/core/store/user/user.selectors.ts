import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from 'app/core/model/user.model';

const selectUseFeature = (state: AppState): UserState => state.userState;

const selectUserBasicInfo = createSelector(
  selectUseFeature,
  (state: UserState) => ({
    email: state.email,
    firstName: state.firstName,
    lastName: state.lastName,
    image: state.image,
  })
);

const selectCourseEnrolled = createSelector(
  selectUseFeature,
  (state: UserState) => state.coursesEnrolled
);

const selectCourseFavorites = createSelector(
  selectUseFeature,
  (state: UserState) => state.coursesFavorites
);

const selectCourseCompleted = createSelector(
  selectUseFeature,
  (state: UserState) => state.coursesCompleted
);

export const USER_SELECTORS = {
  selectUserBasicInfo,
  selectCourseEnrolled,
  selectCourseFavorites,
  selectCourseCompleted,
};
