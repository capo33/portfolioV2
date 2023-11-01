import React from "react";
import { SharedSection } from "../../shared";
 
interface InfoSectionProps {
  topLine: string;
  firstHeadLine?: string;
  secondHeadLine?: string;
  description?: {
    id: number;
    icon: React.ReactNode;
    title: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    icon1: React.ReactNode;
    icon2: React.ReactNode;
    icon4: React.ReactNode;
  }[];
  img: string;
}

const AboutDetails = ({
  firstHeadLine,
  secondHeadLine,
  topLine,
  description,
  img,
}: InfoSectionProps) => {
  return (
    <>
      <SharedSection
        topLine={topLine}
        firstHeadLine={firstHeadLine}
        secondHeadLine={secondHeadLine}
        img={img}
        imgStart
      >
       
        <div className=' '>
          <div className='text-gray-500 xl:text-lg md:text-base dark:text-gray-400'>
             <ul
              role='list'
              className='pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700'
            >
              {description &&
                description.map((item) => (
                  <li className='flex space-x-3'>
                    <svg
                      className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
 
                     <span className='lg:text-l leading-tight text-gray-900 dark:text-white'>
                      {item.title}
                    </span>
                    {item.icon}

                    <span className='text-base leading-tight text-gray-900 dark:text-white'>
                      {item.title4}
                    </span>
                    {item.icon4}
                    <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                      {item.title1}
                    </span>
                    {item.icon1}
                    <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                      {item.title3}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className='flex-1 text-center py-10 lg:py-0'>
          <img src={img} className='object-cover' />
        </div>
      </SharedSection>
    </>
  );
};

export default AboutDetails;
