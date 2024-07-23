import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './paragraph.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParagraphComponent {
  text = input.required<string>();
  textComplementary = input<string | null>();
  customClass = input<string>();
}
