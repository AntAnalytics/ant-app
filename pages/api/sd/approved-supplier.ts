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
        const approvedSuppliers = await prisma?.approvedSupplier.findMany();
        return res.status(200).json({ success: true, approvedSuppliers });
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

        const supplier = await prisma.approvedSupplier.findFirst({
          where: {
            gstNo: req.body.gstNo,
            fssaiLicenseNo: req.body.fssaiLicenseNo,
            supplierName: req.body.supplierName,
            productName: req.body.productName,
          },
        });

        if (supplier)
          return res
            .status(400)
            .json({ success: false, message: 'Supplier already exist.' });

        const newApprovedSupplier = await prisma.approvedSupplier.create({
          data: req.body,
        });
        res.status(201).json({ success: true, newApprovedSupplier });
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
    supplierName: Joi.string().required(),
    category: Joi.string().required(),
    productName: Joi.string().required(),
    gstNo: Joi.string().required(),
    fssaiLicenseNo: Joi.string().required(),
    licenseValidUpto: Joi.string().required(),
    location: Joi.string().required(),
    address: Joi.string().required(),
    supplyingLocation: Joi.string().required(),
    sku: Joi.string().required(),
    enteryById: Joi.string().required(),
  });

  return schema.validate(user);
}
