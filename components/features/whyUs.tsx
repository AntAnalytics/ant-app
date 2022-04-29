import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';
const features = [
  {
    name: 'Cost Effective',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Farm to Fork',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Cutting Edge Technology',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
];

export default function WhyUs() {
  return (
    <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-base font-semibold uppercase tracking-wider text-indigo-600'>
          Why Choose us
        </h2>
        <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          A better way to send money
        </p>

        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.name} className='pt-6'>
                <div className='flow-root rounded-lg bg-gray-50 px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg'>
                        <feature.icon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                      {feature.name}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
