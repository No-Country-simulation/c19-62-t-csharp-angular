export interface CourseInfo {
  details: DetailsCourse;
  courseSummary: CourseSummary;
  syllabus: SectionCourse[];
  skillsToBeGained: string[];
  requirements: string[];
  isPaid?: boolean;
  paidInfo?: InfoPaidCourse;
}

export interface DetailsCourse {
  title: string;
  overview: string;
  instructor: string;
  hoursContent: number;
  level: Level;
  students: number;
  rating: number;
  description: string;
  tags: string[];
}

export interface CourseSummary {
  introVideo: string;
  weeksLong: number;
  hoursContent: number;
  prerequisites: string;
  lastUpdated: string;
  access: string;
  certificate: boolean;
  rating: number;
}

export interface SectionCourse {
  sectionName: string;
  contentCourse: ClassContent[];
}

export interface ClassContent {
  type: ContentPage;
  title: string;
}

export interface InfoPaidCourse {
  price: number;
}

export type Level = 'principiante' | 'intermedio' | 'avanzado';
export type ContentPage = 'video' | 'documentation' | 'evaluation';
export type CourseDurationType = 'temporary' | 'permanent';
