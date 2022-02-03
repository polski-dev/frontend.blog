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
  //   const countDays = (date: Date) => {
  //     const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  //     const actualDate = new Date();
  //     const diffDays = Math.round(Math.abs((actualDate - date) / oneDay));
  //   };

  return (
    <Section>
      <Title>{title}</Title>
      <Options></Options>
      {data.map((art: any, i: number) => {
        console.log(art.attributes.author);
        console.log(art.attributes.grades.data.filter((voice: any) => voice.attributes.voice === "best").length);
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
                  <Image src={art.attributes.cover.data.attributes.url} width={42} height={42} alt={art.attributes.author.data.attributes.username} />
                </BoxAuthorImg>
                <AuthorData>
                  <Link href={`/u/${lodash.kebabCase(lodash.deburr(art.attributes.author.data.attributes.username.toLowerCase()))}`}>
                    <a title={art.attributes.author.data.attributes.username}>
                      <AuthorName>{art.attributes.author.data.attributes.username}</AuthorName>
                    </a>
                  </Link>

                  <DateAdded>16 Stycznia ( 5 dni temu )</DateAdded>
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
              <ButtonInLink href={`/${slug}/${lodash.kebabCase(lodash.deburr(art.attributes.title.toLowerCase()))}`} title="więcej">
                Więcej
              </ButtonInLink>
            </BoxContent>
          </Article>
        );
      })}
    </Section>
  );
}
