import React, { useState } from "react";

import { IProjects } from "../../interfaces";
import { Card, MitionAnimate } from "../../components";
import { portfolioProjects } from "../../data/ProjectData";
import { GitHubSVG } from "../../assets/svg/NavSVG";
import Anchor from "../../shared/Anchor/Anchor";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [Items, setItems] = React.useState<IProjects[]>(portfolioProjects);

  const tabs = ["All", "Experimental", "Frontend", "Fullstack"];

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
    <section className='py-10'>
      <h2 className='text-center text-2xl font-bold text-gray-800'>
        Most Recent Projects
      </h2>
      <p className='text-center text-lg text-gray-500'>
        Here are some of my recent deployed projects. Want to see more?{" "}
        <i className=''>
          Check out my Github profile{" "}
          <Anchor
            href='https://github.com/capo33'
            icon={GitHubSVG("w-5 h-5 inline-block hover:text-black")}
          />
        </i>
      </p>
      <div className='flex flex-wrap items-center py-10 justify-center'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabCheck(tab)}
            className={`mx-4 my-2 py-1 px-3 text-lg font-semibold rounded hover:bg-gray-600 hover:text-white hover:rounded hover:transition-all hover:ease-in-out hover:duration-300 ${
              activeTab === tab
                ? "bg-gray-500 text-white transition-all ease-in-out duration-0 rounded-md"
                : ""
            } `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects */}
      <MitionAnimate>
        <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
          {Items.map((item) => {
            return <Card item={item} key={item.id()} />;
          })}
        </div>
      </MitionAnimate>
    </section>
  );
};

export default Projects;
