import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HamburgerBarSvgComponent } from '@icons/hamburger-bar-svg.component';
import { BodyDropdownComponent } from 'app/shared/components/body-dropdown/body-dropdown.component';

import { DataLink } from 'app/shared/interfaces/DataLink.interface';

@Component({
  selector: 'app-dropdown-user-mobile',
  standalone: true,
  imports: [HamburgerBarSvgComponent, BodyDropdownComponent],
  templateUrl: './dropdown-user-mobile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownUserMobileComponent {
  isOpenDropdown = signal(false);

  dropdownOptions: DataLink[] = [
    { text: 'Ingresar', url: '/learn-teach/auth/login' },
    { text: 'Crear cuenta', url: '/learn-teach/auth/register' },
    { text: 'Cursos', url: '/learn-teach/catalog' },
    { text: 'Sobre nosotros', url: 'community' },
    { text: 'FAQ', url: 'help' },
  ];

  public toggleDropdown(): void {
    this.isOpenDropdown.update((prevState) => !prevState);
  }
}
