import HeroImage from "../../assets/35496093_2211.w026.n002.2759B.p1.2759.svg";
import { GitHubSVG } from "../../assets/svg/NavSVG";
// <section className='bg-[#F8F8F8] dark:bg-gray-900 '>
//     <div className='pt-5 m-auto container pb-12 px-4 items-center lg:flex flex-row-reverse'>
//       <div className='space-y-4 flex-1 lg:text-left'>
//         <span className='text-main-color font-semibold text-lg'>
//           SERVICES
//         </span>
//         <span className='ml-2 inline-block h-[1px] w-8 bg-blue-400'></span>

//         <h2 className=' max-w-5xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
//           What
//           <span className='text-blue-500'> I Do</span>
//         </h2>

//         <div className='items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
//           <ul className='pt-8 space-y-5 dark:border-gray-700'>
//             <li className='flex space-x-3 items-center '>
//               <svg
//                 className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 mx-3'
//                 fill='currentColor'
//                 viewBox='0 0 20 20'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   fillRule='evenodd'
//                   d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
//                   clipRule='evenodd'
//                 />
//               </svg>

//               <span className='lg:text-lg leading-tight text-gray-700 text-base font-medium'>
//                 Building custom web applications from scratch
//               </span>
//             </li>
//             <li className='flex space-x-3 items-center '>
//               <svg
//                 className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 mx-3'
//                 fill='currentColor'
//                 viewBox='0 0 20 20'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   fillRule='evenodd'
//                   d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
//                   clipRule='evenodd'
//                 />
//               </svg>
//               <span className='lg:text-lg leading-tight text-gray-700 text-base font-medium'>
//                 Developing scalable and robust API and integration
//               </span>
//             </li>
//             <li className='flex space-x-3 items-center'>
//               <svg
//                 className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 mx-3'
//                 fill='currentColor'
//                 viewBox='0 0 20 20'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   fillRule='evenodd'
//                   d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
//                   clipRule='evenodd'
//                 />
//               </svg>
//               <span className='lg:text-lg leading-tight text-gray-700 text-base font-medium'>
//                 Creating responsive and friendly user interfaces
//               </span>
//             </li>
//             <li className='flex space-x-3 items-center'>
//               <svg
//                 className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 mx-3'
//                 fill='currentColor'
//                 viewBox='0 0 20 20'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   fillRule='evenodd'
//                   d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
//                   clipRule='evenodd'
//                 />
//               </svg>
//               <span className='lg:text-lg leading-tight text-gray-700 text-base font-medium'>
//                 Design and implementation of database schema
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className='flex-1 text-center mt-7 lg:mt-0 lg:ml-3'>
//         <img
//           src={MySVG2}
//           className='w-full mx-auto sm:w-10/12  lg:w-full'
//         />
//       </div>
//     </div>
//   </section>
export const HeroObjOne = {
  topLine: "Hi 👋, I'm Mohamed",
  firstHeadLine: "Software Developer &",
  secondHeadLine: "Web Designer.",
  description:
    "I'm a software developer based in Finland specializing in building and designing websites, apps ( sometimes games 🎮), and everything in between.",
  firstLabel: "View on Github",
  secondLabel: "something else",
  firstIcon: GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"),
  secondIcon: GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"),
  img: HeroImage,
};

export const HeroObjTwo = {
  topLine: "SERVICES",
  firstHeadLine: "What",
  secondHeadLine: "I Do.",
  headLine: "Software Developer & Web Designer.",
  description:
    "I'm a software developer based in Finland specializing in building and designing websites, apps ( sometimes games 🎮), and everything in between.",
  firstLabel: "View on Github",
  secondLabel: "something else",
  firstIcon: GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"),
  // secondIcon: GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"),
  img: HeroImage,
};
