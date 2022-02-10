import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Best from "assets/icon/best.svg";
import { kebabCase, deburr } from "lodash";
import Comment from "assets/icon/comment.svg";
import { setSlug, time } from "function/function.index";
import { ButtonInLink } from "components/atoms/button/component.button";
import { Article, BoxContent, BoxAuthor, BoxAuthorImg, AuthorData, AuthorName, DateAdded, TitleArticle, ListTags, Tag, ListStats, Item, BoxInformation, Info } from "../component.listShortArticle.style";

const ContentShortArticle = React.forwardRef(({ data, type }: any, ref: any) => {
  const slug = new setSlug(type).setContent;

  return (
    <Article ref={ref}>
      <Link href={`/${slug}/${kebabCase(deburr(data.title.toLowerCase()))}`} passHref>
        <a title={data.title} className="img">
          {data.cover && <Image width={930} height={300} placeholder="blur" blurDataURL="/img/blur.png" alt={data.title} src={data.cover.data.attributes.url} />}
        </a>
      </Link>
      <BoxContent>
        <BoxAuthor>
          <BoxAuthorImg>{data.author && <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={data.author.data.attributes.username} src={data.author.data.attributes.avatar.data.attributes.url} />}</BoxAuthorImg>
          <AuthorData>
            <Link href={`/${new setSlug("user").setContent}/${kebabCase(deburr(data.author.data.attributes.username.toLowerCase()))}`}>
              <a title={data.author.data.attributes.username}>
                <AuthorName>{data.author.data.attributes.username}</AuthorName>
              </a>
            </Link>

            <DateAdded>
              {time.nameOfTheMonths(data.createdAt)} ( {time.countDays(data.createdAt)} )
            </DateAdded>
          </AuthorData>
        </BoxAuthor>
        <Link href={`/${slug}/${kebabCase(deburr(data.title.toLowerCase()))}`} passHref>
          <a title={data.title} className="titleArticle">
            <TitleArticle>{data.title}</TitleArticle>
          </a>
        </Link>
        <ListTags>
          {data?.tags?.data?.map((tag: any, i: number) => {
            return (
              <Tag key={i}>
                <Link href={`/${new setSlug("tag").setContent}/${kebabCase(deburr(tag.attributes.title.toLowerCase()))}`}>
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
          <Item>
            <Best />
            <span>{data.grades.data.filter((voice: any) => voice.attributes.voice === "best").length}</span>
          </Item>
          <Item>
            <Wow />
            <span>{data.grades.data.filter((voice: any) => voice.attributes.voice === "wow").length}</span>
          </Item>
          <Item>
            <Wrr />
            <span>{data.grades.data.filter((voice: any) => voice.attributes.voice === "wrr").length}</span>
          </Item>
          <Item>
            <Comment />
            <span>{data.comments.data.length}</span>
          </Item>
        </ListStats>
        <ButtonInLink href={`/${slug}/${kebabCase(deburr(data.title.toLowerCase()))}`} title="więcej" className="btnMore">
          więcej
        </ButtonInLink>
      </BoxContent>
    </Article>
  );
});

ContentShortArticle.displayName = "ContentShortArticle";

export default ContentShortArticle;
