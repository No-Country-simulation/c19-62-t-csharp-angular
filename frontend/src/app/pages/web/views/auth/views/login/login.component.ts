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
import { RouterLink } from '@angular/router';
import { NgClass, NgOptimizedImage } from '@angular/common';

import { AuthCredentials } from '../../interfaces/AuthCredentials.interface';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { AppState } from '../../../../../../core/store/app.state';
import AUTH_ACTIONS from '../../../../../../core/store/auth/auth.actions';
import { AUTH_SELECTORS } from '../../../../../../core/store/auth/auth.selectors';
import { AuthLayoutComponent } from '../../../../../../layouts/auth-layout/auth-layout.component';
import { InputValidatorPipe } from '../../../../../../shared/pipes/input-validator.pipe';
import { MainLogoComponent } from '../../../../../../shared/components/main-logo/main-logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputValidatorPipe,
    RouterLink,
    MainLogoComponent,
    NgClass,
    AuthLayoutComponent,
    NgOptimizedImage,
    LetDirective,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  isLoading$ = this.store.select(AUTH_SELECTORS.selectUserLoaded);
  authError$ = this.store.select(AUTH_SELECTORS.selectError);
  loginForm: FormGroup;
  private isViewPassword = signal(false);
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
    private readonly store: Store<AppState>
  ) {
    this.loginForm = this.formConstructor.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public getTypeError(object: ValidationErrors): string {
    return Object.keys(object)[0] ?? '';
  }

  public onClick(): void {
    this.isViewPassword.update((value) => !value);
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) return;

    const credentials: AuthCredentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.store.dispatch(AUTH_ACTIONS.authLogin({ credentials }));
    this.loginForm.reset();
  }
}
