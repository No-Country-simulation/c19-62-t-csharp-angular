import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../../../../../../shared/components/title/title.component';
import { DividerComponent } from '../../../../../../../../shared/components/divider/divider.component';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import { WrapperImageComponent } from 'app/shared/components/wrapper-image/wrapper-image.component';
import { DiscordSvgComponent } from '../../../../../../../../shared/icons/discord-svg.component';
import { SlackSvgComponent } from '../../../../../../../../shared/icons/slack-svg.component';

@Component({
  selector: 'app-presentation-intro',
  standalone: true,
  imports: [
    RouterLink,
    TitleComponent,
    DividerComponent,
    BasicButtonComponent,
    WrapperImageComponent,
    DiscordSvgComponent,
    SlackSvgComponent,
  ],
  templateUrl: './presentation-intro.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationIntroComponent {
  course = input.required<string>();
}
