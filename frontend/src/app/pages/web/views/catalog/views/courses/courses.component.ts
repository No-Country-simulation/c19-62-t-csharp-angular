import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CourseFilterBarComponent } from './components/course-filter-bar/course-filter-bar.component';
import { GalleryCourseComponent } from './components/gallery-course/gallery-course.component';
import { GalleryCarouselComponent } from './components/gallery-carousel/gallery-carousel.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CourseFilterBarComponent,
    GalleryCourseComponent,
    GalleryCarouselComponent,
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
  isSearchActive = signal(false);

  public activeSearch(): void {
    this.isSearchActive.set(true);
  }
}
