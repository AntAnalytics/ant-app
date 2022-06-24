import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { getSession } from 'next-auth/react';
const Joi = require('joi');
const bcrypt = require('bcrypt');

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

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await prisma.user.create({
          data: {
            employeeId: req.body.employeeId,
            name: req.body.name,
            email: req.body.email,
            department: req.body.department,
            image: `https://avatars.dicebear.com/api/initials/:${req.body.name}.svg`,
            designation: req.body.designation,
            role: req.body.role,
            mobile: req.body.mobile,
            password: hashedPassword,
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
    email: Joi.string().email().required(),
    department: Joi.string().required(),
    designation: Joi.string().required(),
    role: Joi.string().required(),
    mobile: Joi.string().length(10).trim().required(),
    password: Joi.string()
      .min(8)
      .pattern(
        new RegExp(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
        )
      )
      .required(),
  });

  return schema.validate(user);
}
