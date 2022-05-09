import type { NextPage } from 'next';
import PageLayout from '../layouts/PageLayout';
import {
  MenuIcon,
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline';

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 5,
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];
const supportLinks = [
  {
    name: 'Sales',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: SupportIcon,
  },
  {
    name: 'Media Inquiries',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
];

const HelpPage: NextPage = () => {
  return (
    <PageLayout>
      <div className='bg-blue-gray-50'>
        <section>
          <div className='bg-blue-gray-800 relative py-36'>
            <div className='absolute inset-0'>
              <img
                className='h-full w-full object-cover'
                src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100'
                alt=''
              />
              <div
                className='bg-blue-gray-800 absolute inset-0 mix-blend-multiply'
                aria-hidden='true'
              />
            </div>

            <div className='relative mx-auto mt-0 max-w-md px-4 pb-32 sm:max-w-3xl sm:px-6 md:mt-0 lg:max-w-7xl lg:px-8'>
              <h1 className='text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'>
                Support
              </h1>
              <p className='text-blue-gray-300 mt-6 max-w-3xl text-xl'>
                Varius facilisi mauris sed sit. Non sed et duis dui leo,
                vulputate id malesuada non. Cras aliquet purus dui laoreet diam
                sed lacus, fames. Dui, amet, nec sit pulvinar.
              </p>
            </div>
          </div>
        </section>
        {/* Cards */}
        <section
          className='relative z-10 mx-auto -mt-32 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'
          aria-labelledby='contact-heading'
        >
          <h2 className='sr-only' id='contact-heading'>
            Contact us
          </h2>
          <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className='flex flex-col rounded-2xl bg-white shadow-xl'
              >
                <div className='relative flex-1 px-6 pt-16 pb-8 md:px-8'>
                  <div className='absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-blue-600 p-5 shadow-lg'>
                    <link.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  <h3 className='text-blue-gray-900 text-xl font-medium'>
                    {link.name}
                  </h3>
                  <p className='text-blue-gray-500 mt-4 text-base'>
                    {link.description}
                  </p>
                </div>
                <div className='bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl p-6 md:px-8'>
                  <a
                    href={link.href}
                    className='text-base font-medium text-blue-700 hover:text-blue-600'
                  >
                    Contact us<span aria-hidden='true'> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          className='divide-blue-gray-200 mx-auto max-w-md divide-y-2 py-24 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8'
          aria-labelledby='faq-heading'
        >
          <h2
            className='text-blue-gray-900 text-3xl font-extrabold'
            id='faq-heading'
          >
            Frequently asked questions
          </h2>
          <div className='mt-6 pt-10'>
            <dl className='space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0'>
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className='text-blue-gray-900 text-lg font-medium'>
                    {faq.question}
                  </dt>
                  <dd className='text-blue-gray-500 mt-2 text-base'>
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className='relative bg-white' aria-labelledby='join-heading'>
        <div
          className='bg-blue-gray-50 absolute inset-x-0 hidden h-1/2 lg:block'
          aria-hidden='true'
        />
        <div className='mx-auto max-w-7xl bg-blue-600 lg:bg-transparent lg:px-8'>
          <div className='lg:grid lg:grid-cols-12'>
            <div className='relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16'>
              <div
                className='bg-blue-gray-50 absolute inset-x-0 h-1/2 lg:hidden'
                aria-hidden='true'
              />
              <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
                <div className='aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
                  <img
                    className='rounded-3xl object-cover object-center shadow-2xl'
                    src='https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>

            <div className='relative bg-blue-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl'>
              <div
                className='absolute inset-0 hidden overflow-hidden rounded-3xl lg:block'
                aria-hidden='true'
              >
                <svg
                  className='absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'
                >
                  <defs>
                    <pattern
                      id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-blue-500'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                  />
                </svg>
                <svg
                  className='absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'
                >
                  <defs>
                    <pattern
                      id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-blue-500'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                  />
                </svg>
              </div>
              <div className='relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0'>
                <h2
                  className='text-3xl font-extrabold text-white'
                  id='join-heading'
                >
                  Join our team
                </h2>
                <p className='text-lg text-white'>
                  Varius facilisi mauris sed sit. Non sed et duis dui leo,
                  vulputate id malesuada non. Cras aliquet purus dui laoreet
                  diam sed lacus, fames.
                </p>
                <a
                  className='hover:bg-blue-gray-50 block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-blue-700 shadow-md sm:inline-block sm:w-auto'
                  href='#'
                >
                  Explore open positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className='mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:px-6 lg:flex lg:max-w-7xl lg:items-center lg:py-32 lg:px-8'
        aria-labelledby='newsletter-heading'
      >
        <div className='lg:w-0 lg:flex-1'>
          <h2
            className='text-blue-gray-900 text-3xl font-extrabold sm:text-4xl'
            id='newsletter-heading'
          >
            Sign up for our newsletter
          </h2>
          <p className='text-blue-gray-500 mt-3 max-w-3xl text-lg'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </div>
        <div className='mt-8 lg:mt-0 lg:ml-8'>
          <form className='sm:flex'>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email-address'
              type='email'
              autoComplete='email'
              required
              className='border-blue-gray-300 placeholder-blue-gray-400 w-full rounded-md border px-5 py-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:max-w-xs'
              placeholder='Enter your email'
            />
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
              <button
                type='submit'
                className='flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              >
                Notify me
              </button>
            </div>
          </form>
          <p className='text-blue-gray-500 mt-3 text-sm'>
            We care about the protection of your data. Read our{' '}
            <a href='#' className='font-medium underline'>
              Privacy Policy.
            </a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default HelpPage;
