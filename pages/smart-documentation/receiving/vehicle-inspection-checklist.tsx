import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getSession, useSession } from 'next-auth/react';
import { set, useForm } from 'react-hook-form';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import {
  ApprovedSupplier,
  ReceivingReport,
  Role,
  VehicleInspectionCheckList,
} from '@prisma/client';
import {
  addVehicleInspectionsList,
  getApprovedSuppliers,
  getVehicleInspectionsList,
} from 'services/ASServcie';
import toast from 'react-hot-toast';
import ModernLayout from 'layouts/ModernLayout';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

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

function ReceivingReportPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const [records, setRecords] = useState<Record[]>([]);
  const [suppliers, setSuppliers] = useState<ApprovedSupplier[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [filterDate, setFilterDate] = useState('');

  const { data: session, status } = useSession();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log({ data });
    setSubmitting(true);
    try {
      const res = await addVehicleInspectionsList({
        containersClean: !!+data.containersClean,
        vehicleInteriorClean: !!+data.vehicleInteriorClean,
        crossContamination: !!+data.crossContamination,
        entryById: session?.user.id as string,
        supplierId: data.supplierId,
      });
    } catch (error: any) {
      toast.error(error?.response.data.message);
    } finally {
      setSubmitting(false);
      setShowForm(false);
    }
  };

  useEffect(() => {
    getApprovedSuppliers()
      .then(({ data }) => setSuppliers(data.approvedSuppliers))
      .catch((error) => {});
  }, []);

  useEffect(() => {
    if (submitting) return;
    getVehicleInspectionsList()
      .then(({ data }) => setRecords(data.vehicleInspectionsList))
      .catch((error) => {});
  }, [submitting]);

  const filteredRecords = useMemo(
    () =>
      records?.filter((record) => {
        if (filterDate) {
          return (
            record.createdAt
              .toLocaleString(undefined, {
                timeZone: 'Asia/Kolkata',
              })
              .slice(0, 10) === filterDate
          );
        } else return true;
      }),
    [filterDate, records]
  );

  console.log({ filteredRecords, suppliers });
  return (
    <ModernLayout>
      <div className='p-4'>
        <section>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-xl font-semibold text-gray-900'>
                Hi @{session?.user?.name}
              </h1>
              {/* 
            <p className='mt-2 text-sm text-gray-700'>
              A list of all the users in your account including their name,
              title, email and role.
            </p> */}
              <div className='flex items-center justify-end gap-2'>
                <label htmlFor='filterDate'>Filter by Date</label>
                <input
                  type='date'
                  name='filterDate'
                  id='filterDate'
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className='h-10 w-10 items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>
          </div>
        </section>
        <section className=''>
          <div className='mt-8 flex flex-col'>
            <div className='-my-2 -mx-4 max-w-[94vw] overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-300'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                          Sr No
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Date
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Name of the Supplier
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Vehicle interior clean
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Container clean
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Cross contamination
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Remark
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Signed By
                        </th>
                        <th
                          scope='col'
                          className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                        >
                          <span className='sr-only'>Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {filteredRecords?.map((record, index) => (
                        <tr key={record.id + index}>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {index + 1}
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 '>
                            {new Date(record.createdAt)
                              .toLocaleString(undefined, {
                                timeZone: 'Asia/Kolkata',
                              })
                              .slice(0, 10)}
                          </td>

                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {record.supplier.supplierName}
                          </td>
                          <td
                            className={classNames(
                              'whitespace-nowrap px-3 py-4 text-sm ',
                              record.vehicleInteriorClean
                                ? 'text-gray-500'
                                : 'text-red-500'
                            )}
                          >
                            {record.vehicleInteriorClean ? 'Yes' : 'No'}
                          </td>
                          <td
                            className={classNames(
                              'whitespace-nowrap px-3 py-4 text-sm ',
                              record.containersClean
                                ? 'text-gray-500'
                                : 'text-red-500'
                            )}
                          >
                            {record.containersClean ? 'Yes' : 'No'}
                          </td>
                          <td
                            className={classNames(
                              'whitespace-nowrap px-3 py-4 text-sm ',
                              record.crossContamination
                                ? 'text-gray-500'
                                : 'text-red-500'
                            )}
                          >
                            {record.crossContamination ? 'Yes' : 'No'}
                          </td>

                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {record.remark || '--'}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {record.entryBy.name} ({record.entryBy.role})
                          </td>
                          {/* <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                          <a
                            href='#'
                            className='text-indigo-600 hover:text-indigo-900'
                          >
                            Edit
                            <span className='sr-only'>, {record.Pname}</span>
                          </a>
                        </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filterDate && filteredRecords.length === 0 && (
                  <div className='grid h-40 w-full place-content-center'>
                    No Record Found
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className='mt-8 text-xs font-semibold'>
          {showForm ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8'
            >
              <div className='col-span-8 flex items-start'>
                <label
                  htmlFor='supplierId'
                  className='block min-w-[15rem] text-sm font-medium text-gray-700'
                >
                  Name of the supplier
                </label>
                <select
                  id='supplierId'
                  className='mt-1 ml-6 block w-full rounded-md border-gray-300 py-2 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  {...register('supplierId')}
                >
                  {suppliers?.map((supplier) => (
                    <option key={supplier.id} value={supplier.id}>
                      {supplier.supplierName}
                    </option>
                  ))}
                </select>
              </div>

              <div className='col-span-8 flex items-start'>
                <label className='block min-w-[15rem] text-sm font-medium text-gray-700'>
                  Vehicle Interior Clean
                </label>

                <fieldset className='ml-6 flex gap-6'>
                  <div className='flex items-center'>
                    <input
                      id='vehicleInteriorCleanYes'
                      type='radio'
                      value={1}
                      {...register('vehicleInteriorClean')}
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor='vehicleInteriorCleanYes'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      Yes
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='vehicleInteriorCleanNo'
                      type='radio'
                      value={0}
                      {...register('vehicleInteriorClean')}
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor='vehicleInteriorCleanNo'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      No
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className='col-span-8 flex items-start'>
                <label className='block min-w-[15rem] text-sm font-medium text-gray-700'>
                  Containers Clean
                </label>

                <fieldset className='ml-6 flex gap-6'>
                  <div className='flex items-center'>
                    <input
                      id='containersCleanYes'
                      type='radio'
                      value={1}
                      {...register('containersClean')}
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor='containersCleanYes'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      Yes
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='containersCleanNo'
                      type='radio'
                      value={0}
                      {...register('containersClean')}
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor='containersCleanNo'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      No
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className='col-span-8 flex items-start'>
                <label className='block min-w-[15rem] text-sm font-medium text-gray-700'>
                  Cross Contamination
                </label>

                <fieldset className='ml-6 flex gap-6'>
                  <div className='flex items-center'>
                    <input
                      id='crossContaminationYes'
                      type='radio'
                      value={1}
                      {...register('crossContamination')}
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor='crossContaminationYes'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      Yes
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='crossContaminationNo'
                      type='radio'
                      value={0}
                      {...register('crossContamination')}
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor='crossContaminationNo'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      No
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className='col-span-2 col-end-9 mt-5 flex flex-row gap-4 sm:mt-6'>
                <button
                  onClick={() => setShowForm(false)}
                  className='inline-flex w-full justify-center rounded-md border border-transparent  px-4 py-2 text-base font-medium text-red-500 shadow-sm hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2  sm:text-sm'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm'
                >
                  Add
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className='ml-auto flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Add Record
            </button>
          )}
        </section>
      </div>

      <style jsx>{`
        td {
          min-width: 5rem;
        }
      `}</style>
    </ModernLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      // session,
    },
  };
};

export default ReceivingReportPage;
