import { useContext } from "react";
import { SharedSection } from "../../shared";
import { IAboutMainObj } from "../../interfaces";
import { SuccessSVG } from "../../assets/svg/AboutSVG";
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
      imgStart
    >
      <div className='  xl:text-lg md:text-base'>
        <ul className=' md:space-y-1 lg:space-y-2 xl:space-y-4'>
          {description &&
            description.map((item) => (
              <li
                className={`flex gap-2 p-1 transition duration-100 rounded ${
                  theme !== "light" ? "hover:light_bg" : "hover:dark_bg"
                }`}
                key={item.id}
              >
                <span className='text-lg'>{SuccessSVG}</span>
                {item.title}
              </li>
            ))}
        </ul>
      </div>
    </SharedSection>
  );
};

export default AboutDetails;
