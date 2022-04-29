import { FunctionComponent } from 'react';

interface TwoColWithImageProps {
  imageCom: JSX.Element;
  rtl?: boolean;
}

const TwoColWithImage: FunctionComponent<TwoColWithImageProps> = ({
  imageCom,
  rtl,
  children,
}) => {
  return (
    <section className=' bg-white'>
      <div className='container mx-auto grid gap-10 p-4 py-10 md:grid-cols-2'>
        <div className={rtl ? 'order-last' : ''}>{imageCom}</div>
        <div className='flex flex-col'>{children}</div>
      </div>
    </section>
  );
};

export default TwoColWithImage;
