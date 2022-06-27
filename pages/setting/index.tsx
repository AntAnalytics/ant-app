import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DashboardLayout from 'layouts/dashboard';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const tabs = [
  { name: 'General', href: '/setting', current: true },
  //   { name: 'Password', href: '#', current: false },
  //   { name: 'Notifications', href: '#', current: false },
  //   { name: 'Plan', href: '#', current: false },
  //   { name: 'Billing', href: '#', current: false },
  { name: 'Team Members', href: '/setting/team-members', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type CompanyDetails = {
  companyName: string;
  gst: string;
};

function DashBoardPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const { data: session, status } = useSession();
  console.log({ session });

  const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(
    null
  );

  useEffect(() => {
    const data = window.localStorage.getItem('companyDetails');
    if (data) setCompanyDetails(JSON.parse(data));
  }, []);

  return (
    <DashboardLayout>
      <div className='relative mx-auto max-w-4xl md:px-8 xl:px-0'>
        <div className='pt-10 pb-16'>
          <div className='px-4 sm:px-6 md:px-0'>
            <h1 className='text-3xl font-extrabold text-gray-900'>Settings</h1>
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
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div className='hidden lg:block'>
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
                          {tab.name}
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>

              <>
                {/* Description list with inline editing */}
                <div className='mt-10 divide-y divide-gray-200'>
                  <div className='space-y-1'>
                    <h3 className='text-lg font-medium leading-6 text-gray-900'>
                      Profile
                    </h3>
                    <p className='max-w-2xl text-sm text-gray-500'>
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>
                  <div className='mt-6'>
                    <dl className='divide-y divide-gray-200'>
                      <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Name
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          <span className='flex-grow'>
                            {session?.user?.name}
                          </span>
                          <span className='ml-4 flex-shrink-0'>
                            {/* <button
                            type='button'
                            className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          >
                            Update
                          </button> */}
                          </span>
                        </dd>
                      </div>
                      <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Photo
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          <span className='flex-grow'>
                            <Image
                              className='h-8 w-8 rounded-full'
                              src={session?.user?.image || '/'}
                              alt=''
                              height={32}
                              width={32}
                            />
                          </span>
                          <span className='ml-4 flex flex-shrink-0 items-start space-x-4'>
                            {/* <button
                            type='button'
                            className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          >
                            Update
                          </button>
                          <span className='text-gray-300' aria-hidden='true'>
                            |
                          </span>
                          <button
                            type='button'
                            className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          >
                            Remove
                          </button> */}
                          </span>
                        </dd>
                      </div>
                      <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Email
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          <span className='flex-grow'>
                            {session?.user?.email}
                          </span>
                          <span className='ml-4 flex-shrink-0'>
                            {/* <button
                            type='button'
                            className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          >
                            Update
                          </button> */}
                          </span>
                        </dd>
                      </div>
                      {/* <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5'>
                      <dt className='text-sm font-medium text-gray-500'>
                        Job title
                      </dt>
                      <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                        <span className='flex-grow'>
                          Human Resources Manager
                        </span>
                        <span className='ml-4 flex-shrink-0'>
                          <button
                            type='button'
                            className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          >
                            Update
                          </button>
                        </span>
                      </dd>
                    </div> */}
                    </dl>
                  </div>
                </div>

                <div className='mt-10 divide-y divide-gray-200'>
                  <div className='space-y-1'>
                    <h3 className='text-lg font-medium leading-6 text-gray-900'>
                      Account
                    </h3>
                    <p className='max-w-2xl text-sm text-gray-500'>
                      Manage how information is displayed on your account.
                    </p>
                  </div>
                  <div className='mt-6'>
                    <dl className='divide-y divide-gray-200'>
                      <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Language
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          <span className='flex-grow'>English</span>
                          <span className='ml-4 flex-shrink-0'>
                            {/* <button
                            type='button'
                            className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          >
                            Update
                          </button> */}
                          </span>
                        </dd>
                      </div>
                      <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Date format
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          <span className='flex-grow'>DD-MM-YYYY</span>
                          <span className='ml-4 flex flex-shrink-0 items-start space-x-4'>
                            {/* <button
                            type='button'
                            className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          >
                            Update
                          </button>
                          <span className='text-gray-300' aria-hidden='true'>
                            |
                          </span>
                          <button
                            type='button'
                            className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          >
                            Remove
                          </button> */}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className='mt-10 divide-y divide-gray-200'>
                  <div className='space-y-1'>
                    <h3 className='text-lg font-medium leading-6 text-gray-900'>
                      Company Details
                    </h3>
                    <p className='max-w-2xl text-sm text-gray-500'>
                      This information will not be shared with anyone.
                    </p>
                  </div>
                  <div className='mt-6'>
                    <dl className='divide-y divide-gray-200'>
                      <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Company Name
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          <span className='flex-grow'>
                            {companyDetails?.companyName}
                          </span>
                          <span className='ml-4 flex-shrink-0'>
                            {/* <button
                            type='button'
                            className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          >
                            Update
                          </button> */}
                          </span>
                        </dd>
                      </div>
                      <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'>
                        <dt className='text-sm font-medium text-gray-500'>
                          GST No.
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          <span className='flex-grow'>
                            {companyDetails?.gst}
                          </span>
                          <span className='ml-4 flex flex-shrink-0 items-start space-x-4'>
                            {/* <button
                            type='button'
                            className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          >
                            Update
                          </button>
                          <span className='text-gray-300' aria-hidden='true'>
                            |
                          </span>
                          <button
                            type='button'
                            className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          >
                            Remove
                          </button> */}
                          </span>
                        </dd>
                      </div>
                      <div className='mt-10 flex justify-end'>
                        <Link href='/onboarding'>
                          <a className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'>
                            Update
                          </a>
                        </Link>
                      </div>
                    </dl>
                  </div>
                </div>
              </>
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

export default DashBoardPage;
