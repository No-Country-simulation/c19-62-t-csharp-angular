import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicButtonComponent } from '../../../../../../shared/components/basic-button/basic-button.component';
import { WrapperImageComponent } from 'app/shared/components/wrapper-image/wrapper-image.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-induction-for-teacher',
  standalone: true,
  imports: [BasicButtonComponent, WrapperImageComponent, RouterLink],
  templateUrl: './induction-for-teacher.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InductionForTeacherComponent {
  readonly listRecommendations = [
    'Es tu momento de ayudar y aconsejar a otros sobre los temas que tanto te apasionan.',
    'Se parte de esta incipiente comunidad y desarrolla cursos gratuitos o pagos',
    'Construye tu comunidad en torno a nuestra plataforma',
    'Aprovecha las oportunidades que Learn & Teach ofrece a cada nuevo instructor/a',
  ];
}
