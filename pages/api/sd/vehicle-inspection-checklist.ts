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
        const vehicleInspectionsList =
          await prisma?.vehicleInspectionCheckList.findMany({
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
              supplier: {
                select: {
                  supplierName: true,
                },
              },
            },
          });
        return res.status(200).json({ success: true, vehicleInspectionsList });
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
        // const receivingReport = await prisma.receivingReport.findFirst({
        //   where: {
        //     batchNo: req.body.batchNo,
        //   },
        // });
        // if (receivingReport)
        //   return res
        //     .status(400)
        //     .json({ success: false, message: 'Inspection already exist.' });
        const newInspectionList =
          await prisma.vehicleInspectionCheckList.create({
            data: req.body,
          });
        res.status(201).json({ success: true, newInspectionList });
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
    entryById: Joi.string().required(),
    remark: Joi.string(),
    supplierId: Joi.string().required(),
    vehicleInteriorClean: Joi.boolean().required(),
    containersClean: Joi.boolean().required(),
    crossContamination: Joi.boolean().required(),
    verifiedById: Joi.string(),
  });

  return schema.validate(user);
}
