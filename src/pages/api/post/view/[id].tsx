import { NextApiRequest, NextApiResponse } from "next";
import { viewAddInPostBackEnd } from "utils/query/posts/view";

export default async function viewInPost(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "PUT") {
    const { id } = req.query;
    const turstPostId: number = typeof id === "string" ? parseInt(id) : 0;

    if (!turstPostId)
      return res.status(400).json({
        data: null,
        error: {
          status: 400,
          name: "Wrong field",
          message: "Wrong one from fields",
          details: {},
        },
      });

    return res.status(200).json(await viewAddInPostBackEnd({ postId: turstPostId }));
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
