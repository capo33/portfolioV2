import React, { useState } from "react";
import { portfolioProjects } from "./test";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubSVG } from "../../assets/svg/NavSVG";

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
      <div>
        <div className='pt-32  bg-white'>
          <h1 className='text-center text-2xl font-bold text-gray-800'>
            All Projects
          </h1>
        </div>
      </div>

      <div className='flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center text-gray-800'>
        <button
          onClick={() => {
            setItems(portfolioProjects);
            setActiveTab("All");
          }}
          className={`m-4 py-1 px-3 text-lg font-semibold rounded p-2 text-gray-600 hover:bg-[#222222] hover:text-white hover:rounded hover:transition-all hover:ease-in-out hover:duration-300 ${
            activeTab === "All"
              ? "bg-blue-500 text-white transition-all ease-in-out duration-0 rounded-md    "
              : ""
          } `}
        >
          All
        </button>
        <button
          onClick={handleFilter}
          className={`m-4 py-1 px-3 text-lg font-semibold rounded p-2 text-gray-600 hover:bg-[#222222] hover:text-white hover:rounded hover:transition-all hover:ease-in-out hover:duration-300 ${
            activeTab === "Experimental"
              ? "bg-blue-500 text-white transition-all ease-in-out duration-0 rounded-md"
              : ""
          } `}
        >
          Experimental
        </button>
        <button
          onClick={handleFilter}
          className={`m-4 py-1 px-3 text-lg font-semibold rounded p-2 text-gray-600 hover:bg-[#222222] hover:text-white hover:rounded hover:transition-all hover:ease-in-out hover:duration-300  ${
            activeTab === "Frontend"
              ? "bg-blue-500 text-white transition-all ease-in-out duration-0 rounded-md"
              : ""
          } `}
        >
          Frontend
        </button>
        <button
          onClick={handleFilter}
          className={`m-4 py-1 px-3 text-lg font-semibold rounded p-2 text-gray-600 hover:bg-[#222222] hover:text-white hover:rounded hover:transition-all hover:ease-in-out hover:duration-300 ${
            activeTab === "Full-stack"
              ? "bg-blue-500 text-white transition-all ease-in-out duration-0 rounded-md    "
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
                console.log(item);

                return (
                  <article className='rounded p-3 shadow-lg hover:shadow-xl flex flex-col justify-around'>
                    <div className='relative flex-grow items-end overflow-hidden rounded'>
                      <img
                        src={
                          "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fH"
                        }
                        alt='Photo'
                      />
                      <div className='mt-1 p-2'>
                        <h2 className='text-slate-700'>{item.title}</h2>
                        <p className='mt-1 text-sm text-slate-400'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className='mt-1 p-2'>
                      <div className='mt-3 flex justify-between flex-grow'>
                        <div className='flex items-center space-x-1.5 rounded bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='h-4 w-4'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                            />
                          </svg>

                          <button className='text-sm'>Live Demo</button>
                        </div>
                        <div className='flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600'>
                          {GitHubSVG("h-4 w-4")}
                          <button className='text-sm'>Source Code</button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }).slice(0, 6)}
            </div>
          </section>

          {/* <section className='py-10 bg-gray-100'>
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
          </section> */}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;
