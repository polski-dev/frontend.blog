import { MetaType } from "types/database/types.database.meta";
import { ErrorType } from "types/database/types.database.error";
import { RatingType } from "types/database/types.database.rating";

export interface RaitingUserInPostFindType {
  data?: RatingType[] | null;
  error?: ErrorType;
  meta?: MetaType;
}

export interface RaitingAddInPostType {
  data?: {
    id: number;
    voice: RatingType;
    createdAt: Date;
    updatedAt: Date;
  } | null;
  error?: ErrorType;
}

export interface RaitingDeleteInPostType {
  data?:
    | {
        id: number;
        voice: string;
        createdAt: Date;
        updatedAt: Date;
      }[]
    | null;

  error?: ErrorType;
}
