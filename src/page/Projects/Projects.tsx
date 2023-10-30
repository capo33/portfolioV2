import React, { useState } from "react";

import { IProjects } from "../../interfaces";
import { Card, MitionAnimate } from "../../components";
import { portfolioProjects } from "../../data/ProjectData";
import { GitHubSVG } from "../../assets/svg/NavSVG";
import Anchor from "../../shared/Anchor/Anchor";
import {
  FrontendSVG,
  ExperimentSVG,
  StackSVG,
  TableSVG,
} from "../../assets/svg/TabsSVG";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [Items, setItems] = React.useState<IProjects[]>(portfolioProjects);

  // const tabs = ["All", "Experimental", "Frontend", "Fullstack"];
  const tabs = [
    { id: 1, name: "All", icon: TableSVG },
    { id: 2, name: "Experimental", icon: ExperimentSVG },
    { id: 3, name: "Frontend", icon: FrontendSVG },
    { id: 4, name: "Fullstack", icon: StackSVG },
  ];

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
      <p className='text-center text-[16px] text-cyan-700'>
        Want to see more? Check out my Github profile{" "}
        <Anchor
          href='https://github.com/capo33'
          icon={GitHubSVG("w-5 h-5 inline-block hover:text-black")}
        />
      </p>

      {/* Tabs */}
      <ul className='flex flex-wrap items-center justify-center my-10 text-lg font-medium text-center gap-2 text-gray-500'>
        {tabs.map((tab) => (
          <li>
            <button
              key={tab.id}
              onClick={
                tab.name === tabs[0].name
                  ? () => {
                      setItems(portfolioProjects);
                      setActiveTab("All");
                    }
                  : handleFilter
              }
              className={`inline-flex items-center justify-center px-4 py-1 rounded hover:bg-gray-200 hover:text-black ${
                activeTab === tab.name
                  ? "bg-gray-500 text-white duration-300"
                  : ""
              }`}
            >
              {tab.icon()}
              {tab.name}
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
