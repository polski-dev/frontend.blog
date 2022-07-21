import { ErrorType } from "types/database/types.database.error";

export interface AuthSingInUserDataType {
  jwt?: string | null;
  user: {
    id: number;
    username: string | null;
    provider: string | null;
    confirmed: boolean;
    blocked: boolean;
    views: number;
    about: string | null;
    website: string | null;
    youtube: string | null;
    instagram: string | null;
    tiktok: string | null;
    github: string | null;
    city: string | null;
    country: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface AuthSingInUserType {
  data?: AuthSingInUserDataType | null;
  error?: ErrorType;
}

export interface AuthSingUpUserDataType {
  jwt: string | null;
  user: {
    id: number;
    username: string | null;
    provider: string | null;
    confirmed: boolean;
    blocked: boolean;
    views: number;
    about: string | null;
    website: string | null;
    youtube: string | null;
    instagram: string | null;
    tiktok: string | null;
    github: string | null;
    city: string | null;
    country: string | null;
    createdAt: Date;
    updatedAt: Date;
    role: {
      id: number;
      name: string;
      description: string;
      type: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
}

export interface AuthSingUpUserType {
  data?: AuthSingUpUserDataType | null;
  error?: ErrorType;
}
