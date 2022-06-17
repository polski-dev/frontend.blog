import { UserType } from "./types.database.user";

export enum RatingEnum {
  best = "best",
  wow = "wow",
  wrr = "wrr",
}

export interface RatingType {
  id: number;
  attributes: {
    voice: RatingEnum;
    createdAt: Date;
    updatedAt: Date;
    author?: {
      data?: UserType | null;
    };
  };
}
