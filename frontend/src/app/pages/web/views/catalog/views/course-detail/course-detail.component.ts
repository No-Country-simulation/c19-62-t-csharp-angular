import {
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
} from '@angular/core';
import { LoaderComponent } from '../../../../../../shared/components/loader/loader.component';
import { CardVideoComponent } from './components/card-video/card-video.component';
import { CourseApiService } from '../../services/course-api.service';
import { Observable } from 'rxjs';
import { CourseInfo } from '../../interfaces/CourseInfo.interface';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { TitleComponent } from 'app/shared/components/title/title.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { CommunityInfoComponent } from './components/community-info/community-info.component';
import { PresentationCourseComponent } from './components/presentation-course/presentation-course.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    LoaderComponent,
    CardVideoComponent,
    AsyncPipe,
    JsonPipe,
    SyllabusComponent,
    TitleComponent,
    ArticleListComponent,
    CommunityInfoComponent,
    PresentationCourseComponent,
  ],
  templateUrl: './course-detail.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CourseDetailComponent {
  courseInfo$: Observable<CourseInfo>;

  constructor(private readonly courseApi: CourseApiService) {
    this.courseInfo$ = this.courseApi.fakeDataCourse();

    afterNextRender(() => {
      window.scrollTo(0, 0);
    });
  }
}
