import React from "react";
import MySVG from "../../assets/hero.png";
import { SharedSection } from "../../shared";

interface InfoSectionProps {
  topLine: string;
  firstHeadLine?: string;
  secondHeadLine?: string;
  description?: {
    id: number;
    icon: string;
    title: string;
    text: string;
  }[];
}
const Showcase: React.FC<InfoSectionProps> = ({
  topLine,
  description,
  firstHeadLine,
  secondHeadLine,
}) => {
  return (
    <SharedSection
      topLine={topLine}
      firstHeadLine={firstHeadLine}
      secondHeadLine={secondHeadLine}
      img={MySVG}
      imgStart
    >
      <div className='items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 z-20'>
          {description &&
            description.map((item) => (
              <div
                className='flex bg-gray-100 hover:bg-slate-200 dark:bg-gray-800 dark:bg-opacity-70 rounded-lg 2xl:rounded-xl p-5 aos-init aos-animate'
                data-aos='fade-up'
              >
                <span className=' text-xl lg:text-2xl text-main-color lg:mb-2'>
                  {item.icon}
                </span>

                <div className='ml-4'>
                  <h2 className='mb-4 font-bold xl:text-'>{item.title}</h2>
                  <p className='lg:text-lg leading-tight text-gray-700 text-base font-medium'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          {/* <div
            className='flex bg-white dark:bg-gray-800 dark:bg-opacity-70 rounded-lg 2xl:rounded-xl p-5 aos-init aos-animate'
            data-aos='fade-up'
          >
            <i
              className='fa fa-gem
            text-xl lg:text-2xl text-main-color lg:mb-2'
            />
            <div className='ml-4'>
              <h2
                data-aos='fade-up'
                className='mb-4 font-bold xl:text-xl aos-init aos-animate'
              >
                User Interface
              </h2>
              <p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400 dark:text-opacity-80'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                repellat.
              </p>
            </div>
          </div>
          <div
            className='flex bg-white dark:bg-gray-800 dark:bg-opacity-70 rounded-lg 2xl:rounded-xl p-5 aos-init aos-animate'
            data-aos='fade-up'
          >
            <i
              className='fa fa-thumbs-up
            text-xl lg:text-2xl text-main-color lg:mb-2'
            />
            <div className='ml-4'>
              <h2
                data-aos='fade-up'
                className='mb-4 font-bold xl:text-xl aos-init aos-animate'
              >
                User Experience
              </h2>
              <p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400 dark:text-opacity-80'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                repellat.
              </p>
            </div>
          </div>
          <div
            className='flex bg-white dark:bg-gray-800 dark:bg-opacity-70 rounded-lg 2xl:rounded-xl p-5 aos-init aos-animate'
            data-aos='fade-up'
          >
            <i
              className='fa fa-code
            text-xl lg:text-2xl text-main-color lg:mb-2'
            />
            <div className='ml-4'>
              <h2
                data-aos='fade-up'
                className='mb-4 font-bold xl:text-xl aos-init aos-animate'
              >
                Web developemnt
              </h2>
              <p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400 dark:text-opacity-80'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                repellat.
              </p>
            </div>
          </div>
          <div
            className='flex bg-white dark:bg-gray-800 dark:bg-opacity-70 rounded-lg 2xl:rounded-xl p-5 aos-init aos-animate'
            data-aos='fade-up'
          >
            <i
              className='fa fa-medal
            text-xl lg:text-2xl text-main-color lg:mb-2'
            />
            <div className='ml-4'>
              <h2
                data-aos='fade-up'
                className='mb-4 font-bold xl:text-xl aos-init aos-animate'
              >
                Seo &amp; Sem
              </h2>
              <p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400 dark:text-opacity-80'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                repellat.
              </p>
            </div>
          </div>
          <div
            className='flex bg-white dark:bg-gray-800 dark:bg-opacity-70 rounded-lg 2xl:rounded-xl p-5 aos-init aos-animate'
            data-aos='fade-up'
          >
            <i
              className='fa fa-mobile
            text-xl lg:text-2xl text-main-color lg:mb-2'
            />
            <div className='ml-4'>
              <h2
                data-aos='fade-up'
                className='mb-4 font-bold xl:text-xl aos-init aos-animate'
              >
                App developemnt
              </h2>
              <p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400 dark:text-opacity-80'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                repellat.
              </p>
            </div>
          </div> */}
        </div>

        {/* <ul className='pt-8 space-y-5 dark:border-gray-700'>
          {description &&
            description.map((item) => (
              <li className='flex space-x-3' key={item}>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 mx-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>

                <span className='lg:text-lg leading-tight text-gray-700 text-base font-medium'>
                  {item}
                </span>
              </li>
            ))}
        </ul> */}
      </div>
    </SharedSection>
    // <section className='dark:bg-gray-900'>
    //   <div className='items-center lg:flex flex-row-reverse'>
    //     <div className='space-y-4 flex-1 lg:text-left'>
    //       <span className='text-main-color font-semibold text-lg'>
    //         SERVICES
    //       </span>
    //       <span className='ml-2 inline-block h-[1px] w-8 bg-blue-400'></span>

    //       <h2 className=' max-w-5xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
    //         What
    //         <span className='text-blue-500'> I Do</span>
    //       </h2>

    //       <div className='items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
    //         <ul className='pt-8 space-y-5 dark:border-gray-700'>
    //           <li className='flex space-x-3 items-center '>
    //             <svg
    //               className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 mx-3'
    //               fill='currentColor'
    //               viewBox='0 0 20 20'
    //               xmlns='http://www.w3.org/2000/svg'
    //             >
    //               <path
    //                 fillRule='evenodd'
    //                 d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
    //                 clipRule='evenodd'
    //               />
    //             </svg>

    //             <span className='lg:text-lg leading-tight text-gray-700 text-base font-medium'>
    //               Building custom web applications from scratch
    //             </span>
    //           </li>
    //           <li className='flex space-x-3 items-center '>
    //             <svg
    //               className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 mx-3'
    //               fill='currentColor'
    //               viewBox='0 0 20 20'
    //               xmlns='http://www.w3.org/2000/svg'
    //             >
    //               <path
    //                 fillRule='evenodd'
    //                 d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
    //                 clipRule='evenodd'
    //               />
    //             </svg>
    //             <span className='lg:text-lg leading-tight text-gray-700 text-base font-medium'>
    //               Developing scalable and robust API and integration
    //             </span>
    //           </li>
    //           <li className='flex space-x-3 items-center'>
    //             <svg
    //               className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 mx-3'
    //               fill='currentColor'
    //               viewBox='0 0 20 20'
    //               xmlns='http://www.w3.org/2000/svg'
    //             >
    //               <path
    //                 fillRule='evenodd'
    //                 d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
    //                 clipRule='evenodd'
    //               />
    //             </svg>
    //             <span className='lg:text-lg leading-tight text-gray-700 text-base font-medium'>
    //               Creating responsive and friendly user interfaces
    //             </span>
    //           </li>
    //           <li className='flex space-x-3 items-center'>
    //             <svg
    //               className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 mx-3'
    //               fill='currentColor'
    //               viewBox='0 0 20 20'
    //               xmlns='http://www.w3.org/2000/svg'
    //             >
    //               <path
    //                 fillRule='evenodd'
    //                 d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
    //                 clipRule='evenodd'
    //               />
    //             </svg>
    //             <span className='lg:text-lg leading-tight text-gray-700 text-base font-medium'>
    //               Design and implementation of database schema Creating
    //               responsive and friendly user interfaces Developing scalable
    //               and robust API and integration
    //             </span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className='flex-1 text-center mt-7 lg:mt-0 lg:ml-3'>
    //       <img
    //         // src={MySVG2}
    //         className='w-full mx-auto sm:w-10/12  lg:w-full'
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Showcase;
