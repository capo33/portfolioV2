import React, { useState } from "react";

import { Card } from "../../components";
import { IProjects } from "../../interfaces";
import { Tabs, portfolioProjects } from "../../data/ProjectData";

const ProjectDtails = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [Items, setItems] = React.useState<IProjects[]>(portfolioProjects);

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
    <section className='space-y-12 lg:space-y-20'>
      <ul className='flex flex-wrap items-center justify-center text-lg font-medium text-center gap-2 text-gray-500'>
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
              className={`inline-flex items-center justify-center px-4 py-1 rounded hover:bg-gray-500 hover:text-white ${
                activeTab === tab.name
                  ? "bg-gray-500 text-white duration-300"
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
        {Items.map((item) => {
          return <Card item={item} key={item.id()} />;
        })}
      </div>
    </section>
  );
};

export default ProjectDtails;
