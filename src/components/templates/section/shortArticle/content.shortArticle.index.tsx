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

const SectionShortArticle = ({ data, slug, title }: any) => {
  const { width, height } = useWindowData();
  const [nextPage, setNextPage] = useState(2);
  const { countDays, nameOfTheMonths } = CountTime;
  const articeRef = useRef<HTMLInputElement>(null);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);

  useEffect(() => {
    !iAmWaitingForAnswer &&
      document.addEventListener("scroll", () => {
        const heightEl: any = articeRef?.current?.getBoundingClientRect().y;
        if (heightEl - height < 0) {
          setIamWaitingForAnswer(true);
          setNextPage(nextPage + 1);
        }
      });
  }, [articeRef, height, iAmWaitingForAnswer, nextPage]);

  return (
    <Section>
      <Title>{title}</Title>
      <Options></Options>
      {data.map((art: any, i: number) => {
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
                {art.attributes.tags.data.map((tag: any, i: number) => {
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
                Więcej
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
