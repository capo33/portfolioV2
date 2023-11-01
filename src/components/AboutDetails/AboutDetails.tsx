import { SharedSection } from "../../shared";

interface InfoSectionProps {
  topLine: string;
  firstHeadLine?: string;
  secondHeadLine?: string;
  description?: {
    id: number;
    emoji?: string;
    title: string;
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
        <div className='text-gray-500 xl:text-lg md:text-base dark:text-gray-400'>
          <ul className='space-y-5'>
            {description &&
              description.map((item) => (
                <li
                  className='flex space-x-3 lg:text-lg items-center p-2 hover:bg-gray-200'
                  key={item.id}
                >
                  <span className='text-lg'>{item.emoji}</span>
                  <span className='text-base text-gray-900 '>{item.title}</span>
                </li>
              ))}
          </ul>
        </div>
      </SharedSection>
    </>
  );
};

export default AboutDetails;
