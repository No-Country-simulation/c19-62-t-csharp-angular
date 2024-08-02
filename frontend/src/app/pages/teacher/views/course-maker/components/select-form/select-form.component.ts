import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  ControlValueAccessor,
  Validator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import factoryValidators from 'app/shared/utils/factoryValidators';
import { Subscription } from 'rxjs';

interface Selectors {
  language: (string | Validators[])[];
  level: (string | Validators[])[];
  category: (string | Validators[])[];
  subCategory: (string | Validators[])[];
}

@Component({
  selector: 'app-select-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './select-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectFormComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: SelectFormComponent,
      multi: true,
    },
  ],
})
export class SelectFormComponent
  implements ControlValueAccessor, OnDestroy, Validator
{
  private basicValidators = factoryValidators({
    required: true,
    pattern: /^(?!.*\s{2,})(?!\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9@+\-\\/_?¡!¿\s]*$/,
  });
  private subscriptionSelectForm?: Subscription;
  onTouched?: () => void;
  selectors = [
    {
      name: 'Idioma',
      options: ['español', 'ingles', 'chino'],
      control: 'language',
    },
    {
      name: 'Nivel',
      options: ['principiante', 'intermedio', 'avanzado'],
      control: 'level',
    },
    {
      name: 'Categoría',
      options: ['frontend', 'backend', 'devops'],
      control: 'category',
    },
    {
      name: 'Subcategoría',
      options: ['web', 'móvil'],
      control: 'subCategory',
    },
  ];
  selectForm = this.formConstructor.nonNullable.group({
    language: [this.selectors[0].options[0], [...this.basicValidators]],
    level: [this.selectors[1].options[0], [...this.basicValidators]],
    category: [this.selectors[2].options[0], [...this.basicValidators]],
    subCategory: [this.selectors[3].options[0], [...this.basicValidators]],
  });

  constructor(private readonly formConstructor: FormBuilder) {}
  public writeValue(obj: Selectors): void {
    if (!obj) return;

    this.selectForm.setValue(obj, { emitEvent: false });
  }

  public registerOnChange(fn: () => void): void {
    this.subscriptionSelectForm = this.selectForm.valueChanges.subscribe(fn);
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) return this.selectForm.disable();

    this.selectForm.enable();
  }

  public validate(): ValidationErrors | null {
    if (this.selectForm.valid) return null;

    return { invalid: true };
  }

  public ngOnDestroy(): void {
    this.subscriptionSelectForm?.unsubscribe();
  }
}
