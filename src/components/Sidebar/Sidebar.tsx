import { Link } from "react-router-dom";

import {
  useEscapeClick,
  usePreventScrolling,
  useWindowResize,
} from "../../hooks";
import { NavBarLinks } from "../../data/NavbarLinks";
import { GitHubSVG, LinkedInSVG } from "../../assets/svg/NavSVG";
import { AnchorTag } from "../../shared";

// Props
interface SidebarProps {
  open: boolean;
  theme: string;
  setTheme: (theme: string) => void;
  handleClick: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef?: React.RefObject<HTMLDivElement>;
}

const Sidebar = ({
  open,
  handleClick,
  setOpen,
  theme,
  setTheme,
}: SidebarProps) => {
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
      className={`fixed ${
        theme === "light" ? "light_bg " : "dark_bg"
      } shadow-2xl shadow-slate-00 h-screen -mt-[3.2rem] sm:w-80 md:w-1/2 transition-all duration-300
            lg:hidden flex flex-col p-10  
            ${open ? "left-0 overflow-y-hidden" : "-left-full"}`}
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
              className='p-2.5 mt-2 flex items-center rounded-md duration-300 cursor-pointer hover:bg-cyan-600'
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
            <span className='mr-[18px] text-sm font-medium text-black lg:hidden '>
              Appearance
            </span>

            <label
              htmlFor='AcceptConditions'
              className='relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]'
            >
              <input
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "light" ? "dark" : "light")}
                type='checkbox'
                id='AcceptConditions'
                className='peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden'
              />
              <span className='absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-cyan-600'>
                <svg
                  data-unchecked-icon
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  data-checked-icon
                  xmlns='http://www.w3.org/2000/svg'
                  className='hidden h-4 w-4'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              <span className='absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-cyan-500' />
            </label>
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
              theme === "light" ? "text-light_text" : "text-dark_text"
            } hover:text-black`}
          />

          {/* LinkedIn */}
          <AnchorTag
            href='https://www.linkedin.com/in/mohammad-ali-abbasi-1a2a1a1a1/'
            icon={LinkedInSVG("w-7 h-7")}
            aClass=''
            sClass={`${
              theme === "light" ? "text-light_text" : "text-dark_text"
            } hover:text-[#0077b5]`}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
