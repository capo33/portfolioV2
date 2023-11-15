import React, { useState, useContext } from "react";

import { Card, ProjectTabs } from "..";
import { IProjects } from "../../interfaces";
import { ThemeContext } from "../../context/ThemeContext";
import { portfolioProjects } from "../../data/ProjectData";

const ProjectDtails = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [items, setItems] = useState<IProjects[]>(portfolioProjects);

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
        {/* Tabs */}
        <ProjectTabs
          {...{
            activeTab,
            handleFilter,
            setActiveTab,
            setItems,
            theme,
            portfolioProjects,
          }}
        />
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
