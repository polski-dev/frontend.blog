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
  console.log(data);
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
                  <Image src={art.attributes.cover.data.attributes.url} width={42} height={42} alt={art.attributes.author.data.attributes.username} />
                </BoxAuthorImg>
                <AuthorData>
                  <AuthorName>{art.attributes.author.data.attributes.username}</AuthorName>
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
                  <span>3431</span>
                </Item>
                <Item>
                  <Wow />
                  <span>3431</span>
                </Item>
                <Item>
                  <Wrr />
                  <span>3431</span>
                </Item>
                <Item>
                  <Comment />
                  <span>3431</span>
                </Item>
              </ListStats>
              <ButtonInLink href="/l" title="zaloguj">
                Więcej
              </ButtonInLink>
            </BoxContent>
          </Article>
        );
      })}
    </Section>
  );
}
