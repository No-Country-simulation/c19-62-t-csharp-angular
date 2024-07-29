import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CustomClass } from 'app/shared/interfaces/CustomClass.interface';
import { TitleLevel } from 'app/shared/types/titleLevel.type';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [NgClass],
  templateUrl: './title.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent implements CustomClass {
  level = input.required<TitleLevel>();
  contentTitle = input.required<string>();
  customClass = input<string>('');
  textEmphasis = input<string>();
}
