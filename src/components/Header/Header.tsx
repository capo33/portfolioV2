import { useState } from "react";

import { Sidebar } from "..";
import CV from "../../assets/pdf/CV.pdf";
import { NavBarLinks } from "../../data/NavbarLinks";
import { Link } from "react-router-dom";
import { BarsSVG, XCircledSVG } from "../../assets/svg/NavSVG";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((open) => (open = !open));
  };

  return (
    <nav className='bg-white dark:bg-gray-900 fixed w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link to='/' className='flex items-center'>
          <span className='before:content-["<"] before:text-green-600 before:mr-2 after:content-["/>"] after:text-green-600 after:ml-2 self-center  text-xl font-semibold whitespace-nowrap dark:text-white'>
            Mo
          </span>
        </Link>

        {/* Menu Icons */}
        <div className='flex md:order-2'>
          <a
            download={true}
            href={CV}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Download CV
          </a>
          {open ? (
            <button
              type='button'
              className=' md:hidden text-gray-600 hover:text-gray-600 focus:outline-none focus:text-gray-600'
              onClick={handleClick}
            >
              {XCircledSVG}
            </button>
          ) : (
            <button
              type='button'
              className=' md:hidden text-gray-600 hover:text-gray-600 focus:outline-none focus:text-gray-600'
              onClick={handleClick}
            >
              {BarsSVG}
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li className='hidden md:flex items-center space-x-3'>
              {NavBarLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.to}
                  className='px-2 text-gray-500 hover:text-gray-600 font-semibold flex items-center space-x-2 cursor-pointer'
                >
                  {link.icon}
                  {link.text}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <Sidebar open={open} handleClick={handleClick} />
    </nav>
  );
};

export default Header;
