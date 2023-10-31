import React from "react";

import { SharedSection } from "../../shared";

interface InfoSectionProps {
  topLine: string;
  firstHeadLine?: string;
  secondHeadLine?: string;
  description?: {
    id: number;
    icon: React.JSX.Element;
    iconColor?: string;
    bg: string;
    title: string;
    text: string;
  }[];
  img: string;
}
const Showcase: React.FC<InfoSectionProps> = ({
  topLine,
  description,
  firstHeadLine,
  secondHeadLine,
  img,
}) => {
  return (
    <SharedSection
      topLine={topLine}
      firstHeadLine={firstHeadLine}
      secondHeadLine={secondHeadLine}
      img={img}
      imgStart
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 z-20'>
        {description &&
          description.map((item) => (
            <div
              className={`flex bg-gray-100 ${item.bg} dark:bg-gray-800 dark:bg-opacity-70 rounded  p-5 transition duration-200 ease-in-out`}
              key={item.id}
            >
              <span className={item.iconColor}>{item.icon}</span>

              <div className={`ml-4`}>
                <h2 className='mb-4 font-bold'>{item.title}</h2>
                <p className='leading-tight text-gray-700 text-base font-medium'>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
      </div>
    </SharedSection>
  );
};

export default Showcase;
