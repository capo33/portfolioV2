import { GitHubSVG } from "../../assets/svg/NavSVG";
import MySVG from "../../assets/35496093_2211.w026.n002.2759B.p1.2759.svg";

const Home = () => {
  return (
    <>
    <section className='bg-white dark:bg-gray-900'>
      <div className='mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8'>
        <div className='space-y-4 flex-1 sm:text-center lg:text-left'>
          <h1 className=' max-w-5xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
            Software Developer &amp;{" "}
            <span className='text-indigo-400'>Web Designer.</span>
          </h1>
          <p className='text-gray-700 max-w-xl leading-relaxed sm:mx-auto lg:ml-0'>
            I'm a software developer based in Finland specializing in building
            and designing websites, apps (and sometimes games 🎮), and
            everything in between.
          </p>
          <div className=' pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
            <a
              href='https://github.com/themesberg/landwind'
              className='inline-flex items-center justify-center  w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
            >
              {GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400")} View
              on GitHub
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
        <div className='flex-1 text-center mt-7 lg:mt-0 lg:ml-3'>
          <img src={MySVG} className='w-full mx-auto sm:w-10/12  lg:w-full' />
        </div>
      </div>
    </section>
 
</>
  );
};

export default Home;