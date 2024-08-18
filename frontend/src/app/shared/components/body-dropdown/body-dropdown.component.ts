import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataLink } from '../../interfaces/DataLink.interface';
import { AppState } from 'app/core/store/app.state';
import { Store } from '@ngrx/store';
import AUTH_ACTIONS from 'app/core/store/auth/auth.actions';

@Component({
  selector: 'app-body-dropdown',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './body-dropdown.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyDropdownComponent {
  dropdownOptions = input.required<DataLink[]>();

  constructor(private readonly store: Store<AppState>) {}

  public onClick(): void {
    this.store.dispatch(AUTH_ACTIONS.authLogout());
  }
}
