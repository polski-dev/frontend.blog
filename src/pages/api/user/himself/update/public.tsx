import { userHimselfDataEditPublicGetPreview, userHimselfDataEditPublicInitialState } from "utils/database/database.graphQL.index";

export default async function userHimselfData(req: any, res: any): Promise<void> {
  const { username, about, website, youtube, instagram, tiktok, github, city, country } = req.body;
  if (!req.headers.authorization) res.status(200).json(userHimselfDataEditPublicInitialState);
  else if (!username && !about && !website && !youtube && !instagram && !tiktok && !github && !city && !country) res.status(200).json(userHimselfDataEditPublicInitialState);

  let data: { username?: string; about?: string; website?: string; youtube?: string; instagram?: string; tiktok?: string; github?: string; city?: string; country?: string } = {};

  if (!!username) data.username = username;
  if (!!about) data.about = about;
  if (!!website) data.website = website;
  if (!!youtube) data.youtube = youtube;
  if (!!instagram) data.instagram = instagram;
  if (!!tiktok) data.tiktok = tiktok;
  if (!!github) data.github = github;
  if (!!city) data.city = city;
  if (!!country) data.country = country;

  res.status(200).json(await userHimselfDataEditPublicGetPreview(req.headers.authorization, data));
}
