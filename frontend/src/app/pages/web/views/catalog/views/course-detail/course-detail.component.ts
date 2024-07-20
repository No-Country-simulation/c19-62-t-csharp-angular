import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoaderComponent } from '../../../../../../shared/ui/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { BasicButtonComponent } from '../../../../../../shared/ui/basic-button/basic-button.component';
import { GridSectionComponent } from './components/grid-section/grid-section.component';
import { CardInfoComponent } from './components/card-info/card-info.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    LoaderComponent,
    FooterComponent,
    BasicButtonComponent,
    GridSectionComponent,
    CardInfoComponent,
  ],
  templateUrl: './course-detail.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CourseDetailComponent {
  dataList: string[] = [
    'Estructura y sintaxis básicas de HTML',
    'Uso de etiquetas HTML para organizar contenido',
    'Incorporación de imágenes, enlaces y formularios en páginas web',
    'Fundamentos de CSS para estilizar y presentar contenido',
    'Aplicación de colores, fuentes y diseños de página',
    'Uso de cajas, bordes y espaciado en el diseño web',
    'Principios de diseño responsivo para diferentes dispositivos',
  ];

  constructor() {
    window.scrollTo(0, 0);
  }
}
