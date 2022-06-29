import Link from "next/link";
import Image from "next/image";
import time from "utils/lib/utils.lib.time";
import React, { useEffect, useState } from "react";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { TagType } from "types/database/types.database.tag";
import { PostType } from "types/database/types.database.post";
import { ComponentAnimationCircleLoad } from "components/atoms/animation";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { postCountFrontEnd, postCountState } from "utils/query/posts/count";
import { Article, BoxContent, BoxAuthor, BoxAuthorImg, BoxAuthorAvatar, AuthorData, AuthorName, DateAdded, TitleArticle, ListTags, Tag, ListStats, Item } from "../style/component.listShortArticle.style";

import Wow from "assets/icon/wow.svg";
import Eye from "assets/icon/eye.svg";
import Avatar from "assets/icon/avatar.svg";
import Comment from "assets/icon/comment.svg";

const ContentShortArticle = React.forwardRef(({ data }: { data: { post: PostType } }, ref: any): JSX.Element => {
  const [stats, setStats] = useState(postCountState);

  useEffect(() => {
    (async () => {
      setStats(await postCountFrontEnd(data.post.id));
    })();
  }, [data]);

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
              <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={data.post.attributes.author.data.attributes.username || ""} src={data?.post?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url} />
            ) : (
              <BoxAuthorAvatar>
                <Avatar />
              </BoxAuthorAvatar>
            )}
          </BoxAuthorImg>
          <AuthorData>
            <Link href={`/user/${data?.post?.attributes?.author?.data?.id}/${slugFromTitle(data?.post?.attributes?.author?.data?.attributes?.username || "")}`}>
              <a title={data?.post?.attributes?.author?.data?.attributes?.username || ""}>
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
        <ListStats>
          <Item title="oceniono">
            <Wow />
            <span>{typeof stats?.data?.ratings?.count === "number" ? stats.data.ratings.count : <ComponentAnimationCircleLoad size={1.6} />}</span>
          </Item>
          <Item title="skomentowno">
            <Comment />
            <span>{typeof stats?.data?.comments === "number" ? stats.data.comments : <ComponentAnimationCircleLoad size={1.6} />}</span>
          </Item>
          <Item title="wyświetlono">
            <Eye />
            <span>{typeof stats?.data?.views === "number" ? stats?.data?.views : <ComponentAnimationCircleLoad size={1.6} />}</span>
          </Item>
        </ListStats>
        <ButtonLinkIn href={`/post/${data.post.id}/${slugFromTitle(data.post.attributes.title)}`} title="więcej" className="btnMore">
          więcej
        </ButtonLinkIn>
      </BoxContent>
    </Article>
  );
});

ContentShortArticle.displayName = "ContentShortArticle";

export default ContentShortArticle;
