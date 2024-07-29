import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import AUTH_ACTIONS from 'app/core/store/auth/auth.actions';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import { ValidatedInputComponent } from 'app/shared/components/validated-input/validated-input.component';
import { FieldInput } from 'app/shared/interfaces/FieldInput.interface';
import { InputValidatorPipe } from 'app/shared/pipes/input-validator.pipe';
import factoryValidators from 'app/shared/utils/factoryValidators';
import { AuthRecovery } from '../../interfaces/AuthRecovery.interface';
import { AUTH_SELECTORS } from 'app/core/store/auth/auth.selectors';

@Component({
  selector: 'app-form-recovery',
  standalone: true,
  imports: [
    NgClass,
    InputValidatorPipe,
    BasicButtonComponent,
    ReactiveFormsModule,
    ValidatedInputComponent,
    RouterLink,
  ],
  templateUrl: './form-recovery.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRecoveryComponent {
  private readonly REGEX = /^[a-zA-Z0-9._@-]+$/;
  recoveryForm: FormGroup;
  readonly fields: FieldInput[] = [
    { name: 'email', type: 'email', control: 'email' },
  ];
  customValidators = factoryValidators({
    required: true,
    pattern: this.REGEX,
    email: true,
  });

  constructor(
    private readonly formConstructor: FormBuilder,
    private readonly store: Store<AppState>
  ) {
    this.recoveryForm = this.formConstructor.nonNullable.group({
      email: ['', this.customValidators],
    });
  }

  public getTypeError(object: ValidationErrors): string {
    return Object.keys(object)[0] ?? '';
  }

  public onSubmit(): void {
    if (this.recoveryForm.invalid) return;

    const credentials: AuthRecovery = {
      email: this.recoveryForm.value.email,
    };

    this.store.dispatch(AUTH_ACTIONS.recoveryPassword(credentials));
    this.recoveryForm.reset();
  }
}
