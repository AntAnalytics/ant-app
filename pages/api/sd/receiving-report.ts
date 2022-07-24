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
        const receivingReports = await prisma?.receivingReport.findMany({
          include: {
            entryBy: {
              select: {
                name: true,
                role: true,
              },
            },
            verifiedBy: {
              select: {
                name: true,
                role: true,
              },
            },
          },
        });
        return res.status(200).json({ success: true, receivingReports });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: 'Something went wrong.', error });
      }
      break;

    case 'POST':
      const session = await getSession({ req });

      if (!session) {
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
        const receivingReport = await prisma.receivingReport.findFirst({
          where: {
            batchNo: req.body.batchNo,
          },
        });
        if (receivingReport)
          return res
            .status(400)
            .json({ success: false, message: 'Report already exist.' });
        const newReceivingReport = await prisma.receivingReport.create({
          data: req.body,
        });
        res.status(201).json({ success: true, newReceivingReport });
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
    batchNo: Joi.string().required(),
    code: Joi.string().required(),
    productName: Joi.string().required(),
    quantity: Joi.number().required(),
    receivingTemp: Joi.number().required(), //min and max value?
    remark: Joi.string(),
    sanitization: Joi.number().required(), //value type?
    supplierName: Joi.string().required(),
    useByDate: Joi.string().required(),
    entryById: Joi.string().required(),
    verifiedById: Joi.string(),
  });

  return schema.validate(user);
}
