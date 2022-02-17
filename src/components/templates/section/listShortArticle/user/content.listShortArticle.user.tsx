import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Best from "assets/icon/best.svg";
import { kebabCase, deburr } from "lodash";
import Comment from "assets/icon/comment.svg";
import { setSlug, time } from "function/function.index";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { Article, BoxContent, BoxAuthor, BoxAuthorImg, AuthorData, AuthorName, DateAdded, TitleArticle, ListTags, Tag, ListStats, Item, BoxInformation, Info } from "../component.listShortArticle.style";

const myLoader = ({ src, width, quality }: any) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const UserShortArticle = React.forwardRef(({ data, type }: any, ref: any) => {
  const slug = new setSlug(type).setContent;

  return (
    <Article ref={ref}>
      <BoxContent>
        <BoxAuthor>
          <BoxAuthorImg>
            {data?.avatar ? <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={data.username} src={data.avatar.data.attributes.url} /> : <Image src="/img/blur.png" alt={data.username} width={42} height={42} />}
          </BoxAuthorImg>
          <AuthorData>
            <Link href={`/${slug}/${kebabCase(deburr(data.username.toLowerCase()))}`}>
              <a title={data.username}>
                <AuthorName>{data.username}</AuthorName>
              </a>
            </Link>

            <DateAdded>
              dołączył do nas {time.nameOfTheMonths(data.createdAt)} ( {time.countDays(data.createdAt)} )
            </DateAdded>
          </AuthorData>
          <ButtonLinkIn href={`/${slug}/${kebabCase(deburr(data.username.toLowerCase()))}`} title="zobacz profil" className="btnUser">
            zobacz profil
          </ButtonLinkIn>
        </BoxAuthor>
      </BoxContent>
    </Article>
  );
});

UserShortArticle.displayName = "UserShortArticle";

export default UserShortArticle;
