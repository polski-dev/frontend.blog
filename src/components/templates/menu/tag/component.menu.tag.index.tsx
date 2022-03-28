import Image from "next/image";
import Avatar from "assets/icon/avatar.svg";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { MenuTagBox, BoxImg, List, Item, Quantity } from "./component.menu.tag.style";

export default function MenuTagComponent({ data: { cover } }: { data: { cover?: string | undefined } }) {
  return (
    <>
      <MenuTagBox>
        <BoxImg>{!cover ? <Avatar /> : <Image layout="fill" placeholder="blur" blurDataURL="/img/blur.png" src={cover} alt={"pl"} />}</BoxImg>

        <List className="menu">
          <Item>
            <ButtonLinkIn href="/" title="ok">
              Wszystko
            </ButtonLinkIn>
            <Quantity>0</Quantity>
          </Item>
          <Item>
            <ButtonLinkIn href="/" title="ok">
              Artykuły
            </ButtonLinkIn>
            <Quantity>0</Quantity>
          </Item>
          <Item>
            <ButtonLinkIn href="/" title="ok">
              Video
            </ButtonLinkIn>
            <Quantity>0</Quantity>
          </Item>
          <Item>
            <ButtonLinkIn href="/" title="ok">
              Obserwuje
            </ButtonLinkIn>
            <Quantity>0</Quantity>
          </Item>
        </List>
      </MenuTagBox>
    </>
  );
}
