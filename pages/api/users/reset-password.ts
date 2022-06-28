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
  const session = await getSession({ req });

  switch (method) {
    case 'PUT':
      try {
        if (!session || session.user.role !== 'OWNER') {
          return res
            .status(403)
            .send({
              success: false,
              message: 'Unauthorized contact your manager',
            });
        }
        //check the body of request
        const { error } = validateResetPassword(req.body);
        if (error)
          return res.status(400).json({
            success: false,
            message: error.details[0].message,
          });

        const user = await prisma.user.findUnique({
          where: { email: req.body.email },
        });
        if (!user)
          return res.status(400).json({
            success: false,
            message: 'Oops!, No user found.',
          });

        //check owner password
        const owner = await prisma.user.findFirst({ where: { role: 'OWNER' } });
        const isPasswordSame = await bcrypt.compare(
          req.body.masterPassword,
          owner?.password || ''
        );
        if (!isPasswordSame)
          return res.status(400).json({
            success: false,
            message: 'Incorrect Password.',
          });

        //hash the new password
        const salt = await bcrypt.genSalt(10);
        req.body.newPassword = await bcrypt.hash(req.body.newPassword, salt); //password hashed

        //update the record
        const updatedUser = await prisma.user.update({
          where: { email: req.body.email },
          data: { password: req.body.newPassword },
        });

        res.json({
          success: true,
          message: 'Your password is successfully changed.',
          user: updatedUser,
        });
      } catch (error) {
        res.status(400).json({
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

function validateResetPassword(user: any) {
  const schema = Joi.object({
    email: Joi.string().email().trim().required(),
    newPassword: Joi.string()
      .min(8)
      .pattern(
        new RegExp(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
        )
      )
      .messages({
        'string.pattern.base':
          'Must have at least 8 characters including 1 lower case letter [a-z],1 upper case letter [A-Z],1 numeric character [0-9] & 1 special character',
      })
      .required(),
    masterPassword: Joi.string()
      .min(8)
      .pattern(
        new RegExp(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
        )
      )
      .messages({
        'string.pattern.base':
          'Must have at least 8 characters including 1 lower case letter [a-z],1 upper case letter [A-Z],1 numeric character [0-9] & 1 special character',
      })
      .required(),
  });
  return schema.validate(user);
}
