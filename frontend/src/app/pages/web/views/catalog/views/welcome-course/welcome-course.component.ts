import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MockupService } from 'app/shared/services/mockup.service';
import { LetDirective } from '@ngrx/component';
import { PresentationIntroComponent } from './components/presentation-intro/presentation-intro.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';

@Component({
  selector: 'app-welcome-course',
  standalone: true,
  imports: [LetDirective, PresentationIntroComponent, RecommendationsComponent],
  templateUrl: './welcome-course.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WelcomeCourseComponent {
  course = 'Introducción de HTML y CSS';
  coursesRecommended$ = this.mockup.getFreeCourses();

  constructor(private readonly mockup: MockupService) {}
}
