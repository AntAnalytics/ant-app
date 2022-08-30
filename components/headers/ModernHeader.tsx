/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, Fragment, SetStateAction } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  UserCircleIcon,
  InformationCircleIcon,
  LogoutIcon,
  MenuIcon,
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

interface ModernHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}
export default function ModernHeader({
  sidebarOpen,
  setSidebarOpen,
}: ModernHeaderProps) {
  const { data: session } = useSession();

  return (
    <Disclosure as='nav' className='bg-primary z-10 shadow'>
      {({ open }) => (
        <>
          <div className='mx-auto px-2 sm:pr-6 lg:pr-8'>
            <div className='relative flex h-16 justify-between'>
              <div className='flex gap-2'>
                <div className='my-auto flex h-fit rounded-md bg-white'>
                  <button
                    type='button'
                    className='r inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  >
                    <span className='sr-only'>Open sidebar</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href='/'>
                    <a className='flex items-center rounded-md bg-yellow-100 p-1 font-bold'>
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
                    <Menu.Button className='flex items-center rounded-full  bg-white/50 p-1 pr-2 text-sm focus:ring-2'>
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
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg  focus:outline-none'>
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
        </>
      )}
    </Disclosure>
  );
}
