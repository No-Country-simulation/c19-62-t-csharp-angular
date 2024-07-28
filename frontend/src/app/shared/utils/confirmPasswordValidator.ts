import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

function passwordConfirmationValidator(
  controlName: string,
  matchingControlName: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(controlName);
    const confirmPasswordControl = formGroup.get(matchingControlName);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordNoMatch: true });
    } else {
      confirmPasswordControl.setErrors(null);
    }

    if (!confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ required: true });
    }

    return null;
  };
}

export default passwordConfirmationValidator;
