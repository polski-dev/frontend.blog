import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { kebabCase, deburr } from "lodash";
import Avatar from "assets/icon/avatar.svg";
import { setSlug, time } from "function/function.index";
import { MarkdownComponents } from "./component.articleFull.markdownblock";
import CommentList from "components/orgamis/comments/component.comments.index";
import { ArticeFullByIdType, ArticeGetListCommentsType } from "database/database.restAPI.index";
import { Section, Title, Article, BoxContent, Content, BoxAuthor, BoxAuthorImg, BoxAuthorAvatar, AuthorData, AuthorName, DateAdded, TitleArticle, ListTags, Tag } from "./component.listShortArticle.style";

export default function SectionArticleFull({ data: { article: post, comments }, type }: { data: { article: ArticeFullByIdType; comments: ArticeGetListCommentsType }; type: string }): JSX.Element {
  return (
    <Section>
      <Title>Artykuł</Title>
      <Article>
        {post?.data?.article?.data?.attributes?.cover?.data?.attributes?.url && <Image width={930} height={300} alt={post.data.article.data.attributes.title} src={post.data.article.data.attributes.cover.data.attributes.url} />}
        <BoxContent>
          <BoxAuthor>
            <BoxAuthorImg>
              {post?.data.article.data.attributes?.author.data?.attributes.avatar.data.attributes.url ? (
                <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={post.data.article.data.attributes.author.data.attributes.username} src={post.data.article.data.attributes?.author.data?.attributes.avatar.data.attributes.url} />
              ) : (
                <BoxAuthorAvatar>
                  <Avatar />
                </BoxAuthorAvatar>
              )}
            </BoxAuthorImg>
            <AuthorData>
              <Link href={`/${new setSlug("user").setContent}/${post?.data?.article?.data?.attributes?.author?.data?.id}/${kebabCase(deburr(post?.data?.article?.data?.attributes?.author?.data?.attributes?.username.toLowerCase()))}`}>
                <a title={post?.data?.article?.data?.attributes?.author?.data?.attributes?.username}>
                  <AuthorName>
                    {post?.data?.article?.data?.attributes?.author?.data?.attributes?.username}
                    {}{" "}
                  </AuthorName>
                </a>
              </Link>
              <DateAdded>
                {time.nameOfTheMonths(post?.data?.article?.data?.attributes?.createdAt)} ( {time.countDays(post?.data?.article?.data?.attributes?.createdAt)} )
              </DateAdded>
            </AuthorData>
          </BoxAuthor>
          <TitleArticle>{post?.data?.article?.data?.attributes?.title}</TitleArticle>
          <ListTags>
            {post?.data?.article?.data?.attributes?.tags?.data.map((tag: any, i: number) => {
              return (
                <Tag key={i}>
                  <Link href={`/${new setSlug("tag").setContent}/${tag.id}/${deburr(tag.attributes.title.toLowerCase())}`}>
                    <a>
                      <span>#</span>
                      {tag.attributes.title}
                    </a>
                  </Link>
                </Tag>
              );
            })}
          </ListTags>
          <Content>
            <ReactMarkdown components={MarkdownComponents}>{post?.data?.article?.data?.attributes?.content}</ReactMarkdown>
          </Content>
        </BoxContent>
        <CommentList type={type} data={comments} id={parseInt(post.data.article.data.id)} slug={`/a/${post.data.article.data.id}/${kebabCase(deburr(post.data.article.data.attributes.title.toLowerCase()))}`} />
      </Article>
    </Section>
  );
}
