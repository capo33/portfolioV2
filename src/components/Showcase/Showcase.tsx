import React from "react";

import { SharedSection } from "../../shared";
import { IHomeMainObj, IDescription } from "../../interfaces";

const Showcase: React.FC<IHomeMainObj<IDescription[]>> = ({
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
              className={`flex ${item.bg} rounded p-5 transition duration-200 ease-in-out sub_text_dark`}
              key={item.id}
            >
              <span className={item.iconColor}>{item.icon}</span>

              <div className={`ml-4`}>
                <h2 className='mb-4 font-bold'>{item.title}</h2>
                <p className='leading-tight text-base font-medium'>
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
