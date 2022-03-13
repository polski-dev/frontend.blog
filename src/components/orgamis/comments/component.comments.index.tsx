import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Avatar from "assets/icon/avatar.svg";
import { useSession } from "next-auth/react";
import { time } from "function/function.index";
import useComments from "hooks/hooks.useComments";
import useCallBackURL from "hooks/hooks.useCallBackURL";
import { CommentsType } from "./component.comments.type";
import { ArticeAddCommentsType, ArticeGetListCommentsType } from "database/database.graphQL.index";
import { TextArea } from "components/atoms/textarea/component.textarea.index";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { ItemLoad } from "components/atoms/animation/comonent.animation.index";
import { Comments, BoxComments, BoxCommentsTitle, Form, BoxCommentAvatar, CommentContent, ListComments, Comment, CommentAuthorName, CommentDescription, BoxAuthorAvatar, ErrorMessageText, SuccesMessage } from "./component.comments.style";

import { ErrorMessage } from "@hookform/error-message";

export default function CommentsComponent({ data, type, id, slug }: { data: CommentsType; type: string; id: number; slug: string }): JSX.Element {
  const { data: session } = useSession();
  const [comments, setComments] = useState(data);
  const { readCallBackURL, addCallBackURL } = useCallBackURL();
  const [commentsQuanty, setCommentsQuanty] = useState(0);
  const [statusAddingComment, setStatusAddingComment] = useState("pending");
  const { getListComment, rememberAddComment, checkIfYouHaveToGiveComment, addComment, readCommentToAdd } = useComments();

  const {
    reset,
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const commentToAdd: string | null = readCommentToAdd().comment;
    if (commentToAdd) setValue("commentsDescription", commentToAdd || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getListComment({ type, id, page: 1 }).then((data: ArticeGetListCommentsType): void => {
      console.log(data);
      typeof data.meta?.pagination.total === "number" && setCommentsQuanty(data.meta?.pagination.total);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Comments>
      <BoxComments id={`boxCommentsId1`}>
        <BoxCommentsTitle>Komentarze ( {commentsQuanty} )</BoxCommentsTitle>
        <Form
          onSubmit={handleSubmit(({ commentsDescription }: any): void => {
            rememberAddComment({ comment: commentsDescription, type, id });
            if (!!session) {
              setStatusAddingComment("expectancy");
              addComment().then((data: ArticeAddCommentsType) => {
                if (!!data.error?.message)
                  setError("commentsDescription", {
                    message: "Serwer ma problem z dodaniem komentarza , spróbuj jeszcze raz za kilka minut",
                  });
                else if (data.data?.add) {
                  console.log(data);
                  reset();
                } else {
                }
                setStatusAddingComment("fulfilled");
                setTimeout(() => setStatusAddingComment("pending"), 5000);
              });
            } else {
              addCallBackURL({ to: slug, name: type });
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
            <TextArea id="commentsDescription" name="commentsDescription" error={errors.commentsDescription} placeholder="Napisz komentarz..." register={register} required={"This is required."} />
          )}
          {statusAddingComment === "expectancy" ? <ItemLoad height={2.9} style={{ width: "6rem", marginLeft: "auto" }} /> : <ButtonSubmit title="dodaj">Dodaj</ButtonSubmit>}
        </Form>

        <ListComments>
          {!!comments?.data?.length &&
            comments?.data.map((comment): JSX.Element => {
              return (
                <Comment key={comment.id}>
                  <BoxCommentAvatar>
                    {!!comment?.attributes?.author?.data.attributes?.avatar?.data?.attributes?.url ? (
                      <Image width={50} height={50} placeholder="blur" blurDataURL="/img/blur.png" src={comment?.attributes?.author?.data.attributes?.avatar?.data?.attributes?.url} alt={comment?.attributes?.author?.data?.attributes?.username || ""} />
                    ) : (
                      <BoxAuthorAvatar>
                        <Avatar />
                      </BoxAuthorAvatar>
                    )}
                  </BoxCommentAvatar>
                  <CommentContent>
                    <CommentAuthorName>
                      {comment?.attributes?.author?.data?.attributes?.username || "Author Name not found "}{" "}
                      <span>
                        {time.nameOfTheMonths(comment?.attributes?.createdAt)} ( {time.countDays(comment?.attributes?.createdAt)} )
                      </span>
                    </CommentAuthorName>
                    <CommentDescription>{comment.attributes.description}</CommentDescription>
                  </CommentContent>
                </Comment>
              );
            })}
        </ListComments>
      </BoxComments>
    </Comments>
  );
}
