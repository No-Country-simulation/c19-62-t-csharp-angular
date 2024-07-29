import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

export interface Overload {
  (value: string): string;
  (value: number): number;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  categoryName = input.required<string>();
  selectOptions = input.required<string[] | number[]>();
  isOpen = signal(false);

  toggleDropdown(): void {
    this.isOpen.update((prev) => !prev);
  }

  selectOption(option: string): void {
    console.log(`Opción seleccionada: ${option}`);
    this.isOpen.set(false);
  }
}
