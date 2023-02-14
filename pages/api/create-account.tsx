import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/server/client";
import { withApiSession } from "../../lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  await client.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
    },
  });

  res.status(200).end();
}

export default withApiSession(handler);
