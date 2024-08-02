import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ArrowSvgComponent } from '@icons/arrow-svg.component';
import { BodyDropdownComponent } from 'app/shared/components/body-dropdown/body-dropdown.component';

@Component({
  selector: 'app-access-card',
  standalone: true,
  imports: [ArrowSvgComponent, BodyDropdownComponent, NgClass],
  templateUrl: './access-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessCardComponent {
  readonly typeAccess = ['Público', 'Privado', 'Acceso sólo por contraseña'];
  defaultValueSelect = signal('Tipo de acceso');
  isViewDropdown = signal(false);

  public changeViewDropdown(): void {
    this.isViewDropdown.update((prev) => !prev);
  }

  public setValueAccess(value: string): void {
    this.defaultValueSelect.set(value);
    this.isViewDropdown.set(false);
  }
}
