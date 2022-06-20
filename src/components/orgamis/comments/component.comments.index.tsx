import Avatar from "assets/icon/avatar.svg";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useComments from "hooks/hooks.useComments";
import { ErrorMessage } from "@hookform/error-message";
import { PostCommentAddType } from "utils/query/posts/comment";
import { CommentType } from "types/database/types.database.comment";
import CommentsItemComponent from "./theme/component.comments.comment";
import { TextArea } from "components/atoms/textarea/component.textarea.index";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { ComponentAnimationItemLoad, ComponentAnimationSquareComment, ComponentAnimationCircleLoad } from "components/atoms/animation/";
import { Comments, BoxComments, BoxCommentsTitle, Form, BoxCommentAvatar, ListComments, BoxAuthorAvatar, ErrorMessageText, SuccesMessage } from "./component.comments.style";

export default function CommentsComponent({ data }: { data: { postId?: number; countComments?: number } }): JSX.Element {
  const [statusAddComment, setStatusAddComment] = useState(false);
  const [defaultValueComment, setDefaultValueComment] = useState("");
  const { remindComment, addComment, iAmWaitingForAnswerAddComent, iAmWaitingForAnswerCommentsList, session, commentsList, commentRef } = useComments({ postId: data.postId, count: data.countComments });

  const {
    reset,
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const comment: { comment: string; postId: number } | null = remindComment();
    if (!!comment && data?.postId === comment.postId && !defaultValueComment.length) {
      setValue("comment", comment.comment);
      setDefaultValueComment(comment.comment);
    }
  }, [data, defaultValueComment, remindComment, setValue]);

  return (
    <Comments>
      <BoxComments id={`boxCommentsId${data.postId}`}>
        <BoxCommentsTitle>Komentarze ( {typeof data?.countComments === "number" ? data?.countComments : <ComponentAnimationCircleLoad size={1.6} />} )</BoxCommentsTitle>
        <Form
          onSubmit={handleSubmit(({ comment }: any): void => {
            (async () => {
              const addStatus: PostCommentAddType = await addComment({ comment });
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
            {iAmWaitingForAnswerAddComent ? (
              <ComponentAnimationItemLoad height={8} />
            ) : typeof session?.user?.image === "string" && session?.user?.name ? (
              <Image width={50} height={50} placeholder="blur" blurDataURL="/img/blur.png" src={session?.user?.image} alt={session?.user?.name} />
            ) : (
              <BoxAuthorAvatar>
                <Avatar />
              </BoxAuthorAvatar>
            )}
          </BoxCommentAvatar>
          {iAmWaitingForAnswerAddComent ? (
            <ComponentAnimationItemLoad height={7.7} style={{ width: "calc(100% - 5.8rem)", marginLeft: "1.5rem", marginBottom: "1.5rem" }} />
          ) : (
            <TextArea id="comment" defaultValue={defaultValueComment} name="comment" error={errors.comment} placeholder="Napisz komentarz..." register={register} required />
          )}
          {iAmWaitingForAnswerAddComent ? <ComponentAnimationItemLoad height={2.9} style={{ width: "6rem", marginLeft: "auto" }} /> : <ButtonSubmit title="dodaj">Dodaj</ButtonSubmit>}
        </Form>

        <ListComments>
          {!!commentsList?.data?.length &&
            commentsList?.data.map((comment: CommentType, i: number): JSX.Element => {
              switch ((commentsList.data?.length || 1) - 1 === i) {
                case true:
                  return <CommentsItemComponent key={i} data={comment} ref={(commentsList.data?.length || 1) - 1 === i ? commentRef : null} />;
                default:
                  return <CommentsItemComponent key={i} data={comment} />;
              }
            })}
          {iAmWaitingForAnswerCommentsList &&
            new Array(10).fill(undefined).map((_: any, i: number) => {
              return <ComponentAnimationSquareComment key={i} />;
            })}
        </ListComments>
      </BoxComments>
    </Comments>
  );
}
