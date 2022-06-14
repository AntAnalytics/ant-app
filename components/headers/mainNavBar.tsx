/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';

const solutions = [
  {
    name: 'Digital Auditing System    ',
    description: "Your customers' data will be safe and secure.",
    href: '/tools/digital-auditing-system',
    icon: ShieldCheckIcon,
  },

  {
    name: 'Smart Documentation    ',
    description:
      'Get detailed reports that will help you make more informed decisions ',
    href: '/tools/smart-documentation',
    icon: DocumentReportIcon,
  },
];
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '/help',
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  // {
  //   name: 'Events',
  //   description:
  //     'See what meet-ups and other events we might be planning near you.',
  //   href: '#',
  // },
  // {
  //   name: 'Security',
  //   description: 'Understand how we take your privacy seriously.',
  //   href: '#',
  // },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function MainNavBar() {
  const { status } = useSession();
  return (
    <Popover className='relative z-50 bg-white print:hidden'>
      <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <Link href='/'>
            <a>
              <span className='sr-only'>Workflow</span>
              <Image
                height={40}
                width={40}
                src='/TAA-Logo.png'
                alt='Company name'
              />
            </a>
          </Link>
        </div>
        <div className='-my-2 -mr-2 md:hidden'>
          <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  )}
                >
                  <span>Solutions</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden='true'
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2'>
                    <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                      <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2'>
                        {solutions.map((solution) => (
                          <Link key={solution.name} href={solution.href}>
                            <a className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'>
                              <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'>
                                <solution.icon
                                  className='h-6 w-6'
                                  aria-hidden='true'
                                />
                              </div>
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {solution.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {solution.description}
                                </p>
                              </div>
                            </a>
                          </Link>
                        ))}
                      </div>
                      <div className='bg-gray-50 p-5 sm:p-8'>
                        <a
                          href='https://theantanalytics.com/#products'
                          target='_blank'
                          className='-m-3 flow-root rounded-md p-3 hover:bg-gray-100'
                          rel='noreferrer'
                        >
                          <div className='flex items-center'>
                            <div className='text-base font-medium text-gray-900'>
                              Many More
                            </div>
                            <span className='ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-indigo-800'>
                              New
                            </span>
                          </div>
                          <p className='mt-1 text-sm text-gray-500'>
                            Empower your entire team with even more advanced
                            tools.
                          </p>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Link href='/about-us'>
            <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
              About us
            </a>
          </Link>
          <Link href='/contact'>
            <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Contact
            </a>
          </Link>

          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  )}
                >
                  <span>More</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden='true'
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0'>
                    <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                      <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                        {resources.map((resource) => (
                          <Link key={resource.name} href={resource.href}>
                            <a className='-m-3 block rounded-md p-3 hover:bg-gray-50'>
                              <p className='text-base font-medium text-gray-900'>
                                {resource.name}
                              </p>
                              <p className='mt-1 text-sm text-gray-500'>
                                {resource.description}
                              </p>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
        <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
          {status === 'authenticated' ? (
            <Link href='/dashboard'>
              <a className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
              </a>
            </Link>
          ) : (
            <button
              onClick={() => signIn('google')}
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Sign in
            </button>
          )}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <Image
                    height={90}
                    width={90}
                    src='/TAA-Logo.png'
                    alt='Company name'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid grid-cols-1 gap-7'>
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className='-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50'
                    >
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white'>
                        <solution.icon className='h-6 w-6' aria-hidden='true' />
                      </div>
                      <div className='ml-4 text-base font-medium text-gray-900'>
                        {solution.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className='py-6 px-5'>
              <div className='grid grid-cols-2 gap-4'>
                {/* <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Pricing
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Docs
                </a> */}

                <a
                  href='https://theantanalytics.com/#products'
                  target='_blank'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                  rel='noreferrer'
                >
                  Many More
                </a>
                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
              <div className='mt-6'>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                >
                  Sign up
                </a>
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Existing customer?{' '}
                  <a href='#' className='text-indigo-600 hover:text-indigo-500'>
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
