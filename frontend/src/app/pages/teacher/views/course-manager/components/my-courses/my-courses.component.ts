import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BasicButtonComponent } from '../../../../../../shared/components/basic-button/basic-button.component';
import { CourseCardCreatedComponent } from '../course-card-created/course-card-created.component';
import { HatGraduationComponent } from '@icons/hat-graduation.component';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [
    BasicButtonComponent,
    CourseCardCreatedComponent,
    HatGraduationComponent,
  ],
  templateUrl: './my-courses.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCoursesComponent {
  courses = input.required<string[]>();
}
