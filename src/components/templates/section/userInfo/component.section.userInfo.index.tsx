import Image from "next/image";
import useUser from "hooks/hooks.useSubscribe";
import AvatarBasic from "assets/icon/avatar.svg";
import Birthday from "assets/icon/birthday.svg";
import LinkIcon from "assets/icon/link.svg";
import Point from "assets/icon/point.svg";
import Youtube from "assets/icon/youtube.svg";
import Tiktok from "assets/icon/tiktok.svg";
import Github from "assets/icon/github.svg";
import time from "utils/lib/utils.lib.time";
import Instagram from "assets/icon/instagram.svg";
import { UserByIdType } from "utils/database/database.graphQL.index";
import { Button } from "components/atoms/button/component.button.index";
import { UserInfoBox, Avatar, Name, Description, List, Item } from "./component.section.userInfo.style";
import { usersFindBackEnd, UsersFindType, userFindOneBackEnd, UserFindOneType } from "utils/query/user/find";
export default function SectionUserInfo({ data }: { data?: { user?: UserFindOneType } }) {
  //const { statusSubscription, subscriptionToggleGet } = useUser({ id: (user?.data?.user?.data?.id && parseInt(user?.data?.user?.data?.id)) || 0, slug });

  return (
    <UserInfoBox>
      <Avatar>
        {data?.user?.data?.attributes?.avatar?.data?.attributes?.url ? <Image width={120} height={120} placeholder="blur" blurDataURL="/img/blur.png" src={data?.user?.data?.attributes?.avatar?.data?.attributes?.url} alt={data?.user?.data?.attributes.username || "Add user name"} /> : <AvatarBasic />}
      </Avatar>
      <Button
        title={true ? "Zrezygnuj z subskrypcji" : "Subskrybuj"}
        className="btn"
        onClick={() => {
          // subscriptionToggleGet();
        }}
      >
        {true ? "Subskrybujesz" : "Subskrybuj"}
      </Button>
      <Name>{data?.user?.data?.attributes.username || "Add user name"}</Name>
      <Description>{data?.user?.data?.attributes.about || "He did not yet add description"}</Description>
      <List>
        {data?.user?.data?.attributes?.country && data?.user?.data?.attributes?.city && (
          <Item>
            <Point /> {data?.user?.data?.attributes?.country}, {data?.user?.data?.attributes?.city}
          </Item>
        )}

        <Item>
          <Birthday /> Dołączył w dniu
          {data?.user?.data?.attributes?.createdAt && ` ${time.nameOfTheMonths(data?.user?.data?.attributes?.createdAt)} `}
          {data?.user?.data?.attributes?.createdAt && new Date(data?.user?.data?.attributes?.createdAt).getFullYear()}
        </Item>
        {data?.user?.data?.attributes?.website && (
          <Item>
            <LinkIcon />
            <a href={data?.user?.data?.attributes?.website}>{data?.user?.data?.attributes?.website}</a>
          </Item>
        )}

        <Item>
          {data?.user?.data?.attributes?.youtube && (
            <a href={data?.user?.data?.attributes?.youtube}>
              <Youtube />
            </a>
          )}
          {data?.user?.data?.attributes?.tiktok && (
            <a href={data?.user?.data?.attributes?.tiktok}>
              <Tiktok />
            </a>
          )}
          {data?.user?.data?.attributes?.instagram && (
            <a href={data?.user?.data?.attributes?.instagram}>
              <Instagram />
            </a>
          )}
          {data?.user?.data?.attributes?.github && (
            <a href={data?.user?.data?.attributes?.github}>
              <Github />
            </a>
          )}
        </Item>
      </List>
    </UserInfoBox>
  );
}
