export interface CoursesFeatured {
  category?: number;
  courseAuthor?: string;
  courseContent?: string;
  courseFeatured?: boolean;
  courseIntro: string;
  courseMainImg: Array<Image>;
  courseTitle: string;
  id?: number;
}
export interface Image {
  contentType: string;
  file: string;
  folderId: number;
  id: number;
  sizes: Array<any>;
  type: string;
  url: string;
}
