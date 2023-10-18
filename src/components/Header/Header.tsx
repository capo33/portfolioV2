import { Link } from "react-router-dom";
import CV from "../../assets/pdf/CV.pdf";
import { NavBarLinks } from "../data/NavbarData/Index";
import { useState } from "react";

interface SidebarProps {
  handleClick: () => void;
}

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((open) => (open = !open));
    console.log("open toggle");
  };

  // create responsive navbar with sidebar
  return (
    <>
      <nav className='bg-white dark:bg-gray-900 fixed w-full   top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <div className='flex items-center'>
            {open ? (
              <button
                type='button'
                className=' md:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6  '
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            ) : (
              <button
                type='button'
                className=' md:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6  '
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                  />
                </svg>
              </button>
            )}

            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Flowbite
            </span>
          </div>
          <div className='hidden md:flex items-center space-x-3'>
            {NavBarLinks.map((link, i) => (
              <a
                key={i}
                href={link.to}
                className='text-medium font-semibold hover:text-primary'
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className='flex items-centergap-3'>
          <ul
            className={`fixed top-0   bg-white w-full h-screen  
            md:hidden flex flex-col gap-10 text-medium  p-7 pt-20 duration-500
            ${open ? "right-0" : "right-[-100%]"}`}
          >
            {NavBarLinks.map((link, i) => (
              <li key={i} className='font-semibold hover:text-primary'>
                <a href={link.to}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
