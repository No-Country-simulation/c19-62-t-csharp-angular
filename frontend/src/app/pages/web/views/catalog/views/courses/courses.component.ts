import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CourseFilterBarComponent } from './components/course-filter-bar/course-filter-bar.component';
import { GalleryCourseComponent } from './components/gallery-course/gallery-course.component';
import { GalleryCarouselComponent } from './components/gallery-carousel/gallery-carousel.component';
import { DetailsCourse } from '../../interfaces/CourseInfo.interface';
import { CourseApiService } from '../../services/course-api.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DividerComponent } from 'app/shared/components/divider/divider.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CourseFilterBarComponent,
    GalleryCourseComponent,
    GalleryCarouselComponent,
    AsyncPipe,
    DividerComponent,
  ],
  templateUrl: './courses.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CoursesComponent {
  coursesList: Observable<DetailsCourse[]>;
  isSearchActive = signal(false);

  constructor(private readonly courses: CourseApiService) {
    this.coursesList = courses.fakeListCourse();
  }

  public activeSearch(): void {
    this.isSearchActive.set(true);
  }
}
