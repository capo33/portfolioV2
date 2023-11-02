import M from "react-fast-marquee";
import { Link } from "react-router-dom";

import Icons from "../../assets/svg/MarqueeSVG";

interface MarqueeProps {
  link: string;
}

const Marquee = ({ link }: MarqueeProps) => {
  return (
    <Link to={link}>
      <M pauseOnHover={true} speed={100} className='lg:pb-10'>
        <div className='flex flex-wrap justify-center pt-10 lg:justify-between'>
          {Icons.map((icon) => (
            <div className='lg:px-16' key={icon.id}>
              <img src={icon.icon} alt='' className="w-12 hover:scale-125 transition-all duration-300 ease-in-out" />
            </div>
          ))}
        </div>
      </M>
    </Link>
  );
};

export default Marquee;
