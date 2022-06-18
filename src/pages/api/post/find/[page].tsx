import { NextApiRequest, NextApiResponse } from "next";
import { postsFindBackEnd } from "utils/query/posts/find";

export default async function countUser(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { page } = req.query;
  const turstPage = typeof page === "string" && !!parseInt(page);

  if (!!page?.length && !turstPage)
    res.status(400).json({
      status: 400,
      name: "Wrong post page",
      message: "Wrong post page you can fix page , page must as number miniumum 1",
      details: {},
    });

  res.status(200).json(turstPage ? await postsFindBackEnd({ page: parseInt(page) }) : await postsFindBackEnd({}));
}
