import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component';
import { SectionCourse } from '../../../../interfaces/CourseInfo.interface';
import { ErrorMessageComponent } from 'app/shared/components/error-message/error-message.component';
import { TitleComponent } from 'app/shared/components/title/title.component';

@Component({
  selector: 'app-syllabus',
  standalone: true,
  imports: [AccordionPanelComponent, ErrorMessageComponent, TitleComponent],
  templateUrl: './syllabus.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SyllabusComponent {
  readonly MAX_SECTIONS = 5;
  readonly contentSyllabus = input.required<SectionCourse[]>();

  isLoadAllSections = signal(false);
  totalSections = computed(() => this.contentSyllabus().length);
  isMayorFive = computed(() => this.totalSections() > this.MAX_SECTIONS);
  firstsSectionStream = computed(() => {
    return this.isMayorFive() && !this.isLoadAllSections()
      ? this.contentSyllabus().slice(0, this.MAX_SECTIONS)
      : this.contentSyllabus();
  });

  public onClick(): void {
    if (!this.isMayorFive() || this.isLoadAllSections()) return;

    this.isLoadAllSections.set(true);
  }
}
