import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { AvatarComponent } from '../../shared/components/avatar/avatar.component';
import { DataLink } from '../../shared/interfaces/DataLink.interface';

@Component({
  selector: 'app-user-profile-layout',
  standalone: true,
  imports: [AvatarComponent, RouterLink, LoaderComponent, RouterLinkActive],
  templateUrl: './user-profile-layout.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileLayoutComponent {
  user = 'Luis García';
  userOptions: DataLink[] = [
    { text: 'Perfil', url: '/profile' },
    { text: 'Foto de perfil', url: '/my-photo' },
    { text: 'Configuración de la cuenta', url: '/settings' },
    { text: 'Métodos de pago', url: '/payments' },
    { text: 'Mis cursos', url: '/courses' },
  ];
}
