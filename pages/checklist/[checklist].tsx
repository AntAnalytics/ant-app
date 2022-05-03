import type { NextPage } from 'next';
import PageLayout from 'layouts/PageLayout';
import checkList1 from 'src/checklists/checkList1';

const answerOptions = [
  { id: 'yes', title: 'Yes' },
  { id: 'no', title: 'No' },
  { id: 'na', title: 'N/A' },
];

const CheckListPage: NextPage = () => {
  console.log(checkList1.length);
  return (
    <PageLayout>
      <section className='container mx-auto py-10'>
        <form action=''>
          {checkList1.map((section) => (
            <div key={section.id} className='my-8 p-4'>
              <h2 className='text-3xl font-bold text-indigo-600'>
                {section.title}
              </h2>
              {section.questions.map((q) => (
                <div
                  key={q.id}
                  className='my-1 flex flex-col justify-between border-t-2 md:flex-row'
                >
                  <h3 className='col-span-2 text-2xl'>{q.question}</h3>
                  <div className='flex space-x-8'>
                    {answerOptions.map((answerOption) => (
                      <div key={answerOption.id} className='flex items-center '>
                        <input
                          id={answerOption.id}
                          name={q.question}
                          type='radio'
                          //   defaultChecked={answerOption.id === 'email'}
                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor={answerOption.id}
                          className='ml-3 block text-sm font-medium text-gray-700'
                        >
                          {answerOption.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <button
            type='submit'
            className='ml-auto flex rounded bg-indigo-600 px-4 py-2 text-white'
          >
            Submit
          </button>
        </form>
      </section>
    </PageLayout>
  );
};

export default CheckListPage;
