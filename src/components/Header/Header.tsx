import { Link } from "react-router-dom";
import { NavBarLinks } from "../../data/NavbarLinks";
import { useState } from "react";

interface SidebarProps {
  open: boolean;
  handleClick: () => void;
}
// Sidebar navigation
const Sidebar = ({ open, handleClick }: SidebarProps) => {
  return (
    <div
      className={`fixed bg-gray-500 w-2/3 h-screen  
            md:hidden flex flex-col gap-10 text-medium  p-7  duration-500
            ${open ? "right-0" : "right-[-100%]"}`}
    >
      <div className='text-gray-100 text-xl'>
        <div className='py-2 flex items-center rounded-md '>
          <Link to='/'>
            <span className='before:content-["<"] before:mr-2 after:content-["/>"] after:ml-2'>
              Mo
            </span>
          </Link>
        </div>

        <hr className='my-2 text-gray-600' />

        <div>
          {NavBarLinks.map((link) => (
            <Link
              to={link.to}
              className='p-2.5 mt-2 flex items-center rounded-md   duration-300 cursor-pointer  hover:bg-blue-600'
              key={link.id}
            >
              <span>{link.icon}</span>
              <span className='text-[15px] text-gray-200'>{link.text}</span>
              <hr className='my-2 text-gray-600' />
            </Link>
          ))}

          <hr className='my-4 text-gray-600' />
          <div className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600'>
            <i className='bi bi-envelope-fill'></i>
            <span className='text-[15px] ml-4 text-gray-200'>Messages</span>
          </div>

          <div className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600'>
            <i className='bi bi-chat-left-text-fill'></i>
            <div
              className='flex justify-between w-full items-center'
              onClick={handleClick}
            >
              <span className='text-[15px] ml-4 text-gray-200'>Chatbox</span>
              <span className='text-sm rotate-180' id='arrow'>
                <i className='bi bi-chevron-down'></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((open) => (open = !open));
    console.log("open toggle");
  };

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
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6  '
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
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
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6  '
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
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
                className='py-2 px-2 text-gray-500 hover:text-gray-600 font-semibold'
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <Sidebar open={open} handleClick={handleClick} />
      </nav>
    </>
  );
};

export default Header;
