export interface ShopProduct {
  productImage: Array<Image>;
  productInfo: string;
  productPrice: number;
  productTitle: string;
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
