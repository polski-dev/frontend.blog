import Link from "next/link";
import { useMemo } from "react";
import { url } from "inspector";
import { useRouter } from "next/router";
import Hash from "assets/icon/hash.svg";
import News from "assets/icon/news.svg";
import { kebabCase, deburr } from "lodash";
import Search from "assets/icon/search.svg";
import { useState, useRef, useEffect } from "react";
import { SliceSearchType } from "types/types.searchState";
import { setSlug, dataFromAPI } from "function/function.index";
import initialStateSearch from "initialState/initialState.search";
import { Form, Input, Button, SugestBox, Item, IconBox, ContentBox, ContentTitle, ContentTags, ContentTag } from "./component.searchBar.style";

export default function SearchBar() {
  const router = useRouter();
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(initialStateSearch);
  const searchAPI = useMemo(() => new dataFromAPI("https://www.polski.dev", "search"), []);

  const search = (event: any) => {
    event.preventDefault();
    router.push(`/search/${searchQuery}`);
    setFocus(false);
  };

  useEffect(() => {
    let pushQuery = setTimeout(() => null, 500);

    clearTimeout(pushQuery);
    pushQuery = setTimeout(async () => setSearchResult(await searchAPI.contentQuery(1, searchQuery)), 500);

    return () => clearTimeout(pushQuery);
  }, [searchAPI, searchQuery]);

  return (
    <Form onSubmit={(e) => search(e)} style={{ height: focus && searchResult.all.data.length ? "auto" : "3rem", boxShadow: focus ? "0 0 6px rgba(0, 0, 0, 0.6)" : "0 0 6px rgba(0, 0, 0, 0)" }}>
      <Input
        name="query"
        autoFocus={focus}
        value={searchQuery}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ borderBottomLeftRadius: focus && searchResult.all.data.length ? "0" : "0.6rem", borderBottomRightRadius: focus && searchResult.all.data.length ? "0" : "0.6rem" }}
      />
      <Button type="submit" title="szukaj">
        <Search />
      </Button>
      <SugestBox style={{ opacity: focus && searchResult.all.data.length ? "1" : "0" }} onFocus={() => setFocus(true)}>
        {searchResult.all.data.slice(0, 5).map((item: any, i: number) => {
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
      </SugestBox>
    </Form>
  );
}
