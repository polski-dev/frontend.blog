import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Eye from "assets/icon/eye.svg";
import Best from "assets/icon/best.svg";
import { useEffect, useState } from "react";
import useGrade from "hooks/hooks.useGrade";
import { useSession } from "next-auth/react";
import Comment from "assets/icon/comment.svg";
import { polyfill } from "smoothscroll-polyfill";
import { NextRouter, useRouter } from "next/router";
import { PostCountType } from "utils/query/posts/count";
import useAddCallBackURL from "hooks/hooks.useCallBackURL";
import { MenuGradeType } from "./component.menu.raitings.type";
import { ArticeAddGradeType } from "utils/database/database.restAPI.index";
import { Button } from "components/atoms/button/component.button.index";
import { ComponentAnimationCircleLoad } from "components/atoms/animation";
import { BoxMenu, BoxContent, List, Item, Quantity, Title } from "./component.menu.raitings.style";

import { PostType, PostFullType } from "types/database/types.database.post";

export default function MenuGrade({ data: { post, stats } }: { data: { post?: PostFullType; stats?: PostCountType } }): JSX.Element {
  const router: NextRouter = useRouter();
  const { data: session } = useSession();
  const { addCallBackURL } = useAddCallBackURL();
  const [choisedGrade, setChoisedGrade] = useState("");
  const [changeGrade, setChangeGrade] = useState(false);
  const { rememberChoiseGrade, checkIfYouHaveToGiveGrade, addGrade, checkGrade, deleteGradeToGive } = useGrade();

  // useEffect(() => polyfill(), []);

  const scrollBoxComment = () => !!post?.data.id && document?.querySelector(`#boxCommentsId${post?.data.id}`)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  // const choiseGrande: (grade: string) => void = (grade: string) => {
  //   setChangeGrade(true);
  //   rememberChoiseGrade({ grade, type, id });
  //   addGrade().then((res: ArticeAddGradeType) => {
  //     if (res.err && !!res?.msg) {
  //       switch (res.msg) {
  //         case "singin":
  //           setChangeGrade(false);
  //           addCallBackURL({ to: `/${type === "article" ? "a" : "v"}${slug}`, name: type });
  //           return router.replace("/auth/signin");
  //       }
  //     } else {
  //       !!res?.data?.voice && setChoisedGrade(res?.data?.voice);
  //       setChangeGrade(false);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   checkGrade({ type: type, id }).then((res: ArticeAddGradeType | { data: null; err: boolean; msg: string }) => {
  //     if (!res.data && res?.err) return null;
  //     res?.data?.voice && setChoisedGrade(res.data?.voice);
  //   });
  // }, [id, type, checkGrade]);

  return (
    <BoxMenu>
      <BoxContent>
        <Title>Statystyki</Title>
        <List>
          <Item>
            <Button title="dodaj ocenę wow" active={false} onClick={() => {}}>
              <Wow />
            </Button>
            <Quantity>{typeof stats?.data?.ratings?.wow === "number" ? stats?.data?.ratings?.wow : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
          </Item>
          <Item>
            <Button title="dodaj ocenę dobre!" active={false} onClick={() => {}}>
              <Best />
            </Button>
            <Quantity>{typeof stats?.data?.ratings?.best === "number" ? stats?.data?.ratings?.best : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
          </Item>
          <Item>
            <Button title="dodaj ocenę wrr" active={false} onClick={() => {}}>
              <Wrr />
            </Button>
            <Quantity>{typeof stats?.data?.ratings?.wrr === "number" ? stats?.data?.ratings?.wrr : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
          </Item>

          <Item>
            <Button title="Dodaj komentarz" onClick={() => scrollBoxComment()}>
              <Comment />
            </Button>
            <Quantity>{typeof stats?.data?.comments === "number" ? stats?.data?.comments : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
          </Item>
          <Item>
            <Button title="Wyświetlenia" active>
              <Eye />
            </Button>
            <Quantity>{typeof post?.data.attributes.views === "number" ? post?.data.attributes.views : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
          </Item>
        </List>
      </BoxContent>
    </BoxMenu>
  );
}
