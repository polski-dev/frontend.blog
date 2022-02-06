import lodash from "lodash";
import { map } from "lodash";
import Link from "next/link";
import Image from "next/image";
import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Confetti from "react-confetti";
import Best from "assets/icon/best.svg";
import { setSlug, time, dataFromStory } from "function/function.index";
import Comment from "assets/icon/comment.svg";
import useWindowData from "hooks/hooks.windowData";
import { useEffect, useRef, useState, useReducer, useMemo } from "react";
import { ButtonInLink } from "components/atoms/button/component.button";
import { SquareShortArticle } from "components/atoms/animation/comonent.animation.index";
import { Section, Title, Options, Article, BoxContent, BoxAuthor, BoxAuthorImg, AuthorData, AuthorName, DateAdded, TitleArticle, ListTags, Tag, ListStats, Item, BoxInformation, Info } from "./../style/content.style";
import { RootState, store } from "store/store.index";
import { useSelector, useDispatch } from "react-redux";
import { addArticleBest, addArticleAll, countPageArticleBest, countPageArticleAll } from "store/slice/store.slice.article";

const SectionShortArticle = ({ data, type }: any) => {
  const dispatch = useDispatch();
  const story = useSelector((state: RootState) => state);
  const { width, height } = useWindowData();
  const articeRef = useRef<HTMLInputElement>(null);
  const slug = useMemo(() => new setSlug(type), [type]);
  const readData = useMemo(() => new dataFromStory(type), [type]);
  const [displayArticles, setDisplayArticles] = useState([]);
  const [isAnyNextContent, setIsAnyNextContent] = useState(false);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);

  useEffect(() => setDisplayArticles(readData.readData(story)), [story, type, readData]);

  useEffect(() => {
    if (readData.checkIsAnyNextContent(story)) return setIsAnyNextContent(true);
    setIsAnyNextContent(false);
  }, [story, type, readData]);

  useEffect(() => {
    function loadArticle() {
      const heightEl: any = articeRef?.current?.getBoundingClientRect().y;
      if (isAnyNextContent && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
    }
    document.addEventListener("scroll", loadArticle);
    return () => document.removeEventListener("scroll", loadArticle);
  }, [articeRef, height, iAmWaitingForAnswer, story, isAnyNextContent]);

  useEffect(() => {
    if (iAmWaitingForAnswer) {
      fetch(`${slug.setContentApi}${story.article.all.pageActive + 1}`)
        .then((r) => r.json())
        .then((d) => {
          if (!!d.data.length) dispatch(addArticleAll({ data: d.data }));
          setIamWaitingForAnswer(false);
        })
        .catch(() => {
          alert("Wystąpił problem z pobraniem danych odśwież stronę");
          setIamWaitingForAnswer(false);
        });
    }
  }, [story, type, dispatch, iAmWaitingForAnswer, setIamWaitingForAnswer, slug]);

  return (
    <Section>
      <Title>Blog</Title>
      <Options></Options>
      {displayArticles.map((art: any, i: number) => {
        return (
          <Article key={i} ref={articeRef}>
            <Link href={`/${slug.setContent}/${lodash.kebabCase(lodash.deburr(art.attributes.title.toLowerCase()))}`} passHref>
              <a title={art.attributes.title} className="img">
                <Image placeholder="blur" blurDataURL="./img/blur.png" src={art.attributes.cover.data.attributes.url} width={930} height={300} alt={art.attributes.title} />
              </a>
            </Link>
            <BoxContent>
              <BoxAuthor>
                <BoxAuthorImg>
                  <Image
                    placeholder="blur"
                    blurDataURL="./img/blur.png"
                    src={art.attributes.author.data.attributes.avatar.data.attributes.url}
                    width={42}
                    height={42}
                    alt={art.attributes.author.data.attributes.username}
                  />
                </BoxAuthorImg>
                <AuthorData>
                  <Link href={`/${new setSlug("user").setContent}/${lodash.kebabCase(lodash.deburr(art.attributes.author.data.attributes.username.toLowerCase()))}`}>
                    <a title={art.attributes.author.data.attributes.username}>
                      <AuthorName>{art.attributes.author.data.attributes.username}</AuthorName>
                    </a>
                  </Link>

                  <DateAdded>
                    {time.nameOfTheMonths(art.attributes.createdAt)} ( {time.countDays(art.attributes.createdAt)} )
                  </DateAdded>
                </AuthorData>
              </BoxAuthor>
              <Link href={`/${slug.setContent}/${lodash.kebabCase(lodash.deburr(art.attributes.title.toLowerCase()))}`} passHref>
                <a title={art.attributes.title} className="titleArticle">
                  <TitleArticle>{art.attributes.title}</TitleArticle>
                </a>
              </Link>
              <ListTags>
                {art.attributes.tags?.data?.map((tag: any, i: number) => {
                  return (
                    <Tag key={i}>
                      <Link href={`/${slug.setContent}/${lodash.kebabCase(lodash.deburr(tag.attributes.title.toLowerCase()))}`}>
                        <a>
                          <span>#</span>
                          {tag.attributes.title}
                        </a>
                      </Link>
                    </Tag>
                  );
                })}
              </ListTags>
              <ListStats>
                <Item>
                  <Best />
                  <span>{art.attributes.grades.data.filter((voice: any) => voice.attributes.voice === "best").length}</span>
                </Item>
                <Item>
                  <Wow />
                  <span>{art.attributes.grades.data.filter((voice: any) => voice.attributes.voice === "wow").length}</span>
                </Item>
                <Item>
                  <Wrr />
                  <span>{art.attributes.grades.data.filter((voice: any) => voice.attributes.voice === "wrr").length}</span>
                </Item>
                <Item>
                  <Comment />
                  <span>{art.attributes.comments.data.length}</span>
                </Item>
              </ListStats>
              <ButtonInLink href={`/${slug.setContent}/${lodash.kebabCase(lodash.deburr(art.attributes.title.toLowerCase()))}`} title="więcej" className="btnMore">
                więcej
              </ButtonInLink>
            </BoxContent>
          </Article>
        );
      })}
      {iAmWaitingForAnswer ? (
        <>
          {new Array(10).fill(undefined).map((val, i) => (
            <SquareShortArticle key={i} last={new Array(10).length - 1 === i} />
          ))}
        </>
      ) : (
        <BoxInformation>
          <Info>Właśnie dotarłeś do końca internetów, brawo :)</Info>
          <Confetti width={width} height={2 * height} style={{ width: "100%", position: "absolute" }} />
        </BoxInformation>
      )}
    </Section>
  );
};

export default SectionShortArticle;
