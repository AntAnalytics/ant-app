import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface AboutUsSectionProps {}

const AboutUsSection: FunctionComponent<AboutUsSectionProps> = () => {
  return (
    <section className='py-16'>
      <div className='container mx-auto flex flex-col gap-8 p-10 md:flex-row'>
        <div className='flex flex-1'>
          <Image
            src={'/assets/images/FoodTrendsConcept_Lead.jpeg'}
            alt={'food trend concept lead image'}
            height={370}
            width={540}
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <h2 className='text-base font-semibold uppercase tracking-wide text-indigo-600'>
            About Us
          </h2>
          <p>
            The technology derives data and the system improvement based on data
            analysis completely blended and coated with safety and quality
            aspects can do wonders in the overall performance enhancement. We
            call ourselves solution providers and performance enhancers where a
            wide gamut of problems are offered practical and customised
            solutions. We resolve prevailing industry wide issues and do smart
            decision making through business intelligence and sensible real-time
            data analysis and technology from ‘FARM to FORK’ throughout the food
            chain with zero tolerance on food quality and safety, eventually
            cost optimisation being a bi-product. We provide END-to-END
            solutions to food businesses who are passionate about product
            development, system enhancement and creating a benchmark to meet and
            exceed the global standards and industry best practices.
          </p>
          <button className='inline-flex w-40 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-base font-medium text-white hover:bg-indigo-700'>
            <Link href='/about-us'>
              <a>Read more</a>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
