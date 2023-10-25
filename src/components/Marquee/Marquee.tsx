import M from "react-fast-marquee";
import { Link } from "react-router-dom";
import Icons from "../../assets/svg/MarqueeSVG";

interface MarqueeProps {
  link: string;
}

const Marquee = ({ link }: MarqueeProps) => {
  return (
    <Link to={link}>
      <M pauseOnHover speed={100}>
        <div className='flex flex-wrap justify-center pt-10 lg:justify-between'>
          {Icons.map((icon) => (
            <div className='lg:px-16' key={icon.id}>
              {icon.icon as string}
            </div>
          ))}
        </div>
      </M>
    </Link>
  );
};

export default Marquee;
