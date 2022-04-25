import type { NextPage } from 'next';
import PageLayout from 'layouts/PageLayout';
import HeroHeader from 'components/common/HeroHeader';
import Image from 'next/image';
import TwoColWithImage from 'components/common/twoColwithImage';

const AboutUs: NextPage = () => {
  return (
    <PageLayout>
      <HeroHeader title='About us'></HeroHeader>
      <TwoColWithImage
        imageCom={
          <Image
            src={
              '/assets/images/asian-businessmen-and-businesswomen-meeting-using-W3QY5ES.jpeg'
            }
            alt='businessmen and businesswomen meeting'
            height={1280}
            width={1920}
          />
        }
        // rtl={true}
      >
        <h2 className='text-2xl font-bold'>About us</h2>
        <h3 className='text-3xl font-bold text-indigo-600'>
          The Ant Analytics
        </h3>
        <p>
          It all started when like minded people came closer and together
          through various channels and platforms, started to think vigorously
          about using each other’s strengths to make a change to the industry
          and society. The bigger picture is towards enhancing the overall
          performance of food industries and provide quality and safe food to
          the customers, through systematic and practical application of
          technology, artificial intelligence and machine learning, blending
          with conventional food safety, quality and process excellence. Food is
          everyone’s responsibility. Conventional food businesses are evolving
          according to the changing trends in the global market and world
          economy. Application of technology and enhanced usage of artificial
          intelligence and machine learning has made food industries much more
          diverse and globally acclaimed. Conventional methods of food business
          is becoming outdated and technology enhancement is prevailing in food
          industries as in any other industry globally. Major advantages include
          reduction and optimisation of huma resources, reduction of wastage,
          reduction of process errors, improving productivity and
          standardization, reduction in operating cost, higher profitability,
          opening doors to international trade etc. Imagine a practical
          combination of food quality and safety experts AND Information
          technology and systems experts joining hands together! Big Data,
          Internet of Things (IoT), data analytics and management, predictive
          analytics, artificial intelligence and robotics have become a game
          changer in overall manufacturing and service sectors where
          understanding the customer needs and tailoring solutions/ products
          will eventually ball roll the future. The technology derives data and
          the system improvement based on data analysis completely blended into
          food safety and quality aspects can do wonders in the overall
          performance enhancement of an organization. At The Ant Analytics, we
          call ourselves solution providers and performance enhancers, where a
          wide gamut of problems are offered practical and customised solutions
          to organizations. We resolve prevailing industry wide issues and do
          smart decision making through business intelligence and sensible
          real-time data analysis and technology from ‘FARM to FORK’ throughout
          the food chain with zero tolerance on food quality and safety,
          eventually cost optimisation and wastage reduction being a bi-product.
          We provide END-to-END solutions to food businesses who are passionate
          about product development, system enhancement and creating a benchmark
          to meet and exceed the global standards and industry best practices.
          Since the advent of digital transformation, organizations face the
          growing urge to derive even more from their Big data. As a result,
          they have started investing more on advanced analytics, local
          intelligence and AI across their operations, processes and supply
          chain verticals. They make such strategic investments to deliver
          efficient service across their operational verticals, supply chains,
          triggering higher productivity and better customer experience.
        </p>
      </TwoColWithImage>
    </PageLayout>
  );
};

export default AboutUs;
