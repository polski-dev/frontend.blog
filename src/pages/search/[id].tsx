import Head from "next/head";
import { useContext, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { SearchContext } from "providers/providers.search";
import { MenuPrimary, MenuTable } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Search: NextPage = ({ tags, aticles }: any) => {
  const router = useRouter();
  const { id }: any = router.query;
  const { searchQuery, setSearchQuery, searchContent, setSearchContent } = useContext(SearchContext);

  // useEffect(() => {
  //   if (id !== searchQuery && id?.length) {
  //     async () =>
  //       await fetch(`/api/search/${id}`)
  //         .then((data) => data.json())
  //         .then((result) => {
  //           console.log(id);
  //           setSearchContent(result);
  //           setSearchQuery(id);
  //         })
  //         .catch((err) => {
  //           console.log("err");
  //           setSearchQuery(id);
  //           setSearchContent([]);
  //           console.log({ err: err });
  //         });
  //   }
  // }, [searchQuery, router, setSearchQuery, setSearchContent, id]);

  return (
    <>
      <Head>
        <title>{router.query.id} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
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
