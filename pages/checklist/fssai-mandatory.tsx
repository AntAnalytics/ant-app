import type { GetServerSideProps, NextPage } from 'next';
import DashboardLayout from 'layouts/dashboard';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { ST } from 'next/dist/shared/lib/utils';

const checkList = [
  {
    id: 1,
    title: '',
    questions: [
      {
        id: 1,
        question:
          'Food establishment has an updated FSSAI license and is displayed at a prominent location.',
        score: 2,
      },
    ],
  },
  {
    id: 2,
    title: 'DESIGN & FACILITIES',
    questions: [
      {
        id: 2,
        question:
          'The design of food premises provides adequate working space, permit maintenance & cleaning to prevent entry of dirt, dust & pests',
        score: 2,
      },
      {
        id: 3,
        question:
          'the internal structure and fittings are made of non-toxic and impermeable materials',
        score: 2,
      },
      {
        id: 4,
        question:
          'Walls, ceilings & doors are free from flaking paint or plaster, condensation & shedding particles.          ',
        score: 2,
      },
      {
        id: 5,
        question: 'Floors are non-slippery & sloped appropriately.          ',
        score: 2,
      },
      {
        id: 6,
        question:
          'Windows are kept closed & fitted with insect proof screen when opening to an external environment.          ',
        score: 2,
      },
      {
        id: 8,
        question:
          'Potable water (meeting standards of IS 10500 & tested semi-annually with records maintained thereof) is used a product ingredient or in contact with food or food contact surface.          ',
        score: 4,
      },
      {
        id: 9,
        question:
          'Equipment & containers are made of non-toxic, impervious, non-corrosive materials which is easy to clean and disinfect          ',
        score: 2,
      },
      {
        id: 10,
        question:
          'Adequate facilities for heating, cooling, refrigeration and freezing food & facilitate monitoring of temperature          ',
        score: 2,
      },
      {
        id: 11,
        question:
          'Premise has sufficient lighting. Lighting fixtures are protected to prevent contamination breakage          ',
        score: 2,
      },
      {
        id: 12,
        question:
          'Adequate ventilation is provided within the facility         ',
        score: 2,
      },
      {
        id: 13,
        question:
          'An adequate storage facility for food, packaging materials, chemicals, personal items, etc are available          ',
        score: 2,
      },
      {
        id: 14,
        question:
          'Personal hygiene facilities are available including adequate number of hand- washing facilities, toilets, change rooms for employees          ',
        score: 2,
      },
      {
        id: 15,
        question:
          'Food material is tested either through internal laboratory or through an accredited lab, check for records          ',
        score: 2,
      },
    ],
  },
  {
    id: 3,
    title: 'CONTROL OF OPERATION',
    questions: [
      {
        id: 16,
        question:
          'Incoming material is procured as per internally laid down specification from approved vendors. Check for records (like Certificate of analysis, Form E, specifications, name and address of the supplier, batch no, manufacturer, use by/ expiry date, quantity procured, etc)          ',
        score: 2,
      },
      {
        id: 17,
        question:
          'Raw materials are inspected at the time of receiving for food safety hazards (farm produce like vegetables, fruits, eggs, etc must be checked for spoilage and accepted only in good condition)        ',
        score: 2,
      },
      {
        id: 18,
        question:
          'Incoming materials semi or final products are stored according to their temperature requirement in a hygienic environment to avoid detoriation and protected from contamination. FIFO and FEFO are practiced. Foods of animal origin are stored at less than or equal to 4 C        ',
        score: 2,
      },
      {
        id: 20,
        question:
          'Proper segregation of raw, cooked; vegetarian and non- vegetarian food is done          ',
        score: 2,
      },
      {
        id: 21,
        question:
          'All the equipment is adequately sanitized before and after food preparation        ',
        score: 2,
      },
      {
        id: 22,
        question:
          'Frozen food is thawed hygienically. No thawed food is stored for later use. (Meat, fish and poultry is thawed in refrigerator at 5 C or below or in microwave. Shellfish/ seafood is thawed in cold potable running water at 15 C or below within 90 minutes)        ',
        score: 4,
      },
      {
        id: 23,
        question:
          'Vegetarian items are cooked to a min. temperature of 60 C for 10 mins or 65 C for 2 mins of core food temperature. Non vegetarian items are cooked for min of 65 C for 10 mins or 70 C for 2 mins or 75 C for 15 secs of core food temperature        ',
        score: 4,
      },
      {
        id: 24,
        question:
          'Cooked food intended for refrigeration is cooled appropriately. (High risk food is cooled from 60 C to 21 C within 2 hours or less and further cooled to 5 C within 2 hours or less)        ',
        score: 4,
      },
      {
        id: 25,
        question:
          'Food portioning is done in hygienic conditions. High risk food is portioned in a refrigerated area or portioned or refrigerated within 30 mins. Large amount of food is portioned below 15 C        ',
        score: 2,
      },
      {
        id: 26,
        question:
          'Hot food intended for consumption is held at 65 C and non-vegetarian food intended for consumption is held at 70 C. Cold foods are maintained at 5 C or below and frozen products are held at -18 C. (hot food is kept above 65 C and cold food is kept below 5 C but below 10 C upto 42 hours for not more than 2 hours only once.            ',
        score: 4,
      },
      {
        id: 27,
        question:
          'Reheating is done appropriately and no indirect or reheating like adding hot water or reheating under bain-marie or reheating under lamp are being used. (the core temp of food reaches 75 C and is reheated for at least 2 mins at this temperature)        ',
        score: 4,
      },
      {
        id: 28,
        question:
          'Oil being used is suitable for cooking purposes. Periodic verification of oil and fat by checking the colour, the flavour and floating elements is being done        ',
        score: 2,
      },
      {
        id: 29,
        question:
          'Vehicle intended for food transportation are kept clean and maintained in good repair and are adequate to maintain desired temperature (hot foods are maintained at 65 C, cold food at 5 C and frozen food at -18 C during transportation or transported within 2 hours of preparation)        ',
        score: 4,
      },
      {
        id: 30,
        question:
          'Food and non-food products transported at the same time in the same vehicle is separated adequately to avoid any risk to food        ',
        score: 2,
      },
      {
        id: 31,
        question:
          'Cutlery and crockery used for serving and dinner accompaniments at dining service are clean and sanitized and free from unhygienic matters.        ',
        score: 2,
      },
      {
        id: 32,
        question:
          'Packaging and wrapping materials coming in contact with food is clean and of food grade quality        ',
        score: 2,
      },
    ],
  },
  {
    id: 4,
    title: 'MAINTENANCE & SANITATION    ',
    questions: [
      {
        id: 33,
        question:
          'Cleaning of equipment, food premises is done as per cleaning schedule & cleaning program. There should be no stagnation of water in food zones          ',
        score: 2,
      },
      {
        id: 34,
        question:
          'Preventive maintenance of equipment and machinery are carried out regularly as per the instructions of the manufacturer. Check for records          ',
        score: 2,
      },
      {
        id: 35,
        question:
          'Measuring & monitoring devices are calibrated periodically.          ',
        score: 2,
      },
      {
        id: 36,
        question:
          'Pest control program is available & pest control activities are carried out by trained and experience personnel. Check for records.          ',
        score: 2,
      },
      {
        id: 37,
        question:
          'No signs of pest activity or infestation in premises (eggs, larvae, faeces, etc)          ',
        score: 4,
      },
      {
        id: 38,
        question:
          'Drains are designed to meet expected flow loads and equipped with grease and cockroach traps to capture contaminants and pests          ',
        score: 2,
      },
      {
        id: 39,
        question:
          'Food waste and other refuse are removed periodically from food handling areas to avoid accumulation.          ',
        score: 2,
      },
    ],
  },
  {
    id: 5,
    title: 'PERSONAL HYGIENE    ',
    questions: [
      {
        id: 40,
        question:
          'Annual medical examination & inoculation of food handlers against the enteric group of diseases as per recommended schedule of the vaccine is done. Check for records.          ',
        score: 2,
      },
      {
        id: 41,
        question:
          'No person suffering from a disease or illness or with open wounds or burns is involved in handling of food or materials which come in contact with food.          ',
        score: 2,
      },
      {
        id: 42,
        question:
          'Food handlers maintain personal cleanliness (clean clothes, trimmed nails & water-proof bandage etc          ',
        score: 4,
      },
      {
        id: 43,
        question:
          'Food handlers equipped with suitable aprons, gloves, headgear, shoe cover etc; wherever necessary.          ',
        score: 2,
      },
    ],
  },
  {
    id: 6,
    title: 'TRAINING & RECORD KEEPING      ',
    questions: [
      {
        id: 44,
        question:
          'Internal / External audit of the system is done periodically. Check for records.          ',
        score: 2,
      },
      {
        id: 45,
        question:
          'Food business has an effective consumer complaints redressal mechanism.          ',
        score: 2,
      },
      {
        id: 46,
        question:
          'Food handlers have the necessary knowledge and skills & trained to handle food safely. Check for training records.          ',
        score: 2,
      },
      {
        id: 47,
        question:
          'Appropriate documentation & records are available and retained for a period of one year or the shelf-life of the product, whichever is more.',
        score: 4,
      },
    ],
  },
];

const answerOptions = [
  { id: 'Compliance', title: 'C', score: 1 },
  { id: 'Noncompliance', title: 'NC', score: 0 },
  { id: 'Partial Compliance', title: 'PC', score: 0.5 },
  { id: 'Not Applicable', title: 'N/A', score: 1 },
];

const enum Step {
  Note,
  Details,
  CheckList,
  Score,
}
const FSSAICheckListPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [currenStep, setCurrenStep] = useState(0);
  const [score, setScore] = useState(0);
  const { data: session } = useSession();

  const onSubmit = (data: any) => {
    let score = 0;
    Object.values(data).forEach((answer) => {
      if (answer !== 'NC') score++;
      if (answer === 'PC') score += 0.5;
    });
    setScore(score);
    setCurrenStep(Step.Score);
  };

  return (
    <DashboardLayout>
      <section className='container mx-auto py-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {currenStep === Step.Note && (
            <div>
              <h2>Notes</h2>
              <p>
                Indicate the following – Compliance (C), Noncompliance (NC),
                Partial Compliance (PC) or Not Applicable (NA)
              </p>
              <table>
                <thead>
                  <tr>
                    <th>grade</th>
                    <th>score</th>
                    <th>details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A+</td>
                    <td>100-114</td>
                    <td>Compliance – Exemplar</td>
                  </tr>
                  <tr>
                    <td>A</td>
                    <td>91-99</td>
                    <td>Compliance – Satisfactory</td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>77-90</td>
                    <td>Needs Improvement</td>
                  </tr>
                  <tr>
                    <td>No grade</td>
                    <td>&lt;77</td>
                    <td>Non- Compliance</td>
                  </tr>
                </tbody>
              </table>
              <button
                className='ml-auto flex rounded-lg bg-indigo-600 px-4 py-2 text-white'
                onClick={() => setCurrenStep(Step.Details)}
              >
                Fill Details
              </button>
            </div>
          )}
          {currenStep === Step.Details && (
            <div className=''>
              <p>Date : {new Date().toDateString()}</p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor='name'>Name: </label>
                    </td>
                    <td>
                      <input
                        className='ml-20'
                        type='text'
                        defaultValue={session?.user?.name || ''}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor='companyName'>Company Name: </label>
                    </td>
                    <td>
                      <input className='ml-20' type='text' required />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor='licenseNo'>FSSAI license No: </label>
                    </td>
                    <td>
                      <input className='ml-20' type='text' required />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor='person'>Contact person: </label>
                    </td>
                    <td>
                      <input className='ml-20' type='text' required />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor='auditor'>Name of Auditor: </label>
                    </td>
                    <td>
                      <input className='ml-20' type='text' required />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor='address'> Address: </label>
                    </td>
                    <td>
                      <input className='ml-20' type='text' required />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                className='ml-auto flex rounded-lg bg-indigo-600 px-4 py-2 text-white'
                onClick={() => setCurrenStep(Step.CheckList)}
              >
                Fill CheckList
              </button>
            </div>
          )}
          {currenStep === Step.CheckList && (
            <div>
              {checkList.map((section, sIndex) => (
                <div key={section.id} className='my-8 p-4'>
                  {section.title && (
                    <h2 className='text-xl font-bold text-indigo-600'>
                      {section.title}
                    </h2>
                  )}
                  {section.questions.map((q, qIndex) => (
                    <div
                      key={q.id}
                      className='my-1 flex flex-col justify-between border-t-2 md:flex-row'
                    >
                      <h3 className='col-span-2 text-base'>
                        <span className='mr-4'>{qIndex + 1}</span>
                        {q.question}
                      </h3>
                      <div className='flex space-x-8'>
                        {answerOptions.map((answerOption) => (
                          <div
                            key={answerOption.id}
                            className='flex items-center '
                          >
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
            </div>
          )}
        </form>
      </section>
      {currenStep === Step.Score && (
        <section>
          <h2>
            Yeah, you have scored <span className='font-bold'>{score}</span>
          </h2>
        </section>
      )}
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      // session,
    },
  };
};

export default FSSAICheckListPage;
