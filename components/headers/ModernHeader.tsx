/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  UserCircleIcon,
  InformationCircleIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const userNavigation = [
  { name: 'Settings', href: '/setting', icon: UserCircleIcon },
  { name: 'Help', href: '/help', icon: InformationCircleIcon },
  { name: 'Sign out', href: '/api/auth/signout', icon: LogoutIcon },
];

export default function ModernHeader() {
  const { data: session } = useSession();

  return (
    <Disclosure as='nav' className='bg-primary shadow'>
      {({ open }) => (
        <>
          <div className='mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 justify-between'>
              <div className='flex '>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href='/'>
                    <a className='flex items-center rounded-md bg-slate-300 p-1 font-bold'>
                      <Image
                        className='block h-8 w-auto'
                        src='/TAA-Logo.png'
                        alt='TAA logo'
                        height={32}
                        width={32}
                      />
                      The Ant Analytics
                    </a>
                  </Link>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='flex items-center rounded-full  text-sm '>
                      <span className='sr-only'>Open user menu</span>
                      <Image
                        className='h-8 w-8 rounded-full'
                        src={session?.user.image || '/'}
                        alt='user profile image'
                        height={32}
                        width={32}
                      />
                      <span className='ml-2 text-xs'>{session?.user.role}</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg  focus:outline-none'>
                      <Menu.Item key={'name'}>
                        {({ active }) => (
                          <>
                            <p
                              className={classNames(
                                'block select-none px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Hi 👋, {session?.user?.name}
                            </p>
                            <hr className='mx-auto mt-2 w-[90%]' />
                          </>
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
                              <item.icon className='mr-2 inline-flex h-4  w-4 items-center' />
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

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pt-2 pb-4'>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as='a'
                href='#'
                className='block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
