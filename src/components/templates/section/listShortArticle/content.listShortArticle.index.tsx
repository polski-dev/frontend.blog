import Link from "next/link";
import Confetti from "react-confetti";
import { dataFromAPI } from "function/function.index";
import useWindowData from "hooks/hooks.windowData";
import { RootState, store } from "store/store.index";
import { useSelector, useDispatch } from "react-redux";
import ShortArticle from "./content.listShortArticle.article";
import React, { useEffect, useRef, useState, useReducer, useMemo } from "react";
import { SquareShortArticle } from "components/atoms/animation/comonent.animation.index";
import { Section, Title, Options, BoxInformation, Info } from "./content.listShortArticle.style";
import { addContentAllHome, addContentAllWaitingRoom, addContentArticleHome, addContentArticleWaitingRoom, addContentVideoHome, addContentVideoWaitingRoom } from "store/slice/content/store.slice.content";

export default function SectionShortArticle({ data, type }: any) {
  const dispatch = useDispatch();
  const [dataAPI, setDataAPI] = useState();
  const { width, height } = useWindowData();
  const articeRef = useRef<HTMLDivElement>(null);
  const story = useSelector((state: RootState) => state);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);
  const API = useMemo(() => new dataFromAPI("https://www.polski.dev", type), [type]);

  useEffect(() => {
    function loadArticle() {
      const heightEl: any = articeRef?.current?.getBoundingClientRect().y;

      if (type === "all" && story.content.all.home.meta.pagination.page < story.content.all.home.meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
    }

    document.addEventListener("scroll", loadArticle);

    return () => document.removeEventListener("scroll", loadArticle);
  }, [articeRef, height, iAmWaitingForAnswer, story, type]);

  useEffect(() => {
    (async () => {
      type === "all" && setDataAPI(await API.contentQuery(story.content.all.home.meta.pagination.page + 1));
    })();
  }, [iAmWaitingForAnswer, type, story, API]);

  useEffect(() => {
    if (type === "all" && !!dataAPI && iAmWaitingForAnswer) {
      setIamWaitingForAnswer(false);
      dispatch(addContentAllHome(dataAPI));
    }
  }, [type, dataAPI, dispatch, iAmWaitingForAnswer]);

  return (
    <Section>
      <Title>Blog</Title>
      <Options></Options>
      {data.map((art: any, i: number) => (
        <ShortArticle data={art.attributes} type={art.type} key={i} ref={articeRef} />
      ))}
      {type === "all" && story.content.all.home.data.slice(data.length).map((art: any, i: number) => <ShortArticle data={art.attributes} type={art.type} key={i} ref={articeRef} />)}

      {iAmWaitingForAnswer ? (
        <>
          {new Array(10).fill(undefined).map((val, i) => (
            <SquareShortArticle key={i} last={new Array(10).length - 1 === i} />
          ))}
        </>
      ) : (
        <BoxInformation>
          <Info>Właśnie dotarłeś do końca internetów, brawo :)</Info>
          <Confetti width={width} height={2 * height} style={{ width: "100%", position: "absolute" }} />
        </BoxInformation>
      )}
    </Section>
  );
}
