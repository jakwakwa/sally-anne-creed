export interface Featured {
  author: string;
  category: number;
  content: string;
  featured: boolean;
  id: number;
  mainImg: Array<Image>;
  title: string;
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
