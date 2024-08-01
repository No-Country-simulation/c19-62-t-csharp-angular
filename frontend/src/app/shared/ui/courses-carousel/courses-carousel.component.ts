import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
} from '@angular/core';
import { CarrouselData } from 'app/pages/web/views/catalog/interfaces/CarrouselData.interface';
import { DetailsCourse } from 'app/pages/web/views/catalog/interfaces/CourseInfo.interface';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-courses-carousel',
  standalone: true,
  imports: [CarouselComponent],
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
