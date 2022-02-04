import { map } from "lodash";
import lodash from "lodash";
import Image from "next/image";
import Link from "next/link";
import Best from "assets/icon/best.svg";
import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Comment from "assets/icon/comment.svg";
import { ButtonInLink } from "components/atoms/button/component.button";
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
} from "./content.shortArticle.style";

export default function sectionShortArticle({ data, slug, title }: any) {
  const nameOfTheMonths = (date: Date) => {
    const dateStart = new Date(date);

    switch (dateStart.getMonth()) {
      case 0:
        return `${dateStart.getDay()} Stycznia`;
      case 1:
        return `${dateStart.getDay()} Lutego`;
      case 2:
        return `${dateStart.getDay()} Marca`;
      case 3:
        return `${dateStart.getDay()} Kwietnia`;
      case 4:
        return `${dateStart.getDay()} Maja`;
      case 5:
        return `${dateStart.getDay()} Czerwca`;
      case 6:
        return `${dateStart.getDay()} Lipca`;
      case 7:
        return `${dateStart.getDay()} Sierpnia`;
      case 8:
        return `${dateStart.getDay()} Września`;
      case 9:
        return `${dateStart.getDay()} Października`;
      case 10:
        return `${dateStart.getDay()} Listopada`;
      case 11:
        return `${dateStart.getDay()} Grudnia`;
    }
  };

  const countDays = (date: Date) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const daysHavePassed = Math.round(Math.abs((new Date(date).getTime() - new Date().getTime()) / oneDay));
    if (daysHavePassed <= 31) return `${daysHavePassed === 0 ? `dziś` : `${daysHavePassed} dni temu`}`;
    if (daysHavePassed > 31 && daysHavePassed < 365) return `${daysHavePassed / 30 === 1 ? "miesiąc" : `${daysHavePassed / 30} miesięcy`} temu`;
    if (daysHavePassed >= 365) return `${daysHavePassed / 365 === 1 ? `rok` : `${daysHavePassed / 365} lata`} temu`;
  };

  return (
    <Section>
      <Title>{title}</Title>
      <Options></Options>
      {data.map((art: any, i: number) => {
        return (
          <Article key={i}>
            <Link href={`/${slug}/${lodash.kebabCase(lodash.deburr(art.attributes.title.toLowerCase()))}`} passHref>
              <a title={art.attributes.title}>
                <Image src={art.attributes.cover.data.attributes.url} width={930} height={300} alt={art.attributes.title} />
              </a>
            </Link>
            <BoxContent>
              <BoxAuthor>
                <BoxAuthorImg>
                  <Image
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
    </Section>
  );
}
