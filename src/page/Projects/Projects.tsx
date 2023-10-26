import React, { useState } from "react";
import { portfolioProjects } from "./test";
import { motion, AnimatePresence } from "framer-motion";
 
const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [Items, setItems] = React.useState(portfolioProjects);

  const handleFilter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    const value = target.innerText;
    if (value === "All") {
      setItems(portfolioProjects);
      return;
    }
    const updatedItems = portfolioProjects.filter((currentItem) => {
      return currentItem.tag === value;
    });
    setItems(updatedItems);
    setActiveTab(value);
  };

  return (
    <section>
      <div className='flex justify-center items-center flex-wrap text-center'>
        <button
          onClick={() => {
            setItems(portfolioProjects);
            setActiveTab("All");
          }}
          className={` m-4 px-5 py-1 text-lg font-medium shrink-0 rounded-lg p-2   text-gray-500 hover:bg-[#222222] hover:text-white hover:rounded-md  ${
            activeTab === "All"
              ? "bg-cyan-500 text-white transition-all ease-in-out duration-0 rounded-md    "
              : ""
          } `}
        >
          All
        </button>
        <button
          onClick={handleFilter}
          className={`m-4 px-5 py-1 text-lg font-medium shrink-0 rounded-lg p-2   text-gray-500 hover:bg-[#222222] hover:text-white hover:rounded-md  ${
            activeTab === "Frontend"
              ? "bg-cyan-500 text-white transition-all ease-in-out duration-0 rounded-md    "
              : ""
          } `}
        >
          Frontend
        </button>
        <button
          onClick={handleFilter}
          className={`m-4 px-5 py-1 text-lg font-medium shrink-0 rounded-lg p-2   text-gray-500 hover:bg-[#222222] hover:text-white hover:rounded-md  ${
            activeTab === "Full-stack"
              ? "bg-cyan-500 text-white transition-all ease-in-out duration-0 rounded-md    "
              : ""
          } `}
        >
          Full-stack
        </button>
      </div>

      <AnimatePresence mode='wait'>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          <section className='py-10 bg-gray-100'>
            <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
              {Items.map((item) => {
                return (
                  <div className='bg-white shadow-md dark:bg-gray-800'>
                    <a href='#' className=''>
                      <img
                        src='https://i.postimg.cc/904JVBhh/pexels-andrea-piacquadio-840996.jpg'
                        alt=''
                        className='object-cover w-full h-64'
                      />
                    </a>
                    <div className='p-5 flex flex-col justify-between'>
                      <a href='#' className=''>
                        <h2 className='mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400'>
                          {item.title}
                        </h2>
                      </a>
                      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <div>
        <div className='pt-32  bg-white'>
          <h1 className='text-center text-2xl font-bold text-gray-800'>
            All Products
          </h1>
        </div>
        {/* Tab Menu */}
        <div className='flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800'>
          <a
            rel='noopener noreferrer'
            href='#'
            className='flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'
            >
              <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' />
            </svg>
            <span>Architecto</span>
          </a>
          <a
            rel='noopener noreferrer'
            href='#'
            className='flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'
            >
              <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
              <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
            </svg>
            <span>Corrupti</span>
          </a>
          <a
            rel='noopener noreferrer'
            href='#'
            className='flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'
            >
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
            </svg>
            <span>Excepturi</span>
          </a>
          <a
            rel='noopener noreferrer'
            href='#'
            className='flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'
            >
              <circle cx={12} cy={12} r={10} />
              <polygon points='16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76' />
            </svg>
            <span>Consectetur</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
