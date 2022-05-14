/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function DashboardBreadcrumbs({
  pages,
}: {
  pages: {
    name: string;
    href: string;
  }[];
}) {
  return (
    <nav
      className='flex border-b border-gray-200 bg-white/50'
      aria-label='Breadcrumb'
    >
      <ol
        role='list'
        className='mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8'
      >
        <li className='flex'>
          <div className='flex items-center'>
            <Link href='/dashboard'>
              <a className='text-gray-400 hover:text-gray-500'>
                <HomeIcon
                  className='h-5 w-5 flex-shrink-0'
                  aria-hidden='true'
                />
                <span className='sr-only'>Home</span>
              </a>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className='flex'>
            <div className='flex items-center'>
              <svg
                className='h-full w-6 flex-shrink-0 text-gray-200'
                viewBox='0 0 24 44'
                preserveAspectRatio='none'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
              </svg>
              <Link href={page.href}>
                <a className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'>
                  {page.name}
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
