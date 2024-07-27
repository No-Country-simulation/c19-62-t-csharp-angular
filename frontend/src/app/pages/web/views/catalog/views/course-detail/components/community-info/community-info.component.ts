import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DiscordSvgComponent } from '@icons/discord-svg.component';
import { SlackSvgComponent } from '@icons/slack-svg.component';

@Component({
  selector: 'app-community-info',
  standalone: true,
  imports: [DiscordSvgComponent, SlackSvgComponent],
  templateUrl: './community-info.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityInfoComponent {}
