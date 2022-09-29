import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getSpotifyTopArtist } from "../../functions";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({
    req,
  });
  if (session && session.user.accessToken && req.query?.range === "long") {
    const response = await getSpotifyTopArtist(session?.user?.accessToken, "long_term");
    return res.status(200).send(response);
  }
  if (session && session.user.accessToken && req.query?.range === "short") {
    const response = await getSpotifyTopArtist(session?.user?.accessToken, "short_term");
    return res.status(200).send(response);
  }
  if (session && session.user.accessToken) {
    const response = await getSpotifyTopArtist(session?.user?.accessToken);
    return res.status(200).send(response);
  }
};

export default handler;
