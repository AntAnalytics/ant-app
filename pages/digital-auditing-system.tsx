import type { NextPage } from 'next';
import PageLayout from 'layouts/PageLayout';
import HeroHeader from 'components/common/HeroHeader';
import Image from 'next/image';
import TwoColWithImage from 'components/common/twoColwithImage';

const DAS: NextPage = () => {
  return (
    <PageLayout>
      <HeroHeader title='Digital Auditing system'></HeroHeader>
      <TwoColWithImage
        imageCom={
          <Image
            src={'/assets/images/DAS.jpeg'}
            alt='chef auditing reports'
            height={412}
            width={618}
          />
        }
        rtl={true}
      >
        <h2 className='text-2xl font-bold'>Digital Auditing system</h2>
        <h3 className='text-3xl font-bold text-indigo-600'>OUR SERVICE</h3>
        <p>
          Are you having various verification and auditing programmes for your
          food business organization and struggling to manage them?
        </p>
        <p>
          Audits are a complex yet necessary system requirement for any food
          business and includes all areas of operations and support functions,
          like hygiene, operational improvements, overall safety of operations,
          human resources, effectiveness of training etc. Ant analytics provides
          customised digital solutions for food organizations to schedule the
          audit programmes, building and implementing customised audit
          checklists, capturing audit evidences, sharing audit results, audit
          closure system, alerts and escalations. Complete digitalisation of
          audit programme enables the organizations in managing them on high
          levels of precision, timely closure of non-conformances, relevant
          escalations and alerts, generating precise and accurate audit reports.
          Audit precision is ensured by adopting to intelligent auditing
          systems.
        </p>
        <ul className='list-disc'>
          Key features and services:
          <li className='ml-10'>
            Fully customised digital compliance audit platforms
          </li>
          <li className='ml-10'>
            Accurate error free audit result reporting methodology
          </li>
          <li className='ml-10'>
            Realtime monitoring of audit results and verification of data
          </li>
          <li className='ml-10'>
            Audit score generation and graphical data representation
          </li>
          <li className='ml-10'>
            Customised report generation and communication strategies
          </li>
          <li className='ml-10'>
            Enterprise and multi-location audit performance evaluation
          </li>
          <li className='ml-10'>
            Integrated audit performance evaluation and trend analysis
          </li>
        </ul>
      </TwoColWithImage>
    </PageLayout>
  );
};

export default DAS;
