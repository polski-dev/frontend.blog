import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { dataFromAPI } from "function/function.index";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import initialStateContentResult from "initialState/initialState.search";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { ListShortArticle } from "components/templates/section/component.section.index";

const SearchUser: NextPage = () => {
  const { search } = useRouter().query;
  const [loadData, setLoadData] = useState(true);
  const { updateTagHome, store } = useDispatchTagToStore();
  const [data, setData] = useState(initialStateContentResult);
  const searchAPI = useMemo(() => new dataFromAPI("https://www.polski.dev", "search"), []);

  useEffect(() => {
    if (!store.tag.home.data.length) (async () => updateTagHome(await new dataFromAPI("https://www.polski.dev", "tag").contentQuery(1)))();
  }, [store, updateTagHome]);

  useEffect(() => {
    (async () => {
      !!search?.length && setData(await searchAPI.contentQuery(1, search.toString()));
      setLoadData(false);
    })();
  }, [search, searchAPI]);

  return (
    <>
      <Head>
        <title>Wyniki wyszukiwania uzytniwków dla : {search} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            title="Filtruj"
            data={[
              { slug: `/search/${search}`, title: "Wszystko", quantity: data.all.meta.pagination?.total || 0 },
              { slug: `/search/tag/${search}`, title: "Tagi", quantity: data.tag.meta.pagination?.total || 0 },
              { slug: `/search/video/${search}`, title: "Video", quantity: data.video.meta.pagination?.total || 0 },
              { slug: `/search/article/${search}`, title: "Artykuły", quantity: data.article.meta.pagination?.total || 0 },
              { slug: `/search/user/${search}`, title: "Użytkownicy", quantity: data.user.meta.pagination?.total || 0 },
            ]}
          />
          <Col xs={12} md={9}>
            <ListShortArticle data={data} type="searchUser" loadData={loadData} search={search?.toString()} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchUser;
