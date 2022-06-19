import { NextApiRequest, NextApiResponse } from "next";
import { postCommentAddBackEnd, PostCommentAddType } from "utils/query/posts/comment";

export default async function commentInPost(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "POST") {
    const { postId, comment } = req.body;
    const { authorization } = req.headers;

    const turstPostId: number = typeof postId === "number" ? postId : 0;

    if ((!postId?.length && !turstPostId) || !comment?.length || !comment?.length)
      return res.status(400).json({
        data: null,
        error: {
          status: 400,
          name: "Wrong field",
          message: "Wrong one from fields",
          details: {},
        },
      });

    res.status(200).json(await postCommentAddBackEnd({ postId: turstPostId, comment: comment || "", authToken: authorization }));
  } else
    res.status(404).json({
      data: null,
      error: {
        status: 404,
        name: "NotFound",
        message: "NotFound",
        details: {},
      },
    });
}
