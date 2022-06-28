import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { getSession } from 'next-auth/react';
const Joi = require('joi');
const bcrypt = require('bcrypt');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;
  const session = await getSession({ req });

  switch (method) {
    case 'GET':
      try {
        const user = await prisma?.user.findUnique({
          where: {
            id: id.toString(),
          },
          select: {
            id: true,
            site: true,
            employeeId: true,
            name: true,
            email: true,
            department: true,
            image: true,
            designation: true,
            role: true,
            mobile: true,
          },
        });
        if (!user) {
          return res.status(400).json({
            success: false,
            message: 'User not found with this id.',
          });
        }

        return res.status(200).json({ success: true, user });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: 'Something went wrong.', error });
      }
      break;
    case 'DELETE' /* Delete a model by its email */:
      if (!session || session.user.role !== 'OWNER') {
        return res
          .status(403)
          .send({ success: false, message: 'Unauthorized' });
      }
      try {
        const deletedUser = await prisma.user.delete({
          where: {
            id: id.toString(),
          },
        });
        if (!deletedUser) {
          return res
            .status(404)
            .json({ success: false, message: 'User Already Deleted.' });
        }
        res
          .status(200)
          .json({ success: true, message: 'User deleted successfully' });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: 'Something went wrong.', error });
      }
      break;

    case 'PUT':
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

        const owner = await prisma.user.findFirst({ where: { role: 'OWNER' } });
        const isPasswordSame = await bcrypt.compare(
          req.body.password,
          owner?.password || ''
        );
        if (!isPasswordSame)
          return res.status(400).json({
            success: false,
            message: 'Incorrect Password.',
          });

        const updatedUser = await prisma.user.update({
          where: {
            id: id.toString(),
          },
          data: {
            employeeId: req.body.employeeId,
            name: req.body.name,
            email: req.body.email,
            department: req.body.department,
            image: `https://avatars.dicebear.com/api/initials/:${req.body.name}.svg`,
            designation: req.body.designation,
            role: req.body.role,
            mobile: req.body.mobile,
          },
        });

        return res
          .status(200)
          .json({ success: true, message: 'Updated Successfully.' });
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
    id: Joi.string(),
    employeeId: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    department: Joi.string().required(),
    designation: Joi.string().required(),
    image: Joi.string(),
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
    site: Joi.string().allow(null),
  });

  return schema.validate(user);
}
