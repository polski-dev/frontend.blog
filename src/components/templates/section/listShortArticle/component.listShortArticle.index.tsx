import Confetti from "react-confetti";
import useWindowData from "hooks/hooks.windowData";
import React, { useEffect, useRef, useState } from "react";
import { setTypeContent } from "./switchs/component.listShortArticle.setTypeContent";
import { SquareShortArticle } from "components/atoms/animation/comonent.animation.index";
import { contentGetPreview, videoShortGetPreview, articleShortGetPreview } from "database/database.restAPI.index";
import selectTemplateForContent from "./switchs/component.listShortArticle.selectTemplate";
import { Section, Title, BoxInformation, Info, NotFound } from "./style/component.listShortArticle.style";

export default function SectionShortArticle({ data, type, loadData, search }: { data: any; type: string; loadData?: boolean; search?: string }) {
  const { width, height } = useWindowData();
  const [page, setPage] = useState(1);
  const [content, setContent] = useState(data);
  const articeRef = useRef<HTMLDivElement>(null);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);

  useEffect(() => {
    if (!loadData && !!search?.length) setContent(data);
  }, [data, loadData, search]);

  // i check if can download next contents
  useEffect(() => {
    let check = setTimeout(() => {}, 200);

    function loadArticle() {
      clearTimeout(check);
      check = setTimeout(() => {
        const heightEl: any = articeRef?.current?.getBoundingClientRect().y;
        if (page < content[setTypeContent(type)].meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
      }, 200);
    }

    document.addEventListener("scroll", loadArticle);

    return () => document.removeEventListener("scroll", loadArticle);
  }, [articeRef, height, iAmWaitingForAnswer, content, type, page]);

  useEffect(() => {
    (async () => {
      if (iAmWaitingForAnswer) {
        switch (type) {
          case "all":
            const all: any = await contentGetPreview(page, false);
            content.all.data = [...content.all.data, ...all?.all?.data];
            break;
          case "allWaitingRoom":
            const allWaitingRoom: any = await contentGetPreview(page, true);
            content.all.data = [...content.all.data, ...allWaitingRoom?.all?.data];
            break;
          case "video":
            const video: any = await videoShortGetPreview(page, false);
            content.video.data = [...content.video.data, ...video?.video?.data];
            break;
          case "videoWaitingRoom":
            const videoWaitingRoom: any = await videoShortGetPreview(page, true);
            content.video.data = [...content.video.data, ...videoWaitingRoom?.video?.data];
            break;
          case "article":
            const article: any = await articleShortGetPreview(page, false);
            content.article.data = [...content.article.data, ...article?.article?.data];
            break;
          case "articleWaitingRoom":
            const articleWaitingRoom: any = await articleShortGetPreview(page, true);
            content.article.data = [...content.article.data, ...articleWaitingRoom?.article?.data];
            break;
        }

        setContent(content);
        setPage(page + 1);
        setIamWaitingForAnswer(false);
      }
    })();
  }, [iAmWaitingForAnswer, data, type, content, page, search]);

  return (
    <Section>
      <Title>
        {type === "all" && "Wszystko"}
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

      {content[setTypeContent(type)].data.map((item: any, i: number) => selectTemplateForContent(item, i, articeRef))}

      {iAmWaitingForAnswer || loadData ? (
        <>
          {new Array(10).fill(undefined).map((val: any, i: number) => {
            return <SquareShortArticle key={i} last={new Array(10).length - 1 === i} />;
          })}
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
