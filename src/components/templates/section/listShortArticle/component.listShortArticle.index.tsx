import Link from "next/link";
import Confetti from "react-confetti";
import useWindowData from "hooks/hooks.windowData";
import { dataFromAPI } from "function/function.index";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { setTypeContent } from "./component.listShortArticle.setTypeContent";
import React, { useEffect, useRef, useState, useReducer, useMemo } from "react";
import selectTemplateForContent from "./component.listShortArticle.selectTemplate";
import { SquareShortArticle } from "components/atoms/animation/comonent.animation.index";
import { Section, Title, Options, BoxInformation, Info, NotFound } from "./component.listShortArticle.style";

export default function SectionShortArticle({ data, type, loadData, search }: { data: any; type: string; loadData?: boolean; search?: string }) {
  const { width, height } = useWindowData();
  const [content, setContent] = useState(data);
  const articeRef = useRef<HTMLDivElement>(null);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);
  const API = useMemo(() => new dataFromAPI("https://www.polski.dev", type), [type]);

  useEffect(() => {
    if (!loadData && !!search?.length) setContent(data);
  }, [data, loadData, search]);

  useEffect(() => {
    let check = setTimeout(() => {}, 200);

    function loadArticle() {
      clearTimeout(check);
      check = setTimeout(() => {
        const heightEl: any = articeRef?.current?.getBoundingClientRect().y;
        if (content[setTypeContent(type)].meta.pagination.page < content[setTypeContent(type)].meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
      }, 200);
    }

    document.addEventListener("scroll", loadArticle);

    return () => document.removeEventListener("scroll", loadArticle);
  }, [articeRef, height, iAmWaitingForAnswer, content, type]);

  useEffect(() => {
    (async () => {
      if (iAmWaitingForAnswer) {
        const dataFromAPI = !!search?.length ? await API.contentQuery(content[setTypeContent(type)].meta.pagination.page + 1, search) : await API.contentQuery(content[setTypeContent(type)].meta.pagination.page + 1);
        let data = content;
        if (!!data.all && dataFromAPI.all) {
          data.all.data = [...data.all.data, ...dataFromAPI.all.data];
          data.all.meta = dataFromAPI.all.meta;
        }
        if (!!data.article && !!dataFromAPI.article) {
          data.article.data = [...data.article.data, ...dataFromAPI.article.data];
          data.article.meta = dataFromAPI.article.meta;
        }
        if (!!data.video && dataFromAPI.video) {
          data.video.data = [...data.video.data, ...dataFromAPI.video.data];
          data.video.meta = dataFromAPI.video.meta;
        }
        if (!!data.user && dataFromAPI.user) {
          data.user.data = [...data.user.data, ...dataFromAPI.user.data];
          data.user.meta = dataFromAPI.user.meta;
        }
        if (!!data.tag && dataFromAPI.tag) {
          data.tag.data = [...data.tag.data, ...dataFromAPI.tag.data];
          data.tag.meta = dataFromAPI.tag.meta;
        }
        setContent(data);
        setIamWaitingForAnswer(false);
      }
    })();
  }, [iAmWaitingForAnswer, type, API, content, search]);

  return (
    <Section>
      <Title>
        {type === "all" && "Blog"}
        {type === "allWaitingRoom" && "Poczekalnia"}
        {type === "video" && "Video"}
        {type === "videoWaitingRoom" && "Poczekalnia video"}
        {type === "article" && "Artykuły"}
        {type === "articleWaitingRoom" && "Poczekalnia artykułów"}
        {type === "search" && `Wynik wyszukiwania: ${search}`}
        {type === "searchVideo" && `Wynik wyszukiwania video: ${search}`}
        {type === "searchTag" && `Wynik wyszukiwania tag: ${search}`}
        {type === "searchArticle" && `Wynik wyszukiwania artykułów: ${search}`}
      </Title>
      <Options></Options>
      {!!content[setTypeContent(type)].data.length && content[setTypeContent(type)].data.map((item: any, i: number) => selectTemplateForContent(item, i, articeRef))}
      {iAmWaitingForAnswer || loadData ? (
        <>
          {new Array(10).fill(undefined).map((val, i) => (
            <SquareShortArticle key={i} last={new Array(10).length - 1 === i} />
          ))}
        </>
      ) : !!content[setTypeContent(type)].data.length ? (
        <BoxInformation>
          <Info>Właśnie dotarłeś do końca internetów, brawo :)</Info>
          <Confetti width={width} height={2 * height} style={{ width: "100%", position: "absolute" }} />
        </BoxInformation>
      ) : (
        <NotFound>Niestety nic nie znaleźliśmy :(</NotFound>
      )}
    </Section>
  );
}
