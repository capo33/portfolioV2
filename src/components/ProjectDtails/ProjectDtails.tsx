import React, { useState, useContext } from "react";

import { Card } from "../../components";
import { IProjects } from "../../interfaces";
import { ThemeContext } from "../../context/ThemeContext";
import { Tabs, portfolioProjects } from "../../data/ProjectData";

const ProjectDtails = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [items, setItems] = useState<IProjects[]>(portfolioProjects);
  // const [currentPage, setCurrentPage] = useState(1);

  const { theme } = useContext(ThemeContext);

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
        {items.map((item) => {
          return <Card item={item} key={item.id()} />;
        })}
      </div>
    </section>
  );
};

export default ProjectDtails;
