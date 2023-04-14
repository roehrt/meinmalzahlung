import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/lib/database';
import secureHash from '@/lib/secureHashTM';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { method, body } = req;

  if (method === 'POST' || method === 'GET') {
    await prisma.enrolment.create({
      data: {
        token: secureHash(body),
      },
    });
    res.redirect('/uniData');
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
