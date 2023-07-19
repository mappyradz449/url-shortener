import Link from "@/models/Link";

export const getOriginalFromShortLink = async (shortLink) => {
  const link = await Link.findOne({ shortLink: shortLink }).exec();

  return link.originalLink;
};
