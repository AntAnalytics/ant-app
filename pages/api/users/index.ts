import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const users = await prisma?.user.findMany();
      return res.status(200).json({ success: true, users });
    }
  } catch (error) {
    console.log({ error });
    return res
      .status(500)
      .json({ success: false, message: 'Something went wrong.' });
  }
}
