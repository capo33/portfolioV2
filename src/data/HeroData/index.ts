import HeroImage from "../../assets/35496093_2211.w026.n002.2759B.p1.2759.svg";
import SHowcaseImage from "../../assets/hero.png";
import { GitHubSVG } from "../../assets/svg/NavSVG";
import { ShowcaseSVG } from "../../assets/svg/ShowcaseSVG";

export const HeroObjOne = {
  topLine: "Hi 👋, I'm Mohamed",
  firstHeadLine: "Software Developer &",
  secondHeadLine: "Web Designer.",
  description:
    "I'm a software developer based in Finland specializing in building and designing websites, apps ( sometimes games 🎮), and everything in between.",
  firstLabel: "View on Github",
  secondLabel: "something else",
  firstIcon: GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"),
  secondIcon: GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"),
  img: HeroImage,
};

export const HeroObjTwo = {
  imgStart: true,
  topLine: "SERVICES",
  firstHeadLine: "What",
  secondHeadLine: " I Do.",
  description: [
    {
      id: 1,
      title: "Creative Design",
      icon: ShowcaseSVG.lightSVG,
      iconColor: "text-yellow-700",
      text: "Building custom web applications from scratch",
    },
    {
      id: 2,  
      title: "Web developemnt",
      icon: ShowcaseSVG.bracketSVG,
      iconColor: "text-green-700",
      text: "Developing scalable API and integration",
    },
    {
      id: 3,
      title: "User Interface",
      icon: ShowcaseSVG.handSVG,
      iconColor: "text-cyan-700",
      text: "Creating responsive and friendly user interfaces",
    },
    {
      id: 4,
      title: "Database Design",
      icon: ShowcaseSVG.databaseSVG,
      iconColor: "text-purple-700",
      text: "Design and implementation of database schema",
    },
  ],
  firstLabel: "View on Github",
  secondLabel: "something else",
  img: SHowcaseImage,
};
