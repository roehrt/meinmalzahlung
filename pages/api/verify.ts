import { prisma } from "@/lib/database";
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react"
import { authOptions } from "@/pages/api/auth/[...nextauth]";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req;


  if (!(method === "POST")) {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(500).redirect("/error");
    return;
  }
  const hash = session.user.name;
  const user = await prisma.enrolment.findMany({
    where: {
      token: hash
    }
  });
  if (user.length === 0) {
    res.status(500).redirect("/error?t=uni");
    return;
  }

  res.redirect('/success');
}
