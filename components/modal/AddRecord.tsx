import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { addApprovedSupplier } from 'services/ASServcie';
import { useSession } from 'next-auth/react';

export default function AddRecordModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { data: session, status } = useSession();

  const onSubmit = async (data: any) => {
    console.log({ data });
    try {
      const res = await addApprovedSupplier({
        ...data,
        enteryById: session?.user.id,
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative max-w-3xl transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6'>
                <div>
                  {/* <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
                    <CheckIcon
                      className='h-6 w-6 text-green-600'
                      aria-hidden='true'
                    />
                  </div> */}
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      Add Record
                    </Dialog.Title>
                    <div className='mt-2'>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col gap-y-4'
                      >
                        <div className='flex '>
                          <label htmlFor='supplierName' className='w-28'>
                            Supplier Name
                          </label>
                          <input
                            type='text'
                            id='supplierName'
                            className=' flex h-10 w-full  items-end rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            {...register('supplierName')}
                            required
                          />
                        </div>
                        <div className='flex '>
                          <label htmlFor='category' className='w-28'>
                            Category
                          </label>
                          <input
                            type='text'
                            id='category'
                            className=' flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            {...register('category')}
                            required
                          />
                        </div>
                        <div className='flex '>
                          <label htmlFor='productName' className='w-28'>
                            Product Name
                          </label>
                          <input
                            type='text'
                            id='productName'
                            className=' flex h-10 w-full  items-end rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            {...register('productName')}
                            required
                          />
                        </div>
                        <div className='flex '>
                          <label htmlFor='gstNo' className='w-28'>
                            gst Number
                          </label>
                          <input
                            type='text'
                            id='gstNo'
                            className=' flex h-10 w-full  items-end rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            {...register('gstNo')}
                            required
                          />
                        </div>

                        <div className='flex '>
                          <label htmlFor='fssaiLicenseNo' className='w-28'>
                            Fssai License No
                          </label>
                          <input
                            type='text'
                            id='fssaiLicenseNo'
                            className=' flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            {...register('fssaiLicenseNo')}
                            required
                          />
                        </div>

                        <div className='flex '>
                          <label htmlFor='licenseValidUpto' className='w-28'>
                            License Valid Upto
                          </label>
                          <input
                            type='date'
                            id='licenseValidUpto'
                            className=' flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            {...register('licenseValidUpto')}
                            required
                          />
                        </div>

                        <div className='flex '>
                          <label htmlFor='location' className='w-28'>
                            Location
                          </label>
                          <input
                            type='text'
                            id='location'
                            className=' flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            {...register('location')}
                            required
                          />
                        </div>

                        <div className='flex '>
                          <label htmlFor='address' className='w-28'>
                            Address
                          </label>
                          <input
                            type='text'
                            id='address'
                            className=' flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            {...register('address')}
                            required
                          />
                        </div>

                        <div className='flex '>
                          <label htmlFor='supplyingLocation' className='w-28'>
                            Supplying Location
                          </label>
                          <input
                            type='text'
                            id='supplyingLocation'
                            className=' flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            {...register('supplyingLocation')}
                            required
                          />
                        </div>

                        <div className='flex '>
                          <label htmlFor='sku' className='w-28'>
                            SKU
                          </label>
                          <input
                            type='text'
                            id='sku'
                            className=' flex h-10 w-full items-end  rounded-md border-gray-300 shadow-sm ring-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            {...register('sku')}
                            required
                          />
                        </div>
                        <div className='mt-5 sm:mt-6'>
                          <button
                            type='submit'
                            className='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm'
                          >
                            Add
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
