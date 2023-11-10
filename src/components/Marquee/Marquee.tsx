import { useContext } from "react";
import M from "react-fast-marquee";
import { Link } from "react-router-dom";

import Icons from "../../assets/svg/MarqueeSVG";
import { ThemeContext } from "../../context/ThemeContext";

interface MarqueeProps {
  link: string;
}

const Marquee = ({ link }: MarqueeProps) => {
  const { toggle } = useContext(ThemeContext);
  return (
    <div >

    <Link to={link}>
      <h2 className={`text-center text-xl font-semibold leading-8 pb-3 ${!toggle ? 'dark_text':'light_text'}`}>
        Technologies I been working with
      </h2>
      <M pauseOnHover={true} speed={100} className={`${toggle &&'bg-[#3d3d3d] shadow-2xl rounded'}`}>
        <div className='pt-5 grid grid-cols-12 gap-x-8'>
          {Icons.map((icon) => (
            <div className='lg:px-16 md:px-10 px-5 pb-5' key={icon.id}>
              <img
                src={icon.icon}
                alt={icon.alt}
                className='w-10 hover:scale-125 transition-all duration-300 ease-in-out'
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
