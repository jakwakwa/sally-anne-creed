export interface AboutContent {
  credentialLogo?: Array<Image>;
  facebookIcon?: Array<Image>;
  infoText?: string;
  instagramIcon?: Array<Image>;
  profileImg?: Array<Image>;
  twitterIcon?: Array<Image>;
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
