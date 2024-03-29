import { currentYear } from "../../utils";
import { IFooterData } from "../../interfaces";
import { ReactSVG, TailwindSVG, TypescriptSVG } from "../../assets/svg";

const footerLogoName: string = "Mo";
const footerTitle: string =
  "This Portfolio is written using TypeScript and the latest version of ReactJS";
const footerSubtitle: string = "Made with ❤ by Mohamed";

const teckStack: IFooterData[] = [
  { id: 1, name: "ReactJS", icon: ReactSVG },
  { id: 2, name: "TypeScript", icon: TypescriptSVG },
];

const style: IFooterData[] = [
  { id: 1, name: "Tailwind CSS", icon: TailwindSVG },
];

const contact: IFooterData[] = [
  { id: 1, name: "Email", title: "madel413@gmail.com" },
  { id: 2, name: "Phone", title: "+358442080939" },
];

const footerCopyRight: string = ` © Copyright ${footerLogoName} ${currentYear} - All rights reserved`;
export {
  footerCopyRight,
  footerLogoName,
  footerTitle,
  footerSubtitle,
  teckStack,
  style,
  contact,
};
