import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Best from "assets/icon/best.svg";
import { MenuGradeType } from "./component.menu.grade.type";
import { Button } from "components/atoms/button/component.button.index";
import { BoxMenu, BoxContent, List, Item, Quantity, Title } from "./component.menu.grade.style";

export default function MenuGrade({ grade, idArticle }: MenuGradeType): JSX.Element {
  return (
    <BoxMenu>
      <BoxContent>
        <Title>Oceń</Title>
        <List>
          <Item>
            <Button title="dodaj ocenę wow">
              <Wow />
            </Button>
            <Quantity>{grade?.data.filter((item) => item.attributes.voice === "wow").length}</Quantity>
          </Item>
          <Item>
            <Button title="dodaj ocenę dobre!">
              <Best />
            </Button>
            <Quantity>{grade?.data.filter((item) => item.attributes.voice === "best").length}</Quantity>
          </Item>
          <Item>
            <Button title="dodaj ocenę wrr">
              <Wrr />
            </Button>
            <Quantity>{grade?.data.filter((item) => item.attributes.voice === "wrr").length}</Quantity>
          </Item>
        </List>
      </BoxContent>
    </BoxMenu>
  );
}
