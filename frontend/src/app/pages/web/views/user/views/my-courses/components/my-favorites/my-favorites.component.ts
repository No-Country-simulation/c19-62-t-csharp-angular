import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HeartSvgComponent } from '../../../../../../../../shared/icons/heart-svg.component';
import { DetailsCourse } from 'app/pages/web/views/catalog/interfaces/CourseInfo.interface';
import { CarouselComponent } from 'app/shared/ui/carousel/carousel.component';
import { RegistrationMessageComponent } from '../registration-message/registration-message.component';

@Component({
  selector: 'app-my-favorites',
  standalone: true,
  imports: [
    CommonModule,
    HeartSvgComponent,
    CarouselComponent,
    RegistrationMessageComponent,
  ],
  templateUrl: './my-favorites.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyFavoritesComponent {
  courses = input.required<DetailsCourse[]>();
}
