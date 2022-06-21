import { NextApiRequest, NextApiResponse } from "next";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { postCommentAddBackEnd, postCommentsListBackEnd } from "utils/query/posts/comment";

export default async function postCommentInPost(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "POST") {
    const { postId, comment } = req.body;
    const { authorization } = req.headers;

    const turstPostId: number = typeof postId === "number" ? postId : 0;

    if ((!postId?.length && !turstPostId) || !comment?.length || !comment?.length) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" }));

    res.status(200).json(await postCommentAddBackEnd({ postId: turstPostId, comment: comment || "", authToken: authorization }));
  } else if (req.method === "GET") {
    const { postId, page } = req.query;

    const turstPostId: number = typeof postId === "string" ? parseInt(postId) : 0;
    const turstPageId: number = typeof page === "string" ? parseInt(page) : 0;

    if (!turstPostId) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" }));

    return res.status(200).json(await postCommentsListBackEnd({ postId: turstPostId, page: turstPageId }));
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
