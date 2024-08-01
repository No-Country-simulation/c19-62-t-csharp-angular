import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { AvatarComponent } from '../../shared/components/avatar/avatar.component';
import { DataLink } from '../../shared/interfaces/DataLink.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import { USER_SELECTORS } from 'app/core/store/user/user.selectors';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-user-profile-layout',
  standalone: true,
  imports: [
    AvatarComponent,
    RouterLink,
    LoaderComponent,
    RouterLinkActive,
    LetDirective,
  ],
  templateUrl: './user-profile-layout.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileLayoutComponent {
  placeholderEmpty = 'unknown';
  userInfoBasic$ = this.store.select(USER_SELECTORS.selectUserBasicInfo);
  userOptions: DataLink[] = [
    { text: 'Perfil', url: '/profile' },
    { text: 'Foto de perfil', url: '/my-photo' },
    { text: 'Configuración de la cuenta', url: '/settings' },
    { text: 'Métodos de pago', url: '/payments' },
    { text: 'Mis cursos', url: '/courses' },
    { text: 'Cerrar sesión', url: '/logout' },
  ];

  constructor(private readonly store: Store<AppState>) {}
}
