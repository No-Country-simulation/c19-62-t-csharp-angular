import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexContainerComponent } from '../../components/flex-container/flex-container.component';
import { WrapperImageComponent } from 'app/shared/components/wrapper-image/wrapper-image.component';
import { DividerComponent } from 'app/shared/components/divider/divider.component';
import { TitleComponent } from 'app/shared/components/title/title.component';
import { DiscordSvgComponent } from '@icons/discord-svg.component';
import { SlackSvgComponent } from '@icons/slack-svg.component';

@Component({
  selector: 'app-community-invitation',
  standalone: true,
  imports: [
    FlexContainerComponent,
    WrapperImageComponent,
    DividerComponent,
    TitleComponent,
    DiscordSvgComponent,
    SlackSvgComponent,
  ],
  templateUrl: './community-invitation.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityInvitationComponent {
  content = [
    'En Learn & Teach, fomentamos una cultura de aprendizaje colaborativo y continuo.',

    ' Nuestra comunidad es el núcleo de nuestra plataforma, donde estudiantes e instructores se conectan, comparten conocimientos y se apoyan mutuamente.',
  ];
}
