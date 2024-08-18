import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import AUTH_ACTIONS from 'app/core/store/auth/auth.actions';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import { DataLink } from 'app/shared/interfaces/DataLink.interface';

@Component({
  selector: 'app-logout-modal',
  standalone: true,
  imports: [BasicButtonComponent],
  templateUrl: './logout-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LogoutModalComponent {
  btnKeyLogout = 'Cerrar sesión';
  optionsModal: DataLink[] = [
    { text: 'Cancelar', url: '/user/profile' },
    { text: 'Cerrar sesión', url: '/' },
  ];

  constructor(private readonly store: Store<AppState>) {}

  public navigateTo({ text, url }: DataLink): void {
    if (text === this.btnKeyLogout) {
      return this.store.dispatch(AUTH_ACTIONS.authLogout());
    }

    this.store.dispatch(AUTH_ACTIONS.redirectTo({ url }));
  }
}
