import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ValidatedInputComponent } from 'app/shared/components/validated-input/validated-input.component';
import { FieldInput } from 'app/shared/interfaces/FieldInput.interface';
import passwordConfirmationValidator from 'app/shared/utils/confirmPasswordValidator';
import factoryValidators from 'app/shared/utils/factoryValidators';
import { BasicButtonComponent } from '../../../../../../shared/components/basic-button/basic-button.component';
import { MyUserComponent } from '@icons/my-user.component';
import { RouterLink } from '@angular/router';
import { LockSvgComponent } from '@icons/lock-svg.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    ValidatedInputComponent,
    ReactiveFormsModule,
    BasicButtonComponent,
    MyUserComponent,
    RouterLink,
    LockSvgComponent,
  ],
  templateUrl: './settings.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SettingsComponent {
  private readonly PASSWORD_REGEX =
    /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})[a-zA-Z0-9._@-\s]{8,}$/;
  settingsForm: FormGroup;
  readonly fields: FieldInput[] = [
    { name: 'Contraseña actual  *', type: 'password', control: 'myPassword' },
    { name: 'Nueva contraseña', type: 'password', control: 'mewPassword' },
    {
      name: 'Repetir contraseña',
      type: 'password',
      control: 'confirmPassword',
    },
  ];
  private readonly passwordValidators = factoryValidators({
    minLength: 8,
    pattern: this.PASSWORD_REGEX,
    required: true,
  });

  constructor(private readonly formConstructor: FormBuilder) {
    this.settingsForm = this.formConstructor.nonNullable.group(
      {
        myPassword: ['', [...this.passwordValidators]],
        mewPassword: ['', [...this.passwordValidators]],
        confirmPassword: ['', [...this.passwordValidators]],
      },
      {
        validators: passwordConfirmationValidator(
          'mewPassword',
          'confirmPassword'
        ),
      }
    );
  }

  public onSubmit(): void {
    if (this.settingsForm.invalid) return;
  }
}
