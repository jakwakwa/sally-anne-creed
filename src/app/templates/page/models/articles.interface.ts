export interface ArticleContent {
  __meta__: MetaMain;
  author: string;
  category: Array<Category>;
  content: string;
  contentIntro: string;
  featured: boolean;
  id: number;
  mainFeatured: boolean;
  mainImg: Array<Image>;
  title: string;
}

export interface MetaMain {
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
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

export interface Category {
  __meta__: MetaGeneric;
  categoryName: string;
  id: number;
}

export interface MetaGeneric {
  createdBy: string;
  createdDate: string;
}
