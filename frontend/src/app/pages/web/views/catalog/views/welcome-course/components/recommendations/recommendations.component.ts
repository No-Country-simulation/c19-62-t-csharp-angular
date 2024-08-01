import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CoursesCarouselComponent } from '../../../../../../../../shared/ui/courses-carousel/courses-carousel.component';
import { DividerComponent } from '../../../../../../../../shared/components/divider/divider.component';
import { TitleComponent } from '../../../../../../../../shared/components/title/title.component';
import { DetailsCourse } from '../../../../interfaces/CourseInfo.interface';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [
    CommonModule,
    CoursesCarouselComponent,
    DividerComponent,
    TitleComponent,
  ],
  templateUrl: './recommendations.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent {
  courses = input.required<DetailsCourse[]>();
}
