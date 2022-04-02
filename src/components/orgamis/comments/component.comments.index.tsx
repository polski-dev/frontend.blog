import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Avatar from "assets/icon/avatar.svg";
import { useSession } from "next-auth/react";
import useComments from "hooks/hooks.useComments";
import { NextRouter, useRouter } from "next/router";
import { ErrorMessage } from "@hookform/error-message";
import useCallBackURL from "hooks/hooks.useCallBackURL";
import CommentsItemComponent from "./item/component.comments.item";
import { TextArea } from "components/atoms/textarea/component.textarea.index";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { ItemLoad } from "components/atoms/animation/comonent.animation.index";
import { SquareComment } from "components/atoms/animation/comonent.animation.index";
import { ArticeAddCommentsType, ArticeGetListCommentsType, ArticeGetListCommentsItemType, VideoAddCommentsType, VideoGetListCommentsType, VideoGetListCommentsItemType } from "database/database.graphQL.index";
import { Comments, BoxComments, BoxCommentsTitle, Form, BoxCommentAvatar, CommentContent, ListComments, Comment, CommentAuthorName, CommentDescription, BoxAuthorAvatar, ErrorMessageText, SuccesMessage } from "./component.comments.style";

export default function CommentsComponent({ data, type, id, slug }: { data: ArticeGetListCommentsType | VideoGetListCommentsType; type: string; id: number; slug: string }): JSX.Element {
  const { data: session } = useSession();
  const router: NextRouter = useRouter();
  const { addCallBackURL } = useCallBackURL();
  const [statusAddingComment, setStatusAddingComment] = useState("pending");
  const { rememberAddComment, addComment, readCommentToAdd, itemsRef, comments, iAmWaitingForAnswer } = useComments({ data, type, id });

  const {
    reset,
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!!readCommentToAdd?.comment?.length) setValue("commentsDescription", `${readCommentToAdd.comment}`);
  }, [readCommentToAdd, setValue]);

  return (
    <Comments>
      <BoxComments id={`boxCommentsId1`}>
        <BoxCommentsTitle>Komentarze ( {comments.meta?.pagination.total || 0} )</BoxCommentsTitle>
        <Form
          onSubmit={handleSubmit(({ commentsDescription }: any): void => {
            rememberAddComment({ comment: commentsDescription, type, id });
            if (!!session) {
              setStatusAddingComment("expectancy");
              addComment().then((data: ArticeAddCommentsType | VideoAddCommentsType) => {
                if (data.data?.add) {
                  setStatusAddingComment("fulfilled");
                  setTimeout(() => setStatusAddingComment("pending"), 5000);
                  reset();
                } else {
                  setError("commentsDescription", {
                    message: "Spróbuj jeszcze raz za kilka minut",
                  });
                  setStatusAddingComment("pending");
                }
              });
            } else {
              addCallBackURL({ to: slug, name: type });
              router.replace("/auth/signin");
            }
          })}
        >
          {statusAddingComment === "fulfilled" && <SuccesMessage>Twój komentarz został dodany poprawnie!</SuccesMessage>}
          <ErrorMessage errors={errors} name="commentsDescription" render={({ message }) => (!!message?.length ? <ErrorMessageText>{message}</ErrorMessageText> : null)} />
          <BoxCommentAvatar>
            {statusAddingComment === "expectancy" ? (
              <ItemLoad height={8} />
            ) : !!session?.user?.image ? (
              <Image width={50} height={50} placeholder="blur" blurDataURL="/img/blur.png" src={session.user.image} alt={session?.user?.name || ""} />
            ) : (
              <BoxAuthorAvatar>
                <Avatar />
              </BoxAuthorAvatar>
            )}
          </BoxCommentAvatar>
          {statusAddingComment === "expectancy" ? (
            <ItemLoad height={7.7} style={{ width: "calc(100% - 5.8rem)", marginLeft: "1.5rem" }} />
          ) : (
            <TextArea id="commentsDescription" defaultValue={readCommentToAdd?.comment || ""} name="commentsDescription" error={errors.commentsDescription} placeholder="Napisz komentarz..." register={register} required />
          )}
          {statusAddingComment === "expectancy" ? <ItemLoad height={2.9} style={{ width: "6rem", marginLeft: "auto" }} /> : <ButtonSubmit title="dodaj">Dodaj</ButtonSubmit>}
        </Form>

        <ListComments>
          {!!comments?.data?.length &&
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
            })}
        </ListComments>
      </BoxComments>
    </Comments>
  );
}
