import DashboardLayout from 'layouts/dashboard';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Category = {
  id: number;
  name: string;
  checkLists: {
    id: number;
    name: string;
    link?: string;
  }[];
};

const categoryList: Category[] = [
  {
    id: 1,
    name: 'Retail',
    checkLists: [
      {
        id: 1,
        name: 'ISO 22000',
        link: '',
      },
      {
        id: 2,
        name: 'Hygiene rating',
        link: '',
      },
      {
        id: 3,
        name: 'Covid-19',
      },
      {
        id: 4,
        name: 'GMP',
      },
      {
        id: 5,
        name: 'General cleaning checklist',
      },
    ],
  },
  {
    id: 2,
    name: 'Catering and Hospitality',
    checkLists: [
      {
        id: 1,
        name: 'ISO 22000',
        link: '',
      },
      {
        id: 2,
        name: 'Hygiene rating',
        link: '',
      },
      {
        id: 3,
        name: 'Covid-19',
      },
      {
        id: 4,
        name: 'Walk through audit',
      },
      {
        id: 5,
        name: 'General cleaning checklist',
      },
    ],
  },
  {
    id: 3,
    name: 'Dairy Industry',
    checkLists: [
      {
        id: 1,
        name: 'ISO 22000',
        link: '',
      },
      {
        id: 2,
        name: 'Hygiene rating',
        link: '',
      },
      {
        id: 3,
        name: 'Covid-19',
      },
      {
        id: 4,
        name: 'Walk through audit',
      },
      {
        id: 5,
        name: 'General cleaning checklist',
      },
    ],
  },
  {
    id: 4,
    name: 'Food Manufacturing',
    checkLists: [
      {
        id: 1,
        name: 'ISO 22000',
        link: '',
      },
      {
        id: 2,
        name: 'Hygiene rating',
        link: '',
      },
      {
        id: 3,
        name: 'Covid-19',
      },
      {
        id: 4,
        name: 'GMP',
      },
      {
        id: 5,
        name: 'General cleaning checklist',
      },
    ],
  },
  {
    id: 5,
    name: 'Warehouse',
    checkLists: [
      {
        id: 1,
        name: 'ISO 22000',
        link: '',
      },
      {
        id: 2,
        name: 'Hygiene rating',
        link: '',
      },
      {
        id: 3,
        name: 'Covid-19',
      },
      {
        id: 4,
        name: 'GDP Audit',
      },
      {
        id: 5,
        name: 'Daily inspection checklist',
      },
    ],
  },
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
  const [LSCat, setLSCat] = useState<Category[]>([]);

  const onSubmitCat = (data: any) => {
    localStorage.setItem('category', JSON.stringify(data));
    const cat = categoryList.filter((category) => data[category.name]);
    setLSCat(cat);
    setStep(STEP.LIST);
  };
  const onSubmitList = (data: any) => {
    console.log({ data });
  };

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
              {categoryList.map((cat, catIdx) => (
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
          {LSCat?.map((cat) => (
            <div key={cat.id} className='my-8 ml-4'>
              <ul className='list-disc'>
                <span className='text-xl font-bold'>{cat.name}</span>
                {cat.checkLists.map((list) => (
                  <li className='list-item' key={list.id}>
                    <Link href={list.link || ''}>
                      <a>{list.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </form>
      )}
    </DashboardLayout>
  );
};

export default WelcomePage;
