import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Avatar from "assets/icon/avatar.svg";
import { useSession } from "next-auth/react";
import { time } from "function/function.index";
import useComments from "hooks/hooks.useComments";
import { CommentsType } from "./component.comments.type";
import { TextArea } from "components/atoms/textarea/component.textarea.index";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { Comments, BoxComments, BoxCommentsTitle, Form, BoxCommentAvatar, CommentContent, ListComments, Comment, CommentAuthorName, CommentDescription, BoxAuthorAvatar } from "./component.comments.style";

export default function CommentsComponent({ data }: { data: CommentsType }): JSX.Element {
  const [comments, setComments] = useState(data);
  const { getListComment } = useComments();
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Comments>
      <BoxComments id={`boxCommentsId1`}>
        <BoxCommentsTitle>Komentarze ({comments?.data?.length})</BoxCommentsTitle>
        <Form
          onSubmit={handleSubmit(({ commentsDescription }: any): void => {
            console.log(commentsDescription);
            if (!!session) {
            } else {
            }

            // setSend(true);
            // signIn("credentials", { identifier, password, callbackUrl: "/auth/loggedcorrectly" });
          })}
        >
          <BoxCommentAvatar>
            {!!session?.user?.image ? (
              <Image width={50} height={50} placeholder="blur" blurDataURL="/img/blur.png" src={session.user.image} alt={session?.user?.name || ""} />
            ) : (
              <BoxAuthorAvatar>
                <Avatar />
              </BoxAuthorAvatar>
            )}
          </BoxCommentAvatar>
          <TextArea id="commentsDescription" name="commentsDescription" defaultValue="ok" error={errors.commentsDescription} placeholder="Napisz komentarz..." register={register} required />
          <ButtonSubmit title="dodaj">Dodaj</ButtonSubmit>
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
