import Wow from "assets/icon/wow.svg";
import Wrr from "assets/icon/wrr.svg";
import Eye from "assets/icon/eye.svg";
import Best from "assets/icon/best.svg";

import Comment from "assets/icon/comment.svg";
import useRaitings from "hooks/hooks.useRaitings";
import { PostCountType } from "utils/query/posts/count";
import { PostFindOneType } from "utils/query/posts/find";
import { MenuPrimary } from "components/templates/menu/index";
import { Button } from "components/atoms/button/component.button.index";
import { RatingType, RatingEnum } from "types/database/types.database.rating";
import { BoxMenu, BoxContent, List, Item, Quantity, Title } from "./component.menu.raitings.style";
import { ComponentAnimationCircleLoad, ComponentAnimationItemLoad } from "components/atoms/animation";

export default function MenuGrade({ data }: { data: { post?: PostFindOneType; stats?: PostCountType } }): JSX.Element {
  const { raitingAdd, raitingDelete, raitingAdded, iAmWaitingForAnswerRaigingsIsAdded } = useRaitings({ postId: data.post?.data?.id, stats: data.stats });
  const raitingWow: boolean = !!(raitingAdded?.data?.length && !!raitingAdded?.data.filter((raiting: RatingType) => raiting.attributes.voice === RatingEnum.wow).length);
  const raitingWrr: boolean = !!(raitingAdded?.data?.length && !!raitingAdded?.data.filter((raiting: RatingType) => raiting.attributes.voice === RatingEnum.wrr).length);
  const raitingBest: boolean = !!(raitingAdded?.data?.length && !!raitingAdded?.data.filter((raiting: RatingType) => raiting.attributes.voice === RatingEnum.best).length);
  const scrollBoxComment = () => !!data.post?.data?.id && document?.querySelector(`#boxCommentsId${data.post?.data.id}`)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  return (
    <>
      <BoxMenu>
        <BoxContent>
          <Title>Statystyki</Title>
          <List>
            <Item>
              {iAmWaitingForAnswerRaigingsIsAdded ? (
                <ComponentAnimationItemLoad height={3.2} style={{ marginBottom: "0.75rem", width: "calc(100% - 8rem)" }} />
              ) : (
                <Button title="dodaj ocenę wow" active={raitingWow} onClick={() => (raitingWow ? raitingDelete() : raitingAdd({ voice: RatingEnum.wow }))}>
                  <Wow />
                </Button>
              )}

              <Quantity>{typeof data.stats?.data?.ratings?.wow === "number" ? data.stats?.data?.ratings?.wow : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
            </Item>
            <Item>
              {iAmWaitingForAnswerRaigingsIsAdded ? (
                <ComponentAnimationItemLoad height={3.2} style={{ marginBottom: "0.75rem", width: "calc(100% - 8rem)" }} />
              ) : (
                <Button title="dodaj ocenę dobre!" active={raitingBest} onClick={() => (raitingBest ? raitingDelete() : raitingAdd({ voice: RatingEnum.best }))}>
                  <Best />
                </Button>
              )}

              <Quantity>{typeof data.stats?.data?.ratings?.best === "number" ? data.stats?.data?.ratings?.best : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
            </Item>
            <Item>
              {iAmWaitingForAnswerRaigingsIsAdded ? (
                <ComponentAnimationItemLoad height={3.2} style={{ marginBottom: "0.75rem", width: "calc(100% - 8rem)" }} />
              ) : (
                <Button title="dodaj ocenę wrr" active={raitingWrr} onClick={() => (raitingWrr ? raitingDelete() : raitingAdd({ voice: RatingEnum.wrr }))}>
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
              <Quantity>{typeof data.post?.data?.attributes.views === "number" ? data.post?.data.attributes.views : <ComponentAnimationCircleLoad size={1.6} />}</Quantity>
            </Item>
          </List>
        </BoxContent>
      </BoxMenu>
      <MenuPrimary />
    </>
  );
}
