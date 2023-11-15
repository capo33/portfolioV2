import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  useActiveLink,
  useOutsideClick,
  useWindowResize,
  useWindowScroll,
} from "../../hooks";
import { LighMode, Sidebar } from "..";
import { NavBarLinks } from "../../data/NavbarLinks";
import { ThemeContext } from "../../context/ThemeContext";
import { BarsSVG, SpiderSVG, XCircledSVG } from "../../assets/svg/NavSVG";

const Header = () => {
  // States
  const [top, setTop] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  // Context
  const { theme } = useContext(ThemeContext);
  //  Ref
  const menuRef = useRef<HTMLDivElement>(null);

  // Click Handler
  const handleClick = () => {
    setOpen((open) => !open);
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
      className={`sticky top-0 transition-colors duration-300 ${
        theme === "light" ? "light_bg" : "dark_bg"
      }  ${
        !top &&
        `sticky top-0 ${
          theme === "light" ? "light_bg" : "dark_bg"
        } bg-opacity-90 backdrop-blur-sm shadow-md z-50 `
      }`}
    >
      <nav className='container mx-auto px-10 py-4' ref={ref}>
        <div className='flex flex-wrap items-center justify-between mx-auto'>
          <Link to='/' className='flex items-center gap-2'>
            {SpiderSVG("h-6 w-6 text-cyan-500")}
            <span className='text-2xl font-semibold whitespace-nowrap'>Mo</span>
          </Link>

          <div className='flex md:order-2'>
            {/* Light Switch */}

            <div className='flex items-center justify-around  m-auto  rounded-lg p-2'>
              <span
                className={`mr-[18px] text-sm font-medium transition-colors duration-300 ${
                  theme != "light" ? "light_text" : "dark_text"
                } lg:block md:hidden`}
              >
                Theme
              </span>
              <LighMode aclass='hide_icon' />
            </div>

            {/* Menu Icons */}
            <button type='button' className='lg:hidden' onClick={handleClick}>
              {open ? XCircledSVG : BarsSVG}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className='items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1'>
            <ul>
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
          theme={theme}
        />
      </nav>
    </header>
  );
};

export default Header;
