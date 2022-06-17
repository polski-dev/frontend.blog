import Head from "next/head";
import { NextPage } from "next";
import { kebabCase, deburr } from "lodash";
import { MenuGrade } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SquareShortArticle } from "components/atoms/animation/index";
import { SectionVideoFull } from "components/templates/section/component.section.index";
import { videoWithOnlyTitleGetPreview, VideoWithOnlyTitleType, videoFullByIdGetPreview, VideoFullByIdType, videoGetListComments, VideoGetListCommentsType } from "utils/database/database.graphQL.index";

const VideoPage: NextPage<any> = ({ video, slug, comments }: { video: VideoFullByIdType; slug: string; comments: VideoGetListCommentsType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      {!!video ? (
        <Container>
          <Row>
            <MenuGrade slug={slug} type="video" comments={comments?.meta?.pagination?.total || 0} views={video?.data?.video?.data?.attributes.views} id={parseInt(video?.data?.video?.data?.id)} gradeStats={video?.data?.video?.data?.attributes?.grades} />
            <Col xs={12} md={9}>
              <SectionVideoFull data={{ video, comments }} type="video" />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col xs={12} md={3}></Col>
            <Col xs={12} md={9} style={{ margin: "3rem 0" }}>
              <h5>Video</h5>
              <SquareShortArticle style={{ marginTop: "0.75rem" }} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export async function getStaticProps({ params }: any): Promise<any> {
  // article full
  const video: VideoFullByIdType = await videoFullByIdGetPreview(parseInt(params.video[0]));
  const comments: VideoGetListCommentsType = await videoGetListComments(parseInt(params.video[0]), 1);

  if (!video) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      video,
      comments,
      slug: `/${params.video[0]}/${params.video[1]}`,
    },
  };
}

export async function getStaticPaths(): Promise<any> {
  const countPage: VideoWithOnlyTitleType = await videoWithOnlyTitleGetPreview(0);

  const allVideo: any[] = await Promise.all(
    new Array(countPage?.data?.video?.meta?.pagination?.pageCount).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const videoWithOnlyTitle: VideoWithOnlyTitleType = await videoWithOnlyTitleGetPreview(i);
      return videoWithOnlyTitle?.data?.video?.data;
    })
  );

  return {
    paths: [].concat.apply([], allVideo).map((item: any) => `/v/${item.id}/${kebabCase(deburr(item.attributes.title.toLowerCase()))}`),
    fallback: true,
  };
}

export default VideoPage;
