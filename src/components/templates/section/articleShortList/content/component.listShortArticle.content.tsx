import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import Wow from "assets/icon/wow.svg";
import Eye from "assets/icon/eye.svg";
import Avatar from "assets/icon/avatar.svg";
import { kebabCase, deburr } from "lodash";
import Comment from "assets/icon/comment.svg";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { PostType } from "types/database/types.database.post";
import { TagType } from "types/database/types.database.tag";
import time from "utils/lib/utils.lib.time";

import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { Article, BoxContent, BoxAuthor, BoxAuthorImg, BoxAuthorAvatar, AuthorData, AuthorName, DateAdded, TitleArticle, ListTags, Tag, ListStats, Item } from "../style/component.listShortArticle.style";

const ContentShortArticle = React.forwardRef(({ data }: { data: { post: PostType } }, ref: any): JSX.Element => {
  // const slug = new setSlug(data.post.attributes.typ).setContent;

  return (
    <Article ref={ref}>
      <Link href={`/post/${data.post.id}/${slugFromTitle(data.post.attributes.title)}`} passHref>
        <a title={data.post.attributes.title} className="img">
          {data?.post?.attributes?.cover?.data?.attributes?.url && <Image width={930} height={300} alt={data.post.attributes.title} src={data?.post?.attributes?.cover?.data?.attributes?.url} />}
        </a>
      </Link>
      <BoxContent>
        <BoxAuthor>
          <BoxAuthorImg>
            {data?.post?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url ? (
              <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={data?.post?.attributes?.author?.data?.attributes?.username} src={data?.post?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url} />
            ) : (
              <BoxAuthorAvatar>
                <Avatar />
              </BoxAuthorAvatar>
            )}
          </BoxAuthorImg>
          <AuthorData>
            <Link href={`/user/${data?.post?.attributes?.author?.data?.id}/${slugFromTitle(data?.post?.attributes?.author?.data?.attributes?.username || "")}`}>
              <a title={data?.post?.attributes?.author?.data?.attributes?.username}>
                <AuthorName>{data?.post?.attributes?.author?.data?.attributes?.username}</AuthorName>
              </a>
            </Link>

            <DateAdded>
              {time.nameOfTheMonths(data?.post?.attributes?.createdAt || new Date())} ( {time.countDays(data?.post?.attributes?.createdAt || new Date())} )
            </DateAdded>
          </AuthorData>
        </BoxAuthor>
        <Link href={`/post/${data.post.id}/${slugFromTitle(data.post.attributes.title)}`} passHref>
          <a title={data.post.attributes.title} className="titleArticle">
            <TitleArticle>{data.post.attributes.title}</TitleArticle>
          </a>
        </Link>
        <ListTags>
          {data?.post?.attributes?.tags?.data &&
            data?.post?.attributes?.tags?.data.map((tag: TagType, i: number) => {
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
        {/* <ListStats>
          <Item title="oceniono">
            <Wow />
            <span>{}</span>
          </Item>
          <Item title="skomentowno">
            <Comment />
            <span>{data.attributes.comments.data.length}</span>
          </Item>
          <Item title="wyświetlono">
            <Eye />
            <span>{data.attributes.views}</span>
          </Item>
        </ListStats> */}
        <ButtonLinkIn href={`/post/${data.post.id}/${slugFromTitle(data.post.attributes.title)}`} title="więcej" className="btnMore">
          więcej
        </ButtonLinkIn>
      </BoxContent>
    </Article>
  );
});

ContentShortArticle.displayName = "ContentShortArticle";

export default ContentShortArticle;
