import { Pipe, type PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

export enum BasicValidators {
  required = 'Campo requerido',
  email = 'Formato de email invalido',
  pattern = 'Formato invalido',
  minlength = 'La longitud mínima es: ',
  maxlength = 'La longitud maxima es: ',
  min = 'Requiere un valor mínimo de: ',
  max = 'Requiere un valor máximo de:',
  passwordNoMatch = 'Las contraseñas no coinciden',
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

    if (
      key === 'required' ||
      key === 'email' ||
      key === 'pattern' ||
      key === 'passwordNoMatch'
    ) {
      return BasicValidators[key];
    }

    if (key === 'maxlength' || key === 'minlength') {
      return `${BasicValidators[key]} (${form?.get(field!)?.errors?.[key].requiredLength})`;
    }

    return `${BasicValidators[key]} (${form?.get(field!)?.errors?.[key]?.[key]})`;
  }
}
