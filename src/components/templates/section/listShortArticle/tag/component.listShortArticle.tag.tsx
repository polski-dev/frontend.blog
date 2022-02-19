import Link from "next/link";
import * as React from "react";
import { kebabCase, deburr } from "lodash";
import { setSlug } from "function/function.index";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { Article, BoxContent, TitleArticle } from "../style/component.listShortArticle.style";

const TagShortArticle = React.forwardRef(({ data, type }: any, ref: any) => {
  const slug = new setSlug(type).setContent;

  return (
    <Article ref={ref}>
      <BoxContent>
        <Link href={`/${slug}/${kebabCase(deburr(data.title.toLowerCase()))}`} passHref>
          <a title={data.title} className="titleArticle">
            <TitleArticle tag>
              <span>#</span>
              {data.title}

              <ButtonLinkIn href={`/${slug}/${kebabCase(deburr(data.title.toLowerCase()))}`} title="więcej" className="btnTag">
                więcej
              </ButtonLinkIn>
            </TitleArticle>
          </a>
        </Link>
      </BoxContent>
    </Article>
  );
});

TagShortArticle.displayName = "TagShortArticle";

export default TagShortArticle;
