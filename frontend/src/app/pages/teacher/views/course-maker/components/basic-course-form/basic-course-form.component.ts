import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import factoryValidators from 'app/shared/utils/factoryValidators';
import { Subscription } from 'rxjs';

export interface BasicForm {
  title: (string | Validators[])[];
  subTitle: (string | Validators[])[];
  description: (string | Validators[])[];
}

@Component({
  selector: 'app-basic-course-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './basic-course-form.component.html',
  styleUrls: ['./basic-course-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: BasicCourseFormComponent,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: BasicCourseFormComponent,
      multi: true,
    },
  ],
})
export class BasicCourseFormComponent
  implements ControlValueAccessor, OnDestroy, Validator
{
  private basicValidators = factoryValidators({
    required: true,
    pattern: /^(?!.*\s{2,})(?!\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9@+\-\\/_?¡!¿\s]*$/,
  });
  private fromSubscription?: Subscription;
  onTouched?: () => void;

  fields = [
    {
      name: 'Titulo',
      type: 'text',
      feedback: 'Te sugerimos un título claro y llamativo ',
    },
    {
      name: 'Subtitulo del Curso',
      type: 'text',
      feedback:
        'Introduce palabras claves y menciona las tres o cuatro áreas que consideres más importantes',
    },
    {
      name: 'Descripción',
      type: 'textarea',
    },
  ];

  basicCourseForm = this.formConstructor.nonNullable.group({
    title: ['', [...this.basicValidators, Validators.maxLength(60)]],
    subTitle: ['', [...this.basicValidators, Validators.maxLength(120)]],
    description: ['', [...this.basicValidators, Validators.minLength(200)]],
  });

  constructor(private readonly formConstructor: FormBuilder) {}

  public writeValue(obj: BasicForm): void {
    if (!obj) return;

    this.basicCourseForm.setValue(
      {
        title: obj.title,
        description: obj.description,
        subTitle: obj.subTitle,
      },
      { emitEvent: false }
    );
  }

  public registerOnChange(fn: () => void): void {
    this.fromSubscription = this.basicCourseForm.valueChanges.subscribe(fn);
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) return this.basicCourseForm.disable();

    this.basicCourseForm.enable();
  }

  public validate(): ValidationErrors | null {
    if (this.basicCourseForm.valid) return null;

    return { invalidForm: { valid: false } };
  }

  ngOnDestroy(): void {
    this.fromSubscription?.unsubscribe();
  }
}
