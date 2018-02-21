export interface RecipeFeatured {
  category?: number;
  id?: number;
  recipeAuthor?: string;
  recipeContent?: string;
  recipeFeatured?: boolean;
  recipeMainImg: Array<Image>;
  recipeTitle: string;
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
