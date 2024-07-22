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
    { label: 'Mi Perfil', link: '/profile' },
    { label: 'Mis Cursos', link: '/courses' },
    { label: 'Comunidad', link: '/community' },
    { label: 'Ayuda', link: '/help' },
    { label: 'Cerrar sesión', link: '/logout' },
  ];
  isOpenDropdown = signal(false);
  labelDropdownStream = computed(() =>
    this.isOpenDropdown() ? 'close dropdown' : 'open dropdown'
  );

  public toggleDropdown(): void {
    this.isOpenDropdown.update((prevState) => !prevState);
  }
}
