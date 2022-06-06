import DashboardLayout from 'layouts/dashboard';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const category = [
  { id: 1, name: 'Retail' },
  { id: 2, name: 'Catering and Hospitality' },
  { id: 3, name: 'Dairy Industry' },
  { id: 4, name: 'Food Manufacturing' },
  { id: 5, name: 'Warehouse' },
];

enum STEP {
  CATEGORY,
  LIST,
}

const WelcomePage: NextPage = () => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState(STEP.CATEGORY);
  const [LSCat, setLSCat] = useState();

  const onSubmitCat = (data: any) => {
    localStorage.setItem('category', JSON.stringify(data));
    setLSCat(data);
    setStep(STEP.LIST);
  };
  const onSubmitList = (data: any) => {
    console.log({ data });
  };

  console.log(LSCat);
  if (LSCat) console.log(Object.keys(LSCat).filter((k) => LSCat[k]));

  return (
    <DashboardLayout>
      <h1>Welcome @{session?.user?.name}</h1>
      {step == STEP.CATEGORY && (
        <form onSubmit={handleSubmit(onSubmitCat)}>
          <fieldset>
            <legend className='text-lg font-medium text-gray-900'>
              Choose Category
            </legend>
            <div className='mt-4 divide-y divide-gray-200 border-t border-b border-gray-200'>
              {category.map((cat, catIdx) => (
                <div key={catIdx} className='relative flex items-start py-4'>
                  <div className='min-w-0 flex-1 text-sm'>
                    <label
                      htmlFor={`cat-${cat.id}`}
                      className='select-none font-medium text-gray-700'
                    >
                      {cat.name}
                    </label>
                  </div>
                  <div className='ml-3 flex h-5 items-center'>
                    <input
                      id={`cat-${cat.id}`}
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                      {...register(`${cat.name}`)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
          <button
            type='submit'
            className='mt-4 ml-auto flex rounded-md bg-indigo-600 px-4 py-2 text-white'
          >
            Submit
          </button>
        </form>
      )}
      {step === STEP.LIST && (
        <form onSubmit={handleSubmit(onSubmitList)}>
          {LSCat &&
            Object.keys(LSCat)
              .filter((k) => LSCat[k])
              .map((cat) => (
                <>
                  <h2 key={cat}>{cat}</h2>
                </>
              ))}
        </form>
      )}
    </DashboardLayout>
  );
};

export default WelcomePage;
