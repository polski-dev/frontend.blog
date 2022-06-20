import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MenuPrimary } from "components/templates/menu/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";
import { SectionArticleShortList } from "components/templates/section/index";
import { SearchShortContentType, searchShortContentGetPreview, searchShortContentInitialState } from "utils/database/database.restAPI.index";

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
          <MenuPrimary
            title="Filtruj"
            data={[
              { slug: `/s/${query}`, title: "Wszystko", quantity: content.data.all?.meta.pagination.total || 0 },
              { slug: `/s/a/${query}`, title: "Artykuły", quantity: content.data.article.meta.pagination.total || 0 },
              { slug: `/s/v/${query}`, title: "Video", quantity: content.data.video.meta.pagination.total || 0 },
              { slug: `/s/t/${query}`, title: "Tagi", quantity: content.data.tag.meta.pagination.total || 0 },
              { slug: `/s/u/${query}`, title: "Użytkownicy", quantity: content.data.user.meta.pagination?.total || 0 },
            ]}
          />
          <Col xs={12} md={9}>
            <SectionArticleShortList data={content} type="searchArticleShort" loadData={loadData} search={query?.toString()} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Search;
