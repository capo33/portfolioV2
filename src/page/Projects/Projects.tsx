import React, { useState } from "react";

import { IProjects } from "../../interfaces";
import { Card, MitionAnimate } from "../../components";
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
  const tabs = ["All", "Experimental", "Frontend", "Fullstack"];

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
    <section className='pt-10'>
      <h1 className='text-center text-2xl font-bold text-gray-800'>
        All Projects
      </h1>
      <p className='text-center text-gray-500'>
        Here you can find all my projects
      </p>
      {/* Tabs */}
      <div className='flex flex-wrap items-center py-10 justify-center text-gray-800'>
        {tabs.map((tab) => (
          <button
            key={tab}
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
      <MitionAnimate>
        <section className='py-10'>
          <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            {Items.map((item) => {
              return <Card item={item} key={item.id()} />;
            })}
          </div>
        </section>
      </MitionAnimate>
    </section>
  );
};

export default Projects;
