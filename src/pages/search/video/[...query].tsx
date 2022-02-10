import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { RootState } from "store/store.index";
import { useContext, useEffect, useMemo } from "react";
import { dataFromAPI } from "function/function.index";
import { MenuContext } from "providers/providers.menu";
import { useSelector, useDispatch } from "react-redux";
import { addTag } from "store/slice/tag/store.slice.tag";
import { addNewSearchQuery } from "store/slice/search/store.slice.search";
import { addContentAllHome } from "store/slice/content/store.slice.content";
import initialState from "store/slice/search/store.slice.search.initialState";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { ListShortArticle } from "components/templates/section/component.section.index";
import { MenuPrimary, MenuTable } from "components/templates/menu/component.menu.index";

const Search: NextPage = ({ tag, content }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [page, search]: any = router.query.query;
  const { setModeMenu } = useContext(MenuContext);
  const story = useSelector((state: RootState) => state);
  const searchAPI = useMemo(() => new dataFromAPI("https://www.polski.dev", "search"), []);

  useEffect(() => {
    if (!story.tag.all.home.data.length && !!tag.data.length) dispatch(addTag({ all: tag }));
    if (!story.content.all.home.data.length && !!content.all.data) dispatch(addContentAllHome(content));
  }, [dispatch, story, content, tag]);

  useEffect(() => {
    const myStorage = window.localStorage;
    if (!story.search.all.data.length && !!search?.length && myStorage.getItem("query") !== search) {
      myStorage.setItem("query", search);
      (async () => {
        const data = await searchAPI.contentQuery(1, search);
        dispatch(addNewSearchQuery({ query: search, ...data }));
      })();
    }
  }, [dispatch, story, search, searchAPI]);

  if (content?.err || tag?.err) return <>Mamy problem z wczytaniem tego widoku spróbuj za 1h</>;

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
              { slug: `/search/1/${story.search.query}`, title: "Wszystko", quantity: story.search.all.meta.pagination.total },
              { slug: `/search/tag/1/${story.search.query}`, title: "Tagi", quantity: story.search.tag.meta.pagination.total },
              { slug: `/search/video/1/${story.search.query}`, title: "Video", quantity: story.search.video.meta.pagination.total },
              { slug: `/search/article/1/${story.search.query}`, title: "Artykuły", quantity: story.search.article.meta.pagination.total },
              { slug: `/search/user/1/${story.search.query}`, title: "Użytkownicy", quantity: story.search.user.meta.pagination.total },
            ]}
          />
          <Col xs={12} md={9} xl={8}>
            <ListShortArticle data={story.search.video.data} type="searchVideo" />
          </Col>
          <MenuTable type="video" />
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
