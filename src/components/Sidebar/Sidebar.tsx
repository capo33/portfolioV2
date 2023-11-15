import { Link } from "react-router-dom";

import {
  useEscapeClick,
  usePreventScrolling,
  useWindowResize,
} from "../../hooks";
import { LighMode } from "..";
import { AnchorTag } from "../../shared";
import { NavBarLinks } from "../../data/NavbarLinks";
import { GitHubSVG, LinkedInSVG } from "../../assets/svg/NavSVG";

// Props
interface SidebarProps {
  open: boolean;
  theme: string;
  handleClick: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef?: React.RefObject<HTMLDivElement>;
}

const Sidebar = ({ open, handleClick, setOpen, theme }: SidebarProps) => {
  // to prevent scrolling when navbar is open
  usePreventScrolling(open);
  // to close navbar when pressed escape
  useEscapeClick(() => {
    setOpen(false);
  });
  // to close navbar when resized
  useWindowResize(() => {
    if (window.innerWidth > 1024) {
      setOpen(false);
    }
  });

  return (
    <div
      className={`fixed top-0 transition-all duration-75 ${
        theme === "light" ? "bg-[#fff] " : "dark_bg"
      } shadow-2xl shadow-slate-100 h-screen sm:w-80 md:w-1/2 
            lg:hidden flex flex-col p-10  
            ${open ? "left-0 overflow-hidden" : "-left-full"}`}
    >
      <div className='text-xl'>
        <div className='py-2 flex items-center rounded-md'>
          <Link to='/'>Menu</Link>
        </div>

        <hr className='my-2' />

        <div>
          {NavBarLinks.map((link) => (
            <Link
              to={link.to}
              className={`p-2.5 mt-2 flex items-center rounded-md   cursor-pointer hover:bg-cyan-500 transition-colors duration-75 ${
                theme === "light" ? "hover:light_text" : "hover:dark_text"
              } }`}
              key={link.id()}
              onClick={handleClick}
            >
              <span>{link.icon}</span>
              <span className='text-[15px]'>{link.text}</span>
              <hr className='my-2' />
            </Link>
          ))}

          <hr className='my-4 text-gray-600' />

          {/* Light Switch */}
          <div className='flex items-center justify-around  m-auto bg-gray-600 rounded-lg p-2'>
            <span className='mr-[18px] text-sm font-medium light_text lg:hidden '>
              Appearance
            </span>

            <LighMode />
          </div>
        </div>

        {/* Social icons */}
        <div className='flex items-center justify-evenly my-5'>
          {/* Github */}
          <AnchorTag
            href='https://www.linkedin.com/in/mohammad-ali-abbasi-1a2a1a1a1/'
            icon={GitHubSVG("w-7 h-7")}
            aClass=''
            sClass={`${
              theme === "light"
                ? "text-[#525252] hover:dark_text"
                : "text-[#dcdcdc] hover:light_text"
            } `}
          />

          {/* LinkedIn */}
          <AnchorTag
            href='https://www.linkedin.com/in/mohammad-ali-abbasi-1a2a1a1a1/'
            icon={LinkedInSVG("w-7 h-7")}
            aClass=''
            sClass={`${
              theme === "light" ? "dark_text" : "light_text"
            } hover:text-[#0077b5] hover:light_text`}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
