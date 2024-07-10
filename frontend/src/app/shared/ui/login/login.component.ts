import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { InputFieldWrapperComponent } from '../input-field-wrapper/input-field-wrapper.component';
import { InputValidatorPipe } from '../../pipes/input-validator.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputFieldWrapperComponent,
    InputValidatorPipe,
  ],
  templateUrl: './login.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private readonly formConstructor: FormBuilder) {
    this.loginForm = this.formConstructor.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) return;
    //TODO Send to Backend
    this.loginForm.reset();
  }

  public getTypeError(object: ValidationErrors): string {
    return Object.keys(object)[0] ?? '';
  }
}
