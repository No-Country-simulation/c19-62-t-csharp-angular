import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import AUTH_ACTIONS from 'app/core/store/auth/auth.actions';
import { AUTH_SELECTORS } from 'app/core/store/auth/auth.selectors';
import { AuthCredentials } from '../../interfaces/AuthCredentials.interface';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { InputValidatorPipe } from 'app/shared/pipes/input-validator.pipe';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import { LetDirective } from '@ngrx/component';
import { ValidatedInputComponent } from 'app/shared/components/validated-input/validated-input.component';
import { FieldInput } from 'app/shared/interfaces/FieldInput.interface';
import { RouterLink } from '@angular/router';
import factoryValidators from 'app/shared/utils/factoryValidators';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage,
    InputValidatorPipe,
    BasicButtonComponent,
    ReactiveFormsModule,
    LetDirective,
    ValidatedInputComponent,
    RouterLink,
  ],
  templateUrl: './form-login.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLoginComponent {
  private readonly REGEX = /^[a-zA-Z0-9._@-]+$/;
  isLoading$ = this.store.select(AUTH_SELECTORS.selectUserLoaded);
  authError$ = this.store.select(AUTH_SELECTORS.selectError);
  loginForm: FormGroup;
  readonly fields: FieldInput[] = [
    { name: 'email', type: 'email', control: 'email' },
    { name: 'contraseña', type: 'password', control: 'password' },
  ];
  private readonly basicValidators = factoryValidators({
    required: true,
    pattern: this.REGEX,
  });
  constructor(
    private readonly formConstructor: FormBuilder,
    private readonly store: Store<AppState>
  ) {
    this.loginForm = this.formConstructor.nonNullable.group({
      email: ['', [...this.basicValidators, Validators.email]],
      password: ['', [...this.basicValidators]],
    });
  }

  public getTypeError(object: ValidationErrors): string {
    return Object.keys(object)[0] ?? '';
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) return;

    const credentials: AuthCredentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.store.dispatch(AUTH_ACTIONS.authLogin({ credentials }));
    this.loginForm.reset();
  }
}
