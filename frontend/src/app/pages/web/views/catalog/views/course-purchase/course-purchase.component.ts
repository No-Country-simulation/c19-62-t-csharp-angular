import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerComponent } from 'app/shared/components/divider/divider.component';
import { TitleComponent } from 'app/shared/components/title/title.component';
import { PurchaseCardComponent } from './components/purchase-card/purchase-card.component';
import { CourseContentCardComponent } from './components/course-content-card/course-content-card.component';
import { CourseSummary } from '../../interfaces/CourseInfo.interface';

@Component({
  selector: 'app-course-purchase',
  standalone: true,
  imports: [
    TitleComponent,
    DividerComponent,
    PurchaseCardComponent,
    CourseContentCardComponent,
  ],
  templateUrl: './course-purchase.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CoursePurchaseComponent {
  sections = [
    'Curso de C# desde cero',
    'Curso de C# desde cero',
    'Curso de C# desde cero',
  ];

  courseSummary: CourseSummary = {
    introVideo: 'https://example.com/intro-video',
    weeksLong: 4,
    hoursContent: 16,
    prerequisites: 'No se requieren conocimientos previos.',
    lastUpdated: '2024-07-01',
    access: 'permanent',
    certificate: true,
    rating: 4,
  };
}
