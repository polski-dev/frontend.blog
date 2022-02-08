import Link from "next/link";
import { url } from "inspector";
import lodash from "lodash";
import { useContext } from "react";
import { useRouter } from "next/router";
import Hash from "assets/icon/hash.svg";
import News from "assets/icon/news.svg";
import Search from "assets/icon/search.svg";
import { SearchContext, initialContextSearch } from "providers/providers.search";
import React, { useState, useRef, useEffect } from "react";
import { Form, Input, Button, SugestBox, Item, IconBox, ContentBox, ContentTitle, ContentTags, ContentTag } from "./component.searchBar.style";

export default function SearchBar() {
  const router = useRouter();
  const [focus, setFocus] = useState(false);
  const { searchQuery, setSearchQuery, searchContent, setSearchContent } = useContext(SearchContext);

  const search = (event: any) => {
    event.preventDefault();
    router.push(`/search${searchQuery}`);
    setFocus(false);
  };

  const typeLink = (type: string) => {
    switch (type) {
      case "article":
        return "/a/";
      case "tag":
        return "/t/";
      case "video":
        return "/v/";
    }
  };

  useEffect(() => {
    let pushQuery = setTimeout(() => null, 300);

    if (searchQuery.length)
      pushQuery = setTimeout(
        async () =>
          await fetch(`/api/search/1/${searchQuery}`)
            .then((data) => data.json())
            .then((result) => {
              console.log(result);
              setSearchContent(result);
            })
            .catch((err) => {
              setSearchContent([]);
              console.log({ err: err });
            }),
        300
      );
    else setSearchContent(initialContextSearch);

    return () => clearTimeout(pushQuery);
  }, [setSearchContent, searchQuery]);

  return (
    <Form
      onSubmit={search}
      style={{
        boxShadow: focus ? "0 0 6px rgba(0, 0, 0, 0.6)" : "0 0 6px rgba(0, 0, 0, 0)",
        height: focus && searchContent.all.data.length ? "auto" : "3rem",
      }}
    >
      <Input
        name="query"
        value={searchQuery}
        autoFocus={focus}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          borderBottomLeftRadius: focus && searchContent.all.data.length ? "0" : "0.6rem",
          borderBottomRightRadius: focus && searchContent.all.data.length ? "0" : "0.6rem",
        }}
      />
      <Button type="submit" title="szukaj">
        <Search />
      </Button>
      <SugestBox
        style={{
          opacity: focus && searchContent.all.data.length ? "1" : "0",
        }}
        onFocus={() => setFocus(true)}
      >
        {searchContent.all.data.length && (
          <>
            {searchContent.all.data.map((item: { title: string; cover: { formats: { thumbnail: { url: string } } }; type: string; tags: { title: string }[] }, i: number) => {
              return (
                <Item key={i}>
                  <Link href={`${typeLink(item.type)}${lodash.kebabCase(lodash.deburr(item.title.toLowerCase()))}`}>
                    <a>
                      {!!item.cover?.formats?.thumbnail.url ? (
                        <IconBox style={{ backgroundImage: `url(${item.cover.formats.thumbnail.url})` }} />
                      ) : (
                        <IconBox>
                          <Search />
                        </IconBox>
                      )}
                      <ContentBox>
                        <ContentTitle>{item.title}</ContentTitle>
                        <ContentTags>
                          {item.tags &&
                            item.tags.map((tag, i: number) => {
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
