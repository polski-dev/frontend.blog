import Image from "next/image";
import AvatarBasic from "assets/icon/avatar.svg";
import Birthday from "assets/icon/birthday.svg";
import LinkIcon from "assets/icon/link.svg";
import Point from "assets/icon/point.svg";
import Youtube from "assets/icon/youtube.svg";
import Tiktok from "assets/icon/tiktok.svg";
import Github from "assets/icon/github.svg";
import { time } from "function/function.index";
import Instagram from "assets/icon/instagram.svg";
import { UserByIdType } from "database/database.graphQL.index";
import { Button } from "components/atoms/button/component.button.index";
import { UserInfoBox, Avatar, Name, Description, List, Item } from "./component.user.infoBox.style";

export default function UserInfoBoxComponent({ data }: { data?: UserByIdType }) {
  return (
    <UserInfoBox>
      <Avatar>
        {!data?.data?.user?.data?.attributes?.avatar?.data?.attributes?.url ? (
          <AvatarBasic />
        ) : (
          <Image width={120} height={120} placeholder="blur" blurDataURL="/img/blur.png" src={data.data?.user.data?.attributes.avatar.data.attributes.url} alt={data.data?.user.data?.attributes.username || ""} />
        )}
      </Avatar>
      <Button title="subskrybuj" className="btn">
        Subskrybuj
      </Button>
      <Name>{data?.data?.user?.data?.attributes?.username}</Name>
      <Description>{data?.data?.user?.data?.attributes?.about}</Description>
      <List>
        {!!data?.data?.user?.data?.attributes?.city && !!data?.data?.user?.data?.attributes?.country && (
          <Item>
            <Point /> {data.data.user.data?.attributes.country}, {data.data.user.data?.attributes.city}
          </Item>
        )}

        <Item>
          <Birthday /> Dołączył w dniu
          {!!data?.data?.user?.data?.attributes?.createdAt && ` ${time.nameOfTheMonths(data.data?.user.data?.attributes.createdAt)} `}
          {!!data?.data?.user.data?.attributes.createdAt && new Date(data.data?.user.data?.attributes.createdAt).getFullYear()}
        </Item>
        {!!data?.data?.user?.data?.attributes?.website && (
          <Item>
            <LinkIcon />
            <a href={data?.data?.user.data?.attributes.website}>{data?.data?.user.data?.attributes.website}</a>
          </Item>
        )}

        <Item>
          {!!data?.data?.user?.data?.attributes?.youtube && (
            <a href={data?.data?.user.data?.attributes.youtube}>
              <Youtube />
            </a>
          )}
          {!!data?.data?.user?.data?.attributes?.tiktok && (
            <a href={data.data?.user.data?.attributes.tiktok}>
              <Tiktok />
            </a>
          )}
          {!!data?.data?.user?.data?.attributes?.instagram && (
            <a href={data.data?.user.data?.attributes.instagram}>
              <Instagram />
            </a>
          )}
          {!!data?.data?.user?.data?.attributes?.github && (
            <a href={data.data?.user.data?.attributes.github}>
              <Github />
            </a>
          )}
        </Item>
      </List>
    </UserInfoBox>
  );
}
