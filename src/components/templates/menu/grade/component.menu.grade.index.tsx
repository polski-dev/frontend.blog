import { useEffect, useState } from "react";
import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Eye from "assets/icon/eye.svg";
import Best from "assets/icon/best.svg";
import useGrade from "hooks/hooks.useGrade";
import Comment from "assets/icon/comment.svg";
import { polyfill } from "smoothscroll-polyfill";
import { NextRouter, useRouter } from "next/router";
import { MenuGradeType } from "./component.menu.grade.type";
import { ArticeAddGradeType } from "database/database.restAPI.index";
import { Button } from "components/atoms/button/component.button.index";
import { ItemLoad } from "components/atoms/animation/comonent.animation.index";
import { BoxMenu, BoxContent, List, Item, Quantity, Title } from "./component.menu.grade.style";

export default function MenuGrade({ gradeStats, views, comments, id, type }: MenuGradeType): JSX.Element {
  const router: NextRouter = useRouter();
  useEffect(() => polyfill(), []);
  const scrollBoxComment = () => !!id && document?.querySelector(`#boxCommentsId${id}`)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  const [choisedGrade, setChoisedGrade] = useState("");
  const [changeGrade, setChangeGrade] = useState(false);
  const { rememberChoiseGrade, checkIfYouHaveToGiveGrade, addGrade, checkGrade } = useGrade();

  const choiseGrande: (grade: string) => void = (grade: string) => {
    setChangeGrade(true);
    rememberChoiseGrade({ grade, type, id });
    addGrade().then((res) => {
      if (res.err && !!res?.msg) {
        console.log(res.msg);
        switch (res.msg) {
          case "singin":
            alert("Aby dodać ocenę zaloguj się");
            setChangeGrade(false);

            return router.replace("/auth/signin");
        }
      } else {
        !!res?.data?.voice && setChoisedGrade(res?.data?.voice);
        setChangeGrade(false);
      }
    });
  };

  useEffect(() => {
    checkGrade({ type: "article", id }).then((res: ArticeAddGradeType | { data: null; err: boolean; msg: string }) => {
      if (!res.data && res?.err) return null;
      res?.data?.voice && setChoisedGrade(res.data?.voice);
    });
  }, [id, checkGrade]);

  return (
    <BoxMenu>
      <BoxContent>
        <Title>Statystyki</Title>
        <List>
          {changeGrade ? (
            <>
              <Item>
                <ItemLoad style={{ height: "3.2rem", width: "calc(100% - 8rem)", margin: "0 0 0.75rem 0" }} />
                <ItemLoad style={{ height: "3.2rem", width: "6rem", marginLeft: "1rem", margin: "0 0 0.75rem 1rem" }} />
              </Item>
              <Item>
                <ItemLoad style={{ height: "3.2rem", width: "calc(100% - 8rem)", margin: "0 0 0.75rem 0" }} />
                <ItemLoad style={{ height: "3.2rem", width: "6rem", marginLeft: "1rem", margin: "0 0 0.75rem 1rem" }} />
              </Item>
              <Item>
                <ItemLoad style={{ height: "3.2rem", width: "calc(100% - 8rem)", margin: "0 0 0.75rem 0" }} />
                <ItemLoad style={{ height: "3.2rem", width: "6rem", marginLeft: "1rem", margin: "0 0 0.75rem 1rem" }} />
              </Item>
            </>
          ) : (
            <>
              <Item>
                <Button title="dodaj ocenę wow" active={choisedGrade === "wow" ? true : false} onClick={() => choiseGrande("wow")}>
                  <Wow />
                </Button>
                <Quantity>{gradeStats?.data.filter((item) => item.attributes.voice === "wow").length}</Quantity>
              </Item>
              <Item>
                <Button title="dodaj ocenę dobre!" active={choisedGrade === "best" ? true : false} onClick={() => choiseGrande("best")}>
                  <Best />
                </Button>
                <Quantity>{gradeStats?.data.filter((item) => item.attributes.voice === "best").length}</Quantity>
              </Item>
              <Item>
                <Button title="dodaj ocenę wrr" active={choisedGrade === "wrr" ? true : false} onClick={() => choiseGrande("wrr")}>
                  <Wrr />
                </Button>
                <Quantity>{gradeStats?.data.filter((item) => item.attributes.voice === "wrr").length}</Quantity>
              </Item>
            </>
          )}

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
