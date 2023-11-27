import { RealTime, Version } from "../../assets/svg";
import { ShowcaseSVG } from "../../assets/svg/ShowcaseSVG";
import { IDescription, IHomeMainObj } from "../../interfaces";
import { GitHubSVG, ResumeSVG } from "../../assets/svg/NavSVG";

export const HeroObj: IHomeMainObj<string> = {
  imgStart: false,
  topLine: "Hi 👋, I'm Mohamed",
  firstHeadLine: "Software Developer &",
  secondHeadLine: " Web Designer.",
  description:
    "I'm a software developer based in Finland specializing in building and designing websites, apps ( sometimes games 🎮), and everything in between.",
  firstLabel: "View on Github",
  secondLabel: "Download Resume",
  firstIcon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
  secondIcon: ResumeSVG("w-4 h-4 mr-2 dark_text"),
  img: RealTime,
};

export const ShowcaseObj: IHomeMainObj<IDescription[]> = {
  imgStart: true,
  topLine: "SERVICES",
  firstHeadLine: "What",
  secondHeadLine: " I Offer.",
  description: [
    {
      id: 1,
      title: "Creative Design",
      icon: ShowcaseSVG.lightSVG,
      iconColor: "text-yellow-700",
      bg: "bg-gray-200",
      hoverBg: "hover:green_bg",
      text: "Building custom web applications from scratch",
    },
    {
      id: 2,
      title: "Web Development",
      icon: ShowcaseSVG.bracketSVG,
      iconColor: "text-green-700",
      bg: "bg-gray-200",
      hoverBg: "hover:green_bg",
      text: "Developing scalable API and integration",
    },
    {
      id: 3,
      title: "User Interface",
      icon: ShowcaseSVG.handSVG,
      iconColor: "text-cyan-700",
      bg: "bg-gray-200",
      hoverBg: "hover:green_bg",
      text: "Creating responsive and friendly user interfaces",
    },
    {
      id: 4,
      title: "Database Design",
      icon: ShowcaseSVG.databaseSVG,
      iconColor: "text-purple-700",
      bg: "bg-gray-200",
      hoverBg: "hover:green_bg",
      text: "Design and implementation of database schema",
    },
  ],
  firstLabel: "View on Github",
  secondLabel: "something else",
  img: Version,
};
