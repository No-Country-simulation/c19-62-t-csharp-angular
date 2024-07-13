import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { InputFieldWrapperComponent } from '../../../../shared/ui/input-field-wrapper/input-field-wrapper.component';
import { InputValidatorPipe } from '../../../../shared/pipes/input-validator.pipe';
import { RouterLink } from '@angular/router';
import { MainLogoComponent } from '../../../../shared/ui/main-logo/main-logo.component';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { AuthLayoutComponent } from '../../../../layouts/auth-layout/auth-layout.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputFieldWrapperComponent,
    InputValidatorPipe,
    RouterLink,
    MainLogoComponent,
    NgClass,
    AuthLayoutComponent,
    NgOptimizedImage,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  private isViewPassword = signal(false);
  readonly description =
    'Bienvenido de vuelta, continuemos con tu aprendizaje.';
  loginForm: FormGroup;
  isViewPasswordStream = computed(() => this.isViewPassword());
  typeInputStream = computed(() =>
    this.isViewPassword() ? 'text' : 'password'
  );
  messageButtonStream = computed(() =>
    this.isViewPassword() ? 'ocultar contraseña' : 'mostrar contraseña'
  );
  iconButtonStream = computed(() =>
    this.isViewPassword() ? '/assets/eye-fill.svg' : '/assets/eye-off.svg'
  );

  constructor(
    private readonly formConstructor: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.loginForm = this.formConstructor.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public async onSubmit(): Promise<void> {
    if (this.loginForm.invalid) return;

    // this.loginForm.reset();
  }

  public getTypeError(object: ValidationErrors): string {
    return Object.keys(object)[0] ?? '';
  }

  public onClick(): void {
    this.isViewPassword.update((value) => !value);
  }
}
