import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CourseCardComponent } from '../../../catalog/views/courses/components/course-card/course-card.component';
import { BasicButtonComponent } from '../../../../../../shared/components/basic-button/basic-button.component';
import { TitleComponent } from '../../../../../../shared/components/title/title.component';
import { RouterLink } from '@angular/router';
import { DetailsCourse } from '../../../catalog/interfaces/CourseInfo.interface';
import { GridDataType } from '../../interfaces/Recommendation.interface';

@Component({
  selector: 'app-course-grid',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent,
    BasicButtonComponent,
    TitleComponent,
    RouterLink,
  ],
  templateUrl: './course-grid.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseGridComponent {
  gridData = input.required<GridDataType>();
  courses = input.required<DetailsCourse[]>();
}
