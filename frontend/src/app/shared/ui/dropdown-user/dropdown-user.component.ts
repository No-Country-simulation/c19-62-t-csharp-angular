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
import { BodyDropdownComponent } from 'app/shared/components/body-dropdown/body-dropdown.component';
import { AppState } from 'app/core/store/app.state';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { USER_SELECTORS } from 'app/core/store/user/user.selectors';

@Component({
  selector: 'app-dropdown-user',
  standalone: true,
  imports: [
    AvatarComponent,
    RouterLink,
    ArrowSvgComponent,
    BodyDropdownComponent,
  ],
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
    { text: 'Mi Perfil', url: '/user/profile' },
    { text: 'Mis Cursos', url: '/user/courses' },
    { text: 'Comunidad', url: '/community' },
    { text: 'Ayuda', url: '/help' },
    { text: 'Cerrar sesión', url: '/logout' },
  ];
  isOpenDropdown = signal(false);
  labelDropdownStream = computed(() =>
    this.isOpenDropdown() ? 'close dropdown' : 'open dropdown'
  );
  userInfo = toSignal(this.store.select(USER_SELECTORS.selectUserBasicInfo));

  constructor(private readonly store: Store<AppState>) {}

  public toggleDropdown(): void {
    this.isOpenDropdown.update((prevState) => !prevState);
  }
}
