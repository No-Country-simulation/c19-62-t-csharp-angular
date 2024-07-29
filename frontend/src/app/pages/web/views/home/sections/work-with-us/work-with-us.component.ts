import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexContainerComponent } from '../../components/flex-container/flex-container.component';
import { WrapperImageComponent } from 'app/shared/components/wrapper-image/wrapper-image.component';
import { TitleComponent } from 'app/shared/components/title/title.component';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-work-with-us',
  standalone: true,
  imports: [
    FlexContainerComponent,
    WrapperImageComponent,
    TitleComponent,
    BasicButtonComponent,
    RouterLink,
  ],
  templateUrl: './work-with-us.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkWithUsComponent {}
