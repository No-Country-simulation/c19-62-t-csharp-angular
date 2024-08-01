import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BasicCourseFormComponent } from '../basic-course-form/basic-course-form.component';
import { SelectFormComponent } from '../select-form/select-form.component';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
import { JsonPipe } from '@angular/common';
import { CourseContentFormComponent } from '../course-content-form/course-content-form.component';

@Component({
  selector: 'app-planning-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BasicCourseFormComponent,
    SelectFormComponent,
    ImageUploaderComponent,
    CourseContentFormComponent,
    JsonPipe,
  ],
  templateUrl: './planning-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanningFormComponent {
  planningForm: FormGroup;

  constructor(private readonly formConstructor: FormBuilder) {
    this.planningForm = this.formConstructor.nonNullable.group({
      basic: {
        title: '',
        subTitle: '',
        description: '',
      },
      selector: {
        language: '',
        level: '',
        category: '',
        subCategory: '',
      },
    });
  }

  public onSubmit(): void {
    console.log(this.planningForm.value);
  }
}
