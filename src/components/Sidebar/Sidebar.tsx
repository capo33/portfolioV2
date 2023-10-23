import { useState } from "react";
import { Link } from "react-router-dom";

import { NavBarLinks } from "../../data/NavbarLinks";
import { useEscapeClick, useWindowResize } from "../../hooks";
import { GitHubSVG, LinkedInSVG } from "../../assets/svg/NavSVG";

// Props
interface SidebarProps {
  open: boolean;
  handleClick: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef?: React.RefObject<HTMLDivElement>;
}

const Sidebar = ({ open, handleClick, setOpen }: SidebarProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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
      className={`fixed bg-gray-500 h-screen  
            lg:hidden flex flex-col gap-10 text-medium p-7 duration-500
            ${open ? "left-0" : "left-[-100%]"}`}
    >
      <div className='text-gray-100 text-xl'>
        <div className='py-2 flex items-center rounded-md '>
          <Link to='/'>Menu</Link>
        </div>

        <hr className='my-2 text-gray-600' />

        <div onClick={handleClick}>
          {NavBarLinks.map((link) => (
            <Link
              to={link.to}
              className='p-2.5 mt-2 flex items-center rounded-md duration-300 cursor-pointer hover:bg-blue-600'
              key={link.id}
            >
              <span>{link.icon}</span>
              <span className='text-[15px] text-gray-200'>{link.text}</span>
              <hr className='my-2 text-gray-600' />
            </Link>
          ))}

          <hr className='my-4 text-gray-600' />

          {/* Light Switch */}
          <div className='flex items-center justify-around  m-auto bg-gray-600 rounded-lg p-2'>
            <span className='mr-[18px] text-sm font-medium text-black lg:hidden '>
              Appearance
            </span>
            <label className='relative inline-flex cursor-pointer select-none items-center'>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={handleCheckboxChange}
                className='sr-only'
              />

              <span
                className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                  isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
                }`}
              >
                <span
                  className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                    isChecked ? "translate-x-[28px]" : ""
                  }`}
                ></span>
              </span>
            </label>
          </div>
        </div>

        {/* Social icons */}
        <div className='flex items-center justify-evenly my-5'>
          {/* Github */}
          <a
            href='https://www.linkedin.com/in/mohammad-ali-abbasi-1a2a1a1a1/'
            target='_blank'
            rel='noreferrer'
            className='text-gray-200 hover:text-gray-300 '
          >
            {GitHubSVG("w-7 h-7")}
          </a>
          {/* LinkedIn */}
          <a
            href='https://www.linkedin.com/in/mohammad-ali-abbasi-1a2a1a1a1/'
            target='_blank'
            rel='noreferrer'
            className='text-gray-200 hover:text-gray-300'
          >
            {LinkedInSVG}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
