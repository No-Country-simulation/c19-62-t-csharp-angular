import { Type } from '@angular/core';
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

export const IconComponentsMap: Record<string, Type<unknown>> = {
  'circle check': CircleCheckSvgComponent,
  clock: ClockSvgComponent,
  document: DocumentSvgComponent,
  'heart-fill': HeartFillSvgComponent,
  heart: HeartSvgComponent,
  infinite: InfiniteSvgComponent,
  medal: MedalSvgComponent,
  play: PlaySvgComponent,
  star: StarSvgComponent,
  trophy: TrophySvgComponent,
  update: UpdateSvgComponent,
  video: VideoSvgComponent,
};
