import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-permissions-manager-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './permissions-manager-bar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PermissionsManagerBarComponent {
  readonly listPermissions = [
    'Visible',
    'Gestionar',
    'Subtítulos',
    'Preguntas y respuestas',
  ];

  permissionForms: FormGroup = this.formConstructor.nonNullable.group({
    permission: [''],
  });

  constructor(private readonly formConstructor: FormBuilder) {}
}
