import { prisma } from "@/lib/database";
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react"
import { authOptions } from "@/pages/api/auth/[...nextauth]";

type Record = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
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
  const users = await prisma.enrolment.findMany({
    where: {
      token: hash
    }
  });

  // User not enrolled in any university
  if (users.length === 0) {
    res.redirect("/error?t=uni");
    return;
  }

  // User already sent his application
  const user = users[0];
  if(user.requested) {
    res.redirect("/error?t=rep");
    return;
  }

  // User did not submit IBAN
  if(!body.iban) {
    res.redirect("/error");
  }

  // Record the application
  await prisma.enrolment.update({
    where: {
      id: user.id
    },
    data: {
      requested: true,
      iban: body.iban,
      name: body.holder || "",
    }
  });

  res.redirect('/success');
}
