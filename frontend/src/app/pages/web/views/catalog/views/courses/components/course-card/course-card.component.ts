import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { Router } from '@angular/router';
import { BasicButtonComponent } from 'app/shared/components/basic-button/basic-button.component';
import { ClockSvgComponent } from '@icons/clock-svg.component';
import { DetailsCourse } from '../../../../interfaces/CourseInfo.interface';
import { ListTagComponent } from '../../../course-detail/components/list-tag/list-tag.component';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RatingComponent,
    BasicButtonComponent,
    ClockSvgComponent,
    ListTagComponent,
  ],
  templateUrl: './course-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  detailsCourse = input.required<DetailsCourse>();
  tags = computed(() => this.detailsCourse().tags.slice(0, 3));

  constructor(private readonly router: Router) {}

  public onClick(course: string): void {
    if (!course) return;

    this.router.navigate(['/learn-teach/catalog/courses', course]);
  }
}
