import { NextApiRequest, NextApiResponse } from "next";
import { searchBackEnd, SearchType } from "utils/query/search";

export default async function searchAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const query: string = req.query.query[0];
  const page: string = req.query.query[1];

  const turstNumberPage: number = typeof page === "string" ? parseInt(page) : 1;
  const turstQuery: string | undefined = typeof query === "string" ? query : undefined;

  if ((!!page && !turstNumberPage) || !turstQuery)
    return res.status(400).json({
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong one fields ,,query'' or ,,page'' ",
        details: {},
      },
    });

  // query
  const result: SearchType = await searchBackEnd({ query: turstQuery, page: turstNumberPage });

  res.status(200).json(result);
}
