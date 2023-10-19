import {
  HomeSVG,
  ProjectsSVG,
  AboutSVG,
  ContactSVG,
} from "../../assets/svg/NavSVG";
import { NavLinkInterface } from "../../interfaces";

export const NavBarLinks: NavLinkInterface[] = [
  {
    id: 1,
    to: "/",
    text: "Home",
    icon: HomeSVG,
  },
  {
    id: 3,
    to: "/projects",
    text: "Projects",
    icon: ProjectsSVG,
  },
  {
    id: 2,
    to: "/about",
    text: "About",
    icon: AboutSVG,
  },

  {
    id: 4,
    to: "/contact",
    text: "Contact",
    icon: ContactSVG,
  },
];
