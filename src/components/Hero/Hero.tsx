import React from "react";
import Section from "../../shared/Section/Section";
import { MitionAnimate } from "..";
import Anchor from "../Anchor/Anchor";

interface InfoSectionProps {
  topLine: string;
  img: string;
  firstHeadLine?: string;
  secondHeadLine?: string;
  firstLabel?: string;
  secondLabel?: string;
  firstIcon?: React.JSX.Element;
  secondIcon?: React.JSX.Element;
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
    <MitionAnimate>
      <Section
        topLine={topLine}
        firstHeadLine={firstHeadLine}
        secondHeadLine={secondHeadLine}
        description={description}
        img={img}
      >
        <div className='pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
          <Anchor
            icon={firstIcon}
            label={firstLabel}
            aClass='inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
          />
          <Anchor
            icon={secondIcon}
            label={secondLabel}
            aClass='inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
          />
        </div>
      </Section>
    </MitionAnimate>
  );
};

export default Hero;
