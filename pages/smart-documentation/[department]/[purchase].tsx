import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DocumentationLayout from 'layouts/documentation';
import test from 'src/checklists/test';

const answerOptions = [
  { id: 'yes', title: 'Yes', score: 1 },
  { id: 'no', title: 'No', score: 0 },
  { id: 'na', title: 'N/A', score: 1 },
];
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { signIn, getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardBreadcrumbs from 'components/Breadcrumbs/dashboard';
import { useForm } from 'react-hook-form';

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

const actions = [
  {
    title: 'Approved supplier',
    subtitle:
      ' Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
    href: '/approved-supplier',
    icon: BadgeCheckIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Supplier specification',
    subtitle:
      ' Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },

  {
    title: 'Vendor audit (format)',
    subtitle:
      ' Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function PurchasePage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    let score = 0;
    Object.values(data).forEach((answer) => {
      if (answer !== 'No') score++;
    });
    console.log({ score });
  };
  const { data: session, status } = useSession();
  const router = useRouter();

  const pages = [
    { name: 'Smart Documentation', href: '/smart-documentation' },
    { name: 'Purchase', href: '/smart-documentation/purchase' },
  ];

  return (
    <DocumentationLayout>
      <div className='relative mx-auto max-w-4xl md:px-8 xl:px-0'>
        <div className='px-4 sm:px-6 md:px-0'>
          <div className='py-6'>
            <section className='container mx-auto py-10'>
              <form onSubmit={handleSubmit(onSubmit)}>
                {test.map((section, sIndex) => (
                  <div key={section.id} className='my-8 p-4'>
                    <h2 className='text-xl font-bold text-indigo-600'>
                      {section.title}
                    </h2>
                    {section.questions.map((q, qIndex) => (
                      <div
                        key={q.id}
                        className='my-1 flex flex-col justify-between border-t-2 md:flex-row'
                      >
                        <h3 className='col-span-2 text-base'>
                          <span className='mr-4'>{qIndex + 1})</span>
                          {q.question}
                        </h3>
                        <div className='flex space-x-8'>
                          {answerOptions.map((answerOption) => (
                            <div
                              key={answerOption.id}
                              className='flex items-center '
                            >
                              <input
                                id={q.id + '/' + answerOption.id}
                                type='radio'
                                value={answerOption.title}
                                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                {...register(q.id.toString(), {
                                  required: true,
                                })}
                              />
                              <label
                                htmlFor={q.id + '/' + answerOption.id}
                                className='ml-3 block select-none text-sm font-medium text-gray-700'
                              >
                                {answerOption.title}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                <button
                  type='submit'
                  className='ml-auto flex rounded bg-indigo-600 px-4 py-2 text-white'
                >
                  Submit
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </DocumentationLayout>
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

export default PurchasePage;
