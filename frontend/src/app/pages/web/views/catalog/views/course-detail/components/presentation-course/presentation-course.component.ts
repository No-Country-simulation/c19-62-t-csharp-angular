import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { DetailsCourse } from '../../../../interfaces/CourseInfo.interface';
import { KeyValuePipe } from '@angular/common';
import { TitleComponent } from 'app/shared/components/title/title.component';
import { RatingComponent } from '../../../courses/components/rating/rating.component';
import { ListTagComponent } from '../list-tag/list-tag.component';

@Component({
  selector: 'app-presentation-course',
  standalone: true,
  imports: [TitleComponent, ListTagComponent, KeyValuePipe, RatingComponent],
  templateUrl: './presentation-course.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationCourseComponent {
  detailsCourse = input.required<DetailsCourse>();
  primaryInfo = computed(() => ({
    nivel: this.detailsCourse().level,
    instructor: this.detailsCourse().instructor,
    estudiantes: this.detailsCourse().students,
  }));
}
