import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoaderComponent } from '../../shared/ui/loader/loader.component';
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
    { label: 'Perfil', link: '/profile' },
    { label: 'Foto de perfil', link: '/my-photo' },
    { label: 'Configuración de la cuenta', link: '/settings' },
    { label: 'Métodos de pago', link: '/payments' },
    { label: 'Mis cursos', link: '/courses' },
  ];
}
