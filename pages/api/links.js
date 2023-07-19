// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "@/lib/db";
import Link from "@/models/Link";

export default async function handler(req, res) {
  // await connectMongo();

  if (req.method === "POST") {
    // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

    await connectMongo();
    const postTestLink = await Link.create(req.body);
    res.status(200).json({ postTestLink });
  } else if (req.method === "GET") {
    //console.log("Connecting to moongo");
    await connectMongo();
    //console.log("Connected to moongo");
    //console.log("Fetching to moongo");
    //fetch all links
    const links = await Link.find();
    //console.log("Fetched to moongo");

    // return {
    //   props: {
    //     getTestLink: JSON.parse(JSON.stringify(getTestLink)),
    //   },
    // };

    //return as json
    res.status(200).json({ links });
  }
}
