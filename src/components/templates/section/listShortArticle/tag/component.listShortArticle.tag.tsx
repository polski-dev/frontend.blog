import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Best from "assets/icon/best.svg";
import { kebabCase, deburr } from "lodash";
import Comment from "assets/icon/comment.svg";
import { setSlug, time } from "function/function.index";
import { ButtonInLink } from "components/atoms/button/component.button";
import { Article, BoxContent, BoxAuthor, BoxAuthorImg, AuthorData, AuthorName, DateAdded, TitleArticle, ListTags, Tag, ListStats, Item, BoxInformation, Info } from "../component.listShortArticle.style";

const TagShortArticle = React.forwardRef(({ data, type }: any, ref: any) => {
  const slug = new setSlug(type).setContent;
  console.log(data);
  return (
    <Article ref={ref}>
      <BoxContent>
        <Link href={`/${slug}/${kebabCase(deburr(data.title.toLowerCase()))}`} passHref>
          <a title={data.title} className="titleArticle">
            <TitleArticle tag>
              <span>#</span>
              {data.title}

              <ButtonInLink href={`/${slug}/${kebabCase(deburr(data.title.toLowerCase()))}`} title="więcej" className="btnTag">
                więcej
              </ButtonInLink>
            </TitleArticle>
          </a>
        </Link>
      </BoxContent>
    </Article>
  );
});

TagShortArticle.displayName = "TagShortArticle";

export default TagShortArticle;
