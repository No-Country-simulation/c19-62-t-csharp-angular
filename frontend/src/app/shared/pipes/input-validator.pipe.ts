import { Pipe, type PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

export enum BasicValidators {
  required = 'Required field',
  email = 'Invalid email',
  pattern = 'Invalid format',
  minlength = 'Minimum length',
  maxlength = 'Maximum length',
  min = 'Minimum value',
  max = 'Maximum value',
}

interface PipeParams {
  field: string;
  form?: FormGroup;
}

@Pipe({
  name: 'appInputValidator',
  standalone: true,
  pure: true,
})
export class InputValidatorPipe implements PipeTransform {
  transform(error: string, { field, form }: Partial<PipeParams>): string {
    if (!(error in BasicValidators)) throw new Error('Invalid validator');

    const key = error as keyof typeof BasicValidators;

    if (key === 'required' || key === 'email' || key === 'pattern') {
      return BasicValidators[key];
    }

    if (key === 'maxlength' || key === 'minlength') {
      return `${BasicValidators[key]} (${form?.get(field!)?.errors?.[key].requiredLength})`;
    }

    return `${BasicValidators[key]} (${form?.get(field!)?.errors?.[key]?.[key]})`;
  }
}
