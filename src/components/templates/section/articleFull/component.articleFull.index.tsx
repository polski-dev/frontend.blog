import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Best from "assets/icon/best.svg";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { kebabCase, deburr } from "lodash";
import Avatar from "assets/icon/avatar.svg";
import { setSlug, time } from "function/function.index";
import { TextArea } from "components/atoms/textarea/index.textarea";
import { MarkdownComponents } from "./component.articleFull.markdownblock";
import { ButtonSubmit, Button } from "components/atoms/button/component.button.index";
import { ArticeFullByIdType, articeAddViewGet } from "database/database.restAPI.index";
import {
  Section,
  Title,
  Article,
  BoxContent,
  Content,
  BoxAuthor,
  BoxAuthorImg,
  BoxAuthorAvatar,
  AuthorData,
  AuthorName,
  DateAdded,
  TitleArticle,
  ListTags,
  Tag,
  BoxComments,
  BoxCommentsTitle,
  Form,
  BoxCommentAvatar,
  CommentContent,
  ListComments,
  Comment,
  CommentAuthorName,
  CommentDescription,
  CommentGrade,
  Grade,
} from "./component.listShortArticle.style";

export default function SectionArticleFull({ data: post, type }: { data: ArticeFullByIdType; type: string }): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const localStorage = window.localStorage;
    if (!localStorage[`article${post.data.article.data.id}`]) {
      console.log("add views");
      articeAddViewGet(parseInt(post.data.article.data.id));
      localStorage.setItem(`article${post.data.article.data.id}`, "true");
    }
  }, [post]);

  return (
    <Section>
      <Title>{type === "article" ? "Artykuł" : "Video"}</Title>
      <Article>
        {post?.data?.article?.data?.attributes?.cover?.data?.attributes?.url && <Image width={930} height={300} alt={post.data.article.data.attributes.title} src={post.data.article.data.attributes.cover.data.attributes.url} />}
        <BoxContent>
          <BoxAuthor>
            <BoxAuthorImg>
              {post?.data.article.data.attributes?.author.data?.attributes.avatar.data.attributes.url ? (
                <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={post.data.article.data.attributes.author.data.attributes.username} src={post.data.article.data.attributes?.author.data?.attributes.avatar.data.attributes.url} />
              ) : (
                <BoxAuthorAvatar>
                  <Avatar />
                </BoxAuthorAvatar>
              )}
            </BoxAuthorImg>
            <AuthorData>
              <Link href={`/${new setSlug("user").setContent}/${post?.data?.article?.data?.attributes?.author?.data?.id}/${kebabCase(deburr(post?.data?.article?.data?.attributes?.author?.data?.attributes?.username.toLowerCase()))}`}>
                <a title={post?.data?.article?.data?.attributes?.author?.data?.attributes?.username}>
                  <AuthorName>{post?.data?.article?.data?.attributes?.author?.data?.attributes?.username}</AuthorName>
                </a>
              </Link>
              <DateAdded>
                {time.nameOfTheMonths(post?.data?.article?.data?.attributes?.createdAt)} ( {time.countDays(post?.data?.article?.data?.attributes?.createdAt)} )
              </DateAdded>
            </AuthorData>
          </BoxAuthor>
          <TitleArticle>{post?.data?.article?.data?.attributes?.title}</TitleArticle>
          <ListTags>
            {post?.data?.article?.data?.attributes?.tags?.data.map((tag: any, i: number) => {
              return (
                <Tag key={i}>
                  <Link href={`/${new setSlug("tag").setContent}/${tag.id}/${deburr(tag.attributes.title.toLowerCase())}`}>
                    <a>
                      <span>#</span>
                      {tag.attributes.title}
                    </a>
                  </Link>
                </Tag>
              );
            })}
          </ListTags>
          <Content>
            <ReactMarkdown components={MarkdownComponents}>{post?.data?.article?.data?.attributes?.content}</ReactMarkdown>
          </Content>
        </BoxContent>
        <BoxComments>
          <BoxCommentsTitle>Komentarze (432)</BoxCommentsTitle>
          <Form
            onSubmit={handleSubmit(({ identifier, password }: any): void => {
              // setSend(true);
              // signIn("credentials", { identifier, password, callbackUrl: "/auth/loggedcorrectly" });
            })}
          >
            <BoxCommentAvatar>
              {post?.data.article.data.attributes?.author.data?.attributes.avatar.data.attributes.url ? (
                <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={post.data.article.data.attributes.author.data.attributes.username} src={post.data.article.data.attributes?.author.data?.attributes.avatar.data.attributes.url} />
              ) : (
                <BoxAuthorAvatar>
                  <Avatar />
                </BoxAuthorAvatar>
              )}
            </BoxCommentAvatar>
            <TextArea id="identifier" name="identifier" error={errors.identifier} placeholder="email" register={register} required />
            <ButtonSubmit title="dodaj">Dodaj</ButtonSubmit>
          </Form>
          <ListComments>
            <Comment>
              <BoxCommentAvatar>
                {post?.data.article.data.attributes?.author.data?.attributes.avatar.data.attributes.url ? (
                  <Image
                    width={50}
                    height={50}
                    placeholder="blur"
                    blurDataURL="/img/blur.png"
                    alt={post.data.article.data.attributes.author.data.attributes.username}
                    src={post.data.article.data.attributes?.author.data?.attributes.avatar.data.attributes.url}
                  />
                ) : (
                  <BoxAuthorAvatar>
                    <Avatar />
                  </BoxAuthorAvatar>
                )}
              </BoxCommentAvatar>
              <CommentContent>
                <CommentAuthorName>
                  Paweł Niedźwiecki <span>12 stycznia (10 dni temu)</span>
                </CommentAuthorName>
                <CommentDescription>Bro pls explain your project. Iam unable to understand what it does</CommentDescription>
              </CommentContent>
              <CommentGrade>
                <Grade>
                  <Button title="dodaj ocenę wow">
                    <Wow />
                  </Button>
                  <span>0</span>
                </Grade>
                <Grade>
                  <Button title="dodaj ocenę best">
                    <Best />
                  </Button>
                  <span>0</span>
                </Grade>
                <Grade>
                  <Button title="dodaj ocenę wrr">
                    <Wrr />
                  </Button>
                  <span>10</span>
                </Grade>
              </CommentGrade>
            </Comment>

            <Comment>
              <BoxCommentAvatar>
                {post?.data.article.data.attributes?.author.data?.attributes.avatar.data.attributes.url ? (
                  <Image
                    width={50}
                    height={50}
                    placeholder="blur"
                    blurDataURL="/img/blur.png"
                    alt={post.data.article.data.attributes.author.data.attributes.username}
                    src={post.data.article.data.attributes?.author.data?.attributes.avatar.data.attributes.url}
                  />
                ) : (
                  <BoxAuthorAvatar>
                    <Avatar />
                  </BoxAuthorAvatar>
                )}
              </BoxCommentAvatar>
              <CommentContent>
                <CommentAuthorName>
                  Paweł Niedźwiecki <span>12 stycznia (10 dni temu)</span>
                </CommentAuthorName>
                <CommentDescription>Bro pls explain your project. Iam unable to understand what it does</CommentDescription>
              </CommentContent>
              <CommentGrade>
                <Grade>
                  <Button title="dodaj ocenę wow">
                    <Wow />
                  </Button>
                  <span>0</span>
                </Grade>
                <Grade>
                  <Button title="dodaj ocenę best">
                    <Best />
                  </Button>
                  <span>0</span>
                </Grade>
                <Grade>
                  <Button title="dodaj ocenę wrr">
                    <Wrr />
                  </Button>
                  <span>10</span>
                </Grade>
              </CommentGrade>
            </Comment>
          </ListComments>
        </BoxComments>
      </Article>
    </Section>
  );
}
