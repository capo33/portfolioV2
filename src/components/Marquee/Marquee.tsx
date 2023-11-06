import M from "react-fast-marquee";
import { Link } from "react-router-dom";

import Icons from "../../assets/svg/MarqueeSVG";

interface MarqueeProps {
  link: string;
}

const Marquee = ({ link }: MarqueeProps) => {
  return (
    <Link to={link}>
      <M pauseOnHover={true} speed={100}>
        <div className='py-10 grid grid-cols-12 gap-x-8 '>
          {Icons.map((icon) => (
            <div className='lg:px-16 md:px-10 px-5 pb-10' key={icon.id}>
              <img
                src={icon.icon}
                alt={icon.alt}
                className='w-16 pr-5 hover:scale-125 transition-all duration-300 ease-in-out'
              />
            </div>
          ))}
        </div>
      </M>
    </Link>
  );
};

export default Marquee;
