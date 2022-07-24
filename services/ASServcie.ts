import { ApprovedSupplier, ReceivingReport } from '@prisma/client';
import http from './httpService';

export const getApprovedSuppliers = () => {
  return http.get('/sd/approved-supplier');
};

export function addApprovedSupplier(approvedSupplier: ApprovedSupplier) {
  return http.post('/sd/approved-supplier', approvedSupplier);
}

export const getReceivingReports = () => {
  return http.get('/sd/receiving-report');
};

export const addReceivingReport = (report: ReceivingReport) => {
  return http.post('/sd/receiving-report', report);
};
