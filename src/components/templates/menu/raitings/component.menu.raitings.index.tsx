import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Eye from "assets/icon/eye.svg";
import Best from "assets/icon/best.svg";
import { useEffect, useState } from "react";
import useGrade from "hooks/hooks.useRaitings";
import { useSession } from "next-auth/react";
import Comment from "assets/icon/comment.svg";
import { polyfill } from "smoothscroll-polyfill";
import { NextRouter, useRouter } from "next/router";
import { PostCountType } from "utils/query/posts/count";
import useAddCallBackURL from "hooks/hooks.useCallBackURL";
import { MenuGradeType } from "./component.menu.raitings.type";
import { Button } from "components/atoms/button/component.button.index";
import { ArticeAddGradeType } from "utils/database/database.restAPI.index";
import { BoxMenu, BoxContent, List, Item, Quantity, Title } from "./component.menu.raitings.style";
import { ComponentAnimationCircleLoad, ComponentAnimationItemLoad } from "components/atoms/animation";

import { PostType, PostFullType } from "types/database/types.database.post";

import useRaitings from "hooks/hooks.useRaitings";

export default function MenuGrade({ data }: { data: { post?: PostFullType; stats?: PostCountType } }): JSX.Element {
  const { iAmWaitingForAnswerRaigingsIsAdded } = useRaitings({ postId: data.post?.data.id, stats: data.stats });

  const scrollBoxComment = () => !!data.post?.data.id && document?.querySelector(`#boxCommentsId${data.post?.data.id}`)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

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
            {iAmWaitingForAnswerRaigingsIsAdded ? (
              <ComponentAnimationItemLoad height={3.2} style={{ marginBottom: "0.75rem" }} />
            ) : (
              <Button title="dodaj ocenę wow" active={false} onClick={() => {}}>
                <Wow />
              </Button>
            )}

            <Quantity>{typeof data.stats?.data?.ratings?.wow === "number" ? data.stats?.data?.ratings?.wow : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
          </Item>
          <Item>
            {iAmWaitingForAnswerRaigingsIsAdded ? (
              <ComponentAnimationItemLoad height={3.2} style={{ marginBottom: "0.75rem" }} />
            ) : (
              <Button title="dodaj ocenę dobre!" active={false} onClick={() => {}}>
                <Best />
              </Button>
            )}

            <Quantity>{typeof data.stats?.data?.ratings?.best === "number" ? data.stats?.data?.ratings?.best : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
          </Item>
          <Item>
            {iAmWaitingForAnswerRaigingsIsAdded ? (
              <ComponentAnimationItemLoad height={3.2} style={{ marginBottom: "0.75rem" }} />
            ) : (
              <Button title="dodaj ocenę wrr" active={false} onClick={() => {}}>
                <Wrr />
              </Button>
            )}

            <Quantity>{typeof data.stats?.data?.ratings?.wrr === "number" ? data.stats?.data?.ratings?.wrr : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
          </Item>

          <Item>
            <Button title="Dodaj komentarz" onClick={() => scrollBoxComment()}>
              <Comment />
            </Button>
            <Quantity>{typeof data.stats?.data?.comments === "number" ? data.stats?.data?.comments : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
          </Item>
          <Item>
            <Button title="Wyświetlenia" active>
              <Eye />
            </Button>
            <Quantity>{typeof data.post?.data.attributes.views === "number" ? data.post?.data.attributes.views : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
          </Item>
        </List>
      </BoxContent>
    </BoxMenu>
  );
}
