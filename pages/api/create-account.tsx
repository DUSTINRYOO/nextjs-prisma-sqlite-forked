import { NextApiRequest, NextApiResponse } from "next";

import client from "../../lib/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.body);
  console.log(res);
  /*  {
        const user = await client.user.create({
          data: {
            email: req.body,
            name: req.body,
          },
        });
        console.log(user); */
}

export default handler;
