import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { AuthLayoutComponent } from 'app/layouts/auth-layout/auth-layout.component';
import { FormRecoveryComponent } from '../../components/form-recovery/form-recovery.component';
import { LoaderComponent } from '../../../../../../shared/components/loader/loader.component';
import { ErrorMessageComponent } from '../../../../../../shared/components/error-message/error-message.component';
import { BasicButtonComponent } from '../../../../../../shared/components/basic-button/basic-button.component';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import AUTH_ACTIONS from 'app/core/store/auth/auth.actions';
import { AUTH_SELECTORS } from 'app/core/store/auth/auth.selectors';
import { LetDirective } from '@ngrx/component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    FormRecoveryComponent,
    LoaderComponent,
    ErrorMessageComponent,
    BasicButtonComponent,
    LetDirective,
    RouterLink,
  ],
  templateUrl: './recovery-password.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RecoveryPasswordComponent implements OnDestroy {
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
