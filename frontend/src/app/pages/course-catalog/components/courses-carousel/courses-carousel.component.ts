import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
} from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CardSkeletonComponent } from '../../../../shared/skeletons/card-skeleton/card-skeleton.component';
import { ErrorMessageComponent } from '../../../../shared/ui/error-message/error-message.component';
import { CarrouselData } from '../../interfaces/CarrouselData.interface';

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
}
