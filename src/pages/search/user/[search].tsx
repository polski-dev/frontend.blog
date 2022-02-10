import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { dataFromAPI } from "function/function.index";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import initialStateSearchResult from "initialState/initialState.search";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { ListShortArticle } from "components/templates/section/component.section.index";

const Search: NextPage = ({ tag, content }: any) => {
  const { search } = useRouter().query;
  useDispatchTagToStore().updateTagHome(tag);
  const [data, setData] = useState(initialStateSearchResult);
  const searchAPI = useMemo(() => new dataFromAPI("https://www.polski.dev", "search"), []);

  useEffect(() => {
    (async () => {
      setData(await searchAPI.contentQuery(1, search?.toString()));
    })();
  }, [search, searchAPI]);

  return (
    <>
      <Head>
        <title>Blog | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            title="Filtruj"
            data={[
              { slug: `/search/${search}`, title: "Wszystko", quantity: data.all.meta.pagination.total },
              { slug: `/search/tag/${search}`, title: "Tagi", quantity: data.tag.meta.pagination.total },
              { slug: `/search/video/${search}`, title: "Video", quantity: data.video.meta.pagination.total },
              { slug: `/search/article/${search}`, title: "Artykuły", quantity: data.article.meta.pagination.total },
              { slug: `/search/user/${search}`, title: "Użytkownicy", quantity: data.user.meta.pagination.total },
            ]}
          />
          <Col xs={12} md={9}>
            <ListShortArticle data={data.user.data} type="searchUser" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  // tag
  const tagResponse = await fetch(`https://www.polski.dev/api/tag/1`);
  const tag = await tagResponse.json().catch((err) => ({ err: true }));

  // content
  const contentResponse = await fetch(`https://www.polski.dev/api/content/1`);
  const content = await contentResponse.json().catch((err) => ({ err: true }));

  return {
    props: {
      tag,
      content,
    },
  };
}

export default Search;
