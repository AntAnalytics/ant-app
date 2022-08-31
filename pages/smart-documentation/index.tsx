import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import ModernLayout from 'layouts/ModernLayout';
import { Dialog, Menu, Transition } from '@headlessui/react';

import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from '@heroicons/react/solid';
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
  ReferenceLine,
  Label,
} from 'recharts';
import { useEffect, useState } from 'react';
import { getApprovedSuppliers } from 'services/ASServcie';
import { ApprovedSupplier } from '@prisma/client';
import { isInThePastBy } from 'utils/isInThePastBy';

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
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

const cards = [
  { name: 'Audits', href: '#', icon: CheckCircleIcon, amount: '30' },
  { name: 'Reports', href: '#', icon: CogIcon, amount: '12' },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: 'vendor audit',
    href: '#',
    amount: '10',
    currency: 'USD',
    status: 'success',
    date: 'May 12, 2022',
    datetime: '2022-07-11',
  },
  {
    id: 2,
    name: 'Store audit',
    href: '#',
    amount: '8',
    currency: 'USD',
    status: 'failed',
    date: 'May 10, 2022',
    datetime: '2022-07-11',
  },
  {
    id: 3,
    name: 'transportation audit',
    href: '#',
    amount: '12',
    currency: 'USD',
    status: 'processing',
    date: 'May 08, 2022',
    datetime: '2022-07-11',
  },
  // More transactions...
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

const departmentRating = [
  {
    name: 'purchase',
    rating: 89,
  },
  {
    name: 'receiving',
    rating: 79,
  },
  {
    name: 'store',
    rating: 67,
  },
  {
    name: 'pre-production',
    rating: 82,
  },
  {
    name: 'production',
    rating: 90,
  },
  {
    name: 'service',
    rating: 70,
  },
  {
    name: 'transport',
    rating: 80,
  },
];

const complaintsCategory = [
  {
    name: 'A',
    totalComplaints: 89,
    openComplaints: 0,
  },
  {
    name: 'B',
    totalComplaints: 79,
    openComplaints: 1,
  },
  {
    name: 'C',
    totalComplaints: 67,
    openComplaints: 4,
  },
  {
    name: 'D',
    totalComplaints: 82,
    openComplaints: 0,
  },
  {
    name: 'E',
    totalComplaints: 90,
    openComplaints: 1,
  },
  {
    name: 'F',
    totalComplaints: 70,
    openComplaints: 2,
  },
  {
    name: 'G',
    totalComplaints: 80,
    openComplaints: 1,
  },
];

const temperatureData = [
  {
    date: '1-1-2022',
    value: 89,
  },
  {
    date: '2-1-2022',
    value: 79,
  },
  {
    date: '3-1-2022',
    value: 67,
  },
  {
    date: '4-1-2022',
    value: 82,
  },
  {
    date: '5-1-2022',
    value: 90,
  },
  {
    date: '6-1-2022',
    value: 70,
  },
  {
    date: '7-1-2022',
    value: 80,
  },
  {
    date: '8-1-2022',
    value: 82,
  },
  {
    date: '9-1-2022',
    value: 85,
  },
  {
    date: '10-1-2022',
    value: 90,
  },
  {
    date: '11-1-2022',
    value: 89,
  },
];

const internalAuditingRating = [
  {
    date: '1-1-2022',
    value: 89,
  },
  {
    date: '1-2-2022',
    value: 71,
  },
  {
    date: '3-3-2022',
    value: 98,
  },
  {
    date: '2-4-2022',
    value: 91,
  },
  {
    date: '1-5-2022',
    value: 95,
  },
  {
    date: '4-6-2022',
    value: 70,
  },
  {
    date: '1-7-2022',
    value: 80,
  },
];

const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type CompanyDetails = {
  companyName: string;
  gst: string;
};

function SmartDocumentationPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(
    null
  );

  const [records, setRecords] = useState<ApprovedSupplier[]>([]);

  useEffect(() => {
    getApprovedSuppliers()
      .then(({ data }) =>
        setRecords(
          data.approvedSuppliers.filter((approvedSupplier: ApprovedSupplier) =>
            isInThePastBy(approvedSupplier.licenseValidUpto, 7)
          )
        )
      )
      .catch((error) => {});

    const data = window.localStorage.getItem('companyDetails');
    if (data) setCompanyDetails(JSON.parse(data));
  }, []);
  return (
    <ModernLayout>
      <section className='flex w-full flex-col gap-4 lg:flex-row'>
        <div className='flex py-6 md:basis-3/4'>
          <div className='w-full gap-4 rounded-lg bg-white shadow-sm md:grid md:grid-cols-2 lg:grid-cols-3'>
            <div className='  p-4'>
              <h2 className=' text-base font-medium leading-6 text-gray-900 sm:truncate'>
                Cooking temperature graph
              </h2>
              <div className='aspect-video h-full w-full text-xs'>
                <ResponsiveContainer width='100%' height='90%'>
                  <LineChart width={200} height={100} data={temperatureData}>
                    <Tooltip />

                    <Line
                      type='monotone'
                      dataKey='value'
                      stroke='#8884d8'
                      strokeWidth={2}
                    />

                    <XAxis
                      label={{
                        value: 'Date',
                        // angle: -90,
                        position: 'insideBottom',
                        offset: 0,
                      }}
                    />

                    <YAxis
                      label={{
                        value: 'Temp (c)',
                        angle: -90,
                        position: 'insideLeft',
                        offset: 20,
                      }}
                      domain={['dataMin+2', 'dataMax+2']}
                    />

                    <ReferenceLine
                      y={74}
                      label='standard cooking temp 74c'
                      stroke='#bc7fd7'
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className='  p-4'>
              <h2 className=' text-base font-medium leading-6 text-gray-900 sm:truncate'>
                Internal auditing rating
              </h2>
              <div className='aspect-video h-full w-full text-xs'>
                <ResponsiveContainer width='100%' height='90%'>
                  <LineChart
                    width={500}
                    height={100}
                    data={internalAuditingRating}
                  >
                    <Tooltip />
                    <XAxis
                      type='category'
                      dataKey='date'
                      label={{
                        value: 'Date',
                        // angle: -90,
                        position: 'insideBottom',
                        offset: 0,
                      }}
                    />
                    <YAxis
                      type='number'
                      dataKey='value'
                      domain={['dataMin-5', 100]}
                      label={{
                        value: 'Rating (%)',
                        angle: -90,
                        position: 'insideLeft',
                        offset: 10,
                      }}
                    />

                    <Line
                      type='monotone'
                      dataKey='value'
                      stroke='#8884d8'
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className='flex gap-4 lg:flex-col'>
              <div className='  p-4'>
                <h2 className=' text-base font-medium leading-6 text-gray-900 sm:truncate'>
                  supplier compliance
                </h2>
                <p className='text-3xl font-extrabold '>91%</p>
              </div>
              <div className='  p-4'>
                <h2 className=' text-base font-medium leading-6 text-gray-900 sm:truncate'>
                  regular compliance
                </h2>
                <p className='text-3xl font-extrabold '>89%</p>
              </div>
            </div>
            <div className='col-span-2   p-4'>
              <h2 className=' text-base font-medium leading-6 text-gray-900 sm:truncate'>
                Department compliance rating
              </h2>
              <div className='text-xs'>
                <ResponsiveContainer height={400}>
                  <BarChart width={400} height={400} data={departmentRating}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis
                      dataKey='name'
                      className=''
                      label={{
                        value: 'Department',
                        // angle: -90,
                        position: 'insideBottom',
                        offset: 0,
                      }}
                    />
                    <YAxis
                      dataKey='rating'
                      label={{
                        value: 'Department rating (%)',
                        angle: -90,
                        position: 'insideLeft',
                        offset: 0,
                      }}
                      domain={['dataMin-5', 'dataMax+2']}
                    />
                    <Tooltip />
                    <Bar dataKey='rating' fill='#8884d8' />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className='  p-4'>
              <h2 className=' text-base font-medium leading-6 text-gray-900 sm:truncate'>
                complaints
              </h2>
              <div className='text-xs'>
                <ResponsiveContainer height={400}>
                  <BarChart
                    width={400}
                    layout='vertical'
                    height={400}
                    data={complaintsCategory}
                    margin={{
                      top: 5,
                      right: 0,
                      left: -20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis
                      dataKey='totalComplaints'
                      type='number'
                      className=''
                      domain={['dataMin-2', 'dataMax+2']}
                    >
                      <Label
                        value='#no of complaints'
                        offset={0}
                        position='insideBottom'
                      />
                    </XAxis>
                    <YAxis dataKey='name' type='category'>
                      <Label
                        value='complaints categories'
                        offset={30}
                        position='insideLeft'
                        angle={-90}
                      />
                    </YAxis>
                    <Tooltip />
                    <Bar
                      dataKey='totalComplaints'
                      stackId='a'
                      fill='#86EFAC'
                    ></Bar>
                    <Bar dataKey='openComplaints' stackId='a' fill='#F87171' />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className='  p-4'>
              <h2 className=' text-base font-medium leading-6 text-gray-900 sm:truncate'>
                Cooking temperature graph
              </h2>
              <div className='aspect-video h-full w-full text-xs'>
                <ResponsiveContainer width='100%' height='90%'>
                  <LineChart width={200} height={100} data={temperatureData}>
                    <Tooltip />

                    <Line
                      type='monotone'
                      dataKey='value'
                      stroke='#8884d8'
                      strokeWidth={2}
                    />

                    <XAxis
                      label={{
                        value: 'Date',
                        // angle: -90,
                        position: 'insideBottom',
                        offset: 0,
                      }}
                    />

                    <YAxis
                      label={{
                        value: 'Temp (c)',
                        angle: -90,
                        position: 'insideLeft',
                        offset: 20,
                      }}
                      domain={['dataMin+2', 'dataMax+2']}
                    />

                    <ReferenceLine
                      y={74}
                      label='standard cooking temp 74c'
                      stroke='#bc7fd7'
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className='col-span-2 p-4'>
              <h2 className=' text-base font-medium leading-6 text-gray-900 sm:truncate'>
                Department compliance rating
              </h2>
              <div className='text-xs'>
                <ResponsiveContainer height={300}>
                  <BarChart width={300} height={300} data={departmentRating}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis
                      dataKey='name'
                      className=''
                      label={{
                        value: 'Department',
                        // angle: -90,
                        position: 'insideBottom',
                        offset: 0,
                      }}
                    />
                    <YAxis
                      dataKey='rating'
                      label={{
                        value: 'Department rating (%)',
                        angle: -90,
                        position: 'insideLeft',
                        offset: 0,
                      }}
                      domain={['dataMin-5', 'dataMax+2']}
                    />
                    <Tooltip />
                    <Bar dataKey='rating' fill='#8884d8' />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className='flex max-h-[100vh] md:basis-1/4'>
          <div className='overflow-y-auto  bg-white p-4'>
            <h2 className=' text-lg font-medium leading-6 text-gray-900 sm:truncate'>
              Alert and Notifications
            </h2>
            <div className='mt-6 flow-root'>
              <ul role='list' className='-my-5 divide-y divide-gray-200'>
                {records.map((approvedSupplier) => (
                  <li key={approvedSupplier.id} className='border-b-2 pt-5'>
                    <div className='relative focus-within:ring-2 focus-within:ring-indigo-500'>
                      <h3 className='text-sm font-semibold text-gray-800'>
                        <a
                          href='#'
                          className='text-red-500 hover:underline focus:outline-none'
                        >
                          License expiring soon
                        </a>
                      </h3>
                      <p>
                        <span className='absolute inset-0' aria-hidden='true' />
                        supplier :{' '}
                        <span className='capitalize'>
                          {approvedSupplier.supplierName}
                        </span>
                        with : {approvedSupplier.fssaiLicenseNo}
                        <span className='text-xs'> FSSAI License No </span>
                        will expire on{' '}
                        <span className='font-bold'>
                          {approvedSupplier.licenseValidUpto}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {false && (
        <div className='relative mx-auto max-w-4xl md:px-8 xl:px-0'>
          <div className='pt-10 pb-16'>
            <div className='px-4 sm:px-6 md:px-0 '>
              <h1 className='text-3xl font-extrabold text-gray-900'>
                Smart Documentation
              </h1>
              <p>
                SMART documentation is fully complied with local, national and
                international regulations as well as applicable Global Food
                safety standards – ISO 22000, BRCGS, IFS, SQF, FSSC, HACCP.
              </p>
            </div>
            <div className='px-4 sm:px-6 md:px-0'>
              <div className='py-6'>
                <section className='mt-8'>
                  <div className='flex flex-col gap-4 '>
                    {/* Page header */}
                    <div className=' shadow'>
                      <div className='px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8'>
                        <div className='py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200'>
                          <div className='min-w-0 flex-1'>
                            {/* Profile */}
                            <div className='flex items-center'>
                              <img
                                className='hidden h-16 w-16 rounded-full sm:block'
                                src={session?.user?.image || ''}
                                alt=''
                              />
                              <div>
                                <div className='flex items-center'>
                                  <img
                                    className='h-16 w-16 rounded-full sm:hidden'
                                    src={session?.user?.image || ''}
                                    alt=''
                                  />
                                  <h1 className='ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9'>
                                    Good morning, {session?.user?.name}
                                  </h1>
                                </div>
                                <dl className='mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap'>
                                  <dt className='sr-only'>Company</dt>
                                  <dd className='flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6'>
                                    <OfficeBuildingIcon
                                      className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                                      aria-hidden='true'
                                    />
                                    {companyDetails?.companyName}
                                  </dd>
                                  <dt className='sr-only'>Account status</dt>
                                  <dd className='mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0'>
                                    <CheckCircleIcon
                                      className='mr-1.5 h-5 w-5 flex-shrink-0 text-green-400'
                                      aria-hidden='true'
                                    />
                                    Verified account
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          {/* <div className='mt-6 flex space-x-3 md:mt-0 md:ml-4'>
                          <button
                            type='button'
                            className='inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2'
                          >
                            Add money
                          </button>
                          <button
                            type='button'
                            className='inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2'
                          >
                            Send money
                          </button>
                        </div> */}
                        </div>
                      </div>
                    </div>

                    <div className='mt-8'>
                      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                        <h2 className='text-lg font-medium leading-6 text-gray-900'>
                          Overview
                        </h2>
                        <div className='mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                          <div>
                            <PieChart width={800} height={400}>
                              <Pie
                                data={data01}
                                cx={120}
                                cy={200}
                                innerRadius={60}
                                outerRadius={80}
                                fill='#8884d8'
                                paddingAngle={5}
                                dataKey='value'
                                label
                              >
                                {data01.map((entry, index) => (
                                  <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                  />
                                ))}
                              </Pie>
                              <Pie
                                data={data02}
                                cx={420}
                                cy={200}
                                startAngle={180}
                                endAngle={0}
                                innerRadius={60}
                                outerRadius={80}
                                fill='#8884d8'
                                paddingAngle={5}
                                dataKey='value'
                                label
                              >
                                {data02.map((entry, index) => (
                                  <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                  />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
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
                          </div>
                          {/* Card */}
                          {/* {cards.map((card) => (
                          <div
                            key={card.name}
                            className='overflow-hidden   shadow'
                          >
                            <div className='p-5'>
                              <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                  <card.icon
                                    className='h-6 w-6 text-gray-400'
                                    aria-hidden='true'
                                  />
                                </div>
                                <div className='ml-5 w-0 flex-1'>
                                  <dl>
                                    <dt className='truncate text-sm font-medium text-gray-500'>
                                      {card.name}
                                    </dt>
                                    <dd>
                                      <div className='text-lg font-medium text-gray-900'>
                                        {card.amount}
                                      </div>
                                    </dd>
                                  </dl>
                                </div>
                              </div>
                            </div>
                            <div className='bg-gray-50 px-5 py-3'>
                              <div className='text-sm'>
                                <a
                                  href={card.href}
                                  className='font-medium text-cyan-700 hover:text-cyan-900'
                                >
                                  View all
                                </a>
                              </div>
                            </div>
                          </div>
                        ))} */}
                        </div>
                      </div>

                      <h2 className='mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8'>
                        Recent activity
                      </h2>

                      {/* Activity list (smallest breakpoint only) */}
                      <div className='shadow sm:hidden'>
                        <ul
                          role='list'
                          className='mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden'
                        >
                          {transactions.map((transaction) => (
                            <li key={transaction.id}>
                              <a
                                href={transaction.href}
                                className='block  px-4 py-4 hover:bg-gray-50'
                              >
                                <span className='flex items-center space-x-4'>
                                  <span className='flex flex-1 space-x-2 truncate'>
                                    <CashIcon
                                      className='h-5 w-5 flex-shrink-0 text-gray-400'
                                      aria-hidden='true'
                                    />
                                    <span className='flex flex-col truncate text-sm text-gray-500'>
                                      <span className='truncate'>
                                        {transaction.name}
                                      </span>
                                      <span>
                                        <span className='font-medium text-gray-900'>
                                          {transaction.amount}
                                        </span>{' '}
                                        {transaction.currency}
                                      </span>
                                      <time dateTime={transaction.datetime}>
                                        {transaction.date}
                                      </time>
                                    </span>
                                  </span>
                                  <ChevronRightIcon
                                    className='h-5 w-5 flex-shrink-0 text-gray-400'
                                    aria-hidden='true'
                                  />
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>

                        <nav
                          className='flex items-center justify-between border-t border-gray-200  px-4 py-3'
                          aria-label='Pagination'
                        >
                          <div className='flex flex-1 justify-between'>
                            <a
                              href='#'
                              className='relative inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500'
                            >
                              Previous
                            </a>
                            <a
                              href='#'
                              className='relative ml-3 inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500'
                            >
                              Next
                            </a>
                          </div>
                        </nav>
                      </div>

                      {/* Activity table (small breakpoint and up) */}
                      <div className='hidden sm:block'>
                        <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                          <div className='mt-2 flex flex-col'>
                            <div className='sm: min-w-full overflow-hidden overflow-x-auto align-middle shadow'>
                              <table className='min-w-full divide-y divide-gray-200'>
                                <thead>
                                  <tr>
                                    <th
                                      className='bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                                      scope='col'
                                    >
                                      title
                                    </th>
                                    <th
                                      className='bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500'
                                      scope='col'
                                    >
                                      No. of Audit
                                    </th>
                                    <th
                                      className='hidden bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:block'
                                      scope='col'
                                    >
                                      Status
                                    </th>
                                    <th
                                      className='bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500'
                                      scope='col'
                                    >
                                      Date
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200 '>
                                  {transactions.map((transaction) => (
                                    <tr key={transaction.id} className=''>
                                      <td className='w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
                                        <div className='flex'>
                                          <a
                                            href={transaction.href}
                                            className='group inline-flex space-x-2 truncate text-sm'
                                          >
                                            <CashIcon
                                              className='h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                                              aria-hidden='true'
                                            />
                                            <p className='truncate text-gray-500 group-hover:text-gray-900'>
                                              {transaction.name}
                                            </p>
                                          </a>
                                        </div>
                                      </td>
                                      <td className='whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500'>
                                        <span className='font-medium text-gray-900'>
                                          {transaction.amount}{' '}
                                        </span>
                                        {/* {transaction.currency} */}
                                      </td>
                                      <td className='hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block'>
                                        <span
                                          className={classNames(
                                            //@ts-ignore
                                            statusStyles[transaction.status],
                                            'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize'
                                          )}
                                        >
                                          {transaction.status}
                                        </span>
                                      </td>
                                      <td className='whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500'>
                                        <time dateTime={transaction.datetime}>
                                          {transaction.date}
                                        </time>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                              {/* Pagination */}
                              <nav
                                className='flex items-center justify-between border-t border-gray-200  px-4 py-3 sm:px-6'
                                aria-label='Pagination'
                              >
                                <div className='hidden sm:block'>
                                  <p className='text-sm text-gray-700'>
                                    Showing{' '}
                                    <span className='font-medium'>1</span> to{' '}
                                    <span className='font-medium'>10</span> of{' '}
                                    <span className='font-medium'>20</span>{' '}
                                    results
                                  </p>
                                </div>
                                <div className='flex flex-1 justify-between sm:justify-end'>
                                  <a
                                    href='#'
                                    className='relative inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                                  >
                                    Previous
                                  </a>
                                  <a
                                    href='#'
                                    className='relative ml-3 inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                                  >
                                    Next
                                  </a>
                                </div>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
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

export default SmartDocumentationPage;
