import PageLayout from 'layouts/PageLayout';

import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import { getSession, signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
const features = [
  {
    name: 'Tech Based Regulatory Compliance',
    description: 'Global food regulations at your palm.',
    icon: InboxIcon,
  },
  {
    name: 'Smart Food Safety Management System',
    description: 'Make your HACCP plan Smarter.',
    icon: UsersIcon,
  },
  {
    name: 'VR Based Training System',
    description: 'Effective training in a smart way.',
    icon: TrashIcon,
  },
  {
    name: 'Smart Supplier Management System',
    description: 'Supplier risk management through data analytics.',
    icon: PencilAltIcon,
  },
  {
    name: 'Smart Laboratory',
    description: 'Smart integration of lab activities.',
    icon: DocumentReportIcon,
  },
  {
    name: 'Digital Specifications',
    description: 'Digital control of specifications.',
    icon: ReplyIcon,
  },
  {
    name: 'Smart GFSI',
    description: 'Smart compliance to GFSI standards.',
    icon: ChatAltIcon,
  },
  {
    name: 'Smart EMP',
    description: 'Digital assurance of Plant environment.',
    icon: HeartIcon,
  },
];
const metrics = [
  {
    id: 1,
    stat: '10+',
    emphasis: 'ways',
    rest: 'to showcase the insights from the collected data to generate visualisations.',
  },
  {
    id: 2,
    stat: '50+',
    emphasis: 'templates',
    rest: 'for audit and compliances to provide you ease.',
  },
  {
    id: 3,
    stat: '20+',
    emphasis: 'standard checklists',
    rest: 'from popular countries throughout the world.',
  },
  {
    id: 4,
    stat: '98%',
    emphasis: 'customer satisfaction ',
    rest: ' ensured by our 24*7 support and assistance.',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function HomeV2() {
  return (
    <PageLayout>
      <div className='bg-white'>
        {/* Hero section */}
        <div className='relative'>
          <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
          <div className=''>
            <div className='relative shadow-xl sm:overflow-hidden '>
              <div className='absolute inset-0'>
                <img
                  className='h-full w-full object-cover'
                  src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100'
                  alt='People working on laptops'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply' />
              </div>
              <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                  {/* <span className='block text-white'>Take control of your</span> */}
                  <span className='block text-indigo-200'>
                    Quality. Sustainability. Technology.
                  </span>
                </h1>
                <p className='mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl'>
                  END-to-END solutions for food businesses looking to meet and
                  exceed the global Food Safety standards and industry best
                  practices.
                </p>
                <div className='mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center'>
                  <div className='space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0'>
                    <Link href='/signin'>
                      <a>
                        <button className='flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8'>
                          Get started
                        </button>
                      </a>
                    </Link>
                    <a
                      href='#'
                      className='flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8'
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className='bg-gray-100'>
          <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
            <p className='text-center text-sm font-semibold uppercase tracking-wide text-gray-500'>
              Food safety solutions created by the experts from renowned
              companies
            </p>
            <div className='mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                  alt='Tuple'
                />
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
                  alt='Mirage'
                />
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                  alt='StaticKit'
                />
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
                  alt='Transistor'
                />
              </div>
              <div className='col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
                  alt='Workcation'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Feature Sections */}
        <div className='relative overflow-hidden pt-16 pb-32'>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100'
          />
          <div className='relative'>
            <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
              <div className='mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0'>
                <div>
                  <div>
                    <span className='flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600'>
                      <InboxIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </span>
                  </div>
                  <div className='mt-6'>
                    <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                      Smart Document Management System
                    </h2>
                    <p className='mt-4 text-lg text-gray-500'>
                      The Ant Analytics provides smart documentation and
                      customised solutions to food business organisations
                      according to the need of their Food Safety and Quality
                      assurance system. Usage of Big data and predictive
                      analysis wherever applicable, enabling customised Food
                      safety documentation for businesses.
                    </p>
                    <div className='mt-6'>
                      <Link href='/signin'>
                        <a>
                          <button className='inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700'>
                            Get started
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className='mt-8 border-t border-gray-200 pt-6'>
                  <blockquote>
                    <div>
                      <p className='text-base text-gray-500'>
                        &ldquo;Cras velit quis eros eget rhoncus lacus ultrices
                        sed diam. Sit orci risus aenean curabitur donec aliquet.
                        Mi venenatis in euismod ut.&rdquo;
                      </p>
                    </div>
                    <footer className='mt-3'>
                      <div className='flex items-center space-x-3'>
                        <div className='flex-shrink-0'>
                          <img
                            className='h-6 w-6 rounded-full'
                            src='https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                            alt=''
                          />
                        </div>
                        <div className='text-base font-medium text-gray-700'>
                          Marcia Hill, Digital Marketing Manager
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div> */}
              </div>
              <div className='mt-12 sm:mt-16 lg:mt-0'>
                <div className='-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0'>
                  <img
                    className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                    src='/assets/images/SDMS.png'
                    alt='Inbox user interface'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-24'>
            <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
              <div className='mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0'>
                <div>
                  <div>
                    <span className='flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600'>
                      <SparklesIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </span>
                  </div>
                  <div className='mt-6'>
                    <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                      Digital Auditing System
                    </h2>
                    <p className='mt-4 text-lg text-gray-500'>
                      The Ant Analytics provides businesses with the complete
                      digitalisation of audit programmes which enables the
                      organisations in managing them on high levels of
                      precision, timely closure of non-conformances, relevant
                      escalations and alerts, and generating precise and
                      accurate audit reports. Audit precision is ensured by
                      adopting intelligent auditing algorithms.
                    </p>
                    <div className='mt-6'>
                      <button
                        onClick={() =>
                          signIn('google', { callbackUrl: '/dashboard' })
                        }
                        className='inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700'
                      >
                        Get started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12 sm:mt-16 lg:col-start-1 lg:mt-0'>
                <div className='-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0'>
                  <img
                    className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                    src='/assets/images/DASImage.png'
                    alt='Customer profile user interface'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className='bg-gradient-to-r from-purple-800 to-indigo-700'>
          <div className='mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24'>
            <h2 className='text-3xl font-extrabold tracking-tight text-white'>
              Explore our other products and services
            </h2>
            <p className='mt-4 max-w-3xl text-lg text-purple-200'>
              and let us help you run your business with increased efficiency
              and productivity.
            </p>
            <div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className='flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10'>
                      <feature.icon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </span>
                  </div>
                  <div className='mt-6'>
                    <h3 className='text-lg font-medium text-white'>
                      {feature.name}
                    </h3>
                    <p className='mt-2 text-base text-purple-200'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className='relative bg-gray-900'>
          <div className='absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full'>
            <div className='h-full w-full xl:grid xl:grid-cols-2'>
              <div className='h-full xl:relative xl:col-start-2'>
                <img
                  className='h-full w-full object-cover opacity-25 xl:absolute xl:inset-0'
                  src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100'
                  alt='People working on laptops'
                />
                <div
                  aria-hidden='true'
                  className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
                />
              </div>
            </div>
          </div>
          <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8'>
            <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
              <h2 className='text-sm font-semibold uppercase tracking-wide'>
                <span className='bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent'>
                  Valuable Metrics
                </span>
              </h2>
              <p className='mt-3 text-3xl font-extrabold text-white'>
                Get actionable data that will help grow your business
              </p>
              {/* <p className='mt-5 text-lg text-gray-300'>
                “It’s a personal decision. It’s a hard and painful decision.
                It’s an emotional, fraught decision. However, shutting down
                doesn’t have to be a blind decision.”
              </p> */}
              <div className='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2'>
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className='block text-2xl font-bold text-white'>
                      {item.stat}
                    </span>
                    <span className='mt-1 block text-base text-gray-300'>
                      <span className='font-medium text-white'>
                        {item.emphasis}
                      </span>{' '}
                      {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='bg-white'>
          <div className='mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8'>
            <h2 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              <span className='block'>Ready to get started?</span>
              <span className='-mb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text pb-1 text-transparent'>
                Get in touch or create an account.
              </span>
            </h2>
            <div className='mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5'>
              <a
                href='#'
                className='flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700'
              >
                Learn more
              </a>
              <button
                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                className='flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100'
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
