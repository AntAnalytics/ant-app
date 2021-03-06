/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NewProduct() {
  const [isClose, setIsClose] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      setIsClose(false);
    }, 2000);
  }, []);
  return isClose ? null : (
    <div className='bg-indigo-600'>
      <div className='mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex w-0 flex-1 items-center'>
            <span className='flex rounded-lg bg-indigo-800 p-2'>
              <SpeakerphoneIcon
                className='h-6 w-6 text-white'
                aria-hidden='true'
              />
            </span>
            <p className='ml-3 truncate font-medium text-white'>
              <span className='md:hidden'>We announced a new product!</span>
              <span className='hidden md:inline'>
                Big news! We&apos;re excited to announce a brand new product.
              </span>
            </p>
          </div>
          <div className='order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto'>
            <Link href='/v2'>
              <a className='flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50'>
                Learn more
              </a>
            </Link>
          </div>
          <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
            <button
              type='button'
              className='-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
              onClick={() => setIsClose(true)}
            >
              <span className='sr-only'>Dismiss</span>
              <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
