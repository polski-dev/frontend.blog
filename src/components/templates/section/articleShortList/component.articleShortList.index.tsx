import Confetti from "react-confetti";
import useWindowData from "hooks/hooks.windowData";
import React, { useEffect, useRef, useState } from "react";
import { selectAPI } from "./switchs/component.listShortArticle.selectAPI";
import { PostsFindType, postsFindFrontEnd } from "utils/requests/posts/find";
import { PostType } from "types/database/types.database.post";
import { selectHeader } from "./switchs/component.listShortArticle.selectHeader";
import { setTypeContent } from "./switchs/component.listShortArticle.setTypeContent";
import { SquareShortArticle } from "components/atoms/animation/comonent.animation.index";
import selectTemplateForContent from "./switchs/component.listShortArticle.selectTemplate";
import { Section, Title, BoxInformation, Info, NotFound } from "./style/component.listShortArticle.style";

export default function SectionArticleShortList({ data }: { data?: { content?: PostsFindType } }): JSX.Element {
  console.log(data);
  const { width, height } = useWindowData();
  const [page, setPage] = useState(1);
  const [content, setContent] = useState(data);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!loadData && !!search?.length) setContent(data);
  // }, [data, loadData, search]);

  // // i check if can download next contents
  // useEffect(() => {
  //   let check = setTimeout(() => {}, 200);
  //   const typeContent = setTypeContent(type) || "all";

  //   function loadArticle() {
  //     clearTimeout(check);
  //     check = setTimeout(() => {
  //       const heightEl: any = articeRef?.current?.getBoundingClientRect().y;
  //       if (page < content?.data[typeContent]?.meta?.pagination?.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
  //     }, 200);
  //   }

  //   document.addEventListener("scroll", loadArticle);

  //   return () => document.removeEventListener("scroll", loadArticle);
  // }, [articeRef, height, iAmWaitingForAnswer, content, type, page]);

  // useEffect(() => {
  //   (async (): Promise<void> => {
  //     if (iAmWaitingForAnswer) {
  //       await selectAPI({ type, content, page, search, userId, tagId });
  //       setPage(page + 1);
  //       setContent(content);
  //       setIamWaitingForAnswer(false);
  //     }
  //   })();
  // }, [iAmWaitingForAnswer, data, type, content, page, search, userId, tagId]);

  return (
    <Section>
      {/* <Title>{selectHeader(type, search)}</Title> */}

      {content?.content?.data?.length && content?.content?.data.map((item: PostType, i: number): JSX.Element | undefined => selectTemplateForContent(item, i, postRef))}

      {iAmWaitingForAnswer ? (
        new Array(10).fill(undefined).map((_: undefined, i: number): JSX.Element => {
          return <SquareShortArticle key={i} last={new Array(10).length - 1 === i} />;
        })
      ) : page === data?.content?.meta?.pagination?.pageCount && !!data?.content?.data?.length ? (
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
