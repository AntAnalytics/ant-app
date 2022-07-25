import {
  ApprovedSupplier,
  ReceivingReport,
  VehicleInspectionCheckList,
} from '@prisma/client';
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

export const getVehicleInspectionsList = () => {
  return http.get('/sd/vehicle-inspection-checklist');
};

export const addVehicleInspectionsList = (
  inspection: Pick<
    VehicleInspectionCheckList,
    | 'supplierId'
    | 'containersClean'
    | 'crossContamination'
    | 'entryById'
    | 'vehicleInteriorClean'
  >
) => {
  return http.post('/sd/vehicle-inspection-checklist', inspection);
};
