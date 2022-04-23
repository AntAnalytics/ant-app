import Image from 'next/image';
import { FunctionComponent } from 'react';

interface MainHeroProps {}

const MainHero: FunctionComponent<MainHeroProps> = () => {
  return (
    <div className='hero bg-gray-100 py-16'>
      <div className='container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20'>
        <div className='hero-wrapper grid grid-cols-1 items-center gap-8 md:grid-cols-12'>
          <div className='hero-text col-span-6'>
            <h1 className=' max-w-xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl'>
              Food Safety by The Ant&nbsp;Analytics
            </h1>
            <hr className=' mt-8 h-1 w-12 rounded-full bg-orange-500' />
            <p className='mt-8 text-base font-semibold leading-relaxed text-gray-800'>
              Your ultimate Applying Technology In Food Safety
            </p>
            <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
                >
                  Get started
                </a>
              </div>
              <div className='mt-3 sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg'
                >
                  Request demo
                </a>
              </div>
            </div>
          </div>

          <div className='hero-image col-span-6'>
            <Image
              src={'/assets/images/hero.png'}
              alt='hero image'
              height={400}
              width={542}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
