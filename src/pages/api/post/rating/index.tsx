import { NextApiRequest, NextApiResponse } from "next";
import { RatingEnum } from "types/database/types.database.rating";
import { raitingUserInPostFindFoundBackEnd, raitingAddInPostBackEnd, raitingUserDeleteInPostBackEnd } from "utils/query/posts/rating";

export default async function raitingInPost(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    const { postId, userId } = req.query;

    const turstPostId: number = typeof postId === "string" ? parseInt(postId) : 0;
    const turstUserId: number = typeof userId === "string" ? parseInt(userId) : 0;

    if (!turstPostId || !turstUserId)
      return res.status(400).json({
        data: null,
        error: {
          status: 400,
          name: "Wrong field",
          message: "Wrong one from fields",
          details: {},
        },
      });

    console.log(postId, userId);

    return res.status(200).json(await raitingUserInPostFindFoundBackEnd({ postId: turstPostId, userId: turstUserId }));
  } else if (req.method === "PUT") {
    const { postId, voice } = req.body;
    const { authorization } = req.headers;

    const turstPostId: number = typeof postId === "number" ? postId : 0;
    const turstVoice: boolean = RatingEnum.best === voice || RatingEnum.wow === voice || RatingEnum.wrr === voice;

    if (!turstPostId || !turstVoice)
      return res.status(400).json({
        data: null,
        error: {
          status: 400,
          name: "Wrong field",
          message: "Wrong fields someone from postId or voice",
          details: {},
        },
      });
    else if (!authorization)
      return res.status(400).json({
        data: null,
        error: {
          status: 400,
          name: "You don't have access",
          message: "You must log",
          details: {},
        },
      });

    return res.status(200).json(await raitingAddInPostBackEnd({ postId: turstPostId, authToken: authorization, voice: RatingEnum.best === voice ? RatingEnum.best : RatingEnum.wow === voice ? RatingEnum.wow : RatingEnum.wrr }));
  } else if (req.method === "DELETE") {
    const { authorization, postid } = req.headers;

    const turstPostId: number = typeof postid === "string" ? parseInt(postid) : 0;

    if (!turstPostId)
      return res.status(400).json({
        data: null,
        error: {
          status: 400,
          name: "Wrong field",
          message: "Wrong fields someone from postId",
          details: {},
        },
      });
    else if (!authorization)
      return res.status(400).json({
        data: null,
        error: {
          status: 400,
          name: "You don't have access",
          message: "You must log",
          details: {},
        },
      });

    return res.status(200).json(await raitingUserDeleteInPostBackEnd({ postId: turstPostId, authToken: authorization }));
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
