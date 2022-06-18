import Confetti from "react-confetti";
import useWindowData from "hooks/hooks.windowData";
import React, { useEffect, useRef, useState } from "react";
import { PostsFindType } from "utils/query/posts/find";
import { PostType } from "types/database/types.database.post";
import { query } from "./switchs/component.contentShortList.switch.query";
import { ComponentAnimationShortArticle } from "components/atoms/animation/index";
import { SectionContentShortListEnum } from "./types/component.contentShortList.types";
import selectTemplateForContent from "./switchs/component.contentShortList.switch.theme";
import { Section, Title, BoxInformation, Info, NotFound } from "./style/component.listShortArticle.style";

export default function SectionContentShortList({ data }: { data: { typ: SectionContentShortListEnum; content?: PostsFindType; title: string } }): JSX.Element {
  const { width, height } = useWindowData();
  const [content, setContent] = useState(data.content);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);

  // i check if can download next contents
  useEffect(() => {
    let check = setTimeout(() => {}, 200);

    function loadArticle() {
      clearTimeout(check);

      check = setTimeout(() => {
        const heightEl: any = postRef?.current?.getBoundingClientRect().y;
        if ((content?.meta?.pagination?.page || 1) < (content?.meta?.pagination?.pageCount || 1) && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
      }, 200);
    }

    document.addEventListener("scroll", loadArticle);

    return () => document.removeEventListener("scroll", loadArticle);
  }, [postRef, height, iAmWaitingForAnswer, content]);

  useEffect(() => {
    (async (): Promise<void> => {
      if (iAmWaitingForAnswer) {
        let res: PostsFindType | undefined = await query({ content, typ: data.typ, page: (content?.meta?.pagination?.page || 1) + 1 });
        setContent(res);
        setIamWaitingForAnswer(false);
      }
    })();
  }, [iAmWaitingForAnswer, data, content]);

  return (
    <Section>
      <Title>{data?.title}</Title>
      {content?.data?.length && content?.data.map((item: PostType, i: number): JSX.Element | undefined => selectTemplateForContent(item, i, postRef))}

      {iAmWaitingForAnswer &&
        new Array(10).fill(undefined).map((_: undefined, i: number): JSX.Element => {
          return <ComponentAnimationShortArticle key={i} />;
        })}

      {(content?.meta?.pagination?.page || 1) >= (content?.meta?.pagination?.pageCount || 1) && !!content?.data?.length && (
        <BoxInformation style={{ top: "-3rem" }}>
          <Info>Właśnie dotarłeś do końca internetów, brawo :)</Info>
          <Confetti width={width} height={2 * height} style={{ width: "100%", position: "absolute" }} />
        </BoxInformation>
      )}

      {!data?.content?.data?.length && <NotFound>Niestety nic nie znaleźliśmy :(</NotFound>}
    </Section>
  );
}

export { SectionContentShortListEnum };