import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private readonly formConstructor: FormBuilder,
    private readonly destroy: DestroyRef
  ) {
    this.loginForm = this.formConstructor.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loginForm.events
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((data) => console.log(data));
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) return;

    console.log(this.loginForm.value);
  }
}
