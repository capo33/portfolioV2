import React from "react";

interface InfoSectionProps {
  topLine: string;
  firstHeadLine?: string;
  secondHeadLine?: string;
  firstLabel?: string;
  secondLabel?: string;
  firstIcon?: React.JSX.Element;
  secondIcon?: React.JSX.Element;
  img?: string;
  description?: string;
}
const Hero = ({
  firstHeadLine,
  secondHeadLine,
  topLine,
  firstLabel,
  secondLabel,
  firstIcon,
  secondIcon,
  img,
  description,
}: InfoSectionProps) => {
  return (
    <section className='dark:bg-gray-900'>
      <div className='pt-24 m-auto container pb-12 px-4 items-center lg:flex'>
        <div className='space-y-4 flex-1 lg:text-left'>
          <span className='text-main-color font-semibold text-lg'>
            {topLine}
          </span>
          <span className='ml-2 inline-block h-[1px] w-8 bg-blue-400'></span>
          <h1 className=' max-w-5xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
            {firstHeadLine}{" "}
            <span className='text-indigo-400'>{secondHeadLine}</span>
          </h1>
          <p className='mb-8 lg:text-xl text-gray-700'>{description} </p>
          <div className=' pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
            <a
              href='https://github.com/themesberg/landwind'
              className='inline-flex items-center justify-center  w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
            >
              {firstIcon}
              {firstLabel}
            </a>
            <a
              href='https://github.com/themesberg/landwind'
              className='inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
            >
              {secondIcon}
              {secondLabel}
            </a>
          </div>
        </div>
        <div className='flex-1 text-center mt-7 lg:mt-0 lg:ml-3'>
          <img
            src={img as string}
            className='w-full mx-auto sm:w-10/12  lg:w-full'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
