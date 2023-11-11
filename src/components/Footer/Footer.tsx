import { useContext } from "react";
import { Link } from "react-router-dom";
import { AnchorTag } from "../../shared";
import { ReactSVG, TailwindSVG, TypescriptSVG } from "../../assets/svg";
import { GitHubSVG, LinkedInSVG, SpiderSVG } from "../../assets/svg/NavSVG";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer>
      <div className={`${theme === "light" ? "light_footer" : "dark_footer"}`}>
        <div className='relative mt-16 pt-1 '>
          <div className='px-10 pt-12 container mx-auto'>
            <div className='grid gap-16 row-gap-10 mb-8 lg:grid-cols-6'>
              <div className='md:max-w-md lg:col-span-2'>
                <Link to='/' className='flex items-center gap-2'>
                  {SpiderSVG("h-6 w-6 text-cyan-600")}
                  <span className='text-2xl font-semibold whitespace-nowrap'>
                    Mo
                  </span>
                </Link>
                <div className='mt-4 lg:max-w-sm'>
                  <p
                    className={`${
                      theme === "light" ? "light_footer" : "dark_footer"
                    } text-lg`}
                  >
                    This Portfolio has been updated to the latest version of
                    ReactJS and TypeScript
                  </p>
                  <p className='mt-4  text-deep-purple-50'>
                    Made with <span>❤ </span>by Mohamed
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3'>
                <div>
                  <h6 className='text-lg font-medium'>Technologies</h6>
                  <ul className='mt-2 space-y-2'>
                    <li>
                      <span className='transition hover:text-cyan-600 px-1 border-l border-cyan-500'>
                        React{" "}
                        <img
                          src={ReactSVG}
                          alt='React'
                          className='w-4 inline'
                        />
                      </span>
                    </li>
                    <li>
                      <span className='transition hover:text-cyan-600 px-1 border-l border-cyan-500'>
                        Typescript{" "}
                        <img
                          src={TypescriptSVG}
                          alt='Typescript'
                          className='w-4 inline'
                        />
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className='text-lg font-medium'>Styles</h6>
                  <ul className='mt-4 list-inside space-y-4'>
                    <li>
                      <span className='transition hover:text-cyan-600 px-1 border-l border-cyan-500'>
                        TailwindCSS{" "}
                        <img
                          src={TailwindSVG}
                          alt='TailwindCSS'
                          className='w-4 inline'
                        />
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className='text-lg font-medium'>Contact Me</h6>
                  <ul className='mt-4 list-inside space-y-4'>
                    <li>
                      <span className='transition hover:text-cyan-600 px-1 border-l border-cyan-500'>
                        Email: madel413@gmail.com
                      </span>
                    </li>
                    <li>
                      <span className='transition hover:text-cyan-600 px-1 border-l border-cyan-500'>
                        Phone : +358 44 208 0939
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row'>
              <p className='text-sm'>
                © Copyright Mo {new Date().getFullYear()} - All rights reserved
              </p>
              <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
