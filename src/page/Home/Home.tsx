import { useState } from "react";
import MySVG from "../../assets/35496093_2211.w026.n002.2759B.p1.2759.svg";
import { GitHubSVG } from "../../assets/svg/NavSVG";

const Home = () => {
  const [iseOpen, setIseOpen] = useState(false);
  const toggle = () => {
    setIseOpen(!iseOpen);
  };
  return (
    <>
      <section className='bg-blue-950    dark:bg-gray-900'>
        <div className='container flex flex-col items-center justify-between px-6 py-16 mx-auto md:flex-row'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
              Software Developer &amp; Web Designer.
            </h1>
            <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              I'm a software developer based in Finland specializing in building
              and designing websites, apps (and sometimes games 🎮), and
              everything in between.
            </p>
            <div className='space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
              <a
                href='https://github.com/themesberg/landwind'
                className='inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
              >
                {GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400")}{" "}
                View on GitHub
              </a>
              <a
                href='https://github.com/themesberg/landwind'
                className='inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
              >
                {GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400")}{" "}
                Something else
              </a>
            </div>
          </div>

          <div className='  flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
            <img
              src={MySVG}
              alt='hero image'
              className='w-full h-full lg:max-w-3xl'
            />
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
