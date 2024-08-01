import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DividerComponent } from 'app/shared/components/divider/divider.component';
import { TitleComponent } from 'app/shared/components/title/title.component';
import { MyFavoritesComponent } from './components/my-favorites/my-favorites.component';
import { CourseProgressCardComponent } from './components/course-progress-card/course-progress-card.component';
import { RegistrationMessageComponent } from './components/registration-message/registration-message.component';
import { SelectComponent } from '../../../catalog/views/courses/components/select/select.component';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import { USER_SELECTORS } from 'app/core/store/user/user.selectors';
import { LetDirective } from '@ngrx/component';
import { NgClass } from '@angular/common';

enum ActionsFilter {
  InProgress = 'inProgress',
  Completed = 'completed',
}

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [
    DividerComponent,
    TitleComponent,
    MyFavoritesComponent,
    CourseProgressCardComponent,
    RegistrationMessageComponent,
    SelectComponent,
    LetDirective,
    NgClass,
  ],
  templateUrl: './my-courses.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MyCoursesComponent {
  enrolledCourse$ = this.store.select(USER_SELECTORS.selectCourseEnrolled);
  favoriteCourses$ = this.store.select(USER_SELECTORS.selectCourseFavorites);
  completedCourses$ = this.store.select(USER_SELECTORS.selectCourseCompleted);
  currentOptionFilter = signal<ActionsFilter>(ActionsFilter.InProgress);
  optionsFilter = [
    {
      value: 'En progreso',
      action: ActionsFilter.InProgress,
    },
    {
      value: 'Completado',
      action: ActionsFilter.Completed,
    },
  ];

  constructor(private readonly store: Store<AppState>) {}

  public onChangeFilter(action: ActionsFilter): void {
    this.currentOptionFilter.set(action);
  }
}
