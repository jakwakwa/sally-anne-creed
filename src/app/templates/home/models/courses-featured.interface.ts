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
  __meta__: MetaGeneric;
  contentType: string;
  file: string;
  folderId: number;
  id: number;
  sizes: Array<any>;
  type: string;
  url: string;
}

export interface MetaGeneric {
  createdBy: string;
  createdDate: string;
}
