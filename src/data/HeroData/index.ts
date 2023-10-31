import HeroImage from "../../assets/svg/hero.svg";
import { GitHubSVG } from "../../assets/svg/NavSVG";
import SHowcaseImage from "../../assets/images/hero.png";
import { ShowcaseSVG } from "../../assets/svg/ShowcaseSVG";

export const HeroObj = {
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

export const ShowcaseObj = {
  imgStart: true,
  topLine: "SERVICES",
  firstHeadLine: "What",
  secondHeadLine: " I Offer.",
  description: [
    {
      id: 1,
      title: "Creative Design",
      icon: ShowcaseSVG.lightSVG,
      iconColor: "yellow-700",
      bg: "hover:bg-yellow-300",
      text: "Building custom web applications from scratch",
    },
    {
      id: 2,
      title: "Web developemnt",
      icon: ShowcaseSVG.bracketSVG,
      iconColor: "green-700",
      bg: "hover:bg-green-300",
      text: "Developing scalable API and integration",
    },
    {
      id: 3,
      title: "User Interface",
      icon: ShowcaseSVG.handSVG,
      iconColor: "cyan-700",
      bg: "hover:bg-cyan-300",
      text: "Creating responsive and friendly user interfaces",
    },
    {
      id: 4,
      title: "Database Design",
      icon: ShowcaseSVG.databaseSVG,
      iconColor: "purple-700",
      bg: "hover:bg-purple-300",
      text: "Design and implementation of database schema",
    },
  ],
  firstLabel: "View on Github",
  secondLabel: "something else",
  img: SHowcaseImage,
};
