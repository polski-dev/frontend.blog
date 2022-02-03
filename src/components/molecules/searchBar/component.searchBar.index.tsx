import Link from "next/link";
import { url } from "inspector";
import lodash from "lodash";
import Hash from "assets/icon/hash.svg";
import News from "assets/icon/news.svg";
import Search from "assets/icon/search.svg";
import React, { useState, useRef, useEffect } from "react";
import { Form, Input, Button, SugestBox, Item, IconBox, ContentBox, ContentTitle, ContentTags, ContentTag } from "./component.searchBar.style";

export default function SearchBar() {
  const [focus, setFocus] = useState(false);
  const [queryTag, setQueryTag] = useState("");
  const [sugest, setSugest] = useState([]);

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

    if (queryTag.length)
      pushQuery = setTimeout(
        async () =>
          await fetch(`/api/search/${queryTag}`)
            .then((data) => data.json())
            .then((result) => setSugest(result))
            .catch((err) => {
              setSugest([]);
              console.log({ err: err });
            }),
        300
      );
    else setSugest([]);

    return () => clearTimeout(pushQuery);
  }, [queryTag]);

  return (
    <Form
      style={{
        boxShadow: focus ? "0 0 6px rgba(0, 0, 0, 0.6)" : "0 0 6px rgba(0, 0, 0, 0)",
        height: focus && sugest.length ? "auto" : "3rem",
      }}
    >
      <Input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setQueryTag(e.target.value)}
        style={{
          borderBottomLeftRadius: focus && sugest.length ? "0" : "0.6rem",
          borderBottomRightRadius: focus && sugest.length ? "0" : "0.6rem",
        }}
      />
      <Button type="submit" title="szukaj">
        <Search />
      </Button>
      <SugestBox
        style={{
          opacity: focus && sugest.length ? "1" : "0",
        }}
        onFocus={() => setFocus(true)}
      >
        {sugest.length ? (
          <>
            {sugest.map((item: { title: string; cover: { formats: { thumbnail: { url: string } } }; type: string; tags: { title: string }[] }, i: number) => {
              console.log(item);
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
        ) : null}
      </SugestBox>
    </Form>
  );
}
