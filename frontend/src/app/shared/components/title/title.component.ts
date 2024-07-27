import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TitleLevel } from 'app/shared/types/titleLevel.type';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  level = input.required<TitleLevel>();
  contentTitle = input.required<string>();
}
