import Link from "next/link";
import { url } from "inspector";
import { useRouter } from "next/router";
import Hash from "assets/icon/hash.svg";
import News from "assets/icon/news.svg";
import { kebabCase, deburr } from "lodash";
import Search from "assets/icon/search.svg";
import { useContext, useMemo } from "react";
import { RootState } from "store/store.index";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useRef, useEffect } from "react";
import { setSlug, dataFromAPI } from "function/function.index";
import { addNewSearchQuery } from "store/slice/search/store.slice.search";
import { Form, Input, Button, SugestBox, Item, IconBox, ContentBox, ContentTitle, ContentTags, ContentTag } from "./component.searchBar.style";

export default function SearchBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);
  const story = useSelector((state: RootState) => state);
  const [searchQuery, setSearchQuery] = useState("");
  const searchAPI = useMemo(() => new dataFromAPI("https://www.polski.dev", "search"), []);

  const search = (event: any) => {
    event.preventDefault();
    router.push(`/search/1/${searchQuery}`);
    setFocus(false);
  };

  useEffect(() => {
    if (!!story.search.query.length) setSearchQuery(story.search.query);
  }, [story]);

  useEffect(() => {
    let pushQuery = setTimeout(() => null, 500);
    clearTimeout(pushQuery);
    pushQuery = setTimeout(async () => {
      const data = await searchAPI.contentQuery(1, searchQuery);
      dispatch(addNewSearchQuery({ query: searchQuery, ...data }));
    }, 500);

    return () => clearTimeout(pushQuery);
  }, [searchAPI, dispatch, searchQuery]);

  return (
    <Form
      onSubmit={(e) => search(e)}
      style={{
        height: focus && story.search.all.data.length ? "auto" : "3rem",
        boxShadow: focus ? "0 0 6px rgba(0, 0, 0, 0.6)" : "0 0 6px rgba(0, 0, 0, 0)",
      }}
    >
      <Input
        name="query"
        autoFocus={focus}
        value={searchQuery}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          borderBottomLeftRadius: focus && story.search.all.data.length ? "0" : "0.6rem",
          borderBottomRightRadius: focus && story.search.all.data.length ? "0" : "0.6rem",
        }}
      />
      <Button type="submit" title="szukaj">
        <Search />
      </Button>
      <SugestBox
        style={{
          opacity: focus && story.search.all.data.length ? "1" : "0",
        }}
        onFocus={() => setFocus(true)}
      >
        {story.search.all.data.length && (
          <>
            {story.search.all.data.slice(0, 5).map((item: any, i: number) => {
              return (
                <Item key={i}>
                  <Link href={`/${new setSlug(item.type).setContent}/${item.type === "user" ? kebabCase(deburr(item.username.toLowerCase())) : kebabCase(deburr(item.attributes.title.toLowerCase()))}`}>
                    <a>
                      {!!item?.attributes?.cover?.data?.attributes?.formats?.thumbnail?.url ? (
                        <IconBox style={{ backgroundImage: `url(${item.attributes.cover.data.attributes.formats.thumbnail.url})` }} />
                      ) : (
                        <IconBox>
                          <Search />
                        </IconBox>
                      )}
                      <ContentBox>
                        <ContentTitle>{item.type === "user" ? item.username : item.attributes.title}</ContentTitle>
                        <ContentTags>
                          {item.tags &&
                            item.tags.map((tag: any, i: number) => {
                              return (
                                <ContentTag key={i}>
                                  <span>#</span>
                                  {tag.title}
                                  <span>,</span>
                                </ContentTag>
                              );
                            })}
                        </ContentTags>
                      </ContentBox>
                    </a>
                  </Link>
                </Item>
              );
            })}
          </>
        )}
      </SugestBox>
    </Form>
  );
}
