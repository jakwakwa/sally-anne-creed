export interface AboutContent {
  credentialLogo?: Array<Image>;
  facebookIcon?: Array<Image>;
  infoText?: string;
  instagramIcon?: Array<Image>;
  profileImg?: Array<Image>;
  twitterIcon?: Array<Image>;
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
