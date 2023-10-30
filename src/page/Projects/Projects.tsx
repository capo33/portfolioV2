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

  return (
    <section className='py-10 flex flex-wrap items-center my-10 text-lg font-medium text-center flex-col'>
      <h2 className='text-center text-2xl font-bold text-gray-800'>
        Most of my deployed projects
      </h2>
      <p className='text-center text-lg text-cyan-700'>
        Want to see more? Check out my Github profile{" "}
        <Anchor
          href='https://github.com/capo33'
          icon={GitHubSVG("w-5 h-5 inline-block hover:text-black")}
        />
      </p>

      {/* Tabs */}
      <ul className='flex flex-wrap items-center my-10 text-lg font-medium text-center gap-2 text-gray-500'>
        {tabs.map((tab) => (
          <li>
            <button
              key={tab}
              onClick={
                tab === tabs[0]
                  ? () => {
                      setItems(portfolioProjects);
                      setActiveTab("All");
                    }
                  : handleFilter
              }
              className={`inline-flex items-center justify-center px-4 py-1 rounded hover:bg-gray-200 hover:text-black ${
                activeTab === tab ? "bg-gray-500 text-white duration-300" : ""
              }`}
            >
              <svg
                className='w-4 h-4 mr-2 text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
              </svg>
              {tab}
            </button>
          </li>
        ))}
      </ul>

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
