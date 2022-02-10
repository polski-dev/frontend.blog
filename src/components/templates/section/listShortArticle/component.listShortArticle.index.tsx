import Link from "next/link";
import Confetti from "react-confetti";
import useWindowData from "hooks/hooks.windowData";
import { RootState, store } from "store/store.index";
import { dataFromAPI } from "function/function.index";
import { useSelector, useDispatch } from "react-redux";
import TagShortArticle from "./tag/component.listShortArticle.tag";
import UserShortArticle from "./user/content.listShortArticle.user";
import ContentShortArticle from "./content/component.listShortArticle.content";
import React, { useEffect, useRef, useState, useReducer, useMemo } from "react";
import { SquareShortArticle } from "components/atoms/animation/comonent.animation.index";
import { Section, Title, Options, BoxInformation, Info, NotFound } from "./component.listShortArticle.style";
import { addContentAllHome, addContentAllWaitingRoom, addContentArticleHome, addContentArticleWaitingRoom, addContentVideoHome, addContentVideoWaitingRoom } from "store/slice/content/store.slice.content";
import { addNewSearchQuery, addSearchQuery } from "store/slice/search/store.slice.search";

export default function SectionShortArticle({ data, type }: any) {
  const dispatch = useDispatch();
  const [dataAPI, setDataAPI] = useState();
  const { width, height } = useWindowData();
  const articeRef = useRef<HTMLDivElement>(null);
  const story = useSelector((state: RootState) => state);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);
  const API = useMemo(() => new dataFromAPI("https://www.polski.dev", type), [type]);

  const selectTemplateForContent = (item: any, i: number) => {
    if (item.type === "article" || item.type === "video") {
      return <ContentShortArticle data={item.attributes} type={item.type} key={i} ref={articeRef} />;
    } else if (item.type === "user") {
      return <UserShortArticle data={item} type={item.type} key={i} ref={articeRef} />;
    } else if (item.type === "tag") {
      return <TagShortArticle data={item.attributes} type={item.type} key={i} ref={articeRef} />;
    }
  };

  useEffect(() => {
    let check = setTimeout(() => {}, 500);

    function loadArticle() {
      clearTimeout(check);
      check = setTimeout(() => {
        const heightEl: any = articeRef?.current?.getBoundingClientRect().y;
        if (type === "all" && story?.content.all.home.meta.pagination.page < story?.content.all.home.meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
        else if (type === "allWaitingRoom" && story?.content.all.waitingRoom.meta.pagination.page < story?.content.all.waitingRoom.meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
        else if (type === "video" && story?.content.video.home.meta.pagination.page < story?.content.video.home.meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
        else if (type === "videoWaitingRoom" && story?.content.video.waitingRoom.meta.pagination.page < story?.content.video.waitingRoom.meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
        else if (type === "article" && story?.content.article.home.meta.pagination.page < story?.content.article.home.meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
        else if (type === "articleWaitingRoom" && story?.content.article.waitingRoom.meta.pagination.page < story?.content.article.waitingRoom.meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
        else if (type === "search" && story?.search.all.meta.pagination.page < story?.search.all.meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
        else if (type === "searchVideo" && story?.search.video.meta.pagination.page < story?.search.video.meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
        else if (type === "searchTag" && story?.search.tag.meta.pagination.page < story?.search.tag.meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
        else if (type === "searchArticle" && story?.search.article?.meta.pagination.page < story?.search.article.meta.pagination.pageCount && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
      }, 500);
    }

    document.addEventListener("scroll", loadArticle);

    return () => document.removeEventListener("scroll", loadArticle);
  }, [articeRef, height, iAmWaitingForAnswer, story, type]);

  useEffect(() => {
    (async () => {
      type === "all" && iAmWaitingForAnswer && setDataAPI(await API.contentQuery(story.content.all.home.meta.pagination.page + 1));
      type === "allWaitingRoom" && iAmWaitingForAnswer && setDataAPI(await API.contentQuery(story.content.all.waitingRoom.meta.pagination.page + 1));
      type === "video" && iAmWaitingForAnswer && setDataAPI(await API.contentQuery(story.content.video.home.meta.pagination.page + 1));
      type === "videoWaitingRoom" && iAmWaitingForAnswer && setDataAPI(await API.contentQuery(story.content.video.waitingRoom.meta.pagination.page + 1));
      type === "article" && iAmWaitingForAnswer && setDataAPI(await API.contentQuery(story.content.article.home.meta.pagination.page + 1));
      type === "articleWaitingRoom" && iAmWaitingForAnswer && setDataAPI(await API.contentQuery(story.content.article.waitingRoom.meta.pagination.page + 1));
      type === "search" && iAmWaitingForAnswer && setDataAPI(await API.contentQuery(story.search.all.meta.pagination.page + 1));
      type === "searchVideo" && iAmWaitingForAnswer && setDataAPI(await API.contentQuery(story.search.video.meta.pagination.page + 1));
      type === "searchTag" && iAmWaitingForAnswer && setDataAPI(await API.contentQuery(story.search.tag.meta.pagination.page + 1));
      type === "searchArticle" && iAmWaitingForAnswer && setDataAPI(await API.contentQuery(story.search.article.meta.pagination.page + 1));
    })();
  }, [iAmWaitingForAnswer, type, story, API]);

  useEffect(() => {
    if (type === "all" && !!dataAPI && iAmWaitingForAnswer) dispatch(addContentAllHome(dataAPI));
    else if (type === "allWaitingRoom" && !!dataAPI && iAmWaitingForAnswer) dispatch(addContentAllWaitingRoom(dataAPI));
    else if (type === "video" && !!dataAPI && iAmWaitingForAnswer) dispatch(addContentVideoHome(dataAPI));
    else if (type === "videoWaitingRoom" && !!dataAPI && iAmWaitingForAnswer) dispatch(addContentVideoWaitingRoom(dataAPI));
    else if (type === "article" && !!dataAPI && iAmWaitingForAnswer) dispatch(addContentArticleHome(dataAPI));
    else if (type === "articleWaitingRoom" && !!dataAPI && iAmWaitingForAnswer) dispatch(addContentArticleWaitingRoom(dataAPI));
    else if ((type === "search" || type === "searchVideo" || type === "searchTag" || type === "searchArticle") && !!dataAPI && iAmWaitingForAnswer) dispatch(addSearchQuery(dataAPI));

    if (
      (type === "search" || type === "searchVideo" || type === "searchTag" || type === "searchArticle" || type === "article" || type === "articleWaitingRoom" || type === "video" || type === "videoWaitingRoom" || type === "all") &&
      !!dataAPI &&
      iAmWaitingForAnswer
    )
      setIamWaitingForAnswer(false);
  }, [type, dataAPI, dispatch, iAmWaitingForAnswer]);

  return (
    <Section>
      <Title>
        {type === "all" && "Blog"}
        {type === "allWaitingRoom" && "Poczekalnia"}
        {type === "video" && "Video"}
        {type === "videoWaitingRoom" && "Poczekalnia video"}
        {type === "article" && "Artykuły"}
        {type === "articleWaitingRoom" && "Poczekalnia artykułów"}
        {type === "search" && `Wynik wyszukiwania: ${story.search.query}`}
        {type === "searchVideo" && `Wynik wyszukiwania video: ${story.search.query}`}
        {type === "searchTag" && `Wynik wyszukiwania tag: ${story.search.query}`}
        {type === "searchArticle" && `Wynik wyszukiwania artykułów: ${story.search.query}`}
      </Title>
      <Options></Options>
      {!!data.length && data.map((item: any, i: number) => selectTemplateForContent(item, i))}
      {type === "all" && story.content.all.home.data.slice(data.length).map((item: any, i: number) => selectTemplateForContent(item, i))}
      {type === "allWaitingRoom" && story.content.all.waitingRoom.data.slice(data.length).map((item: any, i: number) => selectTemplateForContent(item, i))}
      {type === "video" && story.content.video.home.data.slice(data.length).map((item: any, i: number) => <ContentShortArticle data={item.attributes} type={item.type} key={i} ref={articeRef} />)}
      {type === "videoWaitingRoom" && story.content.video.waitingRoom.data.slice(data.length).map((item: any, i: number) => <ContentShortArticle data={item.attributes} type={item.type} key={i} ref={articeRef} />)}
      {type === "article" && story.content.article.home.data.slice(data.length).map((item: any, i: number) => <ContentShortArticle data={item.attributes} type={item.type} key={i} ref={articeRef} />)}
      {type === "articleWaitingRoom" && story.content.article.waitingRoom.data.slice(data.length).map((item: any, i: number) => <ContentShortArticle data={item.attributes} type={item.type} key={i} ref={articeRef} />)}
      {type === "search" && story.search.all.data.slice(data.length).map((item: any, i: number) => selectTemplateForContent(item, i))}
      {type === "searchVideo" && story.search.video.data.slice(data.length).map((item: any, i: number) => <ContentShortArticle data={item.attributes} type={item.type} key={i} ref={articeRef} />)}
      {type === "searchTag" && story.search.tag.data.slice(data.length).map((item: any, i: number) => <TagShortArticle data={item.attributes} type={item.type} key={i} ref={articeRef} />)}
      {type === "searchArticle" && story.search.article.data.slice(data.length).map((item: any, i: number) => <ContentShortArticle data={item.attributes} type={item.type} key={i} ref={articeRef} />)}

      {iAmWaitingForAnswer ? (
        <>
          {new Array(10).fill(undefined).map((val, i) => (
            <SquareShortArticle key={i} last={new Array(10).length - 1 === i} />
          ))}
        </>
      ) : !!data.length ? (
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
