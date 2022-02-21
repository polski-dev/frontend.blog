import Link from "next/link";
import { useRouter } from "next/router";
import { kebabCase, deburr } from "lodash";
import Search from "assets/icon/search.svg";
import { useState, useEffect } from "react";
import { setSlug } from "function/function.index";
import { searchSugestGetPreview, contentSugestInitialState } from "database/database.restAPI.index";
import { Form, Input, Button, SugestBox, Item, IconBox, ContentBox, ContentTitle, ContentTags, ContentTag } from "./component.searchBar.style";

export default function SearchBar() {
  const router = useRouter();
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(contentSugestInitialState);

  const search = (event: any) => {
    event.preventDefault();
    router.push(`/search/${searchQuery}`);
    setFocus(false);
  };

  useEffect(() => {
    let newSearchQueryResult = setTimeout(() => null, 500);
    clearTimeout(newSearchQueryResult);
    newSearchQueryResult = !!searchQuery.length
      ? setTimeout(async () => setSearchResult(await searchSugestGetPreview(searchQuery)), 500)
      : setTimeout(() => setSearchResult(contentSugestInitialState), 500);
    return () => clearTimeout(newSearchQueryResult);
  }, [searchQuery]);

  return (
    <Form
      onSubmit={(e) => search(e)}
      style={{ height: focus && searchResult.all?.data.length ? "auto" : "3rem", boxShadow: focus ? "0 0 6px rgba(0, 0, 0, 0.6)" : "0 0 6px rgba(0, 0, 0, 0)" }}
    >
      <Input
        name="query"
        autoFocus={focus}
        value={searchQuery}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          borderBottomLeftRadius: focus && searchResult.all?.data.length ? "0" : "0.6rem",
          borderBottomRightRadius: focus && searchResult.all?.data.length ? "0" : "0.6rem",
        }}
      />
      <Button type="submit" title="szukaj">
        <Search />
      </Button>
      <SugestBox style={{ opacity: focus && searchResult.all?.data.length ? "1" : "0" }} onFocus={() => setFocus(true)}>
        {searchResult.all?.data.slice(0, 5).map((item: any, i: number) => (
          <Item key={i}>
            <Link
              href={`/${new setSlug(item.type).setContent}/${item.id}/${
                item.type === "user" ? kebabCase(deburr(item.attributes.username.toLowerCase())) : kebabCase(deburr(item.attributes.title.toLowerCase()))
              }`}
            >
              <a>
                {item.type === "user" && item?.attributes?.avatar?.data?.attributes?.formats?.thumbnail?.url ? (
                  <IconBox style={{ backgroundImage: `url(${item.attributes.avatar.data.attributes.formats.thumbnail.url})` }} />
                ) : item?.attributes?.cover?.data?.attributes?.formats?.thumbnail?.url ? (
                  <IconBox style={{ backgroundImage: `url(${item.attributes.cover.data.attributes.formats.thumbnail.url})` }} />
                ) : (
                  <IconBox>
                    <Search />
                  </IconBox>
                )}
                <ContentBox>
                  <ContentTitle>{item.type === "user" ? item.attributes.username : item.attributes.title}</ContentTitle>
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
        ))}
      </SugestBox>
    </Form>
  );
}
