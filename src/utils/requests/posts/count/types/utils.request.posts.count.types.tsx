export interface PostsCountType {
  data?: {
    all: number;
    publishedAll: number;
    unPublishedAll: number;
    allArticle: number;
    publishedAllArticle: number;
    unPublishedAllArticle: number;
    allVideo: number;
    publishedAllVideo: number;
    unPublishedAllVideo: number;
  } | null;
}
