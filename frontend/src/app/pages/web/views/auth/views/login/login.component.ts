import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainLogoComponent } from '../../../../../../shared/components/main-logo/main-logo.component';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { AuthLayoutComponent } from 'app/layouts/auth-layout/auth-layout.component';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import { AUTH_SELECTORS } from 'app/core/store/auth/auth.selectors';
import AUTH_ACTIONS from 'app/core/store/auth/auth.actions';
import { LetDirective } from '@ngrx/component';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import { LoaderComponent } from 'app/shared/components/loader/loader.component';
import { ErrorMessageComponent } from 'app/shared/components/error-message/error-message.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    MainLogoComponent,
    FormLoginComponent,
    AuthLayoutComponent,
    LetDirective,
    BasicButtonComponent,
    LoaderComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent implements OnDestroy {
  readonly description =
    'Bienvenido de vuelta, continuemos con tu aprendizaje.';
  isSubmitted$ = this.store.select(AUTH_SELECTORS.selectUserLoaded);
  isErrored$ = this.store.select(AUTH_SELECTORS.selectError);

  constructor(private readonly store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.store.dispatch(AUTH_ACTIONS.clearError());
  }

  public resetError(): void {
    this.store.dispatch(AUTH_ACTIONS.clearError());
  }
}
