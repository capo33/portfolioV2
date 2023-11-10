import { Link } from "react-router-dom";
import { GitHubSVG, LinkedInSVG, SpiderSVG } from "../../assets/svg/NavSVG";
import { AnchorTag } from "../../shared";
import { ReactSVG, TailwindSVG, TypescriptSVG } from "../../assets/svg";

const Footer = () => {
  return (
    <footer>
      <div className='p bg-gradient-to-b from-gray-500 to-transparent dark:from-gray-800 dark:to-transparent'>
        <div className='relative mt-16 pt-1 '>
          <svg
            className='absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-purple-400'
            preserveAspectRatio='none'
            viewBox='0 0 1440 54'
          >
            <path
              fill='currentColor'
              d='M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z'
            />
          </svg>
          <div className='px-10 pt-12 container mx-auto'>
            <div className='grid gap-16 row-gap-10 mb-8 lg:grid-cols-6'>
              <div className='md:max-w-md lg:col-span-2'>
                <Link to='/' className='flex items-center gap-2'>
                  {SpiderSVG("h-6 w-6 text-blue-500 dark:text-white")}
                  <span className='text-2xl font-semibold whitespace-nowrap'>
                    Mo
                  </span>
                </Link>
                <div className='mt-4 lg:max-w-sm'>
                  <p className='text-sm text-deep-purple-50'>
                    This Portfolio has been updated to the latest version of
                    ReactJS and TypeScript
                  </p>
                  <p className='mt-4 text-sm text-deep-purple-50'>
                    Made with <span>❤ </span>by Mohamed
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3'>
                <div>
                  <h6 className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                    Technologies
                  </h6>
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
                  <h6 className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                    Styles
                  </h6>
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
                  <h6 className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                    Contact Me
                  </h6>
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
                <AnchorTag
                  href='https://github.com/capo33'
                  icon={GitHubSVG("h-6 w-6")}
                  aClass='text-[#171515]'
                  // aClass='text-[#EFF3F9]'
                />
                <AnchorTag
                  href='https://www.linkedin.com/in/mohamed-capo/'
                  icon={LinkedInSVG("h-6 w-6")}
                  aClass='text-[#0077b5]'
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
