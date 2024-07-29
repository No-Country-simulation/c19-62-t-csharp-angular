import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { CourseFilterBarComponent } from './components/course-filter-bar/course-filter-bar.component';
import { GalleryCourseComponent } from './components/gallery-course/gallery-course.component';
import { GalleryCarouselComponent } from './components/gallery-carousel/gallery-carousel.component';
import { DetailsCourse } from '../../interfaces/CourseInfo.interface';
import { Observable, of } from 'rxjs';
import { DividerComponent } from 'app/shared/components/divider/divider.component';
import { MockupService } from 'app/shared/services/mockup.service';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CourseFilterBarComponent,
    GalleryCourseComponent,
    GalleryCarouselComponent,
    DividerComponent,
    LetDirective,
  ],
  templateUrl: './courses.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CoursesComponent implements OnInit {
  coursesList$: Observable<DetailsCourse[]> = of([]);
  isSearchActive = signal(false);

  constructor(private readonly mockupService: MockupService) {}

  ngOnInit(): void {
    this.coursesList$ = this.mockupService.getListCourse();
  }

  public activeSearch(): void {
    this.isSearchActive.set(true);
  }
}
