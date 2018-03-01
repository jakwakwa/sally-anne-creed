export interface Slider {
  ctaText: string;
  ctaUrl: string;
  slideImage: Array<Image>;
  slideParagraph: string;
  slideTitle: string;
  uniqueKey: string;
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
