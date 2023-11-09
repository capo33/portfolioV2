import HeroImage from "../../assets/svg/hero.svg";
import { GitHubSVG } from "../../assets/svg/NavSVG";
import SHowcaseImage from "../../assets/images/hero.png";
import { ShowcaseSVG } from "../../assets/svg/ShowcaseSVG";
import   { IDescription, IHomeMainObj, } from "../../interfaces";

export const HeroObj: IHomeMainObj<string> = {
  imgStart: false,
  topLine: "Hi 👋, I'm Mohamed",
  firstHeadLine: "Software Developer &",
  secondHeadLine: " Web Designer.",
  description:
    "I'm a software developer based in Finland specializing in building and designing websites, apps ( sometimes games 🎮), and everything in between.",
  firstLabel: "View on Github",
  secondLabel: "something else",
  firstIcon: GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"),
  secondIcon: GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"),
  img: HeroImage,
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
      bg: "bg-yellow-300",
      text: "Building custom web applications from scratch",
    },
    {
      id: 2,
      title: "Web developemnt",
      icon: ShowcaseSVG.bracketSVG,
      iconColor: "text-green-700",
      bg: "bg-green-300",
      text: "Developing scalable API and integration",
    },
    {
      id: 3,
      title: "User Interface",
      icon: ShowcaseSVG.handSVG,
      iconColor: "text-cyan-700",
      bg: "bg-cyan-300",
      text: "Creating responsive and friendly user interfaces",
    },
    {
      id: 4,
      title: "Database Design",
      icon: ShowcaseSVG.databaseSVG,
      iconColor: "text-purple-700",
      bg: "bg-purple-300",
      text: "Design and implementation of database schema",
    },
  ],
  firstLabel: "View on Github",
  secondLabel: "something else",
  img: SHowcaseImage,
};
