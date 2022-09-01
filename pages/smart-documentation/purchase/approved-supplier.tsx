import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import test from 'src/checklists/test';

import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { signIn, getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardBreadcrumbs from 'components/Breadcrumbs/dashboard';
import { set, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useState } from 'react';
import AddRecordModal from 'components/modal/AddRecord';
import { ApprovedSupplier } from '@prisma/client';
import { getApprovedSuppliers } from 'services/ASServcie';
import { isInThePastBy } from 'utils/isInThePastBy';
import ModernLayout from 'layouts/ModernLayout';

const tabs = [
  {
    name: 'Purchase',
    href: '/smart-documentation/purchase',
    count: 3,
    current: true,
  },
  {
    name: 'Receiving',
    href: '/smart-documentation/receiving',
    count: 3,
    current: false,
  },
  {
    name: 'Stores',
    href: '/smart-documentation/stores',
    count: 2,
    current: false,
  },
  {
    name: 'Pre Production',
    href: '/smart-documentation/pre-production',
    count: 4,
    current: false,
  },
  {
    name: 'Production',
    href: '/smart-documentation/production',
    count: 4,

    current: false,
  },
  {
    name: 'Service',
    href: '/smart-documentation/service',
    count: 2,
    current: false,
  },
  {
    name: 'Transportation',
    href: '/smart-documentation/transportation',
    count: 1,
    current: false,
  },
  {
    name: 'Personal Hygiene',
    href: '/smart-documentation/personal-hygiene',
    count: 1,
    current: false,
  },
  {
    name: 'Quality assusrance',
    href: '/smart-documentation/quality-assusrance',
    count: 4,
    current: false,
  },
  {
    name: 'Regulatory',

    href: '/smart-documentation/regulatory',
    count: 5,
    current: false,
  },
  {
    name: 'Support services',
    href: '/smart-documentation/support-services',
    count: 6,
    current: false,
  },
  {
    name: 'Pest control Management',
    href: '/smart-documentation/pest-control-management',
    count: 5,
    current: false,
  },
];

const actions = [
  {
    title: 'Approved supplier',
    subtitle:
      ' Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
    href: '/approved-supplier',
    icon: BadgeCheckIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Supplier specification',
    subtitle:
      ' Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },

  {
    title: 'Vendor audit (format)',
    subtitle:
      ' Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function ApprovedSupplierPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [records, setRecords] = useState<ApprovedSupplier[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const { data: session, status } = useSession();

  useEffect(() => {
    getApprovedSuppliers()
      .then(({ data }) => {
        setRecords(data.approvedSuppliers);
        setLoading(false);
      })
      .catch((error) => {});
  }, [open]);

  return (
    <ModernLayout>
      <div className='p-4'>
        <section>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-xl font-semibold text-gray-900'>
                Hi @{session?.user?.name}
              </h1>
              <h2>Approved supplier List</h2>

              {/*
              <p className='mt-2 text-sm text-gray-700'>
                A list of all the users in your account including their name,
                title, email and role.
              </p> */}
            </div>
            <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
              <button
                onClick={() => setOpen(true)}
                type='button'
                className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
              >
                Add Supplier
              </button>
            </div>
            {open && <AddRecordModal open={open} setOpen={setOpen} />}
          </div>
        </section>
        {loading ? (
          <section className='grid h-[75vh] place-content-center rounded-lg bg-blue-700/10'>
            <svg
              className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          </section>
        ) : (
          <section className=''>
            <div className='mt-8 flex flex-col'>
              <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                  <div className=' min-h-[600px] overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                    <table className=' min-w-full divide-y divide-gray-300'>
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
                            Supplier name
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                          >
                            Category
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
                            GST Number
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                          >
                            FSSAI License no
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                          >
                            License valid upto
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                          >
                            Location
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                          >
                            Address
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                          >
                            Supplying location
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                          >
                            SKU
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
                        {records.map((record, index) => (
                          <tr key={record.supplierName + index}>
                            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                              {index + 1}
                            </td>
                            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                              {record.supplierName}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                              {record.category}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                              {record.productName}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                              {record.gstNo}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                              {record.fssaiLicenseNo}
                            </td>
                            <td
                              className={classNames(
                                'whitespace-nowrap px-3 py-4 text-sm ',
                                isInThePastBy(record.licenseValidUpto, 7)
                                  ? 'text-red-500'
                                  : 'text-gray-500'
                              )}
                            >
                              {record.licenseValidUpto}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                              {record.location}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                              {record.address}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                              {record.supplyingLocation}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                              {record.sku}
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
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <style jsx>{`
        td,
        th {
          min-width: 50px;
          max-width: 150px;
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

export default ApprovedSupplierPage;
