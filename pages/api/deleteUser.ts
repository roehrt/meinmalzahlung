import {prisma} from "@/lib/database";

import type { NextApiRequest, NextApiResponse } from 'next'
import hash from "@/lib/secureHashTM";

type Data = {
  name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {    const { method, query } = req;

    if (method === 'GET' && query.id) {
        await prisma.enrolment.delete({
          where: {
            id: parseInt(query.id as string),
          }
        });
        res.redirect("/uniData");
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
