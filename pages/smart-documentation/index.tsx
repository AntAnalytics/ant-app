import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DocumentationLayout from 'layouts/documentation';

import { signIn, getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function SmartDocumentationPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <DocumentationLayout>
      <div className='relative mx-auto max-w-4xl md:px-8 xl:px-0'>
        <div className='pt-10 pb-16'>
          <div className='px-4 sm:px-6 md:px-0'>
            <h1 className='text-3xl font-extrabold text-gray-900'>
              Smart Documentation
            </h1>
            <p>
              SMART documentation is fully complied with local, national and
              international regulations as well as applicable Global Food safety
              standards – ISO 22000, BRCGS, IFS, SQF, FSSC, HACCP.
            </p>
          </div>
          <div className='px-4 sm:px-6 md:px-0'>
            <div className='py-6'>
              <section className='mt-8'>
                <div className='flex flex-col gap-4 '></div>
              </section>
            </div>
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

export default SmartDocumentationPage;
