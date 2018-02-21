export interface Slider {
  ctaText: string;
  ctaUrl: string;
  slideImage: Array<Image>;
  slideParagraph: string;
  slideTitle: string;
  uniqueKey: string;
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
