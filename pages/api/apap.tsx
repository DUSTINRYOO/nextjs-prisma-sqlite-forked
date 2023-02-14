import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../lib/server/withSession";
import client from "../../lib/server/client";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const asas = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  res.json({ ok: true, asas });
}

export default withApiSession(handler);
