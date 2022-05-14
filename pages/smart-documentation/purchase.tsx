import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DashboardLayout from 'layouts/dashboard';

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

function PurchasePage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const pages = [
    { name: 'Smart Documentation', href: '/smart-documentation' },
    { name: 'Purchase', href: '/smart-documentation/purchase' },
  ];

  return (
    <DashboardLayout>
      <div className='relative mx-auto max-w-4xl md:px-8 xl:px-0'>
        <div className='pt-10 pb-16'>
          <div>
            <DashboardBreadcrumbs pages={pages} />
          </div>
          <div className='px-4 sm:px-6 md:px-0'>
            <h1 className='text-3xl font-extrabold text-gray-900'>
              Smart Documentation
            </h1>
            <p>
              SMART documentation is fully complied with local, national and
              international regulations as well as applicable Global Food safety
              standards – ISO 22000, BRCGS, IFS, SQF, FSSC, HACCP.
            </p>
          </div>
          <div className='px-4 sm:px-6 md:px-0'>
            <div className='py-6'>
              {/* Tabs */}
              <div className='lg:hidden'>
                <label htmlFor='selected-tab' className='sr-only'>
                  Select a tab
                </label>
                <select
                  id='selected-tab'
                  name='selected-tab'
                  className='mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm'
                  defaultValue={tabs.find((tab) => tab.current)?.name}
                  onChange={(e) =>
                    router.push(
                      tabs.find((tab) => tab.name === e.target.value)?.href!
                    )
                  }
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div className='hidden lg:block lg:overflow-y-auto'>
                <div className='border-b border-gray-200'>
                  <nav className='-mb-px flex space-x-8'>
                    {tabs.map((tab) => (
                      <Link key={tab.name} href={tab.href}>
                        <a
                          className={classNames(
                            tab.current
                              ? 'border-purple-500 text-purple-600'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                          )}
                        >
                          {tab.name}{' '}
                          {tab.count ? (
                            <span
                              className={classNames(
                                tab.current
                                  ? 'bg-indigo-100 text-indigo-600'
                                  : 'bg-gray-100 text-gray-900',
                                'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
                              )}
                            >
                              {tab.count}
                            </span>
                          ) : null}{' '}
                          &rarr;
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>

              <section className='mt-8'>
                <div className='flex flex-col gap-4 '>
                  {actions.map((action) => (
                    <div
                      key={action.title}
                      className=' group relative rounded-lg bg-white p-6 shadow-sm focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                    >
                      <div>
                        <span
                          className={classNames(
                            action.iconBackground,
                            action.iconForeground,
                            'inline-flex rounded-lg p-3 ring-4 ring-white'
                          )}
                        >
                          <action.icon className='h-6 w-6' aria-hidden='true' />
                        </span>
                      </div>
                      <div className='mt-8'>
                        <h3 className='text-lg font-medium'>
                          <Link href={router.asPath + action.href}>
                            <a className='focus:outline-none'>
                              {/* Extend touch target to entire panel */}
                              <span
                                className='absolute inset-0'
                                aria-hidden='true'
                              />
                              {action.title}
                            </a>
                          </Link>
                        </h3>
                        <p className='mt-2 text-sm text-gray-500'>
                          {action.subtitle}
                        </p>
                      </div>
                      <span
                        className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
                        aria-hidden='true'
                      >
                        <svg
                          className='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
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
