import {
  CurrencyPipe,
  DatePipe,
  NgClass,
  NgOptimizedImage,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { RatingComponent } from '../../../courses/components/rating/rating.component';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import { HeartSvgComponent } from '@icons/heart-svg.component';
import { ClockSvgComponent } from '@icons/clock-svg.component';
import { TrophySvgComponent } from '@icons/trophy-svg.component';
import { InfiniteSvgComponent } from '@icons/infinite-svg.component';
import { UpdateSvgComponent } from '@icons/update-svg.component';
import { CircleCheckSvgComponent } from '@icons/circle-check-svg.component';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import { HeartFillSvgComponent } from '@icons/heart-fill-svg.component';
import { CustomClass } from 'app/shared/interfaces/CustomClass.interface';
import { PlaySvgComponent } from '@icons/play-svg.component';
import { CourseSummary } from '../../../../interfaces/CourseInfo.interface';
import { ListInfoComponent } from 'app/shared/components/list-info/list-info.component';

@Component({
  selector: 'app-card-video',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RatingComponent,
    HeartSvgComponent,
    ParagraphComponent,
    ClockSvgComponent,
    TrophySvgComponent,
    InfiniteSvgComponent,
    UpdateSvgComponent,
    CircleCheckSvgComponent,
    BasicButtonComponent,
    HeartFillSvgComponent,
    PlaySvgComponent,
    NgClass,
    CurrencyPipe,
    DatePipe,
    ListInfoComponent,
  ],
  templateUrl: './card-video.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardVideoComponent implements CustomClass {
  cardData = input.required<CourseSummary>();
  isPaid = input<boolean>();
  customClass = input<string>('');
  priceCourse = input<number>();
  isFavorite = signal(false);
  iconSize = 35;
  sizeIcon = 'size-5 md:size-7 xl:size-9';

  isFavoriteStream = computed(() =>
    this.isFavorite() ? 'add to favorites' : 'remove from favorites'
  );

  public onClick(): void {
    this.isFavorite.update((prev) => !prev);
  }
}
