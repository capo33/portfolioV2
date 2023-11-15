import { IProjects } from "../../interfaces";
import { Tabs } from "../../data/ProjectData";

interface IProjectTabsProps {
  theme: string;
  activeTab: string;
  portfolioProjects: IProjects[];
  handleFilter: (e: React.MouseEvent<HTMLSpanElement>) => void;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setItems: React.Dispatch<React.SetStateAction<IProjects[]>>;
}
const ProjectTabs = ({
  theme,
  activeTab,
  handleFilter,
  portfolioProjects,
  setActiveTab,
  setItems,
}: IProjectTabsProps) => {
  return (
    <>
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
    </>
  );
};

export default ProjectTabs;
