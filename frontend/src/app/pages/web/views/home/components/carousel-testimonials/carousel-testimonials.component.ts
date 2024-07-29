import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { AvatarComponent } from 'app/shared/components/avatar/avatar.component';
import { DividerComponent } from 'app/shared/components/divider/divider.component';
import { TitleComponent } from 'app/shared/components/title/title.component';

export interface Testimonial {
  id: number;
  name: string;
  occupation: string;
  testimonial: string;
  avatar: string;
}

@Component({
  selector: 'app-carousel-testimonials',
  standalone: true,
  imports: [TitleComponent, DividerComponent, AvatarComponent],
  templateUrl: './carousel-testimonials.component.html',
  styleUrls: ['./carousel-testimonials.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselTestimonialsComponent {
  testimonials = input.required<Testimonial[]>();
}
