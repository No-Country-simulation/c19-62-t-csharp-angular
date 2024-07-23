import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

import { RouterLink } from '@angular/router';
import { ArrowSvgComponent } from '../../icons/arrow-svg.component';
import { DataLink } from '../../interfaces/DataLink.interface';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@Component({
  selector: 'app-dropdown-user',
  standalone: true,
  imports: [AvatarComponent, RouterLink, ArrowSvgComponent],
  templateUrl: './dropdown-user.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownUserComponent {
  dropdownOptions: DataLink[] = [
    { text: 'Mi Perfil', url: '/profile' },
    { text: 'Mis Cursos', url: '/courses' },
    { text: 'Comunidad', url: '/community' },
    { text: 'Ayuda', url: '/help' },
    { text: 'Cerrar sesión', url: '/logout' },
  ];
  isOpenDropdown = signal(false);
  labelDropdownStream = computed(() =>
    this.isOpenDropdown() ? 'close dropdown' : 'open dropdown'
  );

  public toggleDropdown(): void {
    this.isOpenDropdown.update((prevState) => !prevState);
  }
}
