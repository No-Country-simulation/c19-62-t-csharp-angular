import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
} from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';

import { CarrouselData } from '../../../../interfaces/CarrouselData.interface';
import { CardSkeletonComponent } from '../../../../../../../../shared/skeletons/card-skeleton/card-skeleton.component';
import { ErrorMessageComponent } from '../../../../../../../../shared/components/error-message/error-message.component';
import { DetailsCourse } from '../../../../interfaces/CourseInfo.interface';

@Component({
  selector: 'app-courses-carousel',
  standalone: true,
  imports: [CourseCardComponent, CardSkeletonComponent, ErrorMessageComponent],
  templateUrl: './courses-carousel.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesCarouselComponent {
  carrouselData = input.required<CarrouselData>();
  data = input.required<DetailsCourse[]>();
}
