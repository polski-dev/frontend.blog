import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import Avatar from "assets/icon/avatar.svg";
import time from "utils/lib/utils.lib.time";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { UserType } from "types/database/types.database.user";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { Article, BoxContent, BoxAuthor, BoxAuthorImg, BoxAuthorAvatar, AuthorData, AuthorName, DateAdded } from "../style/component.listShortArticle.style";

const UserShortArticle = React.forwardRef(({ data }: { data: { user: UserType } }, ref: any): JSX.Element => {
  return (
    <Article ref={ref}>
      <BoxContent>
        <BoxAuthor>
          <BoxAuthorImg>
            {data?.user?.attributes?.avatar?.data?.attributes?.url ? (
              <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={data?.user?.attributes?.username || ""} src={data?.user?.attributes?.avatar?.data?.attributes?.url} />
            ) : (
              <BoxAuthorAvatar>
                <Avatar />
              </BoxAuthorAvatar>
            )}
          </BoxAuthorImg>
          <AuthorData>
            <Link href={`/user/${data?.user?.id}/${slugFromTitle(data?.user?.attributes?.username || "")}`}>
              <a title={data?.user?.attributes?.username || ""}>
                <AuthorName>{data?.user?.attributes?.username}</AuthorName>
              </a>
            </Link>

            <DateAdded>
              dołączył do nas {time.nameOfTheMonths(data?.user?.attributes?.createdAt || new Date())} ( {time.countDays(data?.user?.attributes?.createdAt || new Date())} )
            </DateAdded>
          </AuthorData>
          <ButtonLinkIn href={`/user/${data?.user?.id}/${slugFromTitle(data?.user?.attributes?.username || "")}`} title="zobacz profil" className="btnUser">
            zobacz profil
          </ButtonLinkIn>
        </BoxAuthor>
      </BoxContent>
    </Article>
  );
});

UserShortArticle.displayName = "UserShortArticle";

export default UserShortArticle;
