import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DashboardLayout from 'layouts/dashboard';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getUsers } from 'services/userService';
import { User } from '@prisma/client';

const tabs = [
  { name: 'General', href: '/setting', current: false },
  //   { name: 'Password', href: '#', current: false },
  //   { name: 'Notifications', href: '#', current: false },
  //   { name: 'Plan', href: '#', current: false },
  //   { name: 'Billing', href: '#', current: false },
  { name: 'Team Members', href: '/setting/team-members', current: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function SettingTeamMemberPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const { data: session, status } = useSession();

  console.log({ session });
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data.users));
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
                <section className='mt-10'>
                  <div className='px-4 sm:px-6 lg:px-8'>
                    <div className='sm:flex sm:items-center'>
                      <div className='sm:flex-auto'>
                        <h1 className='text-xl font-semibold text-gray-900'>
                          Users
                        </h1>
                        <p className='mt-2 text-sm text-gray-700'>
                          A list of all the users in your account including
                          their name, title, email and role.
                        </p>
                      </div>
                      <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
                        <Link href='/setting/add-member'>
                          <a>
                            <button
                              type='button'
                              className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
                            >
                              Add user
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
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
                                    Name
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Title
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Status
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Role
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
                                {users?.map((user) => (
                                  <tr key={user.email}>
                                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                      <div className='flex items-center'>
                                        <div className='h-10 w-10 flex-shrink-0'>
                                          <img
                                            className='h-10 w-10 rounded-full'
                                            src={user.image || ''}
                                            alt=''
                                          />
                                        </div>
                                        <div className='ml-4'>
                                          <div className='font-medium text-gray-900'>
                                            {user.name}
                                          </div>
                                          <div className='text-gray-500'>
                                            {user.email}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-900'>
                                        Director, Product Development
                                      </div>
                                      <div className='text-gray-500'>
                                        Security
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                                        Active
                                      </span>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      {user.role}
                                    </td>
                                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                                      <a
                                        href='#'
                                        className='text-indigo-600 hover:text-indigo-900'
                                      >
                                        Edit
                                        <span className='sr-only'>
                                          , {user.name}
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
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

export default SettingTeamMemberPage;
