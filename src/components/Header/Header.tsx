import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Sidebar } from "..";
import CV from "../../assets/pdf/CV.pdf";
import { useOutsideClick, useWindowResize, useWindowScroll } from "../../hooks";
import { NavBarLinks } from "../../data/NavbarLinks";
import { BarsSVG, XCircledSVG } from "../../assets/svg/NavSVG";

const Header = () => {
  const [top, setTop] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen((open) => !open);
    console.log("clicked");
  };

  // to close navbar when clicked outside
  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  //  to handle navbar when resized
  useWindowResize(() => {
    if (window.innerWidth > 1024) {
      setOpen(false);
    }
  });

  // to handle navbar with shadow on scroll
  useWindowScroll(() => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  });

  return (
    <header
      className={`text-gray-600 body-font sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm ${
        !top && "sticky top-0 bg-zinc-100 shadow-md z-50"
      }`}
    >
      <nav
        className={`container mx-auto p-4
        }`}
        ref={ref}
      >
        <div className='flex flex-wrap items-center justify-between mx-auto '>
          <Link to='/' className='flex items-center gap-2'>
              <svg
                className='h-8 w-8 text-gray-800 dark:text-white'
                viewBox='0 0 28 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z'
                  fill='currentColor'
                />
              </svg>
            <span className='  self-center  text-xl font-semibold whitespace-nowrap dark:text-white'>
              Mo
            </span>
          </Link>

          {/* Menu Icons */}
          <div className='flex md:order-2'>
            <a
              download={true}
              href={CV}
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Download CV
            </a>
            {open ? (
              <button
                type='button'
                className='lg:hidden text-gray-600 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                onClick={handleClick}
              >
                {XCircledSVG}
              </button>
            ) : (
              <button
                type='button'
                className='lg:hidden text-gray-600 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                onClick={handleClick}
              >
                {BarsSVG}
              </button>
            )}
          </div>

          {/* Desktop Menu */}
          <div
            className='items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1'
            id='navbar-sticky'
          >
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
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
        <Sidebar
          open={open}
          handleClick={handleClick}
          setOpen={setOpen}
          menuRef={menuRef}
        />
      </nav>
    </header>
  );
};

export default Header;
