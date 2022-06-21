import { NextApiRequest, NextApiResponse } from "next";
import { userFindOneBackEnd } from "utils/query/user/find";

export default async function UserFind(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    const { id } = req.query;
    const trustUserId: number = typeof id === "string" ? parseInt(id) : 0;
    // i check page number
    if (!trustUserId)
      res.status(400).json({
        data: null,
        error: {
          status: 400,
          name: "Wrong field",
          message: "Wrong one from fields",
          details: {},
        },
      });

    res.status(200).json(await userFindOneBackEnd({ id: trustUserId }));
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
