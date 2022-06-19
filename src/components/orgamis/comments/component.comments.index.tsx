import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Avatar from "assets/icon/avatar.svg";
import useComments from "hooks/hooks.useComments";
import { NextRouter, useRouter } from "next/router";
import { ErrorMessage } from "@hookform/error-message";
import useCallBackURL from "hooks/hooks.useCallBackURL";
import CommentsItemComponent from "./item/component.comments.item";
import { TextArea } from "components/atoms/textarea/component.textarea.index";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { ItemLoad } from "components/atoms/animation/index";
import { SquareComment } from "components/atoms/animation/index";
import { ComponentAnimationCircleLoad } from "components/atoms/animation/index";
import { Comments, BoxComments, BoxCommentsTitle, Form, BoxCommentAvatar, CommentContent, ListComments, Comment, CommentAuthorName, CommentDescription, BoxAuthorAvatar, ErrorMessageText, SuccesMessage } from "./component.comments.style";

import { PostsCountType } from "utils/query/posts/count";
import { PostCommentAddType } from "utils/query/posts/comment";

export default function CommentsComponent({ data }: { data: { postId?: number; countComments?: number } }): JSX.Element {
  const [statusAddComment, setStatusAddComment] = useState(false);
  const [defaultValueComment, setDefaultValueComment] = useState("");
  const { remindComment, addComment, iAmWaitingForAnswer, session } = useComments();

  const {
    reset,
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   if (!!readCommentToAdd?.comment?.length) setValue("commentsDescription", `${readCommentToAdd.comment}`);
  // }, [readCommentToAdd, setValue]);

  useEffect(() => {
    const comment: { comment: string; postId: number } | null = remindComment({ postId: data?.postId || undefined });
    if (!!comment && data?.postId === comment.postId && !defaultValueComment.length) {
      setValue("comment", comment.comment);
      setDefaultValueComment(comment.comment);
    }
  }, [data, defaultValueComment, remindComment, setValue]);

  return (
    <Comments>
      <BoxComments id={`boxCommentsId1`}>
        <BoxCommentsTitle>Komentarze ( {typeof data?.countComments === "number" ? data?.countComments : <ComponentAnimationCircleLoad size={1.6} />} )</BoxCommentsTitle>
        <Form
          onSubmit={handleSubmit(({ comment }: any): void => {
            (async () => {
              const addStatus: PostCommentAddType = await addComment({ postId: data.postId, comment });
              if (!!addStatus?.error) return setError("comment", { message: addStatus?.error.message });
              else {
                reset();
                setStatusAddComment(true);
                setTimeout(() => setStatusAddComment(false), 3000);
              }
            })();
          })}
        >
          {statusAddComment && <SuccesMessage>komentarz dodany !</SuccesMessage>}
          <ErrorMessage errors={errors} name="comment" render={({ message }) => (!!message?.length ? <ErrorMessageText>{message}</ErrorMessageText> : null)} />
          <BoxCommentAvatar>
            {iAmWaitingForAnswer ? (
              <ItemLoad height={8} />
            ) : typeof session?.user?.image === "string" && session?.user?.name ? (
              <Image width={50} height={50} placeholder="blur" blurDataURL="/img/blur.png" src={session?.user?.image} alt={session?.user?.name} />
            ) : (
              <BoxAuthorAvatar>
                <Avatar />
              </BoxAuthorAvatar>
            )}
          </BoxCommentAvatar>
          {iAmWaitingForAnswer ? <ItemLoad height={7.7} style={{ width: "calc(100% - 5.8rem)", marginLeft: "1.5rem" }} /> : <TextArea id="comment" defaultValue={defaultValueComment} name="comment" error={errors.comment} placeholder="Napisz komentarz..." register={register} required />}
          {iAmWaitingForAnswer ? <ItemLoad height={2.9} style={{ width: "6rem", marginLeft: "auto" }} /> : <ButtonSubmit title="dodaj">Dodaj</ButtonSubmit>}
        </Form>

        <ListComments>
          {/* {!!comments?.data?.length &&
            comments?.data.map((comment: ArticeGetListCommentsItemType | VideoGetListCommentsItemType, i: number): JSX.Element => {
              switch (comments.data.length - 1 === i) {
                case true:
                  return <CommentsItemComponent key={i} data={comment} ref={itemsRef} />;
                default:
                  return <CommentsItemComponent key={i} data={comment} />;
              }
            })}
          {iAmWaitingForAnswer &&
            new Array(10).fill(undefined).map((_: any, i: number) => {
              return <SquareComment key={i} />;
            })} */}
        </ListComments>
      </BoxComments>
    </Comments>
  );
}
