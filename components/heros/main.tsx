import { FunctionComponent } from 'react';

interface MainHeroProps {}

const MainHero: FunctionComponent<MainHeroProps> = () => {
  return (
    <div className='hero bg-gray-100 py-16'>
      <div className='container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto'>
        <div className='hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center'>
          <div className='hero-text col-span-6'>
            <h1 className=' font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight'>
              Food Safety by The Ant Analytics
            </h1>
            <hr className=' w-12 h-1 bg-orange-500 rounded-full mt-8' />
            <p className='text-gray-800 text-base leading-relaxed mt-8 font-semibold'>
              Your ultimate Applying Technology In Food Safety
            </p>
            <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                >
                  Get started
                </a>
              </div>
              <div className='mt-3 sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>

          <div className='hero-image col-span-6'>
            <svg
              id='Layer_1'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 400 300'
            >
              <title>#102_travelling_twocolour</title>
              <path
                d='M81.77,83.39c-28.67,17.47-45.66,49.51-43,83C40.18,183.48,46.54,200,63.35,209c44.83,24,240.55,24.45,269.51-18s18.19-102.84-44.8-128C233.46,41.18,155.82,38.3,81.77,83.39Z'
                fill='#e6e6e6'
                opacity='0.3'
              ></path>
              <path
                d='M283.69,206V180.64a4.65,4.65,0,0,1,4.64-4.65h18.49a4.65,4.65,0,0,1,4.64,4.65V206'
                fill='none'
                stroke='#ffd200'
                strokeMiterlimit='10'
                strokeWidth='2'
              ></path>
              <path
                d='M283.69,206V180.64a4.65,4.65,0,0,1,4.64-4.65h18.49a4.65,4.65,0,0,1,4.64,4.65V206'
                fill='none'
                stroke='#000'
                strokeMiterlimit='10'
                strokeWidth='2'
                opacity='0.08'
              ></path>
              <path
                d='M159.26,145.74s-18.34,7.36-12.41,28.68,6.48,23.63,19.71,22.32,4.66-22.32,4.66-22.32Z'
                fill='#ffd200'
              ></path>
              <path
                d='M152.37,79.92s-50.86,11.79-64.24,41.59l45.05,3.4,11.54-7Z'
                fill='#ed8936'
              ></path>
              <path
                d='M152.37,79.92s-50.86,11.79-64.24,41.59l45.05,3.4,11.54-7Z'
                fill='#fff'
                opacity='0.46'
              ></path>
              <ellipse
                cx='200.42'
                cy='272.36'
                rx='154.08'
                ry='11.83'
                fill='#e6e6e6'
                opacity='0.45'
              ></ellipse>
              <path
                d='M134.79,246.33s-4.45,3.22-8.54.91-7.67.77-4.87,4.13,14.8,5,14.8,5l4.51-7.28Z'
                fill='#ed8936'
              ></path>
              <path
                d='M215.08,260.56s1.94,5.15,6.62,5.47,6,4.88,1.79,6.14-15.12-4-15.12-4l.26-8.57Z'
                fill='#ed8936'
              ></path>
              <path
                d='M79.19,260.08s-10.59-2.9-12.89-12.75c0,0,16.41-3.32,16.87,13.62Z'
                fill='#ed8936'
                opacity='0.58'
              ></path>
              <path
                d='M80.49,259s-7.4-11.7-.89-22.64c0,0,12.48,7.93,6.93,22.66Z'
                fill='#ed8936'
                opacity='0.73'
              ></path>
              <path
                d='M82.4,259s3.9-12.35,15.72-14.69c0,0,2.21,8-7.65,14.73Z'
                fill='#ed8936'
              ></path>
              <polygon
                points='74.72 258.75 76.86 273.44 90.38 273.5 92.37 258.83 74.72 258.75'
                fill='#24285b'
              ></polygon>
              <path
                d='M156.2,53.77s1.74,6.3,4.27,10a3.28,3.28,0,0,0,4.58.82c1.83-1.3,3.93-3.59,3.41-7.08l-.15-6a5.88,5.88,0,0,0-4.6-5C159.34,45.28,155,50,156.2,53.77Z'
                fill='#f4a28c'
              ></path>
              <polygon
                points='169.43 54.63 177.9 74.3 166.73 78.19 165.05 62.32 169.43 54.63'
                fill='#f4a28c'
              ></polygon>
              <path
                d='M170.86,55.92h0a.62.62,0,0,1-.23.72,4.34,4.34,0,0,1-5.25-.1,5.45,5.45,0,0,1-2.08-5.6,25.94,25.94,0,0,1-5.48,2.52,6,6,0,0,1-2,.32l-3.28-4s-4.23-3.66-1.89-5.67,4.76.61,6.11-2.44,1.54-4.07,4.27-3.72.83,3.12,4.53,1.7,4.36.08,5,1.75a3.1,3.1,0,0,1-.12,1.82A20.1,20.1,0,0,0,170.86,55.92Z'
                fill='#24285b'
              ></path>
              <path
                d='M164.66,56.6s-.83-2.37,1-2.85,3.06,3,.77,4.16Z'
                fill='#f4a28c'
              ></path>
              <path
                d='M157.5,57.68l-.83,3A1,1,0,0,0,157.85,62l2.51-.43Z'
                fill='#f4a28c'
              ></path>
              <rect
                x='289.35'
                y='173.73'
                width='16.36'
                height='5.3'
                fill='#24285b'
              ></rect>
              <path
                d='M165.31,64.43s1.44-.49,3.72-3.33c0,0,1.05,4.15-3.26,8Z'
                fill='#ce8172'
                opacity='0.31'
              ></path>
              <path
                d='M162.12,76.62l6.43-1.16a90.83,90.83,0,0,0,8.92-2.08c11-3.14,43.37-10.53,52.58,8.2,11.16,22.69-7.47,96.3-7.47,96.3h-51s-10.41-30.66-25.29-49.62S121,88.21,162.12,76.62Z'
                fill='#ed8936'
              ></path>
              <path
                d='M152.37,79.92s-2.56,16.32,19.86,4l-5.75-8A58,58,0,0,0,152.37,79.92Z'
                opacity='0.08'
              ></path>
              <path
                d='M94.92,139.7c-10.16-3.16-11.68-17-2.47-22.37a25.2,25.2,0,0,1,10.9-3.2c17.08-1.26,46.18-2.85,46.18-2.85s17.52,5.7,14.77,14.24-15.08-5.06-15.08-5.06S116.66,146.46,94.92,139.7Z'
                fill='#f4a28c'
              ></path>
              <rect
                x='144.58'
                y='110.56'
                width='6.04'
                height='12.3'
                transform='translate(-14.69 21.47) rotate(-7.93)'
                fill='#24285b'
              ></rect>
              <rect
                x='143.84'
                y='109.5'
                width='6.04'
                height='3.82'
                transform='matrix(0.99, -0.14, 0.14, 0.99, -13.96, 21.32)'
                fill='#ffd200'
              ></rect>
              <path
                d='M166.48,75.84s-7.76,7.14,1.21,8.67,9.78-11.13,9.78-11.13Z'
                fill='#f4a28c'
              ></path>
              <path
                d='M171.63,177.88l-38.45,68.45,9.93,6.91s21.24-35.45,46.53-53.26a6.38,6.38,0,0,1,9.72,3.27c6.84,21.15,7.42,58,7.42,58H218.5l4.08-83.34Z'
                fill='#24285b'
              ></path>
              <path
                d='M171.63,177.88s19.15-15,25.92-36.41a6.57,6.57,0,0,1,11.08-2.37l18.2,19.68,3.67-20.57L217.19,96.09,192,79.92l-5,19.51Z'
                opacity='0.08'
              ></path>
              <path
                d='M163.36,158.94s11.81-11.72,14.11-50.86c1.91-32.56,6.58-38.92,16.33-41.2,15.06-3.54,18.65.94,23.39,7.63,0,0-24.08,1.49-23.24,16.56s-2.51,68.75-22.32,86.81C171.63,177.88,162.44,177.11,163.36,158.94Z'
                fill='#ffd200'
              ></path>
              <path
                d='M163.36,158.94s11.81-11.72,14.11-50.86c1.91-32.56,6.58-38.92,16.33-41.2,15.06-3.54,18.65.94,23.39,7.63,0,0-24.08,1.49-23.24,16.56s-2.51,68.75-22.32,86.81C171.63,177.88,162.44,177.11,163.36,158.94Z'
                fill='#fff'
                opacity='0.46'
              ></path>
              <path
                d='M196.37,93.76c-5-12,8.93-27.14,21-22.46,10.32,4,21.35,12.84,27.34,30.64C258.94,144.25,291,164.7,291,164.7s16.36,2.7,16.36,8.65-19.34,0-19.34,0-50.2-20.83-76.24-54.3C204,109,199.22,100.59,196.37,93.76Z'
                fill='#f4a28c'
              ></path>
              <path
                d='M226.35,134.56s19.94-6.75,25-16.62c0,0-7.22-38.91-32.87-47.28-8.44-2.75-17.87.34-22.29,8C190.83,88,192,105.22,226.35,134.56Z'
                fill='#ed8936'
              ></path>
              <path
                d='M226.35,134.56s19.94-6.75,25-16.62c0,0-7.22-38.91-32.87-47.28-8.44-2.75-17.87.34-22.29,8C190.83,88,192,105.22,226.35,134.56Z'
                fill='#fff'
                opacity='0.46'
              ></path>
              <rect
                x='271.49'
                y='198.46'
                width='52.16'
                height='67.53'
                fill='#ffd200'
              ></rect>
              <rect
                x='278.47'
                y='265.99'
                width='6.37'
                height='6.37'
                fill='#24285b'
              ></rect>
              <rect
                x='309.43'
                y='265.99'
                width='6.37'
                height='6.37'
                fill='#24285b'
              ></rect>
              <rect
                x='280.14'
                y='211.01'
                width='7.25'
                height='40.35'
                opacity='0.08'
              ></rect>
              <rect
                x='293.95'
                y='211.01'
                width='7.25'
                height='40.35'
                opacity='0.08'
              ></rect>
              <rect
                x='306.92'
                y='211.01'
                width='7.25'
                height='40.35'
                opacity='0.08'
              ></rect>
              <circle cx='222.58' cy='34.77' r='21.04' fill='#24285b'></circle>
              <polygon
                points='214.44 34.77 196.44 52.7 220.3 43.18 214.44 34.77'
                fill='#24285b'
              ></polygon>
              <rect
                x='220.3'
                y='25.3'
                width='3.51'
                height='11.08'
                fill='#fff'
              ></rect>
              <rect
                x='220.3'
                y='39.43'
                width='3.51'
                height='3.51'
                fill='#fff'
              ></rect>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
