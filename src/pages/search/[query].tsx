import Head from "next/head";
import { useContext, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { SearchContext } from "providers/providers.search";
import { MenuPrimary, MenuTable } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Search: NextPage = ({ tags, aticles }: any) => {
  const router = useRouter();
  const { query }: any = router.query;
  const { searchQuery, setSearchQuery, searchContent, setSearchContent } = useContext(SearchContext);
  console.log(tags);
  useEffect(() => {
    if (!searchQuery.length && !!query.length) {
      const sendQuery = async () =>
        await fetch(`/api/search/${query}`)
          .then((data) => data.json())
          .then((result) => {
            setSearchQuery(query);
            setSearchContent(result);
          })
          .catch((err) => {
            setSearchQuery(query);
            setSearchContent([]);
            console.log({ err: err });
          });

      sendQuery();
    }
  }, [searchQuery, router, setSearchQuery, setSearchContent, query]);

  return (
    <>
      <Head>
        <title>{router.query.id} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary tags={tags.data} />
          <Col xs={12} md={9} xl={8}>
            <p>ok</p>
          </Col>
          <MenuTable data={aticles.data} title="blog" type="article" />
        </Row>
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  // top tags
  const tagsResponse = await fetch(`https://www.polski.dev/api/tags/1`);
  const tags = await tagsResponse.json().catch((err) => ({ err: true }));

  // aticle new
  const aticlesResponse = await fetch(`https://www.polski.dev/api/articles/1`);
  const aticles = await aticlesResponse.json().catch((err) => ({ err: true }));

  return {
    props: {
      tags,
      aticles,
    },
  };
}

export default Search;
