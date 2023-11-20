import { useContext } from "react";
import { Link } from "react-router-dom";

import { AnchorTag } from "../../shared";
import { ThemeContext } from "../../context/ThemeContext";
import { GitHubSVG, LinkedInSVG, SpiderSVG } from "../../assets/svg/NavSVG";
import {
  contact,
  footerCopyRight,
  footerLogoName,
  footerSubtitle,
  footerTitle,
  style,
  teckStack,
} from "../../data/FooterData";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer>
      <div
        className={`transition-colors duration-300 ${
          theme === "light" ? "light_footer" : "dark_footer"
        }`}
      >
        <div className='relative mt-16 pt-1 '>
          <div className='px-10 pt-12 container mx-auto'>
            <div className='grid gap-16 row-gap-10 mb-8 lg:grid-cols-6'>
              <div className='md:max-w-md lg:col-span-2'>
                <Link to='/' className='flex items-center gap-2'>
                  {SpiderSVG("h-6 w-6 green_text")}
                  <span className='text-2xl font-semibold whitespace-nowrap'>
                    {footerLogoName}
                  </span>
                </Link>
                <div className='mt-4 lg:max-w-sm'>
                  <p>{footerTitle}</p>
                  <p className='mt-4'>{footerSubtitle}</p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3'>
                <div>
                  <h6 className='text-lg font-medium'>Technologies</h6>
                  <ul className='mt-2 space-y-2'>
                    {teckStack.map((item) => (
                      <li key={item.id}>
                        <span className='pr-2'>{item.name}</span>
                        <img
                          src={item.icon}
                          alt={item.name}
                          className='w-4 inline'
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className='text-lg font-medium'>Styles</h6>
                  <ul className='mt-4 list-inside space-y-4'>
                    {style.map((item) => (
                      <li key={item.id}>
                        <span className='pr-2'>{item.name}</span>
                        <img
                          src={item.icon}
                          alt={item.name}
                          className='w-4 inline'
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className='text-lg font-medium'>Contact Me</h6>
                  <ul className='mt-4 list-inside space-y-4'>
                    {contact.map((item) => (
                      <li key={item.id}>
                        <span className='flex gap-2'>
                          <span>{item.name}</span>
                          <span>{item.title}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between pt-5 pb-10 border-t border-[#4ECCA3] sm:flex-row'>
              <p className='text-sm'>{footerCopyRight}</p>
              <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                {/* Github */}
                <AnchorTag
                  href='https://www.linkedin.com/in/mohammad-ali-abbasi-1a2a1a1a1/'
                  icon={GitHubSVG("w-7 h-7")}
                  aClass=''
                />

                {/* LinkedIn */}
                <AnchorTag
                  href='https://www.linkedin.com/in/mohammad-ali-abbasi-1a2a1a1a1/'
                  icon={LinkedInSVG("w-7 h-7")}
                  aClass=''
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
