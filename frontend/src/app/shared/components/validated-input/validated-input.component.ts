import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { FieldForm } from '../../interfaces/FieldForm.interface';
import { InputValidatorPipe } from '../../pipes/input-validator.pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-validated-input',
  standalone: true,
  imports: [InputValidatorPipe, ReactiveFormsModule, NgClass],
  templateUrl: './validated-input.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatedInputComponent {
  form = input.required<FormGroup>();
  inputField = input.required<FieldForm>();

  public getTypeError(object: ValidationErrors): string {
    return Object.keys(object)[0] ?? '';
  }
}
