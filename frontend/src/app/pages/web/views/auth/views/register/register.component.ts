import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthLayoutComponent } from '../../../../../../layouts/auth-layout/auth-layout.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthLayoutComponent],
  templateUrl: './register.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent {
  readonly description =
    'Regístrate y comienza tu aprendizaje junto a nuestra comunidad.';
}
