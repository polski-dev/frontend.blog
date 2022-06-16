export interface TagType {
  id: number;
  attributes: {
    title: string;
    description: string;
    views: number;
    createdAt: Date | null;
    updatedAt: Date | null;
    publishedAt: Date | null;
  };
}
