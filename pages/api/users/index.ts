import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { getSession } from 'next-auth/react';
const Joi = require('joi');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const users = await prisma?.user.findMany();
        return res.status(200).json({ success: true, users });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: 'Something went wrong.', error });
      }
      break;

    case 'POST':
      const session = await getSession({ req });

      if (!session || session.user.role !== 'OWNER') {
        return res
          .status(403)
          .send({ success: false, message: 'Unauthorized' });
      }

      try {
        const { error } = validate(req.body);
        if (error)
          return res.status(400).json({
            success: false,
            message: error.details[0].message,
          });

        const userExist = await prisma.user.findFirst({
          where: {
            email: req.body.email,
          },
        });

        if (userExist)
          return res
            .status(400)
            .json({ success: false, message: 'User already exist.' });

        const newUser = await prisma.user.create({
          data: {
            employeeId: req.body.employeeId,
            name: req.body.name,
            email: req.body.email,
            department: req.body.department,
            designation: req.body.designation,
            role: req.body.role,
          },
        });
        res.status(201).json({ success: true, newUser });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: 'Something went wrong.',
          error,
        });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: 'Request is Not defined.' });
      break;
  }
}

function validate(user: any) {
  const schema = Joi.object({
    employeeId: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    department: Joi.string().required(),
    designation: Joi.string().required(),
    role: Joi.string().required(),
  });

  return schema.validate(user);
}
