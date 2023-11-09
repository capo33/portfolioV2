import { Link } from "react-router-dom";
import { GitHubSVG, LinkedInSVG, SpiderSVG } from "../../assets/svg/NavSVG";
import { AnchorTag } from "../../shared";
import { ReactSVG, TailwindSVG, TypescriptSVG } from "../../assets/svg";

const Footer = () => {
  return (
    <footer>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='-mb-0.5 w-full'
        viewBox='0 0 1367.743 181.155'
      >
        <path
          className='fill-current text-gray-100 dark:text-gray-800'
          id='wave'
          data-name='wave'
          d='M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z'
          transform='translate(1.743 66.155)'
        />
      </svg>
      <div className='bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent pt-1'>
        <div className='px-10 container mx-auto'>
          <div className='grid lg:grid-cols-8 md:grid-cols-8 gap-6 md:gap-0'>
            <div className='col-span-8 border-r border-gray-100 dark:border-gray-800 md:col-span-2 lg:col-span-3'>
              <div className='flex items-center justify-between gap-6 border-b border-white dark:border-gray-800 py-6 md:block md:space-y-6 md:border-none md:py-0'>
                <Link to='/' className='flex items-center gap-2'>
                  {SpiderSVG("h-6 w-6 text-blue-500 dark:text-white")}
                  <span className='text-2xl font-semibold whitespace-nowrap'>
                    Mo
                  </span>
                </Link>
                <div className='flex gap-6'>
                  <AnchorTag
                    href='https://github.com/capo33'
                    icon={GitHubSVG("h-5 w-5")}
                    aClass='hover:text-black'
                  />
                  <AnchorTag
                    href='https://www.linkedin.com/in/mohamed-capo/'
                    icon={LinkedInSVG("h-5 w-5")}
                    aClass='hover:text-[#0A66C2]'
                  />
                </div>
              </div>
            </div>
            <div className='col-span-8 md:col-span-6 lg:col-span-5'>
              <div className='grid grid-cols-1 gap-6 pb-16 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                  <h6 className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                    Technologies
                  </h6>
                  <ul className='mt-4 list-inside space-y-4'>
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
              <div className='flex justify-between border-t border-gray-100 dark:border-gray-800 py-4 pb-8 '>
                <span>
                  © Copyright Mo {new Date().getFullYear()} - All rights
                  reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;