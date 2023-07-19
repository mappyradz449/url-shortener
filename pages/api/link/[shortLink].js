import { getOriginalFromShortLink } from "@/lib/linkService";

export default async function handler(req, res) {
  const { shortLink } = req.query;

  const originalLink = await getOriginalFromShortLink(shortLink);
  //console.log(link);
  res.status(200).json({ originalLink });
}
