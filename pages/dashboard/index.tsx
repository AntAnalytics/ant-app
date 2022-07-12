import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DashboardLayout from 'layouts/dashboard';
import { signIn, getSession, useSession } from 'next-auth/react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

import {
  ChevronRightIcon,
  DotsVerticalIcon,
  SearchIcon,
  SelectorIcon,
} from '@heroicons/react/solid';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const projects = [
  {
    id: 1,
    title: 'Site 1',
    initials: 'JW',
    team: 'Production',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  // More projects...
];
const pinnedProjects = projects.filter((project) => project.pinned);

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type CompanyDetails = {
  companyName: string;
  gst: string;
};

const data = [
  {
    name: 'Page A',
    pc: 4000,
    c: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    pc: 3000,
    c: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    pc: 2000,
    c: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    pc: 2780,
    c: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    pc: 1890,
    c: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    pc: 2390,
    c: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    pc: 3490,
    c: 4300,
    amt: 2100,
  },
];

const announcements = [
  {
    id: 1,
    title: 'Office closed on July 2nd',
    preview:
      'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'New password policy',
    preview:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Office closed on July 2nd',
    preview:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
];

function DashBoardPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const { data: session, status } = useSession();
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(
    null
  );

  useEffect(() => {
    const data = window.localStorage.getItem('companyDetails');
    if (data) setCompanyDetails(JSON.parse(data));
  }, []);
  return (
    <DashboardLayout>
      {/* Page title & actions */}
      <div className='flex flex-row'>
        <div className=' basis-3/4'>
          <div className='border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'>
            <div className='min-w-0 flex-1'>
              <h1 className='text-lg font-medium leading-6 text-gray-900 sm:truncate'>
                Home
              </h1>
            </div>
            <div className='mt-4 flex sm:mt-0 sm:ml-4'>
              <button
                type='button'
                className='sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-0'
              >
                Share
              </button>
              <button
                type='button'
                className='order-0 inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:order-1 sm:ml-3'
              >
                Create
              </button>
            </div>
          </div>
          <section className='mt-6 px-4 sm:px-6 lg:px-8'>
            <h2 className='text-xs font-medium uppercase tracking-wide text-gray-500'>
              Overview
            </h2>
            <div className='grid gap-4 md:grid-cols-2 '>
              <div className='rounded-md border bg-white p-4'>
                <h3>Risk</h3>
                <div className='w-full rounded-full bg-gray-200'>
                  <div className='w-[25%] rounded-l-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100'>
                    25%
                  </div>
                </div>
              </div>
              <div className='rounded-md border bg-white p-4'>
                <h3>Compliance</h3>
                <div className='w-full rounded-full bg-gray-200'>
                  <div className='w-[45%] rounded-l-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100'>
                    45%
                  </div>
                </div>
              </div>
              <div className='rounded-md border bg-white p-4'>
                <h3>Stats</h3>
                <div className='grid grid-cols-3'>
                  <div>Open</div>
                  <div>Close</div>
                  <div>In Progress</div>
                  <div>5</div>
                  <div>2</div>
                  <div>6</div>
                </div>
              </div>
              <div className='rounded-md border bg-white p-4'>
                <h3>Overview</h3>
                <ResponsiveContainer height={300}>
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='c' fill='#8884d8' />
                    <Bar dataKey='pc' fill='#82ca9d' />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
          {/* Pinned projects */}
          <div className='mt-6 px-4 sm:px-6 lg:px-8'>
            <h2 className='text-xs font-medium uppercase tracking-wide text-gray-500'>
              Pinned Projects
            </h2>
            <ul
              role='list'
              className='mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4'
            >
              {pinnedProjects.map((project) => (
                <li
                  key={project.id}
                  className='relative col-span-1 flex rounded-md shadow-sm'
                >
                  <div
                    className={classNames(
                      project.bgColorClass,
                      'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                    )}
                  >
                    {companyDetails?.companyName
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase() || project.initials}
                  </div>
                  <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white'>
                    <div className='flex-1 truncate px-4 py-2 text-sm'>
                      <a
                        href='#'
                        className='font-medium text-gray-900 hover:text-gray-600'
                      >
                        {project.title}
                      </a>
                      <p className='text-gray-500'>
                        {project.totalMembers} Members
                      </p>
                    </div>
                    <Menu as='div' className='flex-shrink-0 pr-2'>
                      <Menu.Button className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'>
                        <span className='sr-only'>Open options</span>
                        <DotsVerticalIcon
                          className='h-5 w-5'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <div className='py-1'>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href='#'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  View
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className='py-1'>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href='#'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  Removed from pinned
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href='#'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  Share
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Projects list (only on smallest breakpoint) */}
          <div className='mt-10 sm:hidden'>
            <div className='px-4 sm:px-6'>
              <h2 className='text-xs font-medium uppercase tracking-wide text-gray-500'>
                Projects
              </h2>
            </div>
            <ul
              role='list'
              className='mt-3 divide-y divide-gray-100 border-t border-gray-200'
            >
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href='#'
                    className='group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6'
                  >
                    <span className='flex items-center space-x-3 truncate'>
                      <span
                        className={classNames(
                          project.bgColorClass,
                          'h-2.5 w-2.5 flex-shrink-0 rounded-full'
                        )}
                        aria-hidden='true'
                      />
                      <span className='truncate text-sm font-medium leading-6'>
                        {project.title}{' '}
                        <span className='truncate font-normal text-gray-500'>
                          in {project.team}
                        </span>
                      </span>
                    </span>
                    <ChevronRightIcon
                      className='ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Projects table (small breakpoint and up) */}
          <div className='mt-8 hidden sm:block'>
            <div className='inline-block min-w-full border-b border-gray-200 align-middle'>
              <table className='min-w-full'>
                <thead>
                  <tr className='border-t border-gray-200'>
                    <th
                      className='border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                      scope='col'
                    >
                      <span className='lg:pl-2'>Project</span>
                    </th>
                    <th
                      className='border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                      scope='col'
                    >
                      Members
                    </th>
                    <th
                      className='hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell'
                      scope='col'
                    >
                      Last updated
                    </th>
                    <th
                      className='border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-xs font-medium uppercase tracking-wider text-gray-500'
                      scope='col'
                    />
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-100 bg-white'>
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className='w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900'>
                        <div className='flex items-center space-x-3 lg:pl-2'>
                          <div
                            className={classNames(
                              project.bgColorClass,
                              'h-2.5 w-2.5 flex-shrink-0 rounded-full'
                            )}
                            aria-hidden='true'
                          />
                          <a href='#' className='truncate hover:text-gray-600'>
                            <span>
                              {project.title}{' '}
                              <span className='font-normal text-gray-500'>
                                in {project.team}
                              </span>
                            </span>
                          </a>
                        </div>
                      </td>
                      <td className='px-6 py-3 text-sm font-medium text-gray-500'>
                        <div className='flex items-center space-x-2'>
                          <div className='flex flex-shrink-0 -space-x-1'>
                            {project.members.map((member) => (
                              <img
                                key={member.handle}
                                className='h-6 w-6 max-w-none rounded-full ring-2 ring-white'
                                src={member.imageUrl}
                                alt={member.name}
                              />
                            ))}
                          </div>
                          {project.totalMembers > project.members.length ? (
                            <span className='flex-shrink-0 text-xs font-medium leading-5'>
                              +{project.totalMembers - project.members.length}
                            </span>
                          ) : null}
                        </div>
                      </td>
                      <td className='hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell'>
                        {project.lastUpdated}
                      </td>
                      <td className='whitespace-nowrap px-6 py-3 text-right text-sm font-medium'>
                        <a
                          href='#'
                          className='text-indigo-600 hover:text-indigo-900'
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='h-full basis-1/4'>
          <div className='p-4'>
            <h2 className='text-lg font-medium leading-6 text-gray-900 sm:truncate'>
              Alert and Notifications
            </h2>
            <div className='mt-6 flow-root'>
              <ul role='list' className='-my-5 divide-y divide-gray-200'>
                {announcements.map((announcement) => (
                  <li key={announcement.id} className='py-5'>
                    <div className='relative focus-within:ring-2 focus-within:ring-indigo-500'>
                      <h3 className='text-sm font-semibold text-gray-800'>
                        <a
                          href='#'
                          className='hover:underline focus:outline-none'
                        >
                          {/* Extend touch target to entire panel */}
                          <span
                            className='absolute inset-0'
                            aria-hidden='true'
                          />
                          {announcement.title}
                        </a>
                      </h3>
                      <p className='line-clamp-2 mt-1 text-sm text-gray-600'>
                        {announcement.preview}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
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
