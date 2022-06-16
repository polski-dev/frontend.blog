export interface UploadType {
  data:
    | {
        id: number;
        name: string;
        alternativeText: null | string;
        caption: null | string;
        width: number;
        height: number;
        formats: {
          small: {
            ext: string;
            url: string;
            hash: string;
            mime: string;
            name: string;
            path: null | string;
            size: number;
            width: number;
            height: number;
          };
          thumbnail: {
            ext: string;
            url: string;
            hash: string;
            mime: string;
            name: string;
            path: null | string;
            size: number;
            width: number;
            height: number;
          };
        };
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
      }[]
    | null;
  error?: {
    status: number;
    name: string;
    message: string;
    details: {};
  };
}
