import { Role, VehicleInspectionCheckList } from '@prisma/client';
import Table from 'components/Table/table';
import ModernLayout from 'layouts/ModernLayout';
import { NextPage } from 'next';
import { useEffect, useMemo, useState } from 'react';
import { getVehicleInspectionsList } from 'services/ASServcie';

type Record = VehicleInspectionCheckList & {
  supplier: {
    id: string;
    supplierName: string;
  };
  entryBy: {
    name: string;
    role: Role;
  };
  verifiedBy?: {
    name: string;
    role: Role;
  };
};

const SamplePage: NextPage = () => {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    getVehicleInspectionsList()
      .then(({ data }) => setRecords(data.vehicleInspectionsList))
      .catch((error) => {});
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'supplier',
        accessor: 'supplierName', // accessor is the "key" in the data
        sortType: 'basic',
      },
      {
        Header: 'VehicleInterior Clean',
        accessor: 'vehicleInteriorClean',
        sortType: 'basic',
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      records.map((data) => {
        return {
          vehicleInteriorClean: data.vehicleInteriorClean ? 'yes' : 'no',
          supplierName: data.supplier.supplierName,
        };
      }),
    [records]
  );

  return (
    <ModernLayout>
      <Table columns={columns} data={data} />
    </ModernLayout>
  );
};

export default SamplePage;
