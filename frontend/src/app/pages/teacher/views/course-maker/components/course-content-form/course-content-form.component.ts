import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  WritableSignal,
  signal,
  viewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AddResourceSvgComponent } from '@icons/add-resource-svg.component';
import { CameraSvgComponent } from '@icons/camera-svg.component';
import { DocumentSvgComponent } from '@icons/document-svg.component';
import { MedalSvgComponent } from '@icons/medal-svg.component';
import { PencilSvgComponent } from '@icons/pencil-svg.component';
import { TrashSvgComponent } from '@icons/trash-svg.component';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';

@Component({
  selector: 'app-course-content-form',
  standalone: true,
  imports: [
    TrashSvgComponent,
    PencilSvgComponent,
    BasicButtonComponent,
    NgClass,
    CameraSvgComponent,
    DocumentSvgComponent,
    MedalSvgComponent,
    AddResourceSvgComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './course-content-form.component.html',
  styles: `
    input:disabled {
      border-color: transparent;
      background-color: transparent;
      caret-color: transparent;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseContentFormComponent {
  footerControls = ['descripción', 'recursos'];
  optionsResource = [
    {
      label: 'Video',
      type: 'video',
    },
    {
      label: 'Documento',
      type: 'document',
    },
    {
      label: 'Examen',
      type: 'exam',
    },
  ];
  isOpenContent = signal(false);
  isViewDescription = signal(false);
  isViewResources = signal(false);
  index = signal(0);
  dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');
  sections: number[] = [];
  contentCourseForm = this.formConstructor.nonNullable.group({
    title: [''],
    content: this.formConstructor.array([
      this.formConstructor.group({
        subTitle: [''],
        description: [''],
        type: [''],
        resource: [''],
      }),
    ]),
  });

  constructor(private readonly formConstructor: FormBuilder) {
    this.contentCourseForm.controls['title'].disable();
  }

  public onAddSection(): void {
    this.sections.push(2);
    console.log(this.sections);
  }

  public onButtonContent(): void {
    this.isOpenContent.update((prev) => !prev);
  }

  public toggleView(signal: WritableSignal<boolean>): void {
    signal.update((prev) => !prev);
  }

  public setIndex(index: number): void {
    this.index.set(index);
  }

  public toggleDialog(): void {
    this.dialog()?.nativeElement.showModal();
  }

  public closeDialog(): void {
    this.dialog()?.nativeElement.close();
  }

  public toggleEdit(control: string): void {
    const isDisabled = this.contentCourseForm.get(control)?.disabled;
    console.log(this.contentCourseForm.value);

    if (isDisabled) {
      return this.contentCourseForm.get(control)?.enable();
    }

    return this.contentCourseForm.get(control)?.disable();
  }

  public setValue(control: string, value: string): void {
    return this.contentCourseForm.get(control)?.setValue(value);
  }
}
