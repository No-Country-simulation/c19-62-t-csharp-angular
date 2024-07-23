import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataLink } from 'app/shared/interfaces/DataLink.interface';
import { SocialMediaComponent } from 'app/shared/ui/social-media/social-media.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMediaComponent, RouterLink],
  templateUrl: './footer.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  links: DataLink[][] = [
    [
      {
        text: 'Condiciones',
        url: '',
      },
      {
        text: 'Configuración de Cookies',
        url: '',
      },
      {
        text: 'Politica de privacidad',
        url: '',
      },
      {
        text: 'Declaración de accesibilidad',
        url: '',
      },
    ],
    [
      {
        text: '¿Quienes somos?',
        url: '',
      },
      {
        text: 'Ponte en contacto con nosotros',
        url: '',
      },
      {
        text: 'Enseña en Learn & Teach',
        url: '',
      },
      {
        text: 'Ayuda y asistencia',
        url: '',
      },
    ],
  ];
}
