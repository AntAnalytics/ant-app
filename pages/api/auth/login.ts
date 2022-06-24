import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
const Joi = require('joi');
const bcrypt = require('bcrypt');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { error } = validate(req.body);
        if (error)
          return res
            .status(400)
            .json({ success: false, message: error.details[0].message });

        const user = await prisma.user.findFirst({
          where: { email: req.body.email },
        });
        if (!user)
          return res.status(400).json({
            success: false,
            message: 'Account not found with this E-mail address.',
          });

        const validPassword = await bcrypt.compare(
          req.body.password,
          user.password || '' //if user account is created with social then password is not available
        );
        if (!validPassword)
          return res.status(400).json({
            success: false,
            message: 'Invalid E-mail or Password.',
          });

        res.status(200).json({ success: true, user });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: 'Something went wrong.', error });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: 'Request is Not defined.' });

      break;
  }
}

function validate(credentials: object) {
  const schema = Joi.object({
    email: Joi.string().email().trim().required(),
    password: Joi.string()
      .min(8)
      .pattern(
        new RegExp(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
        )
      )
      .required(),
  });

  return schema.validate(credentials);
}
