import { NextPage } from "next";
import { kebabCase, deburr } from "lodash";
import { articeWithOnlyTitleGetPreview, ArticeWithOnlyTitleType, articeFullByIdGetPreview, ArticeFullByIdType } from "database/database.graphQL.index";

const Article: NextPage<any> = ({ article }: { article: ArticeFullByIdType }): JSX.Element => {
  console.log(article);
  return <>full article: {article?.data?.article?.data?.attributes?.title}</>;
};

export async function getStaticProps({ params }: any): Promise<any> {
  console.log(parseInt(params.article[0]));
  // article full
  const article: ArticeFullByIdType = await articeFullByIdGetPreview(parseInt(params.article[0]));
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths(): Promise<any> {
  const countPage: ArticeWithOnlyTitleType = await articeWithOnlyTitleGetPreview(0);
  const { pageCount } = countPage.data.article.meta.pagination;

  const allArticle: any[] = await Promise.all(
    new Array(pageCount).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const articeWithOnlyTitle: ArticeWithOnlyTitleType = await articeWithOnlyTitleGetPreview(i);
      return articeWithOnlyTitle.data.article.data;
    })
  );

  return {
    paths: [].concat.apply([], allArticle).map((item: any) => `/a/${item.id}/${kebabCase(deburr(item.attributes.title.toLowerCase()))}`),
    fallback: true,
  };
}

export default Article;
