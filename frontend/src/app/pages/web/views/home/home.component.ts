import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { GridSectionComponent } from './components/grid-section/grid-section.component';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardInfoComponent,
    GridSectionComponent,
    NgOptimizedImage,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  dataList: string[] = [
    'Estructura y sintaxis básicas de HTML',
    'Uso de etiquetas HTML para organizar contenido',
    'Incorporación de imágenes, enlaces y formularios en páginas web',
    'Fundamentos de CSS para estilizar y presentar contenido',
    'Aplicación de colores, fuentes y diseños de página',
    'Uso de cajas, bordes y espaciado en el diseño web',
    'Principios de diseño responsivo para diferentes dispositivos',
  ];
}
