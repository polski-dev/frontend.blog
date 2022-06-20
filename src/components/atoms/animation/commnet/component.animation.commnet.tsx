import React from "react";
import { Comment, BoxCommentAvatar, CommentContent, CommentAuthorName, CommentDescription } from "./component.animation.commnet.style";

export const ComponentAnimationSquareComment = ({ last = false, style }: { last?: boolean; style?: any }) => (
  <Comment last={last} style={style}>
    <BoxCommentAvatar />
    <CommentContent>
      <CommentAuthorName>
        <span></span>
        <span></span>
      </CommentAuthorName>
      <CommentDescription />
    </CommentContent>
  </Comment>
);
