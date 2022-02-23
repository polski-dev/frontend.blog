import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import Wow from "assets/icon/wow.svg";
import Eye from "assets/icon/eye.svg";
import Avatar from "assets/icon/avatar.svg";
import { kebabCase, deburr } from "lodash";
import Comment from "assets/icon/comment.svg";
import { setSlug, time } from "function/function.index";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { Article, BoxContent, BoxAuthor, BoxAuthorImg, BoxAuthorAvatar, AuthorData, AuthorName, DateAdded, TitleArticle, ListTags, Tag, ListStats, Item } from "../style/component.listShortArticle.style";

const ContentShortArticle = React.forwardRef(({ data }: any, ref: any) => {
  const slug = new setSlug(data.type).setContent;

  return (
    <Article ref={ref}>
      <Link href={`/${slug}/${data.id}/${kebabCase(deburr(data.attributes.title.toLowerCase()))}`} passHref>
        <a title={data.attributes.title} className="img">
          {data.attributes.cover && <Image width={930} height={300} alt={data.attributes.title} src={data.attributes.cover.data.attributes.url} />}
        </a>
      </Link>
      <BoxContent>
        <BoxAuthor>
          <BoxAuthorImg>
            {data?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url ? (
              <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={data.attributes.author.data.attributes.username} src={data.attributes.author.data.attributes.avatar.data.attributes.url} />
            ) : (
              <BoxAuthorAvatar>
                <Avatar />
              </BoxAuthorAvatar>
            )}
          </BoxAuthorImg>
          <AuthorData>
            <Link href={`/${new setSlug("user").setContent}/${data?.attributes?.author?.data?.id}/${kebabCase(deburr(data?.attributes?.author?.data?.attributes?.username.toLowerCase()))}`}>
              <a title={data?.attributes?.author?.data?.attributes?.username}>
                <AuthorName>{data?.attributes?.author?.data?.attributes?.username}</AuthorName>
              </a>
            </Link>

            <DateAdded>
              {time.nameOfTheMonths(data.attributes.createdAt)} ( {time.countDays(data.attributes.createdAt)} )
            </DateAdded>
          </AuthorData>
        </BoxAuthor>
        <Link href={`/${slug}/${data.id}/${kebabCase(deburr(data.attributes.title.toLowerCase()))}`} passHref>
          <a title={data.attributes.title} className="titleArticle">
            <TitleArticle>{data.attributes.title}</TitleArticle>
          </a>
        </Link>
        <ListTags>
          {data?.attributes.tags?.data?.map((tag: any, i: number) => {
            return (
              <Tag key={i}>
                <Link href={`/${new setSlug("tag").setContent}/${tag.id}/${kebabCase(deburr(tag.attributes.title.toLowerCase()))}`}>
                  <a>
                    <span>#</span>
                    {tag.attributes.title}
                  </a>
                </Link>
              </Tag>
            );
          })}
        </ListTags>
        <ListStats>
          <Item title="oceniono">
            <Wow />
            <span>{data.attributes.grades.data.length}</span>
          </Item>
          <Item title="skomentowno">
            <Comment />
            <span>{data.attributes.comments.data.length}</span>
          </Item>
          <Item title="wyświetlono">
            <Eye />
            <span>{data.attributes.views}</span>
          </Item>
        </ListStats>
        <ButtonLinkIn href={`/${slug}/${data.id}/${kebabCase(deburr(data.attributes.title.toLowerCase()))}`} title="więcej" className="btnMore">
          więcej
        </ButtonLinkIn>
      </BoxContent>
    </Article>
  );
});

ContentShortArticle.displayName = "ContentShortArticle";

export default ContentShortArticle;
