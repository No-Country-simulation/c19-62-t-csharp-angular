import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { CardSkeletonComponent } from '../../skeletons/card-skeleton/card-skeleton.component';
import { CourseCardComponent } from '../../../pages/web/views/catalog/views/courses/components/course-card/course-card.component';
import { DetailsCourse } from 'app/pages/web/views/catalog/interfaces/CourseInfo.interface';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ErrorMessageComponent, CardSkeletonComponent, CourseCardComponent],
  templateUrl: './carousel.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  carouselData = input.required<DetailsCourse[]>();
}
