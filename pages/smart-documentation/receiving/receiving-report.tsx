import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DocumentationLayout from 'layouts/documentation';

import { getSession, useSession } from 'next-auth/react';
import { set, useForm } from 'react-hook-form';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { ReceivingReport, Role } from '@prisma/client';
import { addReceivingReport, getReceivingReports } from 'services/ASServcie';
import toast from 'react-hot-toast';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type Record = ReceivingReport & {
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
      const res = await addReceivingReport({
        ...data,
        entryById: session?.user.id,
      });
    } catch (error: any) {
      toast.error(error?.response.data.message);
    } finally {
      setSubmitting(false);
      setShowForm(false);
    }
  };

  useEffect(() => {
    if (submitting) return;
    getReceivingReports()
      .then(({ data }) => setRecords(data.receivingReports))
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

  console.log({ filterDate });

  return (
    <DocumentationLayout>
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
          <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
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
                        Time
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Products name
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Supplier name
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Receiving Temp (c)
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Quantity
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Use by date
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Batch No.
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Sanitization
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Code
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
                      <tr key={record.supplierName + index}>
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
                          {new Date(record.createdAt)
                            .toLocaleString(undefined, {
                              timeZone: 'Asia/Kolkata',
                            })
                            .slice(11)}
                        </td>

                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {record.productName}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {record.supplierName}
                        </td>
                        <td
                          className={classNames(
                            'whitespace-nowrap px-3 py-4 text-sm ',
                            parseInt(record.receivingTemp) < -18 ||
                              parseInt(record.receivingTemp) > 5
                              ? 'text-red-500'
                              : 'text-gray-500'
                          )}
                        >
                          {record.receivingTemp}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {record.quantity}
                        </td>
                        <td
                          className={classNames(
                            'whitespace-nowrap px-3 py-4 text-sm ',
                            // isInThePastBy(record.quantity, 7)
                            //   ? 'text-red-500'
                            'text-gray-500'
                          )}
                        >
                          {record.useByDate}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {record.batchNo}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {record.sanitization}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {record.code}
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
            <div className='col-span-4 flex items-start'>
              <label htmlFor='productName' className='w-28'>
                Product Name
              </label>
              <input
                type='text'
                id='productName'
                className=' flex h-10 w-full  items-end rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                {...register('productName')}
                required
              />
            </div>
            <div className='col-span-4 flex'>
              <label htmlFor='supplierName' className='w-28'>
                Supplier Name
              </label>
              <input
                type='text'
                id='supplierName'
                className=' flex h-10 w-full  items-end rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                {...register('supplierName')}
                required
              />
            </div>
            <div className='col-span-2 flex '>
              <label htmlFor='receivingTemp' className='w-28'>
                Receiving Temp (c)
              </label>
              <input
                type='number'
                id='receivingTemp'
                className='ml-6 flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                {...register('receivingTemp')}
                required
              />
            </div>

            <div className='col-span-2 flex'>
              <label htmlFor='quantity' className='w-28'>
                Quantity
              </label>
              <input
                type='number'
                id='quantity'
                className=' flex h-10 w-full  items-end rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                {...register('quantity')}
                required
              />
            </div>

            <div className='col-span-2 flex'>
              <label htmlFor='useByDate' className='w-28'>
                UseBy Date
              </label>
              <input
                type='date'
                id='useByDate'
                className='ml-6 flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                {...register('useByDate')}
                required
              />
            </div>

            <div className='col-span-2 flex'>
              <label htmlFor='sanitization' className='w-28'>
                Sanitization (ppm)
              </label>
              <input
                type='number'
                id='sanitization'
                className=' flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                {...register('sanitization')}
                required
              />
            </div>

            <div className='col-span-4 flex'>
              <label htmlFor='batchNo' className='w-28'>
                Batch No
              </label>
              <input
                type='text'
                id='batchNo'
                className=' flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                {...register('batchNo')}
                required
              />
            </div>

            <div className='col-span-4 flex'>
              <label htmlFor='code' className='w-28'>
                code
              </label>
              <input
                type='text'
                id='code'
                className=' flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                {...register('code')}
                required
              />
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

      <style jsx>{`
        td {
          min-width: 5rem;
        }
      `}</style>
    </DocumentationLayout>
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
