import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tag.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  contentTag = input.required<string>();
}
