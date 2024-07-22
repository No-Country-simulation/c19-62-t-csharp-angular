import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CircleCheckSvgComponent } from '@icons/circle-check-svg.component';
import { ClockSvgComponent } from '@icons/clock-svg.component';
import { DocumentSvgComponent } from '@icons/document-svg.component';
import { HeartFillSvgComponent } from '@icons/heart-fill-svg.component';
import { HeartSvgComponent } from '@icons/heart-svg.component';
import { InfiniteSvgComponent } from '@icons/infinite-svg.component';
import { MedalSvgComponent } from '@icons/medal-svg.component';
import { PlaySvgComponent } from '@icons/play-svg.component';
import { StarSvgComponent } from '@icons/star-svg.component';
import { TrophySvgComponent } from '@icons/trophy-svg.component';
import { UpdateSvgComponent } from '@icons/update-svg.component';
import { VideoSvgComponent } from '@icons/video-svg.component';
import { Icons, IconsType } from 'app/shared/enums/icons.enum';

@Component({
  selector: 'app-svg-container',
  standalone: true,
  imports: [
    CircleCheckSvgComponent,
    ClockSvgComponent,
    DocumentSvgComponent,
    HeartFillSvgComponent,
    HeartSvgComponent,
    InfiniteSvgComponent,
    MedalSvgComponent,
    PlaySvgComponent,
    StarSvgComponent,
    TrophySvgComponent,
    UpdateSvgComponent,
    VideoSvgComponent,
  ],
  templateUrl: './svg-container.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgContainerComponent {
  iconType = input.required<IconsType>();
  readonly icons = Icons;
}
