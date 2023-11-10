import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface SectionProps {
  children: React.ReactNode;
  topLine?: string;
  firstHeadLine?: string;
  secondHeadLine?: string;
  description?: string;
  img?: string;
  imgStart?: boolean;
}

const Section = ({
  children,
  topLine,
  firstHeadLine,
  secondHeadLine,
  description,
  img,
  imgStart,
}: SectionProps) => {
  const { toggle } = useContext(ThemeContext);

  return (
    <section>
      <div
        className={`items-center lg:flex ${imgStart && "flex-row-reverse"} `}
      >
        <div className='flex-1'>
          <span className='text-main-color font-semibold text-lg'>
            {topLine}
          </span>
          <span className='ml-2 inline-block h-[1px] w-8 bg-cyan-400'></span>
          <h2 className='max-w-5xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl'>
            {firstHeadLine}
            <span className='text-cyan-500'>{secondHeadLine}</span>
          </h2>
          <p className={`mb-8 lg:text-xl ${!toggle? 'sub_text_dark': 'sub_text_light'}`}>{description} </p>

          <div className='items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
            {children}
          </div>
        </div>
        <div className='flex-1 text-center flex justify-center py-10 lg:py-0'>
          <img src={img} className='object-cover' />
        </div>
      </div>
    </section>
  );
};

export default Section;
