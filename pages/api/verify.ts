import { prisma } from "@/lib/database";

import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next";
import {getSession} from "next-auth/react"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { retrieve } from "@/lib/store";
type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { method, body } = req;



    if (method === 'POST' || method === "GET") {
        const session = await getServerSession(req, res, authOptions);
        if (!session) {
            res.status(500).redirect("/something went wrong");
        }

        const { jti } = session;
        const hash = retrieve(jti);
        console.log(hash, session);
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
