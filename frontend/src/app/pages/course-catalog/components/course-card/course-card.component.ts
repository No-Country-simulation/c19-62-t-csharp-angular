import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgOptimizedImage, RatingComponent],
  templateUrl: './course-card.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {}
