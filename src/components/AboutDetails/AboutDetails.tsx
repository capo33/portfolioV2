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
        <ul className='space-y-3'>
          {description &&
            description.map((item) => (
              <li
                className={`flex gap-3 lg:text-lg items-start p-1 transition duration-100 rounded ${
                  theme !== "light" ? "hover:light_bg" : "hover:dark_bg"
                }`}
                key={item.id}
              >
                <span className='text-lg'>{SuccessSVG}</span>
                <span className='text-base'>{item.title}</span>
              </li>
            ))}
        </ul>
      </div>
    </SharedSection>
  );
};

export default AboutDetails;
