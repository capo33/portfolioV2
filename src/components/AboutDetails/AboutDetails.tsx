import { SharedSection } from "../../shared";

interface InfoSectionProps {
  topLine: string;
  firstHeadLine?: string;
  secondHeadLine?: string;
  description?: {
    id: number;
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
                  className='flex space-x-3 lg:text-lg relative'
                  key={item.id}
                >
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400'
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

                  <span className='text-base leading-tight text-gray-900 dark:text-white'>
                    {item.title}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </SharedSection>
    </>
  );
};

export default AboutDetails;
