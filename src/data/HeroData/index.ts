// <section className='bg-[#F8F8F8] dark:bg-gray-900'>
// <div className='pt-24 m-auto container pb-12 px-4 items-center lg:flex'>
//   <div className='space-y-4 flex-1 lg:text-left'>
//     <span className='text-main-color font-semibold text-lg'>
//       Hi 👋, I'm Mohamed
//     </span>
//     <span className='ml-2 inline-block h-[1px] w-8 bg-blue-400'></span>

//     <h1 className=' max-w-5xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
//       Software Developer &amp;{" "}
//       <span className='text-indigo-400'>Web Designer.</span>
//     </h1>
//     {/* <p className='text-gray-700 max-w-xl leading-relaxed sm:mx-auto lg:ml-0'> */}
//     <p className='mb-8 lg:text-xl  text-gray-700'>
//       I'm a software developer based in Finland specializing in building
//       and designing websites, apps ( sometimes games 🎮), and everything
//       in between.
//     </p>

//     <div className=' pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
//       <a
//         href='https://github.com/themesberg/landwind'
//         className='inline-flex items-center justify-center  w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
//       >
//         {GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400")}{" "}
//         View on GitHub
//       </a>
//       <a
//         href='https://github.com/themesberg/landwind'
//         className='inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
//       >
//         {GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400")}{" "}
//         Something else
//       </a>
//     </div>
//   </div>
//   <div className='flex-1 text-center mt-7 lg:mt-0 lg:ml-3'>
//     <img src={MySVG} className='w-full mx-auto sm:w-10/12  lg:w-full' />
//   </div>
// </div>
// <div className='container mx-auto text-center'>
//   <Marquee link='/contact' />
// </div>
// </section>

export const InfoObjOne = {
  id: "home",
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Hi 👋, I'm Mohamed",
  headLine: "Software Developer & Web Designer.",
  description:
    "I'm a software developer based in Finland specializing in building and designing websites, apps ( sometimes games 🎮), and everything in between.",
  firstLabel: "View on Github",
  secondLabel: "about",
  imgStart: "",
  img: require("../../assets/35496093_2211.w026.n002.2759B.p1.2759.svg"),
  start: "",
  topPadding: false,
  bigHeight: true,
};
