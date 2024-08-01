import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ParagraphComponent } from '../../../pages/web/views/catalog/views/course-detail/components/paragraph/paragraph.component';
import { UpdateSvgComponent } from '../../icons/update-svg.component';
import { InfiniteSvgComponent } from '../../icons/infinite-svg.component';
import { CircleCheckSvgComponent } from '../../icons/circle-check-svg.component';
import { ClockSvgComponent } from '../../icons/clock-svg.component';
import { TrophySvgComponent } from '../../icons/trophy-svg.component';
import { CourseSummary } from 'app/pages/web/views/catalog/interfaces/CourseInfo.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-info',
  standalone: true,
  imports: [
    ParagraphComponent,
    UpdateSvgComponent,
    InfiniteSvgComponent,
    CircleCheckSvgComponent,
    ClockSvgComponent,
    TrophySvgComponent,
    DatePipe,
  ],
  templateUrl: './list-info.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInfoComponent {
  listInfo = input.required<Omit<CourseSummary, 'introVideo' | ''>>();

  iconSize = 35;
  sizeIcon = 'size-5 md:size-7 xl:size-9';

  private weeksLong = computed(
    () => `${this.listInfo().weeksLong > 1 ? 'semanas' : 'semana'}`
  );
  private hoursContent = computed(
    () => `${this.listInfo().hoursContent > 1 ? 'horas' : 'hora'}`
  );
  durationStream = computed(
    () =>
      `${this.listInfo().weeksLong} ${this.weeksLong()}, con un total de ${this.listInfo().hoursContent} ${this.hoursContent()} de contenido.`
  );
  typAccess = computed(() =>
    this.listInfo().access === 'permanent'
      ? 'Acceso de por vida'
      : 'Acceso temporal'
  );
  typeCertificate = computed(() =>
    this.listInfo().certificate
      ? 'Certificado de finalización'
      : 'Sin certificado al finalizar'
  );
}
