import { ImageFromDatabaseType } from "./types.database.image";

export type SkilkType = { createdAt: Date; description: string; id: number; publishedAt: Date; title: string; updatedAt: Date; views: number };
export type LearnType = { createdAt: Date; description: string; id: number; publishedAt: Date; title: string; updatedAt: Date; views: number };

export interface UserType {
  id: number;
  attributes: {
    username?: string | null;
    provider?: string | null;
    confirmed?: boolean;
    blocked?: boolean;
    views?: number;
    about?: string | null;
    website?: string | null;
    youtube?: string | null;
    instagram?: string | null;
    tiktok?: string | null;
    github?: string | null;
    city?: string | null;
    country?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    avatar?: { data?: ImageFromDatabaseType | null };
    skilks?: SkilkType[] | null;
    learn?: LearnType[] | null;
  };
}
