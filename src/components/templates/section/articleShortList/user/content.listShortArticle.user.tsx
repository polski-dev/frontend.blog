import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { kebabCase, deburr } from "lodash";
import Avatar from "assets/icon/avatar.svg";
import { setSlug, time } from "utils/function/function.index";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { Article, BoxContent, BoxAuthor, BoxAuthorImg, BoxAuthorAvatar, AuthorData, AuthorName, DateAdded } from "../style/component.listShortArticle.style";

const UserShortArticle = React.forwardRef(({ data, type }: any, ref: any) => {
  return (
    <Article ref={ref}>
      <BoxContent>
        <BoxAuthor>
          <BoxAuthorImg>
            {data?.attributes?.avatar?.data?.attributes?.url ? (
              <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={data.attributes.username} src={data.attributes.avatar.data.attributes.url} />
            ) : (
              <BoxAuthorAvatar>
                <Avatar />
              </BoxAuthorAvatar>
            )}
          </BoxAuthorImg>
          <AuthorData>
            <Link href={`/u/${data.id}/${kebabCase(deburr(data.attributes.username.toLowerCase()))}`}>
              <a title={data.attributes.username}>
                <AuthorName>{data.attributes.username}</AuthorName>
              </a>
            </Link>

            <DateAdded>
              dołączył do nas {time.nameOfTheMonths(data.attributes.createdAt)} ( {time.countDays(data.attributes.createdAt)} )
            </DateAdded>
          </AuthorData>
          <ButtonLinkIn href={`/u/${data.id}/${kebabCase(deburr(data.attributes.username.toLowerCase()))}`} title="zobacz profil" className="btnUser">
            zobacz profil
          </ButtonLinkIn>
        </BoxAuthor>
      </BoxContent>
    </Article>
  );
});

UserShortArticle.displayName = "UserShortArticle";

export default UserShortArticle;
