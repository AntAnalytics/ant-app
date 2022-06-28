import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DashboardLayout from 'layouts/dashboard';
import { getSession, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { addUser, editUserById, getUserById } from 'services/userService';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

function AddTeamMemberPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      if (id) {
        editUserById(id.toString(), data)
          .then(() => {
            toast.success('User successfully updated.');
            router.push('/setting/team-members');
          })
          .catch((error) => toast.error(error?.response.data.message));
      } else {
        addUser(data).then(() => {
          toast.success('User successfully added.');
          router.push('/setting/team-members');
        });
      }
    } catch (error: any) {
      toast.error(error?.response.data.message);
    }
  };

  useEffect(() => {
    if (!id) return;
    getUserById(id as string)
      .then((res) => reset(res.data.user))
      .catch((error: any) => router.push('/setting/add-member'));
  }, [id, reset, router]);

  const watchAllFields = watch();
  console.log({ watchAllFields });

  return (
    <DashboardLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-8 divide-y divide-gray-200'
      >
        <div className='space-y-8 divide-y divide-gray-200'>
          <div>
            <div>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Profile
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label
                  htmlFor='employeeId'
                  className='block text-sm font-medium text-gray-700'
                >
                  Employee ID
                </label>
                <div className='mt-1 flex rounded-md shadow-sm'>
                  <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm'>
                    The Ant Analytics
                  </span>
                  <input
                    type='text'
                    {...register('employeeId', {
                      required: true,
                    })}
                    required
                    id='employeeId'
                    autoComplete='employeeId'
                    className='block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='department'
                  className='block text-sm font-medium text-gray-700'
                >
                  Department
                </label>
                <div className='mt-1'>
                  <select
                    id='department'
                    {...register('department', { required: true })}
                    required
                    autoComplete='department-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  >
                    <option>Purchase</option>
                    <option>Store</option>
                    <option>Kitchen</option>
                  </select>
                </div>
              </div>
              <div className='sm:col-span-4'>
                <label
                  htmlFor='designation'
                  className='block text-sm font-medium text-gray-700'
                >
                  Designation
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    {...register('designation', { required: true })}
                    required
                    id='designation'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='role'
                  className='block text-sm font-medium text-gray-700'
                >
                  Role
                </label>
                <div className='mt-1'>
                  <select
                    id='role'
                    {...register('role', { required: true })}
                    required
                    autoComplete='role-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  >
                    <option>USER</option>
                    <option>ADMIN</option>
                    <option>MANAGER</option>
                  </select>
                </div>
              </div>

              {/* <div className='sm:col-span-6'>
                <label
                  htmlFor='photo'
                  className='block text-sm font-medium text-gray-700'
                >
                  Photo
                </label>
                <div className='mt-1 flex items-center'>
                  <span className='h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
                    <svg
                      className='h-full w-full text-gray-300'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                    </svg>
                  </span>
                  <button
                    type='button'
                    className='ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Change
                  </button>
                </div>
              </div> */}
            </div>
          </div>

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
              <div className='sm:col-span-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    {...register('name', { required: true })}
                    required
                    id='name'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-4'>
                <label
                  htmlFor='mobile'
                  className='block text-sm font-medium text-gray-700'
                >
                  Mobile number
                </label>
                <div className='mt-1'>
                  <input
                    id='mobile'
                    {...register('mobile', { required: true })}
                    required
                    type='tel'
                    pattern='[6-9]{1}[0-9]{9}'
                    autoComplete='mobile'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              {/* <div className='sm:col-span-6'>
                <label
                  htmlFor='street-address'
                  className='block text-sm font-medium text-gray-700'
                >
                  Street address
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='street-address'
                    id='street-address'
                    autoComplete='street-address'
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
                    name='city'
                    id='city'
                    autoComplete='address-level2'
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
                    name='region'
                    id='region'
                    autoComplete='address-level1'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='postal-code'
                  className='block text-sm font-medium text-gray-700'
                >
                  ZIP / Postal code
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='postal-code'
                    id='postal-code'
                    autoComplete='postal-code'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            */}
            </div>
          </div>
        </div>

        <div>
          <div className='pt-5'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Login Credentials
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              This information will be used to login by user.
            </p>
          </div>

          <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  {...register('email', { required: true })}
                  required
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                {id ? 'Master' : 'New'} Password
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  {...register('password', { required: true })}
                  required
                  type='password'
                  minLength={8}
                  autoComplete='new-password'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='pt-5'>
          <div className='flex justify-end'>
            <Link href='/setting/team-members'>
              <a>
                <button
                  type='button'
                  className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Cancel
                </button>
              </a>
            </Link>
            <button
              type='submit'
              className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              {id ? 'Update user' : 'Add user'}
            </button>
          </div>
        </div>
      </form>
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

  if (session.user.role !== 'OWNER') {
    return {
      redirect: {
        destination: '/setting/team-members',
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

export default AddTeamMemberPage;
