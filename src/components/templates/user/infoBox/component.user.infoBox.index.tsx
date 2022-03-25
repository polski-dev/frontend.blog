import Image from "next/image";
import useUser from "hooks/hooks.useUser";
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

export default function UserInfoBoxComponent({ data: { user, slug } }: { data: { user: UserByIdType; slug: string } }) {
  const { statusSubscription, subscriptionToggleGet } = useUser({ type: "user", id: (user?.data?.user?.data?.id && parseInt(user?.data?.user?.data?.id)) || 0, slug });

  return (
    <UserInfoBox>
      <Avatar>
        {!user?.data?.user?.data?.attributes?.avatar?.data?.attributes?.url ? (
          <AvatarBasic />
        ) : (
          <Image width={120} height={120} placeholder="blur" blurDataURL="/img/blur.png" src={user.data?.user.data?.attributes.avatar.data.attributes.url} alt={user.data?.user.data?.attributes.username || ""} />
        )}
      </Avatar>
      <Button
        title={statusSubscription ? "Zrezygnuj z subskrypcji" : "Subskrybuj"}
        className="btn"
        onClick={() => {
          subscriptionToggleGet();
        }}
      >
        {statusSubscription ? "Subskrybujesz" : "Subskrybuj"}
      </Button>
      <Name>{user?.data?.user?.data?.attributes?.username}</Name>
      <Description>{user?.data?.user?.data?.attributes?.about}</Description>
      <List>
        {!!user?.data?.user?.data?.attributes?.city && !!user?.data?.user?.data?.attributes?.country && (
          <Item>
            <Point /> {user.data.user.data?.attributes.country}, {user.data.user.data?.attributes.city}
          </Item>
        )}

        <Item>
          <Birthday /> Dołączył w dniu
          {!!user?.data?.user?.data?.attributes?.createdAt && ` ${time.nameOfTheMonths(user.data?.user.data?.attributes.createdAt)} `}
          {!!user?.data?.user.data?.attributes.createdAt && new Date(user.data?.user.data?.attributes.createdAt).getFullYear()}
        </Item>
        {!!user?.data?.user?.data?.attributes?.website && (
          <Item>
            <LinkIcon />
            <a href={user?.data?.user.data?.attributes.website}>{user?.data?.user.data?.attributes.website}</a>
          </Item>
        )}

        <Item>
          {!!user?.data?.user?.data?.attributes?.youtube && (
            <a href={user?.data?.user.data?.attributes.youtube}>
              <Youtube />
            </a>
          )}
          {!!user?.data?.user?.data?.attributes?.tiktok && (
            <a href={user.data?.user.data?.attributes.tiktok}>
              <Tiktok />
            </a>
          )}
          {!!user?.data?.user?.data?.attributes?.instagram && (
            <a href={user.data?.user.data?.attributes.instagram}>
              <Instagram />
            </a>
          )}
          {!!user?.data?.user?.data?.attributes?.github && (
            <a href={user.data?.user.data?.attributes.github}>
              <Github />
            </a>
          )}
        </Item>
      </List>
    </UserInfoBox>
  );
}
