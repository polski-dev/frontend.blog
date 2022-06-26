import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MenuPrimary } from "components/templates/menu/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";
// import { SectionArticleShortList } from "components/templates/section/index";
import { searchShortContentGetPreview, searchShortContentInitialState, SearchShortContentType } from "utils/database/database.restAPI.index";

const Search: NextPage = () => {
  const { query } = useRouter().query;

  const [loadData, setLoadData] = useState(true);
  const [content, setContent] = useState(searchShortContentInitialState);

  useEffect(() => {
    (async () => {
      if (query?.length) {
        const data: SearchShortContentType = await searchShortContentGetPreview(0, query.toString());
        setContent(data);
        setLoadData(false);
      }
    })();
  }, [query]);

  return (
    <>
      <Head>
        <title>Wyniki wyszukiwania dla : {query} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          {/* <MenuPrimary
            data={{
              title: "Filtruj",
              links: [
                { slug: `${slug}`, title: "Wszystko", count: stats?.data?.publishedPost || 0 },
                { slug: `${slug}#article`, title: "Artykuły", count: stats?.data?.publishedArticle || 0 },
                { slug: `${slug}#video`, title: "Video", count: stats?.data?.publishedVideo || 0 },
              ],
              cover: { url: tag?.data?.attributes?.cover?.data?.attributes?.url || "", title: tag?.data?.attributes.title },
            }}
          /> */}
          <Col xs={12} md={9}>
            {/* <SectionArticleShortList data={content} type="search" loadData={loadData} search={query?.toString()} /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Search;
