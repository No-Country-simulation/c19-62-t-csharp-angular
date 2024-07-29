import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexContainerComponent } from '../../components/flex-container/flex-container.component';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import { WrapperImageComponent } from 'app/shared/components/wrapper-image/wrapper-image.component';
import { TitleComponent } from 'app/shared/components/title/title.component';
import { DividerComponent } from 'app/shared/components/divider/divider.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [
    FlexContainerComponent,
    BasicButtonComponent,
    WrapperImageComponent,
    TitleComponent,
    DividerComponent,
    RouterLink,
  ],
  templateUrl: './who-we-are.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhoWeAreComponent {
  content = [
    'Somos una plataforma educativa que mejora el aprendizaje con herramientas innovadoras y recursos de calidad.',
    'Nuestro objetivo es facilitar el acceso a una educación efectiva y personalizada, apoyando a estudiantes y educadores en su desarrollo.',
  ];
}
