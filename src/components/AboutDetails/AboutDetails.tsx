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
                className={`lg:text-lg flex gap-2 p-1 transition duration-100 rounded ${
                  theme !== "light" ? "hover:light_bg" : "hover:dark_bg"
                }`}
                key={item.id}
              >
                <span className='text-cyan-500 font-bold'>-</span>
                {item.title}
              </p>
            ))}
        </div>
      </div>
    </SharedSection>
  );
};

export default AboutDetails;
