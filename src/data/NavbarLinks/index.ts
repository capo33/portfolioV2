import {
  HomeSVG,
  ProjectsSVG,
  AboutSVG,
  ContactSVG,
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
    to: "/projects",
    text: "Projects",
    icon: ProjectsSVG,
  },
  {
    id: uuid,
    to: "/about",
    text: "About",
    icon: AboutSVG,
  },

  {
    id: uuid,
    to: "/contact",
    text: "Contact",
    icon: ContactSVG,
  },
];
