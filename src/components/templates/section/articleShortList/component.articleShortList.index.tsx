import Confetti from "react-confetti";
import useWindowData from "hooks/hooks.windowData";
import React, { useEffect, useRef, useState } from "react";
import { selectAPI } from "./switchs/component.listShortArticle.selectAPI";
import { selectHeader } from "./switchs/component.listShortArticle.selectHeader";
import { setTypeContent } from "./switchs/component.listShortArticle.setTypeContent";
import { SquareShortArticle } from "components/atoms/animation/comonent.animation.index";
import selectTemplateForContent from "./switchs/component.listShortArticle.selectTemplate";
import { Section, Title, BoxInformation, Info, NotFound } from "./style/component.listShortArticle.style";

export default function SectionArticleShortList({ data, type, loadData, search }: { data: any; type: string; loadData?: boolean; search?: string }): JSX.Element {
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
        if (page < content.data[setTypeContent(type)].meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
      }, 200);
    }

    document.addEventListener("scroll", loadArticle);

    return () => document.removeEventListener("scroll", loadArticle);
  }, [articeRef, height, iAmWaitingForAnswer, content, type, page]);

  useEffect(() => {
    (async (): Promise<void> => {
      if (iAmWaitingForAnswer) {
        await selectAPI(type, content, page, search);
        setPage(page + 1);
        setContent(content);
        setIamWaitingForAnswer(false);
      }
    })();
  }, [iAmWaitingForAnswer, data, type, content, page, search]);

  return (
    <Section>
      <Title>{selectHeader(type, search)}</Title>

      {content.data[setTypeContent(type)].data.map((item: any, i: number) => selectTemplateForContent(item, i, articeRef))}

      {iAmWaitingForAnswer || loadData ? (
        <>
          {new Array(10).fill(undefined).map((val: any, i: number) => {
            return <SquareShortArticle key={i} last={new Array(10).length - 1 === i} />;
          })}
        </>
      ) : !!content.data[setTypeContent(type)].data.length ? (
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
