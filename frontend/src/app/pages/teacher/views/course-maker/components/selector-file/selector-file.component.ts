import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CameraSvgComponent } from '../../../../../../shared/icons/camera-svg.component';
import { DocumentSvgComponent } from '../../../../../../shared/icons/document-svg.component';
import { MedalSvgComponent } from '../../../../../../shared/icons/medal-svg.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-selector-file',
  standalone: true,
  imports: [
    CommonModule,
    CameraSvgComponent,
    DocumentSvgComponent,
    MedalSvgComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './selector-file.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorFileComponent {
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

  selectorFileForm = new FormGroup({
    file: new FormControl(''),
  });
}
