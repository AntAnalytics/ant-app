import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DocumentationLayout from 'layouts/documentation';
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
import { useForm } from 'react-hook-form';

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

const Record = [
  {
    SupplierName: 'Lindsay Walton',
    Category: 'food',
    ProductName: 'Product',
    GST: 'xx xx xxxx xxx',
    FSSAILicenseNo: 'xx xxxxx xxx',
    Location: 'delhi',
    Address: 'south delhi',
    SupplyingLocation: 'west delhi',
    SKU: 'sku',
  },
  // More Record...
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

function PurchasePage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    let score = 0;
    Object.values(data).forEach((answer) => {
      if (answer !== 'No') score++;
    });
    console.log({ score });
  };
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <DocumentationLayout>
      <section className='w-full '>
        <form>
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
                  GST NO
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
                <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
              {Record.map((person, index) => (
                <tr key={person.GST + person.Address + person.Location}>
                  <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                    {index + 1}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                    {person.SupplierName}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                    {person.Category}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                    {person.ProductName}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                    {person.GST}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                    {person.FSSAILicenseNo}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                    {person.Location}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                    {person.Address}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                    {person.SupplyingLocation}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                    {person.SKU}
                  </td>
                  <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      Edit
                      <span className='sr-only'>, {person.SupplierName}</span>
                    </a>
                  </td>
                </tr>
              ))}
              <tr>
                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'></td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Supplier name
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </td>
                <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                  <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                    Submit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
      <style jsx>{`
        td {
          min-width: 200px;
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

export default PurchasePage;
