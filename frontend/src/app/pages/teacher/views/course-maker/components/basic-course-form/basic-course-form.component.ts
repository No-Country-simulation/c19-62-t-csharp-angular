import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import factoryValidators from 'app/shared/utils/factoryValidators';

@Component({
  selector: 'app-basic-course-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './basic-course-form.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCourseFormComponent {
  basicCourseForm: FormGroup;
  basicValidators = factoryValidators({
    required: true,
    pattern: /^[a-zA-Z0-9._@-]+$/,
  });
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

  constructor(private readonly formConstructor: FormBuilder) {
    this.basicCourseForm = this.formConstructor.nonNullable.group({
      title: ['', [...this.basicValidators, Validators.maxLength(60)]],
      subTitle: ['', [...this.basicValidators, Validators.maxLength(120)]],
      description: ['', [...this.basicValidators, Validators.minLength(200)]],
    });
  }
}
