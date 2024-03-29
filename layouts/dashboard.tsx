import { FunctionComponent } from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Smart Documents',
    href: '/smart-documentation',
    icon: InboxIcon,
  },
  {
    name: 'Smart Auditing System',
    href: '/checklist/fssai-mandatory',
    icon: BellIcon,
  },
  {
    name: 'Tech Based Regulatory Compliance',
    href: '/commingsoon',
    icon: UsersIcon,
  },
  {
    name: 'Smart Food Safety Management System',
    href: '/commingsoon',
    icon: FolderIcon,
  },
  {
    name: 'VR Based Training System  ',
    href: '/commingsoon',
    icon: CalendarIcon,
  },
  {
    name: 'Smart Supplier Management System  ',
    href: '/commingsoon',
    icon: ChartBarIcon,
  },
  { name: 'Smart Laboratory  ', href: '/commingsoon', icon: ChartBarIcon },
  {
    name: 'Digital Specifications  ',
    href: '/commingsoon',
    icon: ChartBarIcon,
  },
  { name: 'Smart GFSI  ', href: '/commingsoon', icon: ChartBarIcon },
  { name: 'Smart  EMP', href: '/commingsoon', icon: ChartBarIcon },
];
const userNavigation = [
  { name: 'Settings', href: '/setting' },
  { name: 'Help', href: '/help' },
  { name: 'Sign out', href: '/api/auth/signout' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface DashboardLayoutProps {}

const DashboardLayout: FunctionComponent<DashboardLayoutProps> = ({
  children,
}) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const ActiveFeatures = 3;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 md:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 z-40 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 right-0 -mr-12 pt-2'>
                      <button
                        type='button'
                        className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex flex-shrink-0 items-center px-4'>
                    <img
                      className='h-8 w-auto'
                      src='/TAA-Logo.png'
                      alt='Workflow'
                    />
                  </div>
                  <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                    <nav className='space-y-1 px-2'>
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a
                            className={classNames(
                              router.asPath.includes(item.href)
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                router.asPath.includes(item.href)
                                  ? 'text-gray-300'
                                  : 'text-gray-400 group-hover:text-gray-300',
                                'mr-4 h-6 w-6 flex-shrink-0'
                              )}
                              aria-hidden='true'
                            />
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className='w-14 flex-shrink-0' aria-hidden='true'>
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex min-h-0 flex-1 flex-col bg-gray-800'>
            <div className='flex h-16 flex-shrink-0 items-center bg-gray-900 px-4'>
              <img className='h-8 w-auto' src='/TAA-Logo.png' alt='Workflow' />
              <span className='text-white'>The Any Analytics</span>
            </div>
            <div className='flex flex-1 flex-col overflow-y-auto'>
              <nav className='flex-1 space-y-1 px-2 py-4'>
                {navigation.map((item, index) => (
                  <>
                    {index === ActiveFeatures && (
                      <span className='ml-4 text-white/75'>
                        --- comming soon ---
                      </span>
                    )}
                    <Link key={item.name} href={item.href}>
                      <a
                        className={classNames(
                          router.asPath.includes(item.href)
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            router.asPath.includes(item.href)
                              ? 'text-gray-300'
                              : 'text-gray-400 group-hover:text-gray-300',
                            'mr-3 h-6 w-6 flex-shrink-0'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    </Link>
                  </>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:pl-64'>
          <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow'>
            <button
              type='button'
              className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flex flex-1 justify-between px-4'>
              <div className='flex flex-1'>
                {/* <form className='flex w-full md:ml-0' action='#' method='GET'>
                  <label htmlFor='search-field' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
                      <SearchIcon className='h-5 w-5' aria-hidden='true' />
                    </div>
                    <input
                      id='search-field'
                      className='block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm'
                      placeholder='Search'
                      type='search'
                      name='search'
                    />
                  </div>
                </form> */}
              </div>
              <div className='ml-4 flex items-center md:ml-6'>
                {/* <button
                  type='button'
                  className='rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button> */}

                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='flex max-w-xs items-center rounded-full bg-white text-sm ring-2 ring-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                      <span className='sr-only'>Open user menu</span>
                      <Image
                        className='h-8 w-8 rounded-full '
                        src={session?.user?.image || '/'}
                        height={32}
                        width={32}
                        alt='profile image'
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item key={'name'}>
                        {({ active }) => (
                          <p
                            className={classNames(
                              'block select-none px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Hi 👋, {session?.user?.name}
                            <hr className='mt-4' />
                          </p>
                        )}
                      </Menu.Item>
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className='flex-1'>
            <div className='py-6'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
                {/* Replace with your content */}
                <div className='py-4'>{children}</div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
