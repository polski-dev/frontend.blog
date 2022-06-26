import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MenuPrimary } from "components/templates/menu/index";
import { searchFrontEnd, searchState } from "utils/query/search";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { SectionSearchResult } from "components/templates/section/index";
import { ComponentAnimationShortArticle } from "components/atoms/animation";

const Search: NextPage = () => {
  const router = useRouter();
  const [content, setSontent] = useState(searchState);
  const [iAmWaitingForAnswer, setIAmWaitingForAnswer] = useState(true);

  console.log(router?.query?.query);

  useEffect(() => {
    (async () => {
      typeof router?.query?.search === "string" && setSontent(await searchFrontEnd({ query: router?.query?.search, page: 1 }));
      setIAmWaitingForAnswer(false);
    })();
  }, [router]);

  console.log(router.asPath.split(`/search/${router?.query?.search}` + "#")[1]);
  return (
    <>
      <Head>
        <title>Wyniki wyszukiwania dla : | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            data={{
              title: "Filtruj",
              links: [
                { slug: `/search/${router?.query?.search}`, title: "Posty", count: content.data?.posts?.meta?.pagination?.total || 0 },
                { slug: `/search/${router?.query?.search}#tags`, title: "Tagi", count: content.data?.tags?.meta?.pagination?.total || 0 },
                { slug: `/search/${router?.query?.search}#users`, title: "Użytkownicy", count: content.data?.users?.meta?.pagination?.total || 0 },
              ],
            }}
          />
          <Col xs={12} md={9} style={{ paddingTop: iAmWaitingForAnswer ? "3rem" : "0rem" }}>
            {iAmWaitingForAnswer ? (
              <>
                <h5 style={{ paddingBottom: "1.5rem" }}>Wyniki wyszukiwania dla: {router?.query?.search}</h5>
                {new Array(10).fill(undefined).map(
                  (_: undefined, index: number): JSX.Element => (
                    <ComponentAnimationShortArticle key={index} />
                  )
                )}
              </>
            ) : (
              <>
                {router.asPath.split(`/search/${router?.query?.search}` + "#")[1] === undefined && (
                  <SectionSearchResult data={{ typ: ContentEnum.searchPost, content, query: typeof router?.query?.search === "string" ? router?.query?.search : "", title: `Wyniki wyszukiwania dla: ${router?.query?.search}` }} />
                )}
                {router.asPath.split(`/search/${router?.query?.search}` + "#")[1] === "tags" && (
                  <SectionSearchResult data={{ typ: ContentEnum.searchTag, content, query: typeof router?.query?.search === "string" ? router?.query?.search : "", title: `Wyniki wyszukiwania dla: ${router?.query?.search}` }} />
                )}
                {router.asPath.split(`/search/${router?.query?.search}` + "#")[1] === "users" && (
                  <SectionSearchResult data={{ typ: ContentEnum.searchUser, content, query: typeof router?.query?.search === "string" ? router?.query?.search : "", title: `Wyniki wyszukiwania dla: ${router?.query?.search}` }} />
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Search;
