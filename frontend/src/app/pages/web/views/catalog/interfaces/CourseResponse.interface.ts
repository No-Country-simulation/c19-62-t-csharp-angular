export interface Data {
  $id: string;
  bulletPoints: string;
  categoryId: number;
  categoryName: string;
  description: string;
  durationHours: number;
  id: number;
  level: string;
  moduleDtos: CourseResponse;
  prerequisites: string;
  subtitle: string;
  tagId: number;
  tagName: string;
  tagsDtos: CourseResponse;
  title: string;
  userId: string;
}

export interface CourseResponse {
  $id: string;
  $values: Data[];
}
