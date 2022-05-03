/* This example requires Tailwind CSS v2.0+ */
export default function DividerWithTitle({ title }: { title: string }) {
  return (
    <div className='relative'>
      <div className='absolute inset-0 flex items-center' aria-hidden='true'>
        <div className='w-full border-t border-gray-300' />
      </div>
      <div className='relative flex justify-center'>
        <span className='rounded-lg bg-white px-3 text-lg font-medium text-indigo-600 '>
          {title}
        </span>
      </div>
    </div>
  );
}
