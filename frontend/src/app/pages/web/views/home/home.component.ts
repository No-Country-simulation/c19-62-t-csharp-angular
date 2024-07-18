import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CourseCatalogComponent } from '../course-catalog/course-catalog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseCatalogComponent],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
