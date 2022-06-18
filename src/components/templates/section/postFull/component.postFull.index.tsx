import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Avatar from "assets/icon/avatar.svg";
import time from "utils/lib/utils.lib.time";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { TagType } from "types/database/types.database.tag";
import { PostType, PostFullType, PostsTypEnum } from "types/database/types.database.post";
import { MarkdownComponents } from "./component.postFull.markdownblock";
import CommentList from "components/orgamis/comments/component.comments.index";
import { ArticeFullByIdType, ArticeGetListCommentsType } from "utils/database/database.restAPI.index";
import { Section, Title, Article, BoxContent, Content, BoxAuthor, BoxAuthorImg, BoxAuthorAvatar, AuthorData, AuthorName, DateAdded, TitleArticle, ListTags, Tag } from "./component.postFull.style";

export default function SectionPostFull({ post }: { post?: PostFullType }): JSX.Element {
  return (
    <Section>
      <Title>{post?.data?.attributes?.typ === PostsTypEnum.video ? "Video" : post?.data?.attributes?.typ === PostsTypEnum.article ? "Artykuł" : "Post"}</Title>
      <Article>
        {post?.data.attributes.cover?.data?.attributes.url && <Image width={930} height={300} alt={post?.data.attributes.title} src={post?.data.attributes.cover?.data?.attributes.url} />}
        <BoxContent>
          <BoxAuthor>
            <BoxAuthorImg>
              {post?.data?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url ? (
                <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={post?.data?.attributes?.author?.data?.attributes?.username} src={post?.data?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url} />
              ) : (
                <BoxAuthorAvatar>
                  <Avatar />
                </BoxAuthorAvatar>
              )}
            </BoxAuthorImg>
            <AuthorData>
              <Link href={`/user/${post?.data.attributes.author?.data?.id}/${slugFromTitle(post?.data?.attributes?.author?.data?.attributes?.username || "")}`}>
                <a title={post?.data?.attributes?.author?.data?.attributes?.username}>
                  <AuthorName>{post?.data?.attributes?.author?.data?.attributes?.username}</AuthorName>
                </a>
              </Link>
              <DateAdded>
                {time.nameOfTheMonths(post?.data.attributes.publishedAt || new Date())} ( {time.countDays(post?.data.attributes.publishedAt || new Date())} )
              </DateAdded>
            </AuthorData>
          </BoxAuthor>
          <TitleArticle>{post?.data.attributes.title}</TitleArticle>
          <ListTags>
            {post?.data?.attributes?.tags?.data &&
              post?.data.attributes.tags?.data.map((tag: TagType, i: number): JSX.Element => {
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
              })}
          </ListTags>
          <Content>
            <ReactMarkdown components={MarkdownComponents}>{post?.data?.attributes?.content || "Dodaj treść"}</ReactMarkdown>
          </Content>
        </BoxContent>
        {/* <CommentList type={type} data={comments} id={parseInt(post.data.article.data.id)} slug={`/a/${post.data.article.data.id}/${kebabCase(deburr(post.data.article.data.attributes.title.toLowerCase()))}`} /> */}
      </Article>
    </Section>
  );
}
