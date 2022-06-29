import Confetti from "react-confetti";
import useWindowData from "hooks/hooks.windowData";
import React, { useEffect, useRef, useState } from "react";
import { SearchType, searchState } from "utils/query/search";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { query } from "./switchs/component.contentShortList.switch.query";
import { ComponentAnimationShortArticle } from "components/atoms/animation/index";
import selectTemplateForContent from "./switchs/component.contentShortList.switch.theme";
import { Section, Title, BoxInformation, Info, NotFound } from "./style/component.listShortArticle.style";
import { PostType } from "types/database/types.database.post";
import { TagType } from "types/database/types.database.tag";
import { UserType } from "types/database/types.database.user";

export default function SectionSearchResult({ data }: { data: { typ: ContentEnum; content?: SearchType; title: string; query: string } }): JSX.Element {
  const { width, height } = useWindowData();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [contentEnd, setContentEnd] = useState(false);
  const [content, setContent] = useState(searchState);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    data?.content && setContent(data.content);
  }, [data]);

  useEffect(() => {
    if (content?.data)
      for (const [key, value] of Object.entries(content?.data)) {
        if (value.meta?.pagination?.page && value.meta?.pagination?.page > page) setPage(value.meta?.pagination?.page);
        if (value.meta?.pagination?.pageCount && value.meta?.pagination?.pageCount > pageCount) setPageCount(value.meta?.pagination?.pageCount);
      }
  }, [content, page, pageCount]);

  useEffect(() => {
    let check = setTimeout(() => {}, 200);

    function loadArticle() {
      clearTimeout(check);

      check = setTimeout(() => {
        const heightEl: any = postRef?.current?.getBoundingClientRect().y;
        if ((page || 1) < (pageCount || 1) && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
      }, 200);
    }

    document.addEventListener("scroll", loadArticle);

    return () => document.removeEventListener("scroll", loadArticle);
  }, [postRef, height, iAmWaitingForAnswer, page, pageCount]);

  useEffect(() => {
    (async (): Promise<void> => {
      if (iAmWaitingForAnswer) {
        let res: SearchType | undefined = await query({ content, typ: data.typ, page: page + 1, query: data.query });

        if (res?.data) {
          setContent(res);
          setIamWaitingForAnswer(false);
        } else alert("Upss.. Coś poszło nie tak :(");
      }
    })();
  }, [iAmWaitingForAnswer, data, content, page]);

  useEffect(() => {
    switch (data.typ) {
      case ContentEnum.searchPost:
        page >= (content?.data?.posts?.meta?.pagination?.pageCount || 1) && setContentEnd(true);
      case ContentEnum.searchTag:
        page >= (content?.data?.tags?.meta?.pagination?.pageCount || 1) && setContentEnd(true);
      case ContentEnum.searchUser:
        page >= (content?.data?.users?.meta?.pagination?.pageCount || 1) && setContentEnd(true);
    }
  }, [data, content, page]);

  return (
    <Section>
      <Title>{data?.title}</Title>
      {data.typ === ContentEnum.searchPost && content?.data?.posts?.data?.length && content?.data?.posts?.data.map((post: PostType, index: number): JSX.Element | undefined => selectTemplateForContent({ typ: data.typ, post, index, ref: postRef }))}
      {data.typ === ContentEnum.searchTag && content?.data?.tags?.data?.length && content?.data?.tags?.data.map((tag: TagType, index: number): JSX.Element | undefined => selectTemplateForContent({ typ: data.typ, tag, index, ref: postRef }))}
      {data.typ === ContentEnum.searchUser && content?.data?.users?.data?.length && content?.data?.users?.data.map((user: UserType, index: number): JSX.Element | undefined => selectTemplateForContent({ typ: data.typ, user, index, ref: postRef }))}

      {iAmWaitingForAnswer &&
        new Array(10).fill(undefined).map((_: undefined, i: number): JSX.Element => {
          return <ComponentAnimationShortArticle key={i} />;
        })}

      {(page || 1) >= (pageCount || 1) && !!(content?.data?.posts?.data?.length || content?.data?.tags?.data?.length || content?.data?.users?.data?.length) && (
        <BoxInformation style={{ top: "-3rem" }}>
          <Info>Właśnie dotarłeś do końca internetów, brawo :)</Info>
          <Confetti width={width} height={2 * height} style={{ width: "100%", position: "absolute" }} />
        </BoxInformation>
      )}

      {!(content?.data?.posts?.data?.length || content?.data?.tags?.data?.length || content?.data?.users?.data?.length) && <NotFound>Niestety nic nie znaleźliśmy :(</NotFound>}
    </Section>
  );
}
