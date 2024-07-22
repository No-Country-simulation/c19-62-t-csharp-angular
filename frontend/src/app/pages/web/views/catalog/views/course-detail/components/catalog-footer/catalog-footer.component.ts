import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataLink } from 'app/shared/interfaces/DataLink.interface';

@Component({
  selector: 'app-catalog-footer',
  standalone: true,
  imports: [],
  templateUrl: './catalog-footer.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogFooterComponent {
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
