import {
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
} from '@angular/core';
import { LoaderComponent } from '../../../../../../shared/components/loader/loader.component';
import { CardVideoComponent } from './components/card-video/card-video.component';
import { Observable } from 'rxjs';
import { CourseInfo } from '../../interfaces/CourseInfo.interface';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { TitleComponent } from 'app/shared/components/title/title.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { CommunityInfoComponent } from './components/community-info/community-info.component';
import { PresentationCourseComponent } from './components/presentation-course/presentation-course.component';
import { MockupService } from 'app/shared/services/mockup.service';
import { LetDirective } from '@ngrx/component';
import { ErrorMessageComponent } from 'app/shared/components/error-message/error-message.component';
import { LightLoaderComponent } from 'app/shared/components/light-loader/light-loader.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    LoaderComponent,
    CardVideoComponent,
    SyllabusComponent,
    TitleComponent,
    ArticleListComponent,
    CommunityInfoComponent,
    PresentationCourseComponent,
    LetDirective,
    ErrorMessageComponent,
    LightLoaderComponent,
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

  constructor(private readonly mockupService: MockupService) {
    this.courseInfo$ = this.mockupService.getCourseInfo();

    afterNextRender(() => {
      window.scrollTo(0, 0);
    });
  }
}
