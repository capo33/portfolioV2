import { useContext } from "react";
import { SharedSection } from "../../shared";
import { IAboutMainObj } from "../../interfaces";
import { ThemeContext } from "../../context/ThemeContext";

const AboutDetails = ({
  firstHeadLine,
  secondHeadLine,
  topLine,
  description,
  img,
}: IAboutMainObj) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SharedSection
      topLine={topLine}
      firstHeadLine={firstHeadLine}
      secondHeadLine={secondHeadLine}
      img={img}
      // imgStart
     >
      <div className='xl:text-lg md:text-base'>
        <div className='space-y-4'>
          {description &&
            description.map((item) => (
              <p
                className={`lg:text-lg flex gap-2 p-1 transition-colors duration-100 rounded items-start ${
                  theme !== "light" ? "hover:light_bg" : "hover:dark_bg"
                }`}
                key={item.id}
              >
                <span className='text-cyan-500 font-bold'>
                  <svg
                    className='flex-shrink-0 w-5 h-7 text-cyan-500'
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
                </span>
                {item.title}
              </p>
            ))}
        </div>
      </div>
    </SharedSection>
  );
};

export default AboutDetails;
