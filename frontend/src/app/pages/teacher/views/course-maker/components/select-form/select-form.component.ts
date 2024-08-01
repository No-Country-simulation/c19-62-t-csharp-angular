import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import factoryValidators from 'app/shared/utils/factoryValidators';

@Component({
  selector: 'app-select-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './select-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectFormComponent {
  selectForm: FormGroup;
  basicValidators = factoryValidators({
    required: true,
    pattern: /^[a-zA-Z0-9._@-]+$/,
  });
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

  constructor(private readonly formConstructor: FormBuilder) {
    this.selectForm = this.formConstructor.nonNullable.group({
      language: [this.selectors[0].options[0], [...this.basicValidators]],
      level: [this.selectors[1].options[0], [...this.basicValidators]],
      category: [this.selectors[2].options[0], [...this.basicValidators]],
      subCategory: [this.selectors[3].options[0], [...this.basicValidators]],
    });
  }
}
