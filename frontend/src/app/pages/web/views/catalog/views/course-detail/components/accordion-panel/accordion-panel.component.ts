import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SectionCourse } from '../../../../interfaces/CourseInfo.interface';
import { ArrowSvgComponent } from '@icons/arrow-svg.component';

@Component({
  selector: 'app-accordion-panel',
  standalone: true,
  imports: [ArrowSvgComponent],
  templateUrl: './accordion-panel.component.html',
  styleUrl: './accordion-panel.component.css',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionPanelComponent {
  syllabus = input.required<SectionCourse>();
}
