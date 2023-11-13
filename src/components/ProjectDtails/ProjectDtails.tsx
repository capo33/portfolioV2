import React, { useState, useContext } from "react";

import { Card } from "../../components";
import { IProjects } from "../../interfaces";
import { ThemeContext } from "../../context/ThemeContext";
import { Tabs, portfolioProjects } from "../../data/ProjectData";

const ProjectDtails = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [items, setItems] = useState<IProjects[]>(portfolioProjects);
  const [numOfPages, setNumOfPages] = useState<number>(8);
  
  const { theme } = useContext(ThemeContext);

  const currentProjects = items.slice(0, numOfPages);

  const setLoadMore = () => {
    setNumOfPages(numOfPages + numOfPages);
   };

  const handleFilter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    const value = target.innerText;
    if (value === "All") {
      setItems(portfolioProjects);
      setActiveTab("All");
      return;
    }
    const updatedItems = portfolioProjects.filter((currentItem) => {
      return currentItem.tag === value;
    });
    setItems(updatedItems);
    setActiveTab(value);
  };

  return (
    <section className='space-y-12 lg:space-y-12 lg:pt-10'>
      <ul
        className={`flex flex-wrap items-center text-lg font-medium text-center gap-2 ${
          theme === "dark" ? "light_text" : "dark_text"
        }`}
      >
        {Tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={
                tab.name === Tabs[0].name
                  ? () => {
                      setItems(portfolioProjects);
                      setActiveTab("All");
                    }
                  : handleFilter
              }
              className={`inline-flex items-center justify-center px-2 lg:px-4 py-1 rounded transition duration-100 ${
                theme === "light" ? "hover:dark_bg" : "hover:light_bg"
              } ${
                activeTab === tab.name
                  ? `${theme === "dark" ? "light_bg" : "dark_bg"}`
                  : ""
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Projects */}
      <div className='mx-auto grid container grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 g:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {currentProjects.map((item) => {
          return <Card item={item} key={item.id()} />;
        })}
      </div>
      <div className='flex justify-center'>
        {currentProjects.length !== items.length ? (
          <button
            className='bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded'
            onClick={setLoadMore}
          >
            Load More
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectDtails;
