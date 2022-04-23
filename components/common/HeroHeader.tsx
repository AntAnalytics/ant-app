import { FunctionComponent } from 'react';

interface HeroHeaderProps {
  title: string;
}

const HeroHeader: FunctionComponent<HeroHeaderProps> = ({
  title,
  children,
}) => {
  return (
    <section className='container mx-auto bg-gray-50 py-16 '>
      <div className='text-center text-gray-800'>
        <h1 className='mt-0 mb-6 text-5xl font-bold'>{title}</h1>
        <p className='mb-8 text-xl font-bold'>{children}</p>
      </div>
    </section>
  );
};

export default HeroHeader;
