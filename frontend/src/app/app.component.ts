import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import AUTH_ACTIONS from './core/store/auth/auth.actions';
import { AppState } from './core/store/app.state';
import { BasicLayoutComponent } from './layouts/basic-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicLayoutComponent],
  template: `
    <app-basic-layout>
      <router-outlet />
    </app-basic-layout>
  `,
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(AUTH_ACTIONS.auditToken());
  }
}
