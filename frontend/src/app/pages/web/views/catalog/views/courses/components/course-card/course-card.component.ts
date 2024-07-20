import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgOptimizedImage, RatingComponent],
  templateUrl: './course-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  constructor(private readonly router: Router) {}

  public onClick(course: string): void {
    if (!course) return;

    this.router.navigate(['/learn-teach/catalog/courses', course]);
  }
}
