import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { PencilSvgComponent } from '../../../../../../shared/icons/pencil-svg/pencil-svg.component';
import { BasicButtonComponent } from '../../../../../../shared/ui/basic-button/basic-button.component';
import { InputValidatorPipe } from '../../../../../../shared/pipes/input-validator.pipe';
import { NgClass } from '@angular/common';
import { ValidatedInputComponent } from '../../../../../../shared/components/validated-input/validated-input.component';
import { FieldForm } from '../../../../../../shared/interfaces/FieldForm.interface';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PencilSvgComponent,
    BasicButtonComponent,
    ValidatedInputComponent,
    NgClass,
    InputValidatorPipe,
  ],
  templateUrl: './profile.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfileComponent implements OnInit {
  formUser: FormGroup;
  hasEditingEnabled = signal(false);
  fieldsForm: FieldForm[] = [
    {
      name: 'Nombre',
      key: 'name',
      type: 'text',
    },
    {
      name: 'Apellido',
      key: 'subName',
      type: 'text',
    },
    {
      name: 'Email',
      key: 'email',
      type: 'email',
    },
  ];

  constructor(private readonly fb: FormBuilder) {
    this.formUser = this.fb.nonNullable.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subName: ['', [Validators.required]],
      rol: [''],
    });
  }

  ngOnInit(): void {
    this.formUser.setValue({
      name: 'Wanderlee',
      email: 'XXXXXXXXXXXXXXXXXXX',
      subName: 'wanderlee',
      rol: 'Admin',
    });
    this.formUser.disable();
  }

  public editToggleForm(): void {
    this.hasEditingEnabled.set(!this.hasEditingEnabled());
    if (this.hasEditingEnabled()) return this.formUser.enable();

    this.formUser.disable();
  }

  public getTypeError(object: ValidationErrors): string {
    return Object.keys(object)[0] ?? '';
  }

  onSubmit(): void {
    if (this.formUser.invalid) return;

    this.editToggleForm();
  }
}
