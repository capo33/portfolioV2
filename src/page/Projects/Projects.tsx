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
    <>
      <div className='flex justify-center items-center flex-wrap text-center pt-10'>
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
          <div className='flex flex-wrap items-center justify-center w-full'>
            {Items.map((item) => {
              return (
                <div
                  key={item.id()}
                  className='relative w-80 h-80 m-4 overflow-hidden bg-gray-200 rounded-lg shadow-2xl'
                >
                  <img
                    src='https://images.pexels.com/photos/18857014/pexels-photo-18857014/free-photo-of-aesthetic-nordic-design-sofa-in-vancouver-photography-studio.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
                    alt='portfolio'
                    className='absolute object-cover w-full h-full'
                  />
                  <div className='absolute w-full h-full bg-gray-900 bg-opacity-50'></div>
                  <div className='absolute flex flex-col items-center justify-center w-full h-full text-center'>
                    <h1 className='text-2xl font-bold text-bl uppercase'>
                      {item.title}
                    </h1>
                    <h2 className='text-xl font-bold text-bl uppercase'>
                      {item.tag}
                    </h2>
                    <a
                      href='#'
                      target='_blank'
                      rel='noreferrer'
                      className='px-4 py-2 mt-4 text-sm font-bold text-bl uppercase bg-blue-500 rounded hover:bg-blue-400'
                    >
                      See Project
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Projects;
