import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  WritableSignal,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, FormBuilder } from '@angular/forms';
import { PencilSvgComponent } from '../../../../../../shared/icons/pencil-svg.component';
import { TrashSvgComponent } from '../../../../../../shared/icons/trash-svg.component';
import { CameraSvgComponent } from '../../../../../../shared/icons/camera-svg.component';
import { DocumentSvgComponent } from '../../../../../../shared/icons/document-svg.component';
import { MedalSvgComponent } from '../../../../../../shared/icons/medal-svg.component';
import { BasicButtonComponent } from '../../../../../../shared/components/basic-button/basic-button.component';
import { AddResourceSvgComponent } from '../../../../../../shared/icons/add-resource-svg.component';
import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-section-course-form',
  standalone: true,
  imports: [
    PencilSvgComponent,
    TrashSvgComponent,
    CameraSvgComponent,
    DocumentSvgComponent,
    MedalSvgComponent,
    BasicButtonComponent,
    AddResourceSvgComponent,
    NgClass,
  ],
  templateUrl: './section-course-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionCourseFormComponent
  implements ControlValueAccessor, OnDestroy
{
  indexSection = input.required<number>();
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
  sectionForm = this.fb.nonNullable.group({
    title: [''],
    content: this.fb.nonNullable.array([
      this.fb.group({
        subTitle: [''],
        description: [''],
        type: [''],
        resource: [''],
      }),
    ]),
  });
  private readonly subscriptionForm?: Subscription;
  onTouched?: () => void;
  isOpenContent = signal(false);
  isViewDescription = signal(false);
  isViewResources = signal(false);
  index = signal(0);
  dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');

  constructor(private readonly fb: FormBuilder) {
    this.sectionForm.controls['title'].disable();
  }

  toggleEdit(control: string): void {
    if (this.sectionForm.get(control)?.disabled) {
      return this.sectionForm.get(control)?.enable();
    }

    return this.sectionForm.get(control)?.disable();
  }

  public setValue(control: string, value: string): void {
    return this.sectionForm.get(control)?.setValue(value);
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  writeValue(obj: any): void {
    if (!obj) return;

    this.sectionForm.setValue(obj, { emitEvent: false });
  }
  registerOnChange(fn: () => void): void {
    this.sectionForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) return this.sectionForm.disable();

    this.sectionForm.enable();
  }

  ngOnDestroy(): void {
    this.subscriptionForm?.unsubscribe();
  }
}
