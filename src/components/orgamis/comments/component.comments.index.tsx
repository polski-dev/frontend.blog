import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Avatar from "assets/icon/avatar.svg";
import { useSession } from "next-auth/react";
import { time } from "function/function.index";
import useComments from "hooks/hooks.useComments";
import { NextRouter, useRouter } from "next/router";
import useCallBackURL from "hooks/hooks.useCallBackURL";
import { TextArea } from "components/atoms/textarea/component.textarea.index";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { ItemLoad } from "components/atoms/animation/comonent.animation.index";
import { ArticeAddCommentsType, ArticeGetListCommentsType } from "database/database.graphQL.index";
import { Comments, BoxComments, BoxCommentsTitle, Form, BoxCommentAvatar, CommentContent, ListComments, Comment, CommentAuthorName, CommentDescription, BoxAuthorAvatar, ErrorMessageText, SuccesMessage } from "./component.comments.style";

import { ErrorMessage } from "@hookform/error-message";

export default function CommentsComponent({ data, type, id, slug }: { data: ArticeGetListCommentsType; type: string; id: number; slug: string }): JSX.Element {
  const { data: session } = useSession();
  const router: NextRouter = useRouter();
  const [comments, setComments] = useState(data);
  const { readCallBackURL, addCallBackURL } = useCallBackURL();
  const [commentsQuantity, setCommentsQuantity] = useState(data.meta?.pagination.total || 0);
  const [statusAddingComment, setStatusAddingComment] = useState("pending");
  const { getListComment, rememberAddComment, checkIfYouHaveToGiveComment, addComment, readCommentToAdd, setReadCommentToAdd } = useComments();

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
        <BoxCommentsTitle>Komentarze ( {commentsQuantity} )</BoxCommentsTitle>
        <Form
          onSubmit={handleSubmit(({ commentsDescription }: any): void => {
            rememberAddComment({ comment: commentsDescription, type, id });
            if (!!session) {
              setStatusAddingComment("expectancy");
              addComment().then((data: ArticeAddCommentsType) => {
                if (data.data?.add) {
                  setCommentsQuantity(commentsQuantity + 1);
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
            <TextArea id="commentsDescription" defaultValue={readCommentToAdd?.comment || ""} name="commentsDescription" error={errors.commentsDescription} placeholder="Napisz komentarz..." register={register} required={"This is required."} />
          )}
          {statusAddingComment === "expectancy" ? <ItemLoad height={2.9} style={{ width: "6rem", marginLeft: "auto" }} /> : <ButtonSubmit title="dodaj">Dodaj</ButtonSubmit>}
        </Form>

        <ListComments>
          {!!comments?.data?.length &&
            comments?.data.map((comment, i: number): JSX.Element => {
              return (
                <Comment key={i}>
                  <BoxCommentAvatar>
                    {!!comment?.author?.avatar.url ? (
                      <Image width={50} height={50} placeholder="blur" blurDataURL="/img/blur.png" src={comment?.author?.avatar.url} alt={comment.author.username} />
                    ) : (
                      <BoxAuthorAvatar>
                        <Avatar />
                      </BoxAuthorAvatar>
                    )}
                  </BoxCommentAvatar>
                  <CommentContent>
                    <CommentAuthorName>
                      {comment?.author?.username}{" "}
                      <span>
                        {time.nameOfTheMonths(comment?.createdAt)} ( {time.countDays(comment?.createdAt)} )
                      </span>
                    </CommentAuthorName>
                    <CommentDescription>{comment?.description}</CommentDescription>
                  </CommentContent>
                </Comment>
              );
            })}
        </ListComments>
      </BoxComments>
    </Comments>
  );
}
