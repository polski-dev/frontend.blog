export interface ImageFromDatabaseFormatType {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
}

export interface ImageFromDatabaseFormatsType {
  formats: { large?: ImageFromDatabaseFormatType; small?: ImageFromDatabaseFormatType; medium?: ImageFromDatabaseFormatType; thumbnail?: ImageFromDatabaseFormatType };
}

export interface ImageFromDatabaseType {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: ImageFromDatabaseFormatsType;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | string;
    createdAt: Date;
    updatedAt: Date;
  };
}
