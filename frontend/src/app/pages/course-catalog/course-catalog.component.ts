import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CourseFilterBarComponent } from './components/course-filter-bar/course-filter-bar.component';
import { GalleryCourseComponent } from './components/gallery-course/gallery-course.component';
import { GalleryCarouselComponent } from './components/gallery-carousel/gallery-carousel.component';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [
    CourseFilterBarComponent,
    GalleryCourseComponent,
    GalleryCarouselComponent,
  ],
  templateUrl: './course-catalog.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCatalogComponent {
  isSearchActive = signal(false);

  public activeSearch(): void {
    this.isSearchActive.set(true);
  }
}
