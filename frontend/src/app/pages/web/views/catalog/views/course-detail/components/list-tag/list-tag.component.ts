import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TagComponent } from 'app/shared/components/tag/tag.component';
import { CustomClass } from 'app/shared/interfaces/CustomClass.interface';

@Component({
  selector: 'app-list-tag',
  standalone: true,
  imports: [RouterLink, TagComponent, NgClass],
  templateUrl: './list-tag.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTagComponent implements CustomClass {
  customClass = input<string>('');
  tags = input.required<string[]>();
  title = input<string>();
}
