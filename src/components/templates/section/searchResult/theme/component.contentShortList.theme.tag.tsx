import Link from "next/link";
import * as React from "react";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { TagType } from "types/database/types.database.tag";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { Article, BoxContent, TitleArticle } from "../style/component.listShortArticle.style";

const TagShortArticle = React.forwardRef(({ data }: { data: { tag: TagType } }, ref: any): JSX.Element => {
  return (
    <Article ref={ref}>
      <BoxContent>
        <Link href={`/tag/${data.tag.id}/${slugFromTitle(data.tag.attributes.title)}`}>
          <a title={data.tag.attributes.title} className="titleTag">
            <TitleArticle tag>
              <span>#</span>
              {data.tag.attributes.title}
            </TitleArticle>
          </a>
        </Link>
        <ButtonLinkIn href={`/tag/${data.tag.id}/${slugFromTitle(data.tag.attributes.title)}`} title="więcej" className="btnTag">
          więcej
        </ButtonLinkIn>
      </BoxContent>
    </Article>
  );
});

TagShortArticle.displayName = "TagShortArticle";

export default TagShortArticle;
