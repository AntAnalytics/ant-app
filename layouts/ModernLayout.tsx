import ModernHeader from 'components/headers/ModernHeader';
import ModernSideBar from 'components/headers/ModernSideBar';
import { Fragment, FunctionComponent, useState } from 'react';

import {
  AdjustmentsIcon,
  BanIcon,
  BellIcon,
  CalendarIcon,
  CashIcon,
  ChartBarIcon,
  DocumentDownloadIcon,
  FolderIcon,
  HandIcon,
  HomeIcon,
  InboxIcon,
  LinkIcon,
  MenuAlt2Icon,
  MenuIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  SupportIcon,
  TruckIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ModernLayoutProps {}

const navigation = [
  {
    name: 'Purchase',
    href: '/smart-documentation/purchase',
    children: [
      // { name: 'Supplier specification', href: '/supplier-specification' },
      { name: 'Approved supplier', href: '/approved-supplier' },
      { name: 'Vendor audit (format)', href: '/vendor-audit' },
    ],
    icon: CashIcon,
  },
  {
    name: 'Receiving',
    href: '/smart-documentation/receiving',
    children: [
      // { name: 'Receiving checklist ', href: '/receiving-checklist' },
      { name: 'Receiving report', href: '/receiving-report' },
      // { name: 'Calendar', href: '/calendar' },
      {
        name: 'Vehicle Inspection Checklist',
        href: '/vehicle-inspection-checklist',
      },
    ],
    icon: DocumentDownloadIcon,
  },
  {
    name: 'Stores',
    href: '/smart-documentation/stores',
    children: [
      { name: 'Issue  checklist', href: '/issue-checklist' },
      { name: 'Inventory', href: '/inventory' },
    ],
    icon: InboxIcon,
  },
  {
    name: 'Pre Production',
    href: '/smart-documentation/pre-production',
    children: [
      { name: 'Product sanitization', href: '/product-sanitization' },
      { name: 'Sanitization', href: '/sanitization' },
      { name: 'Thawing', href: '/thawing' },
      {
        name: 'Sanitizing tank concentration record',
        href: '/sanitizing-tank-concentration-record',
      },
    ],

    icon: SparklesIcon,
  },
  {
    name: 'Production',
    href: '/smart-documentation/production',
    children: [
      { name: 'Cooking record', href: '/cooking-record' },
      { name: 'Cooling record', href: '/cooling-record' },
      { name: 'Reheating record', href: '/reheating-record' },
      { name: 'Discard', href: '/discard' },
    ],
    icon: SpeakerphoneIcon,
  },

  {
    name: 'Service',
    href: '/smart-documentation/service',
    children: [
      { name: 'Hot holding record', href: '/hot holding record' },
      { name: 'Cold holding record', href: '/cold holding record' },
    ],
    icon: AdjustmentsIcon,
  },
  {
    name: 'Transportation',
    href: '/smart-documentation/transportation',
    children: [
      { name: 'Transportation checklist', href: '/transportation-checklist' },
    ],
    icon: TruckIcon,
  },
  {
    name: 'Personal Hygiene',
    href: '/smart-documentation/personal-hygiene',
    children: [
      {
        name: 'Personal hygiene checklist',
        href: '/personal-hygiene-checklist',
      },
    ],
    icon: HandIcon,
  },
  {
    name: 'Quality assusrance',
    href: '/smart-documentation/quality-assusrance',
    children: [
      {
        name: 'Internal audit/ self audit',
        href: '/internal-audit-self-audit',
      },
      { name: 'Traceability', href: '/traceability' },
      { name: 'External Test reports', href: '/external-test-reports' },
      { name: 'Management Review ', href: '/management-review ' },
    ],
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Regulatory',

    href: '/smart-documentation/regulatory',
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
    icon: BanIcon,
  },
  {
    name: 'Support services',
    href: '/smart-documentation/support-services',
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
    icon: SupportIcon,
  },
  {
    name: 'Pest control Management',
    href: '/smart-documentation/pest-control-management',
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
    icon: LinkIcon,
  },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ModernLayout: FunctionComponent<ModernLayoutProps> = ({ children }) => {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ModernHeader />
      <div
        className={classNames(
          'fixed mt-16 transition-all md:inset-y-0 md:flex md:flex-col',
          sidebarOpen ? 'w-64' : 'w-12'
        )}
      >
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white'>
          <div className='flex flex-1 flex-col overflow-y-auto pb-4'>
            <nav className='flex-1 space-y-1 bg-white px-2  pt-4'>
              {navigation.map((item) =>
                !item.children ? (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={classNames(
                        router.asPath.includes(item.href)
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          router.asPath.includes(item.href)
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 h-6 w-6 flex-shrink-0'
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  </Link>
                ) : (
                  <Disclosure as='div' key={item.name} className='space-y-1'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            router.asPath.includes(item.href)
                              ? 'bg-gray-100 text-gray-900'
                              : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500'
                          )}
                        >
                          <item.icon
                            className='mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                            aria-hidden='true'
                          />
                          <span className='flex-1'>{item.name}</span>
                          <svg
                            className={classNames(
                              open
                                ? 'rotate-90 text-gray-400'
                                : 'text-gray-300',
                              'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                            )}
                            viewBox='0 0 20 20'
                            aria-hidden='true'
                          >
                            <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className='space-y-1'>
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={item.href + subItem.href}
                            >
                              <a>
                                <Disclosure.Button className='group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'>
                                  {subItem.name}
                                </Disclosure.Button>
                              </a>
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          'flex flex-1 flex-col transition-all',
          sidebarOpen ? ' pl-64' : 'pl-12'
        )}
      >
        <div className='sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3'>
          <button
            type='button'
            className='-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <main className='flex-1'>
          <div className='p-6'>{children}</div>
        </main>
      </div>
    </>
  );
};

export default ModernLayout;
