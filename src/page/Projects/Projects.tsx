import React, { useState } from "react";
import { IProjects } from "../../interfaces";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioProjects } from "../../data/ProjectData";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [Items, setItems] = React.useState<IProjects[]>(portfolioProjects);

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
  const tabs = ["All", "Experimental", "Frontend", "Full-stack"];
  const handleTabCheck = (tab: string) => {
    if (activeTab === tab) {
      setItems(portfolioProjects);
      setActiveTab("All");
    } else {
      handleFilter({
        target: { innerText: tab },
      } as unknown as React.MouseEvent<HTMLSpanElement>);
    }
  };

  return (
    <section>
      <div className='pt-10 bg-white'>
        <h1 className='text-center text-2xl font-bold text-gray-800'>
          All Projects
        </h1>
      </div>

      {/* Tabs */}
      <div className='flex flex-wrap items-center py-10 justify-center text-gray-800'>
        {tabs.map((tab) => (
          <button
            onClick={() => handleTabCheck(tab)}
            className={`m-4 py-1 px-3 text-lg font-semibold rounded p-2 text-gray-600 hover:bg-[#222222] hover:text-white hover:rounded hover:transition-all hover:ease-in-out hover:duration-300 ${
              activeTab === tab
                ? "bg-blue-500 text-white transition-all ease-in-out duration-0 rounded-md"
                : ""
            } `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects */}
      <AnimatePresence mode='wait'>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          <section className='py-10'>
            <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
              {Items.map((item) => {
                return (
                  <article
                    className='rounded p-3 shadow-lg hover:shadow-xl flex flex-col justify-around'
                    key={item.id()}
                  >
                    <div className='overflow-hidden rounded'>
                      <img src={item.image} alt='Photo' />
                      <div className='mt-1 p-2'>
                        <h2 className='text-slate-700'>{item.title}</h2>
                        <p className='mt-1 text-sm text-slate-400'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className='mt-1 p-2'>
                      <div className='mt-3 flex   justify-between'>
                        {item.links.map((link) => {
                          return (
                            <div className='flex items-center space-x-1.5 rounded bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600'>
                              <a
                                href={link.link}
                                key={link.id()}
                                target='_blank'
                                rel='noreferrer'
                              ></a>
                              <span className='max-sm:hidden'>{link.icon}</span>
                              <button className='text-sm'>{link.title}</button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                );
              }).slice(0, 6)}
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;
