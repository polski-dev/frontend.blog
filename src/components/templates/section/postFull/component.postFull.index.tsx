import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import useViews from "hooks/hooks.useViews";
import Avatar from "assets/icon/avatar.svg";
import time from "utils/lib/utils.lib.time";
import { PostCountType } from "utils/query/posts/count";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { PostFindOneType } from "utils/query/posts/find";
import { TagType } from "types/database/types.database.tag";
import { PostsTypEnum } from "types/database/types.database.post";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { ComponentAnimationItemLoad } from "components/atoms/animation/";
import { MarkdownComponents } from "./component.articleFull.markdownblock";
import Comments from "components/orgamis/comments/component.comments.index";
import { Section, Title, Article, BoxContent, Content, BoxCoverImg, BoxAuthor, BoxAuthorImg, BoxAuthorAvatar, AuthorData, AuthorName, DateAdded, TitleArticle, ListTags, Tag } from "./component.postFull.style";

export default function SectionPostFull({ data }: { data?: { post?: PostFindOneType; stats?: PostCountType } }): JSX.Element {
  useViews({ id: data?.post?.data?.id, typ: ContentEnum.post });

  return (
    <Section>
      <Title>{data?.post?.data?.attributes?.typ === PostsTypEnum.video ? "Video" : data?.post?.data?.attributes?.typ === PostsTypEnum.article ? "Artykuł" : <ComponentAnimationItemLoad height={2.4} />}</Title>
      <Article>
        {data?.post?.data?.attributes.cover?.data?.attributes.url ? (
          <BoxCoverImg>
            <Image layout="fill" objectFit="cover" alt={data?.post?.data.attributes.title} src={data?.post?.data?.attributes.cover?.data?.attributes.url} />
          </BoxCoverImg>
        ) : (
          <ComponentAnimationItemLoad height={30} />
        )}
        <BoxContent>
          <BoxAuthor>
            <BoxAuthorImg>
              {data?.post?.data?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url ? (
                <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={data?.post?.data?.attributes?.author?.data?.attributes?.username || "Add name user"} src={data?.post?.data?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url} />
              ) : (
                <BoxAuthorAvatar>
                  <Avatar />
                </BoxAuthorAvatar>
              )}
            </BoxAuthorImg>
            <AuthorData>
              <Link href={`/user/${data?.post?.data?.attributes.author?.data?.id}/${slugFromTitle(data?.post?.data?.attributes?.author?.data?.attributes?.username || "")}`}>
                <a title={data?.post?.data?.attributes?.author?.data?.attributes?.username || "Add title"}>
                  <AuthorName>{!!data?.post ? data?.post?.data?.attributes?.author?.data?.attributes?.username : <ComponentAnimationItemLoad height={1.6} style={{ display: "block", marginBottom: "0.3rem", width: "5rem" }} />}</AuthorName>
                </a>
              </Link>
              <DateAdded>{!!data?.post ? `${`${time.nameOfTheMonths(data?.post?.data?.attributes.publishedAt || new Date())}  ( ${time.countDays(data?.post?.data?.attributes.publishedAt || new Date())} )`}` : <ComponentAnimationItemLoad height={1} />}</DateAdded>
            </AuthorData>
          </BoxAuthor>
          <TitleArticle>{!!data?.post ? data?.post?.data?.attributes?.title : <ComponentAnimationItemLoad height={3} style={{ margin: "0.1rem" }} />}</TitleArticle>
          <ListTags>
            {data?.post?.data?.attributes?.tags?.data ? (
              data?.post?.data.attributes.tags?.data.map((tag: TagType, i: number): JSX.Element => {
                return (
                  <Tag key={i}>
                    <Link href={`/tag/${tag.id}/${slugFromTitle(tag.attributes.title)}`}>
                      <a>
                        <span>#</span>
                        {tag.attributes.title}
                      </a>
                    </Link>
                  </Tag>
                );
              })
            ) : (
              <>
                <Tag>
                  <ComponentAnimationItemLoad height={1.6} style={{ margin: "0.1rem", width: "9rem" }} />
                </Tag>
                <Tag>
                  <ComponentAnimationItemLoad height={1.6} style={{ margin: "0.1rem", width: "9rem" }} />
                </Tag>
                <Tag>
                  <ComponentAnimationItemLoad height={1.6} style={{ margin: "0.1rem", width: "9rem" }} />
                </Tag>
              </>
            )}
          </ListTags>
          <Content>
            {data?.post?.data?.attributes?.content ? (
              <ReactMarkdown components={MarkdownComponents}>{data?.post?.data?.attributes?.content}</ReactMarkdown>
            ) : (
              new Array(15).fill(undefined).map((_: undefined, i: number): JSX.Element => <ComponentAnimationItemLoad height={1.6} style={{ display: "block", marginBottom: "1rem" }} key={i} />)
            )}
          </Content>
        </BoxContent>
        <Comments data={{ postId: data?.post?.data?.id, countComments: data?.stats?.data?.comments }} />
      </Article>
    </Section>
  );
}
