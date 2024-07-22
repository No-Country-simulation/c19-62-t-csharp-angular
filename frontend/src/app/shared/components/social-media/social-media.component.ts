import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InstagramSvgComponent } from '@icons/instagram-svg.component';
import { LinkedInSvgComponent } from '@icons/linked- in-svg.component';
import { XSvgComponent } from '@icons/x-svg.component';
import { InfiniteSvgComponent } from '../../icons/infinite-svg.component';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    XSvgComponent,
    InstagramSvgComponent,
    LinkedInSvgComponent,
    InfiniteSvgComponent,
  ],
  templateUrl: './social-media.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaComponent {}
