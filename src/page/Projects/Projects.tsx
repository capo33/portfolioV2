import React, { useState } from "react";

import { IProjects } from "../../interfaces";
import { Card } from "../../components";
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
    <section className='container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20 py-10'>
      <div>
        <span className='font-semibold text-lg'>Projects</span>
        <span className='ml-2 inline-block h-[1px] w-8 bg-blue-400'></span>
        <h2 className='max-w-5xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
          My
          <span className='text-blue-500'> Deployed Projects</span>
        </h2>
        <p className='py-4 text-2xl font-bold '>
          Want to see more? Check out my Github profile{" "}
          <Anchor
            href='https://github.com/capo33'
            icon={GitHubSVG("w-5 h-5 inline-block hover:text-black text-blue-500")}
          />
        </p>
      </div>
      {/* Tabs */}
      <ul className='flex flex-wrap items-center justify-center text-lg font-medium text-center gap-2 text-gray-500'>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={
                tab.name === tabs[0].name
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
              {tab.icon()}
              {tab.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Projects */}
      <div className='mx-auto grid container grid-cols-1 gap-6 p- sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {Items.map((item) => {
          return <Card item={item} key={item.id()} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
