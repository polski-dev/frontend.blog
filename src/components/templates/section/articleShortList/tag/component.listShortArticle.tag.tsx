import Link from "next/link";
import * as React from "react";
import { kebabCase, deburr } from "lodash";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { Article, BoxContent, TitleArticle } from "../style/component.listShortArticle.style";

const TagShortArticle = React.forwardRef(({ data, type }: any, ref: any): JSX.Element => {
  return (
    <Article ref={ref}>
      <BoxContent>
        <Link href={`/t/${data.id}/${kebabCase(deburr(data.attributes.title.toLowerCase()))}`}>
          <a title={data.attributes.title} className="titleTag">
            <TitleArticle tag>
              <span>#</span>
              {data.attributes.title}
            </TitleArticle>
          </a>
        </Link>
        <ButtonLinkIn href={`/t/${data.id}/${kebabCase(deburr(data.attributes.title.toLowerCase()))}`} title="więcej" className="btnTag">
          więcej
        </ButtonLinkIn>
      </BoxContent>
    </Article>
  );
});

TagShortArticle.displayName = "TagShortArticle";

export default TagShortArticle;
