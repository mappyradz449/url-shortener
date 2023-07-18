// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "@/lib/db";
import Link from "@/models/Link";

export default async function handler(req, res) {
  await connectMongo();

  if (req.method === "POST") {
    // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

    await connectMongo();
    const testLink = await Link.create(req.body);
    res.status(200).json({ testLink });
  } else {
    //fetch all links
    //return as json
    res.status(200).json({});
  }
}
