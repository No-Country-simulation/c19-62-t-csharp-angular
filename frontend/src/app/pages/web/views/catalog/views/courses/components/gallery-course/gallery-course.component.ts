import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CardSkeletonComponent } from 'app/shared/skeletons/card-skeleton/card-skeleton.component';
import { DetailsCourse } from '../../../../interfaces/CourseInfo.interface';

@Component({
  selector: 'app-gallery-course',
  standalone: true,
  imports: [CourseCardComponent, CardSkeletonComponent],
  templateUrl: './gallery-course.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryCourseComponent {
  courses = Array<string>(10).fill('');
  courseList = input.required<DetailsCourse[]>();
}
