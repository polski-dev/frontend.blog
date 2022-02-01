import lodash from "lodash";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Hash from "assets/icon/hash.svg";
import News from "assets/icon/news.svg";
import Search from "assets/icon/search.svg";
import { Form, Input, Button, SugestBox, Item } from "./component.searchBar.style";

export default function SearchBar() {
  const [focus, setFocus] = useState(false);
  const [queryTag, setQueryTag] = useState("");
  const [sugest, setSugest] = useState({ article: [], tag: [] });

  useEffect(() => {
    let pushQuery = setTimeout(() => {}, 300);

    if (queryTag.length) {
      pushQuery = setTimeout(async () => {
        const res = await fetch(`/api/search/${queryTag}`);
        const data = await res.json();
        setSugest(data);
      }, 300);
    } else {
      setSugest({ article: [], tag: [] });
    }

    return () => {
      clearTimeout(pushQuery);
    };
  }, [queryTag]);

  console.log(sugest);

  return (
    <Form
      style={{
        boxShadow: focus ? "0 0 6px rgba(0, 0, 0, 0.6)" : "0 0 6px rgba(0, 0, 0, 0)",
        height: sugest.article.length || sugest.tag.length ? "auto" : "3rem",
      }}
    >
      <Input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setQueryTag(e.target.value)}
        style={{
          borderBottomLeftRadius: sugest.article.length || sugest.tag.length ? "0" : "0.6rem",
          borderBottomRightRadius: sugest.article.length || sugest.tag.length ? "0" : "0.6rem",
        }}
      />
      <Button type="submit">
        <Search />
      </Button>
      <SugestBox
        style={{
          opacity: sugest.article.length || sugest.tag.length ? "1" : "0",
        }}
      >
        {sugest.article.length ? (
          <>
            <Item>
              <h6>Wpisy</h6>
            </Item>
            {sugest.article.map((art: { title: string }, i: number) => (
              <Item key={i}>
                <Link href={`/w/${lodash.kebabCase(lodash.deburr(art.title.toLowerCase()))}`}>
                  <a>
                    <News />
                    {art.title}
                  </a>
                </Link>
              </Item>
            ))}
          </>
        ) : null}

        {sugest.tag.length ? (
          <>
            <Item>
              <h6>Tagi</h6>
            </Item>
            {sugest.tag.map((tag: { title: string }, i: number) => (
              <Item key={i}>
                <Link href={`/t/${lodash.kebabCase(lodash.deburr(tag.title.toLowerCase()))}`}>
                  <a>
                    <Hash />
                    {tag.title}
                  </a>
                </Link>
              </Item>
            ))}
          </>
        ) : null}
      </SugestBox>
    </Form>
  );
}
