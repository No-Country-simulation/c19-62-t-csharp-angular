import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { InputValidatorPipe } from '../../pipes/input-validator.pipe';
import { NgClass } from '@angular/common';
import { EyeOffSvgComponent } from '@icons/eye-off-svg.component';
import { EyeFillSvgComponent } from '@icons/eye-fill-svg.component';
import { ShowToggleBtnComponent } from '../show-toggle-btn/show-toggle-btn.component';

interface InputConfig {
  placeholder?: string;
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
}

@Component({
  selector: 'app-validated-input',
  standalone: true,
  imports: [
    InputValidatorPipe,
    NgClass,
    EyeOffSvgComponent,
    EyeFillSvgComponent,
    ShowToggleBtnComponent,
  ],
  templateUrl: './validated-input.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ValidatedInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatedInputComponent<T> implements ControlValueAccessor {
  parentForm = input.required<FormGroup>();
  control = input.required<string>();
  config = input.required<InputConfig>();
  isViewPassword = signal(false);
  customInput?: FormControl<T | null> = new FormControl<T | null>(null);
  change!: (value: string) => void;
  touched!: () => T;
  isDisabled?: boolean;

  public getTypeError(object: ValidationErrors): string {
    return Object.keys(object)[0] ?? '';
  }

  public writeValue(newValue: T): void {
    if (!newValue) return;

    this.customInput?.setValue(newValue);
  }
  public registerOnChange(fn: () => T): void {
    this.change = fn;
  }
  public registerOnTouched(fn: () => T): void {
    this.touched = fn;
  }
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public onChangeValue($event: Event): void {
    const target = $event.target as HTMLInputElement;
    this.customInput?.setValue(target.value as T);
    this.change(target.value);
    this.touched();
  }
}
