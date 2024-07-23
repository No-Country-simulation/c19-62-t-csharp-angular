import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TitleComponent } from 'app/shared/components/title/title.component';
import { TitleLevel } from 'app/shared/types/titleLevel.type';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [TitleComponent, NgClass],
  templateUrl: './article-list.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent {
  listData = input.required<string[]>();
  title = input.required<string>();
  level = input.required<TitleLevel>();
  isViewMarker = input(false);
}
