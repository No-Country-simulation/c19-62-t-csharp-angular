import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WrapperImageComponent } from 'app/shared/components/wrapper-image/wrapper-image.component';
import { BasicButtonComponent } from '../../../../shared/components/basic-button/basic-button.component';
import { RouterLink } from '@angular/router';
import { InductionForTeacherComponent } from './components/induction-for-teacher/induction-for-teacher.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';

@Component({
  selector: 'app-course-manager',
  standalone: true,
  imports: [
    WrapperImageComponent,
    BasicButtonComponent,
    RouterLink,
    InductionForTeacherComponent,
    MyCoursesComponent,
  ],
  templateUrl: './course-manager.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CourseManagerComponent {
  courses: string[] = [];
}
