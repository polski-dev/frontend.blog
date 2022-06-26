import Link from "next/link";
import { useRouter } from "next/router";
import Search from "assets/icon/search.svg";
import { useState, useEffect, FormEvent } from "react";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { searchFrontEnd, searchState } from "utils/query/search";
import { Form, Input, Button, SugestBox, Item, IconBox, ContentBox, ContentTitle, ContentTags, ContentTag, Title } from "./component.searchBar.style";
import { PostType } from "types/database/types.database.post";
import { TagType } from "types/database/types.database.tag";
import { SkilkType, UserType } from "types/database/types.database.user";

export default function SearchBar() {
  const router = useRouter();
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(searchState);

  const search: (event: FormEvent<HTMLFormElement>) => void = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFocus(false);
    router.push(`/search/${searchQuery}`);
  };

  useEffect(() => {
    (async () => (!!searchQuery.length ? setSearchResult(await searchFrontEnd({ query: searchQuery, page: 1 })) : setSearchResult(searchState)))();
  }, [searchQuery]);

  return (
    <Form onSubmit={(e: FormEvent<HTMLFormElement>): void => search(e)} style={{ height: focus && searchResult.data ? "auto" : "3rem", boxShadow: focus ? "0 0 6px rgba(0, 0, 0, 0.6)" : "0 0 6px rgba(0, 0, 0, 0)" }}>
      <Input
        name="query"
        value={searchQuery}
        onFocus={() =>
          setTimeout(() => {
            setFocus(true);
          }, 150)
        }
        onBlur={() =>
          setTimeout(() => {
            setFocus(false);
          }, 150)
        }
        onChange={(e: React.FormEvent<HTMLInputElement>) => setSearchQuery(e.currentTarget.value)}
        sugestBox={focus && (!!searchResult.data?.posts?.data?.length || !!searchResult.data?.tags?.data?.length || !!searchResult.data?.users?.data?.length) ? true : false}
      />
      <Button type="submit" title="szukaj">
        <Search />
      </Button>

      <SugestBox style={{ opacity: "1" }}>
        {!!searchResult.data?.posts?.data?.length && (
          <>
            <Item>
              <Title>posty</Title>
            </Item>
            {searchResult.data?.posts?.data.slice(0, 3).map((post: PostType, index: number): JSX.Element => {
              return (
                <Item key={index}>
                  <Link href={`/post/${post.id}/${slugFromTitle(post?.attributes?.title || "")}`}>
                    <a>
                      {post?.attributes.cover?.data?.attributes?.formats?.thumbnail?.url ? (
                        <IconBox style={{ backgroundImage: `url(${post?.attributes.cover?.data?.attributes?.formats?.thumbnail?.url})` }} />
                      ) : (
                        <IconBox>
                          <Search />
                        </IconBox>
                      )}
                      <ContentBox>
                        <ContentTitle>{post?.attributes?.title || ""}</ContentTitle>
                        <ContentTags>
                          {post?.attributes?.tags?.data?.length &&
                            post.attributes.tags?.data.map((tag: TagType, index: number): JSX.Element => {
                              return (
                                <ContentTag key={index}>
                                  <span>#</span>
                                  {tag.attributes.title}
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

        {!!searchResult?.data?.tags?.data?.length && (
          <>
            <Item>
              <Title>tagi</Title>
            </Item>
            {searchResult?.data?.tags?.data.slice(0, 3).map((tag: TagType, index: number): JSX.Element => {
              return (
                <Item key={index}>
                  <Link href={`/tag/${tag.id}/${slugFromTitle(tag?.attributes?.title || "")}`}>
                    <a>
                      {tag?.attributes?.cover?.data?.attributes?.formats?.thumbnail?.url ? (
                        <IconBox style={{ backgroundImage: `url(${tag?.attributes?.cover?.data?.attributes?.formats?.thumbnail?.url})` }} />
                      ) : (
                        <IconBox>
                          <Search />
                        </IconBox>
                      )}
                      <ContentBox>
                        <ContentTitle>{tag?.attributes?.title || ""}</ContentTitle>
                      </ContentBox>
                    </a>
                  </Link>
                </Item>
              );
            })}
          </>
        )}

        {!!searchResult.data?.users?.data?.length && (
          <>
            <Item>
              <Title>użytkonicy</Title>
            </Item>
            {searchResult.data?.users?.data.slice(0, 3).map((user: UserType, index: number): JSX.Element => {
              return (
                <Item key={index}>
                  <Link href={`/user/${user.id}/${slugFromTitle(user?.attributes?.username || "")}`}>
                    <a>
                      {user?.attributes.avatar?.data?.attributes?.formats?.thumbnail?.url ? (
                        <IconBox style={{ backgroundImage: `url(${user?.attributes.avatar?.data?.attributes?.formats?.thumbnail?.url})` }} />
                      ) : (
                        <IconBox>
                          <Search />
                        </IconBox>
                      )}
                      <ContentBox>
                        <ContentTitle>{user?.attributes?.username || ""}</ContentTitle>
                        <ContentTags>
                          {!!user?.attributes?.skilks?.length &&
                            user?.attributes?.skilks?.map((skilk: SkilkType, index: number): JSX.Element => {
                              return (
                                <ContentTag key={index}>
                                  <span>#</span>
                                  {skilk?.title || ""}
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
