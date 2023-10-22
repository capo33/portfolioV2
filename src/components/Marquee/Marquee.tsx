import M from "react-fast-marquee";
import { Link } from "react-router-dom";
import {
  CsharpSVG,
  GraphQLSVG,
  HtmlSVG,
  NodeSVG,
  ReactSVG,
  ReduxSVG,
  TypeScriptSVG,
} from "../../assets/svg/NavSVG";

interface MarqueeProps {
  link: string;
}

const icons = [
  { id: 1, icon: ReduxSVG },
  { id: 2, icon: HtmlSVG },
  { id: 3, icon: ReactSVG },
  { id: 4, icon: TypeScriptSVG },
  { id: 5, icon: GraphQLSVG },
  { id: 6, icon: CsharpSVG },
  { id: 7, icon: NodeSVG },
];
const Marquee: React.FC<MarqueeProps> = ({ link }) => {
  return (
    <Link to={link}>
      <M
        pauseOnHover
        className='py-5 font-bold lg:text-2xl md:text-xl sm:text-lg capitalize will-change-transform whitespace-nowrap'
        speed={100}
      >
        <div className='px-16 flex flex-wrap justify-center p-6 lg:justify-between'>
          {icons.map((icon) => (
            <div
              className='px-16 flex flex-wrap justify-center p-6 lg:justify-between'
              key={icon.id}
            >
              {icon.icon}
            </div>
          ))}
        </div>
      </M>
    </Link>
  );
};

export default Marquee;
