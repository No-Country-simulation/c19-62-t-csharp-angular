import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicButtonComponent } from '../../../../../../shared/components/basic-button/basic-button.component';
import { ValidatedInputComponent } from '../../../../../../shared/components/validated-input/validated-input.component';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import factoryValidators from 'app/shared/utils/factoryValidators';
import { AuthRegister } from '../../interfaces/AuthRegister.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import AUTH_ACTIONS from 'app/core/store/auth/auth.actions';
import { InputValidatorPipe } from 'app/shared/pipes/input-validator.pipe';
import passwordConfirmationValidator from 'app/shared/utils/confirmPasswordValidator';
import { FieldInput } from 'app/shared/interfaces/FieldInput.interface';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    BasicButtonComponent,
    ValidatedInputComponent,
    ReactiveFormsModule,
    InputValidatorPipe,
  ],
  templateUrl: './register-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  formRegister: FormGroup;
  readonly fields: FieldInput[] = [
    { name: 'nombre', type: 'text', control: 'name' },
    { name: 'apellidos', type: 'text', control: 'lastName' },
    { name: 'email', type: 'email', control: 'email' },
    { name: 'contraseña', type: 'password', control: 'password' },
    {
      name: 'repetir contraseña',
      type: 'password',
      control: 'confirmPassword',
    },
  ];
  private readonly REGEX = /^[a-zA-Z0-9._@-]+$/;
  private readonly basicValidators = factoryValidators({
    required: true,
    pattern: this.REGEX,
  });
  private readonly primaryValidators = factoryValidators({
    minLength: 3,
    maxLength: 20,
  });
  private readonly passwordValidators = factoryValidators({
    minLength: 7,
  });

  constructor(
    private readonly formConstructor: FormBuilder,
    private readonly store: Store<AppState>
  ) {
    this.formRegister = this.formConstructor.nonNullable.group(
      {
        name: ['', [...this.basicValidators, ...this.primaryValidators]],
        lastName: ['', [...this.basicValidators, ...this.primaryValidators]],
        email: ['', [...this.basicValidators, Validators.email]],
        password: ['', [...this.basicValidators, ...this.passwordValidators]],
        confirmPassword: [''],
        terms: [false, [Validators.requiredTrue]],
      },
      {
        validators: passwordConfirmationValidator(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  public onSubmit(): void {
    console.log(this.formRegister);

    if (this.formRegister.invalid) {
      return;
    }

    const credentials: AuthRegister = {
      firstName: this.formRegister.value.name,
      lastName: this.formRegister.value.lastName,
      email: this.formRegister.value.email,
      password: this.formRegister.value.password,
    };

    this.store.dispatch(AUTH_ACTIONS.AuthRegister({ credentials }));
    this.formRegister.reset();
  }
}
