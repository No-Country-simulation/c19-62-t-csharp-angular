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
import { toSignal } from '@angular/core/rxjs-interop';
import { BasicButtonComponent } from '../../../../../../shared/components/basic-button/basic-button.component';
import { InputValidatorPipe } from '../../../../../../shared/pipes/input-validator.pipe';
import { NgClass } from '@angular/common';
import { ValidatedInputComponent } from '../../../../../../shared/components/validated-input/validated-input.component';
import { FieldForm } from '../../../../../../shared/interfaces/FieldForm.interface';
import { PencilSvgComponent } from '@icons/pencil-svg.component';
import { AppState } from 'app/core/store/app.state';
import { Store } from '@ngrx/store';
import { USER_SELECTORS } from 'app/core/store/user/user.selectors';
import USER_ACTIONS from 'app/core/store/user/user.actions';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BasicButtonComponent,
    ValidatedInputComponent,
    NgClass,
    InputValidatorPipe,
    PencilSvgComponent,
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
  userInfo = toSignal(this.store.select(USER_SELECTORS.selectUserBasicInfo));
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

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store<AppState>
  ) {
    this.formUser = this.fb.nonNullable.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subName: ['', [Validators.required]],
      rol: [''],
    });
  }

  ngOnInit(): void {
    this.formUser.setValue({
      name: this.userInfo()?.firstName,
      email: this.userInfo()?.email,
      subName: this.userInfo()?.lastName,
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

    this.store.dispatch(
      USER_ACTIONS.editProfile({
        user: {
          firstName: this.formUser.value.name,
          lastName: this.formUser.value.subName,
          email: this.formUser.value.email,
        },
      })
    );

    this.editToggleForm();
  }
}
