import { NextApiRequest, NextApiResponse } from "next";
import { usersFindBackEnd } from "utils/query/users/find";

export default async function UserFindAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    const { page } = req.query;
    const trustPage: number = typeof page === "string" ? parseInt(page) : 0;
    // i check page number
    if (!trustPage)
      res.status(400).json({
        data: null,
        error: {
          status: 400,
          name: "Wrong field",
          message: "Wrong one from fields",
          details: {},
        },
      });

    res.status(200).json(await usersFindBackEnd({ page: trustPage }));
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
