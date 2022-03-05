import { useEffect } from "react";
import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Eye from "assets/icon/eye.svg";
import { useRouter } from "next/router";
import Best from "assets/icon/best.svg";
import { useSession } from "next-auth/react";
import { RootState } from "store/store.index";
import Comment from "assets/icon/comment.svg";
import { polyfill } from "smoothscroll-polyfill";
import { useSelector, useDispatch } from "react-redux";
import { MenuGradeType } from "./component.menu.grade.type";
import { Button } from "components/atoms/button/component.button.index";
import { BoxMenu, BoxContent, List, Item, Quantity, Title } from "./component.menu.grade.style";

export default function MenuGrade({ grade, views, comments, idArticle }: MenuGradeType): JSX.Element {
  const { data } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => polyfill(), []);
  const store = useSelector((state: RootState) => state);
  console.log(data);
  const scrollBoxComment = () => {
    if (!!idArticle) {
      const boxComments = document?.querySelector(`#boxCommentsId${idArticle}`);

      return boxComments?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  };

  useEffect(() => {
    const localStorage = window.localStorage;
    const callBackURL = JSON.stringify({ slug: "/", name: "Artykół o JavaScript" });
    const grade = JSON.stringify({ grade: "wow", type: "article", id: 1 });
    localStorage.setItem("grade", grade);
    console.log(localStorage);

    console.log(JSON.parse(`${localStorage.getItem("nextauth.message")}`));

    setTimeout(() => {}, 1000);
  }, [store, dispatch, data]);

  return (
    <BoxMenu>
      <BoxContent>
        <Title>Statystyki</Title>
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
          <Item>
            <Button title="Dodaj komentarz" onClick={() => scrollBoxComment()}>
              <Comment />
            </Button>
            <Quantity>{comments}</Quantity>
          </Item>
          <Item>
            <Button title="Wyświetlenia" active>
              <Eye />
            </Button>
            <Quantity>{views}</Quantity>
          </Item>
        </List>
      </BoxContent>
    </BoxMenu>
  );
}
