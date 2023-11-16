import { IFooterData } from "../../interfaces";
import { ReactSVG, TailwindSVG, TypescriptSVG } from "../../assets/svg";

const footerTitle: string =
  "This Portfolio has been updated to the latest version of ReactJS and TypeScript";
const footerSubtitle: string = "Made with ❤ by Mohamed";

const teckStack: IFooterData[] = [
  { id: 1, name: "ReactJS", icon: ReactSVG },
  { id: 2, name: "TypeScript", icon: TypescriptSVG },
];

const style: IFooterData[] = [
  { id: 1, name: "Tailwind-CSS", icon: TailwindSVG },
];

const contact: IFooterData[] = [
  { id: 1, name: "Email", titel: "madel413@gmail.com" },
  { id: 2, name: "Phone", titel: "+358 44 208 0939" },
];

export { footerTitle, footerSubtitle, teckStack, style, contact };
