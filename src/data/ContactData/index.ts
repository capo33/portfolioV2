import { IHomeMainObj } from "../../interfaces";
import { GitHubSVG } from "../../assets/svg/NavSVG";
import GetINTouch from "../../assets/images/getInTouch.gif";

export const ContactObj: IHomeMainObj<string> = {
  imgStart: false,
  topLine: "Contact",
  firstHeadLine: "Get",
  secondHeadLine: " In Touch.",
  description:
    "I am available for freelance work. If you have a project that you would like to get started, think you need my help with something or just fancy saying hello, then please get in touch",
  firstLabel: "View on Github",
  secondLabel: "something else",
  firstIcon: GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"),
  secondIcon: GitHubSVG("w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"),
  img: GetINTouch,
};
