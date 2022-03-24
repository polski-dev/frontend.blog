import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { kebabCase, deburr } from "lodash";
import Avatar from "assets/icon/avatar.svg";
import { setSlug, time } from "function/function.index";
import { MarkdownComponents } from "./component.videoFull.markdownblock";
import CommentList from "components/orgamis/comments/component.comments.index";
import { VideoFullByIdType, VideoGetListCommentsType } from "database/database.restAPI.index";
import { Section, Title, Article, BoxContent, Content, BoxAuthor, BoxAuthorImg, BoxAuthorAvatar, AuthorData, AuthorName, DateAdded, TitleArticle, ListTags, Tag } from "./component.videoFull.style";

export default function SectionVideoFull({ data: { video, comments }, type }: { data: { video: VideoFullByIdType; comments: VideoGetListCommentsType }; type: string }): JSX.Element {
  return (
    <Section>
      <Title>Video</Title>
      <Article>
        {video?.data?.video?.data?.attributes?.cover?.data?.attributes?.url && <Image width={930} height={300} alt={video.data.video.data.attributes.title} src={video.data.video.data.attributes.cover.data.attributes.url} />}
        <BoxContent>
          <BoxAuthor>
            <BoxAuthorImg>
              {video?.data?.video?.data?.attributes?.author.data?.attributes?.avatar?.data?.attributes?.url ? (
                <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={video.data.video.data.attributes.author.data.attributes.username} src={video.data.video.data.attributes?.author.data?.attributes.avatar.data.attributes.url} />
              ) : (
                <BoxAuthorAvatar>
                  <Avatar />
                </BoxAuthorAvatar>
              )}
            </BoxAuthorImg>
            <AuthorData>
              <Link href={`/${new setSlug("user").setContent}/${video?.data?.video?.data?.attributes?.author?.data?.id}/${kebabCase(deburr(video?.data?.video?.data?.attributes?.author?.data?.attributes?.username.toLowerCase()))}`}>
                <a title={video?.data?.video?.data?.attributes?.author?.data?.attributes?.username}>
                  <AuthorName>
                    {video?.data?.video?.data?.attributes?.author?.data?.attributes?.username}
                    {}{" "}
                  </AuthorName>
                </a>
              </Link>
              <DateAdded>
                {time.nameOfTheMonths(video?.data?.video?.data?.attributes?.createdAt)} ( {time.countDays(video?.data?.video?.data?.attributes?.createdAt)} )
              </DateAdded>
            </AuthorData>
          </BoxAuthor>
          <TitleArticle>{video?.data?.video?.data?.attributes?.title}</TitleArticle>
          <ListTags>
            {video?.data?.video?.data?.attributes?.tags?.data.map((tag: any, i: number) => {
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
            <ReactMarkdown components={MarkdownComponents}>{video?.data?.video?.data?.attributes?.content}</ReactMarkdown>
          </Content>
        </BoxContent>
        <CommentList type={type} data={comments} id={parseInt(video.data.video.data.id)} slug={`/a/${video.data.video.data.id}/${kebabCase(deburr(video.data.video.data.attributes.title.toLowerCase()))}`} />
      </Article>
    </Section>
  );
}
