import type { NextPage } from 'next';
import PageLayout from 'layouts/PageLayout';
import { useForm } from 'react-hook-form';
import test from 'src/checklists/test';

const answerOptions = [
  { id: 'yes', title: 'Yes', score: 1 },
  { id: 'no', title: 'No', score: 0 },
  { id: 'na', title: 'N/A', score: 1 },
];

const CheckListPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    let score = 0;
    Object.values(data).forEach((answer) => {
      if (answer !== 'No') score++;
    });
    console.log({ score });
  };
  return (
    <PageLayout>
      <section className='container mx-auto py-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=''>
            <p>Date : {new Date().toDateString()}</p>
            <table>
              <tr>
                <td>
                  <label htmlFor='name'>Name: </label>
                </td>
                <td>
                  <input type='text' required />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='companyName'>Company Name: </label>
                </td>
                <td>
                  <input type='text' required />
                </td>
              </tr>
            </table>
            <tr>
              <td>
                <label htmlFor='licenseNo'>FSSAI license No: </label>
              </td>
              <td>
                <input type='text' required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='person'>Contact person: </label>
              </td>
              <td>
                <input type='text' required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='auditor'>Name of Auditor: </label>
              </td>
              <td>
                <input type='text' required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='address'> Address: </label>
              </td>
              <td>
                <input type='text' required />
              </td>
            </tr>
          </div>
          {test.map((section, sIndex) => (
            <div key={section.id} className='my-8 p-4'>
              <h2 className='text-xl font-bold text-indigo-600'>
                {section.title}
              </h2>
              {section.questions.map((q, qIndex) => (
                <div
                  key={q.id}
                  className='my-1 flex flex-col justify-between border-t-2 md:flex-row'
                >
                  <h3 className='col-span-2 text-base'>
                    <span className='mr-4'>{qIndex + 1})</span>
                    {q.question}
                  </h3>
                  <div className='flex space-x-8'>
                    {answerOptions.map((answerOption) => (
                      <div key={answerOption.id} className='flex items-center '>
                        <input
                          id={q.id + '/' + answerOption.id}
                          type='radio'
                          value={answerOption.title}
                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          {...register(q.id.toString(), {
                            required: true,
                          })}
                        />
                        <label
                          htmlFor={q.id + '/' + answerOption.id}
                          className='ml-3 block select-none text-sm font-medium text-gray-700'
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
