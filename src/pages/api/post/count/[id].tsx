import { NextApiRequest, NextApiResponse } from "next";
import { postsCountBackEnd } from "utils/requests/posts/count/index";

export default async function countUser(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { id } = req.query;
  const turstId = typeof id === "string" && !!parseInt(id);

  if (!!id?.length && !turstId)
    res.status(400).json({
      status: 400,
      name: "Wrong post id",
      message: "Wrong post id you can fix id , id must as number miniumum 1",
      details: {},
    });

  res.status(200).json(turstId ? await postsCountBackEnd(parseInt(id)) : await postsCountBackEnd());
}
