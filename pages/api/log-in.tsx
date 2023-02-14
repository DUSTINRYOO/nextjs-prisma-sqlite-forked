import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/server/client";
import { withApiSession } from "../../lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const exist = await client.user.findUnique({
    where: {
      email: req.body.email,
    },
  });
  req.session.user = {
    id: exist!.id,
  };
  await req.session.save();
  res.status(200).end();
}

export default withApiSession(handler);
