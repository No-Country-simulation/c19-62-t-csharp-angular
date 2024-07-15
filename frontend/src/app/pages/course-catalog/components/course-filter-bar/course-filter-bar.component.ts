import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-course-filter-bar',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './course-filter-bar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFilterBarComponent {
  readonly educationsTiers = ['principiante', 'intermedio', 'avanzado'];
  readonly categories = ['desarrollo web', 'diseño', 'marketing', 'finanzas'];
  readonly ratings = [1, 2, 3, 4, 5];
  readonly durationsCourses = ['corto', 'medio', 'largo'];

  isOpen = signal(false);

  toggleDropdown(): void {
    this.isOpen.update((prev) => !prev);
  }

  selectOption(option: string): void {
    console.log(`Opción seleccionada: ${option}`);
    this.isOpen.set(false);
  }
}
