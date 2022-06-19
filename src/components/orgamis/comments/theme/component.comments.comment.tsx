import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import Avatar from "assets/icon/avatar.svg";
import time from "utils/lib/utils.lib.time";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { CommentType } from "types/database/types.database.comment";
import { BoxCommentAvatar, Comment, CommentAuthorName, CommentContent, CommentDescription, BoxAuthorAvatar } from "../component.comments.style";

const CommentsThemeComponent = React.forwardRef(({ data }: { data: CommentType }, ref?: any): JSX.Element => {
  return (
    <Comment ref={ref}>
      <BoxCommentAvatar>
        {/* {false ? ( */}
        {/* <Image width={50} height={50} placeholder="blur" blurDataURL="/img/blur.png" src={data?.author?.avatar.url} alt={data.author.username} />
        {/* ) : ( */}
        <BoxAuthorAvatar>
          <Avatar />
        </BoxAuthorAvatar>
        {/* )} */}
      </BoxCommentAvatar>
      <CommentContent>
        <CommentAuthorName>
          <Link href={`/user/${data?.author?.id}/${slugFromTitle(data?.author?.name || "")}`}>
            <a>{data?.author?.name}</a>
          </Link>{" "}
          <span>
            {time.nameOfTheMonths(data?.createdAt)} ( {time.countDays(data?.createdAt)} )
          </span>
        </CommentAuthorName>
        <CommentDescription>{data?.content}</CommentDescription>
      </CommentContent>
    </Comment>
  );
});

CommentsThemeComponent.displayName = "CommentsThemeComponent";

export default CommentsThemeComponent;
