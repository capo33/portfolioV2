import {
  HomeSVG,
  ProjectsSVG,
  AboutSVG,
  ContactSVG,
  TechBracketSVG,
} from "../../assets/svg/NavSVG";

import { uuid } from "../../utils";
import { INavLink } from "../../interfaces";

export const NavBarLinks: INavLink[] = [
  {
    id: uuid,
    to: "/",
    text: "Home",
    icon: HomeSVG,
  },
  {
    id: uuid,
    to: "/about",
    text: "About",
    icon: AboutSVG,
  },
  {
    id: uuid,
    to: "/tech-stack",
    text: "Tech Stack",
    icon: TechBracketSVG,
  },
  {
    id: uuid,
    to: "/projects",
    text: "Projects",
    icon: ProjectsSVG,
  },
  {
    id: uuid,
    to: "/contact",
    text: "Contact",
    icon: ContactSVG,
  },
];
