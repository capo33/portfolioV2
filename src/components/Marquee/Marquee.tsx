import { useContext } from "react";
import M from "react-fast-marquee";
import { Link } from "react-router-dom";

import Icons from "../../assets/svg/MarqueeSVG";
import { ThemeContext } from "../../context/ThemeContext";

interface MarqueeProps {
  link: string;
}

const Marquee = ({ link }: MarqueeProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Link to={link}>
        <h2
          className={`text-center text-xl font-semibold leading-8 pb-3 transition-colors duration-300 ${
            theme === "light" ? "dark_text" : "light_text"
          }`}
        >
          Technologies I been working with
        </h2>
        <M
          pauseOnHover={true}
          speed={50}
          className={`${
            theme !== "light" &&
            "marquee_dark_bg transition-colors duration-300"
          }`}
        >
          <div className='pt-5 grid grid-cols-12 gap-x-8'>
            {Icons.map((icon) => (
              <div className='lg:px-16 md:px-10 px-5 pb-5' key={icon.id}>
                <img
                  src={icon.icon}
                  alt={icon.alt}
                  className='w-12 light_bg rounded p-1 hover:scale-125 transition-all duration-300 ease-in-out'
                />
              </div>
            ))}
          </div>
        </M>
      </Link>
    </div>
  );
};

export default Marquee;
