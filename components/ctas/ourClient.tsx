/* This example requires Tailwind CSS v2.0+ */
export default function OurClientCTA() {
  return (
    <div className='bg-gray-50'>
      <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8'>
        <div className='flex flex-col'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            <span className='block'>Our Client</span>
            <span className='block text-indigo-600'>
              We work with 30 client
            </span>
          </h2>
          <p>
            Every client is happy and satisfied with our services. We make sure
            give you the best solution possible for your company.
          </p>
        </div>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <a
              href='#'
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700'
            >
              Request A Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
