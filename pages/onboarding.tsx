import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DashboardLayout from 'layouts/dashboard';
import { getSession, useSession } from 'next-auth/react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type CompanyDetails = {
  companyName: string;
  gst: string;
  country: string;
  streetAddress: string;
  city: string;
  region: string;
  postalCode: string;
};

function DashBoardPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const { data: session, status } = useSession();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(
    null
  );

  useEffect(() => {
    const data = window.localStorage.getItem('companyDetails');
    if (data) setCompanyDetails(JSON.parse(data));
  }, []);

  const onSubmit = (data: any) => {
    window.localStorage.setItem('companyDetails', JSON.stringify(data));
    router.push('/dashboard');
  };
  return (
    <DashboardLayout>
      <section>
        <h1>Hello @{session?.user?.name}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='pt-8'>
            <div>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Personal Information
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='companyName'
                  className='block text-sm font-medium text-gray-700'
                >
                  Company name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    {...register('companyName', { required: true })}
                    id='companyName'
                    autoComplete='given-name'
                    defaultValue={companyDetails?.companyName}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-gray-700'
                >
                  Country
                </label>
                <div className='mt-1'>
                  <select
                    id='country'
                    {...register('country', { required: true })}
                    autoComplete='country-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  >
                    <option>India</option>
                    <option>United States</option>
                    <option>Europe</option>
                  </select>
                </div>
              </div>

              <div className='sm:col-span-6'>
                <label
                  htmlFor='streetAddress'
                  className='block text-sm font-medium text-gray-700'
                >
                  Street address
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    {...register('streetAddress', { required: true })}
                    id='streetAddress'
                    autoComplete='streetAddress'
                    defaultValue={companyDetails?.streetAddress}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium text-gray-700'
                >
                  City
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    {...register('city', { required: true })}
                    id='city'
                    autoComplete='address-level2'
                    defaultValue={companyDetails?.city}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='region'
                  className='block text-sm font-medium text-gray-700'
                >
                  State / Province
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    {...register('region', { required: true })}
                    id='region'
                    autoComplete='address-level1'
                    defaultValue={companyDetails?.region}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='postalCode'
                  className='block text-sm font-medium text-gray-700'
                >
                  ZIP / Postal code
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    {...register('postalCode', { required: true })}
                    id='postalCode'
                    autoComplete='postalCode'
                    defaultValue={companyDetails?.postalCode}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='gst'
                  className='block text-sm font-medium text-gray-700'
                >
                  GST
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    {...register('gst', { required: true })}
                    id='gst'
                    autoComplete='gst'
                    defaultValue={companyDetails?.gst}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type='submit'
            className='mt-4 ml-auto flex rounded-md bg-indigo-600 px-4 py-2 text-white'
          >
            Submit
          </button>
        </form>
      </section>
    </DashboardLayout>
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

export default DashBoardPage;
