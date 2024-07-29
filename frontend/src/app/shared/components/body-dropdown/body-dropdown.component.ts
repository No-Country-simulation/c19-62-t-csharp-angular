import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataLink } from '../../interfaces/DataLink.interface';

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
}
