import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ValidatedInputComponent } from '../../../../../../shared/components/validated-input/validated-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardSvgComponent } from '@icons/card-svg.component';
import { CameraSvgComponent } from '../../../../../../shared/icons/camera-svg.component';
import { FieldInput } from 'app/shared/interfaces/FieldInput.interface';
import { BasicButtonComponent } from '../../../../../../shared/components/basic-button/basic-button.component';
import factoryValidators from 'app/shared/utils/factoryValidators';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [
    ValidatedInputComponent,
    ReactiveFormsModule,
    CardSvgComponent,
    CameraSvgComponent,
    BasicButtonComponent,
  ],
  templateUrl: './payments.component.html',
  styles: `
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaymentsComponent {
  paymentsForm: FormGroup;
  private readonly passwordValidators = factoryValidators({
    required: true,
  });
  readonly fields: FieldInput[] = [
    { name: 'Número de tarjeta  *', type: 'number', control: 'cardNumber' },
    { name: 'Titular de la tarjeta *', type: 'text', control: 'cardUser' },
    {
      name: 'Vencimiento de la tarjeta *',
      type: 'text',
      control: 'expired',
    },
    {
      name: 'Código de seguridad de la tarjeta *',
      type: 'number',
      control: 'code',
    },
  ];

  constructor(private readonly formConstructor: FormBuilder) {
    this.paymentsForm = this.formConstructor.nonNullable.group({
      cardNumber: ['', [...this.passwordValidators]],
      cardUser: ['', [...this.passwordValidators]],
      expired: ['', [...this.passwordValidators]],
      code: ['', [...this.passwordValidators]],
    });
  }

  public onSubmit(): void {
    if (this.paymentsForm.invalid) return;
  }
}
