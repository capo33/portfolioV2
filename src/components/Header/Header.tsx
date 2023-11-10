import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  useActiveLink,
  useOutsideClick,
  useWindowResize,
  useWindowScroll,
} from "../../hooks";
import { Sidebar } from "..";
import CV from "../../assets/pdf/CV.pdf";
import { NavBarLinks } from "../../data/NavbarLinks";
import { BarsSVG, SpiderSVG, XCircledSVG } from "../../assets/svg/NavSVG";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  // States
  const [top, setTop] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  // Ref
  const menuRef = useRef<HTMLDivElement>(null);

  // Context
  const { toggle, setToggle } = useContext(ThemeContext);

  // to handle navbar when clicked outside
  const handleClick = () => {
    setOpen((open) => !open);
    console.log("clicked");
  };

  // Active Link
  const { linkness } = useActiveLink();

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
      className={`sticky top-0 ${
        !toggle ? "light_bg" : "dark_bg"
      }  bg-opacity-90 backdrop-blur-sm ${
        !top && `sticky top-0 ${!toggle ?  "light_bg" : "dark_bg"} shadow-md z-50`
      }`}
    >
      <nav className='container mx-auto px-10 py-4' ref={ref}>
        <div className='flex flex-wrap items-center justify-between mx-auto'>
          <Link to='/' className='flex items-center gap-2'>
            {SpiderSVG("h-6 w-6 text-cyan-500 ")}
            <span className='text-2xl font-semibold whitespace-nowrap'>Mo</span>
          </Link>
          {/* CV */}
          <div className='flex md:order-2'>
            <a
              download={true}
              href={CV}
              className='text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0'
            >
              Download CV
            </a>
            <label
              htmlFor='AcceptConditions'
              className='relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]'
            >
              <input
              checked={toggle}
              onChange={() => setToggle(!toggle)}
                type='checkbox'
                id='AcceptConditions'
                className='peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden'
              />
              <span className='absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600'>
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
              <span className='absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500' />
            </label>
            {/* Menu Icons */}
            <button
              type='button'
              className='lg:hidden text-gray-600 hover:text-gray-600 focus:outline-none focus:text-gray-600'
              onClick={handleClick}
            >
              {open ? XCircledSVG : BarsSVG}
            </button>
          </div>

          {/* Desktop Menu */}
          <div
            className='items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1'
            id='navbar-sticky'
          >
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 '>
              <li className={`hidden md:flex items-center space-x-3`}>
                {NavBarLinks.map((link) => (
                  <Link
                    key={link.id()}
                    to={link.to}
                    aria-label={link.text}
                    className={`${linkness(link.to.split("/")[1])} 
                }`}
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
          toggle={toggle}
          setToggle={setToggle}
        />
      </nav>
    </header>
  );
};

export default Header;
