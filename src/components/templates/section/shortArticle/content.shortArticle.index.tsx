import lodash from "lodash";
import { map } from "lodash";
import Link from "next/link";
import Image from "next/image";
import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Confetti from "react-confetti";
import Best from "assets/icon/best.svg";
import Comment from "assets/icon/comment.svg";
import useWindowData from "hooks/hooks.windowData";
import CountTime from "function/function.countTime";
import { useEffect, useRef, useState, useReducer } from "react";
import { ButtonInLink } from "components/atoms/button/component.button";
import { SquareShortArticle } from "components/atoms/animation/comonent.animation.index";
import {
  Section,
  Title,
  Options,
  Article,
  BoxContent,
  BoxAuthor,
  BoxAuthorImg,
  AuthorData,
  AuthorName,
  DateAdded,
  TitleArticle,
  ListTags,
  Tag,
  ListStats,
  Item,
  BoxInformation,
  Info,
} from "./content.shortArticle.style";

import { RootState, store } from "store/store.index";
import { useSelector, useDispatch } from "react-redux";
import { addArticleBest, countPageArticleBest } from "store/slice/store.slice.article";

const SectionShortArticle = ({ data, type, title }: any) => {
  const dispatch = useDispatch();
  const { width, height } = useWindowData();
  const [displayArticles, setDisplayArticles] = useState([]);
  const { countDays, nameOfTheMonths } = CountTime;
  const articeRef = useRef<HTMLInputElement>(null);
  const [isAnyNextContent, setIsAnyNextContent] = useState(false);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);
  const story = useSelector((state: RootState) => state);

  const setData = (type: string, story: any) => {
    switch (type) {
      case "article":
        return story.article.best.articles;
      default:
        return [];
    }
  };

  const setSlug = (type: string) => {
    switch (type) {
      case "article":
        return "a";
    }
  };

  const slug = setSlug(type);

  const addBest = (story: any) => {};

  const checkIsAnyNextContent = (type: string, story: any) => {
    switch (type) {
      case "article":
        if (story.article.best.pageActive >= story.article.best.pages) return false;
        return true;
      default:
        new Error('I not understand type in function ,,checkIsAnyNextContent"');
        return false;
    }
  };

  useEffect(() => setDisplayArticles(setData(type, story)), [story, type]);

  useEffect(() => {
    if (checkIsAnyNextContent(type, story) === true) !isAnyNextContent && setIsAnyNextContent(true);
    else isAnyNextContent && setIsAnyNextContent(false);
  }, [story, type, isAnyNextContent]);

  useEffect(() => {
    function loadArticle() {
      const heightEl: any = articeRef?.current?.getBoundingClientRect().y;
      if (isAnyNextContent && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
    }

    document.addEventListener("scroll", loadArticle);

    return () => document.removeEventListener("scroll", loadArticle);
  }, [articeRef, height, iAmWaitingForAnswer, story, isAnyNextContent]);

  useEffect(() => {
    const downloadNewContent = async (type: string, story: any) => {
      switch (type) {
        case "article":
          const request = await fetch(`/api/articles/${story.article.best.pageActive + 1}`);
          return await request.json();
        default:
          return new Error('I not understand type in function ,,downloadNewContent"');
      }
    };

    if (iAmWaitingForAnswer)
      downloadNewContent(type, story).then((r) => {
        if (!!r.data.length) dispatch(addArticleBest({ data: r.data }));
        setIamWaitingForAnswer(false);
      });
  }, [story, type, dispatch, iAmWaitingForAnswer, setIamWaitingForAnswer]);

  return (
    <Section>
      <Title>{title}</Title>
      <Options></Options>
      {displayArticles.map((art: any, i: number) => {
        return (
          <Article key={i} ref={articeRef}>
            <Link href={`/${slug}/${lodash.kebabCase(lodash.deburr(art.attributes.title.toLowerCase()))}`} passHref>
              <a title={art.attributes.title} className="img">
                <Image
                  placeholder="blur"
                  blurDataURL="./img/blur.png"
                  src={art.attributes.cover.data.attributes.url}
                  width={930}
                  height={300}
                  alt={art.attributes.title}
                />
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
                  <Link href={`/u/${lodash.kebabCase(lodash.deburr(art.attributes.author.data.attributes.username.toLowerCase()))}`}>
                    <a title={art.attributes.author.data.attributes.username}>
                      <AuthorName>{art.attributes.author.data.attributes.username}</AuthorName>
                    </a>
                  </Link>

                  <DateAdded>
                    {nameOfTheMonths(art.attributes.createdAt)} ( {countDays(art.attributes.createdAt)} )
                  </DateAdded>
                </AuthorData>
              </BoxAuthor>
              <Link href={`/${slug}/${lodash.kebabCase(lodash.deburr(art.attributes.title.toLowerCase()))}`} passHref>
                <a title={art.attributes.title} className="titleArticle">
                  <TitleArticle>{art.attributes.title}</TitleArticle>
                </a>
              </Link>
              <ListTags>
                {art.attributes.tags?.data?.map((tag: any, i: number) => {
                  return (
                    <Tag key={i}>
                      <Link href={`/t/${lodash.kebabCase(lodash.deburr(tag.attributes.title.toLowerCase()))}`}>
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
              <ButtonInLink href={`/${slug}/${lodash.kebabCase(lodash.deburr(art.attributes.title.toLowerCase()))}`} title="więcej" className="btnMore">
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
