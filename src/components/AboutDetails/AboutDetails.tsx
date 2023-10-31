import React from "react";
import { SharedSection } from "../../shared";
import Capo from "../../assets/images/hero.png";

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
    <SharedSection
      topLine={topLine}
      firstHeadLine={firstHeadLine}
      secondHeadLine={secondHeadLine}
      img={img}
     >
      <div className='grid gap-4 z-20'>
        {description &&
          description.map((item) => (
            <ol className='shadow-md '>
              <li className={`border-t-2  `} key={item.id}>
                <span className={`before:content-['🦾'] before:text-[#222222] block p-1 m-1 transition-all hover:bg-[#eee]`}>
                {item.title}
                  {item.icon}
                  {item.title4}
                  {item.icon4}
                  {item.title1}
                  {item.icon1}
                  {item.title2}
                  {item.icon2}
                  {item.title3}
                </span>
              </li>
            </ol>
          ))}
      </div>
      <div className='flex-1 text-center py-10 lg:py-0'>
        <img src={img} className='object-cover' />
      </div>
    </SharedSection>


  );
};

export default AboutDetails;
