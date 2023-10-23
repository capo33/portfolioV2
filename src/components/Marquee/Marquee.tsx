import M from "react-fast-marquee";
import { Link } from "react-router-dom";
import Icons from "../../assets/svg/MarqueeSVG";
 
interface MarqueeProps {
  link: string;
}

const Marquee = ({ link }:MarqueeProps) => {
  return (
    <Link to={link}>
      <M
        pauseOnHover
        className='py-5 font-bold lg:text-2xl md:text-xl sm:text-lg capitalize will-change-transform whitespace-nowrap'
        speed={100}
      >
        <div className='flex flex-wrap justify-center p-6 lg:justify-between'>
          {Icons.map((icon) => (
            <div
              className='lg:px-16'
              key={icon.id}
            >
              {icon.icon as string}
            </div>
          ))}
        </div>
      </M>
    </Link>
  );
};

export default Marquee;
