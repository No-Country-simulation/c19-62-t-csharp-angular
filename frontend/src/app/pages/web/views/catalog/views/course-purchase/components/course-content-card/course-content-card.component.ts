import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ListInfoComponent } from 'app/shared/components/list-info/list-info.component';
import { CourseSummary } from '../../../../interfaces/CourseInfo.interface';

@Component({
  selector: 'app-course-content-card',
  standalone: true,
  imports: [ListInfoComponent],
  templateUrl: './course-content-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseContentCardComponent {
  listInfo = input.required<Omit<CourseSummary, 'introVideo'>>();
  sections = input.required<string[]>();
  iconSize = 35;
  sizeIcon = 'size-5 md:size-7 xl:size-9';
}
