import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { AuthLayoutComponent } from '../../../../../../layouts/auth-layout/auth-layout.component';
import { RouterLink } from '@angular/router';
import { MainLogoSvgComponent } from '@icons/main-logo-svg.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import { AUTH_SELECTORS } from 'app/core/store/auth/auth.selectors';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from 'app/shared/components/loader/loader.component';
import { LetDirective } from '@ngrx/component';
import { ErrorMessageComponent } from 'app/shared/components/error-message/error-message.component';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import AUTH_ACTIONS from 'app/core/store/auth/auth.actions';
import { WrapperImageComponent } from 'app/shared/components/wrapper-image/wrapper-image.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    RouterLink,
    MainLogoSvgComponent,
    RegisterFormComponent,
    AsyncPipe,
    LoaderComponent,
    LetDirective,
    ErrorMessageComponent,
    BasicButtonComponent,
    WrapperImageComponent,
  ],
  templateUrl: './register.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent implements OnDestroy {
  readonly description =
    'Regístrate y comienza tu aprendizaje junto a nuestra comunidad.';
  isSubmitted$ = this.store.select(AUTH_SELECTORS.selectUserLoaded);
  isErrored$ = this.store.select(AUTH_SELECTORS.selectError);

  constructor(private readonly store: Store<AppState>) {}

  public resetError(): void {
    this.store.dispatch(AUTH_ACTIONS.clearError());
  }

  ngOnDestroy(): void {
    this.resetError();
  }
}
