import {
  HomeSVG,
  ProjectsSVG,
  AboutSVG,
  ContactSVG,
} from "../../../assets/svg/NavSVG";
import { NavLinkInterface } from "../../interfaces";

export const NavBarLinks: NavLinkInterface[] = [
  {
    to: "/",
    text: "Home",
    id: 1,
    icon: HomeSVG,
  },
  {
    to: "/projects",
    text: "Projects",
    id: 3,
    icon: ProjectsSVG,
  },
  {
    to: "/about",
    text: "About",
    id: 2,
    icon: AboutSVG,
  },

  {
    to: "/contact",
    text: "Contact",
    id: 4,
    icon: ContactSVG,
  },
];
