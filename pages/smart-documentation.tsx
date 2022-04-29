import type { NextPage } from 'next';
import PageLayout from 'layouts/PageLayout';
import HeroHeader from 'components/common/HeroHeader';
import Image from 'next/image';
import TwoColWithImage from 'components/common/twoColWithImage';

const SD: NextPage = () => {
  return (
    <PageLayout>
      <HeroHeader title='Smart Documentation' />
      <TwoColWithImage
        imageCom={
          <Image
            src={'/assets/images/SD.jpeg'}
            alt='chef auditing reports'
            height={450}
            width={800}
          />
        }
        rtl={true}
      >
        <h2 className='text-2xl font-bold'>Smart Documentation</h2>
        <h3 className='text-3xl font-bold text-indigo-600'>OUR SERVICE</h3>
        <p>
          A common question arises amongst all the food business organizations,
          even though the Food safety system demands documentation, it becomes
          an unorganized and tedious process.
        </p>
        <p>
          Food Safety Systems Manual is the basis of Food safety documentation,
          which is a collection of all validated and authorized written
          policies; procedures; programs; specifications; work instruction;
          register forms; and other documents that are necessary to consistently
          achieve the production of safe food. Organizations consider FSMS
          documentation as an extra work which is time consuming, labour
          intensive and less active in nature which fails to get updated at
          fixed intervals. Recently the local and federal regulatory authorities
          have migrated to digital and online platforms in upgrading the
          regulations and operating license requirements enforcement. Various
          other digital upgradations are also planned by these bodies for
          future.
        </p>
        <p>
          The Ant Analytics provides digital smart documentation and customised
          solutions to food business organizations according to the need of
          their Food safety and Quality assurance system. Usage of Big data and
          predictive analysis wherever applicable, enabling customised Food
          safety documentation for businesses. Smart documentation enables
          access to real-time insights through customisable interactive
          dashboard integrating all required elements of food safety standard –
          product/ process flowcharts, hazard analysis, hazard risk assessments,
          HACCP/ OPRP Plan, PRP listing and monitoring, verification planning
          and execution.
        </p>
        <p>
          SMART documentation is fully complied with local, national and
          international regulations as well as applicable Global Food safety
          standards – ISO 22000, BRCGS, IFS, SQF, FSSC, HACCP.
        </p>
        <ul className='list-disc'>
          Key features and services:
          <li className='ml-10'>
            Fully digitalised customisable documentation and record keeping
          </li>
          <li className='ml-10'>
            Customised and automated product/ process flowcharts, hazard
            analysis, risk assessments, HACCP Plan
          </li>
          <li className='ml-10'>
            Integrated document control, creation and updation and approval
            system
          </li>
          <li className='ml-10'>
            Paper-less, error free documentation with auto updation feature
          </li>
        </ul>
      </TwoColWithImage>
    </PageLayout>
  );
};

export default SD;
