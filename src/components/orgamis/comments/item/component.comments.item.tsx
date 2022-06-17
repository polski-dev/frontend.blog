import Image from "next/image";
import * as React from "react";
import Avatar from "assets/icon/avatar.svg";
import { time } from "utils/lib/function.index";
import { ArticeGetListCommentsItemType } from "utils/database/article/type/database.articeGetListComments.type";
import { BoxCommentAvatar, Comment, CommentAuthorName, CommentContent, CommentDescription, BoxAuthorAvatar } from "../component.comments.style";

const CommentsItemComponent = React.forwardRef(({ data }: { data: ArticeGetListCommentsItemType }, ref?: any): JSX.Element => {
  return (
    <Comment ref={ref}>
      <BoxCommentAvatar>
        {!!data.author?.avatar ? (
          <Image width={50} height={50} placeholder="blur" blurDataURL="/img/blur.png" src={data?.author?.avatar.url} alt={data.author.username} />
        ) : (
          <BoxAuthorAvatar>
            <Avatar />
          </BoxAuthorAvatar>
        )}
      </BoxCommentAvatar>
      <CommentContent>
        <CommentAuthorName>
          {data?.author?.username}{" "}
          <span>
            {time.nameOfTheMonths(data?.createdAt)} ( {time.countDays(data?.createdAt)} )
          </span>
        </CommentAuthorName>
        <CommentDescription>{data?.description}</CommentDescription>
      </CommentContent>
    </Comment>
  );
});

CommentsItemComponent.displayName = "CommentsItemComponent";

export default CommentsItemComponent;
