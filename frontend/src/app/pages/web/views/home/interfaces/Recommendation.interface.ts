import { DataLink } from 'app/shared/interfaces/DataLink.interface';
import { DetailsCourse } from '../../catalog/interfaces/CourseInfo.interface';

export interface Recommendation {
  title: string;
  emphasis: string;
  description?: string;
  link: DataLink;
  courses: DetailsCourse[];
}

export type GridDataType = Omit<Recommendation, 'courses'>;
