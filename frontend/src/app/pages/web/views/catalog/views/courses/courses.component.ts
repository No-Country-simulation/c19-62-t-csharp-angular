import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { CourseFilterBarComponent } from './components/course-filter-bar/course-filter-bar.component';
import { GalleryCourseComponent } from './components/gallery-course/gallery-course.component';
import { GalleryCarouselComponent } from './components/gallery-carousel/gallery-carousel.component';
import { DetailsCourse, Level } from '../../interfaces/CourseInfo.interface';
import { Observable, map, of } from 'rxjs';
import { DividerComponent } from 'app/shared/components/divider/divider.component';
import { LetDirective } from '@ngrx/component';
import { CourseApiService } from '../../services/course-api.service';

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
  course: DetailsCourse[] = [];

  constructor(private readonly courseService: CourseApiService) {}

  ngOnInit(): void {
    this.coursesList$ = this.courseService.getAllCourses().pipe(
      map(({ $values }) => {
        return $values.map((v) => ({
          title: v.title,
          overview: v.subtitle,
          instructor: 'Por definir',
          hoursContent: v.durationHours,
          level: v.level as Level,
          students: 1000,
          rating: 0,
          description: v.description,
          tags: v.tagsDtos.$values as unknown as string[],
        }));
      })
    );
  }

  public activeSearch(): void {
    this.isSearchActive.set(true);
  }
}
