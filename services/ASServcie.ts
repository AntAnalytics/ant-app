import { ApprovedSupplier } from '@prisma/client';
import http from './httpService';

export const getApprovedSuppliers = () => {
  return http.get('/sd/approved-supplier');
};

export function addApprovedSupplier(approvedSupplier: ApprovedSupplier) {
  return http.post('/sd/approved-supplier', approvedSupplier);
}
