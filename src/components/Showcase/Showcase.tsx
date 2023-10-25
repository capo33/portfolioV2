import React from "react";
import MySVG from "../../assets/hero.png";
import { SharedSection } from "../../shared";

interface InfoSectionProps {
  topLine: string;
  firstHeadLine?: string;
  secondHeadLine?: string;
  description?: {
    id: number;
    icon: string;
    title: string;
    text: string;
  }[];
}
const Showcase: React.FC<InfoSectionProps> = ({
  topLine,
  description,
  firstHeadLine,
  secondHeadLine,
}) => {
  return (
    <SharedSection
      topLine={topLine}
      firstHeadLine={firstHeadLine}
      secondHeadLine={secondHeadLine}
      img={MySVG}
      imgStart
    >
      <div className='items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 z-20'>
          {description &&
            description.map((item) => (
              <div
                className='flex bg-gray-100 hover:bg-slate-200 dark:bg-gray-800 dark:bg-opacity-70 rounded-lg 2xl:rounded-xl p-5 aos-init aos-animate'
                data-aos='fade-up'
              >
                <span className=' text-xl lg:text-2xl text-main-color lg:mb-2'>
                  {item.icon}
                </span>

                <div className='ml-4'>
                  <h2 className='mb-4 font-bold xl:text-'>{item.title}</h2>
                  <p className='lg:text-lg leading-tight text-gray-700 text-base font-medium'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </SharedSection>
  );
};

export default Showcase;
