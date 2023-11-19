import {
  ExperimentSVG,
  FrontendSVG,
  StackSVG,
  TableSVG,
} from "../../assets/svg/TabsSVG";
import { uuid } from "../../utils";
import { ProjectApi } from "../../assets/images";
 import { GitHubSVG, GlobalSVG } from "../../assets/svg/NavSVG";
import { IProjectHero, IProjects, ITab } from "../../interfaces";

// Array of Projects
export const portfolioProjects: IProjects[] = [
  {
    id: uuid,
    tag: "Frontend",
    image: "image/ecommerce.png",
    title: "Ecommerce Store",
    description: [
      "React",
      "Redux-toolkit",
      "Typescript",
      "GitHub-Actions",
      "Tailwind-CSS",
    ],
    links: [
      {
        id: uuid,
        link: "https://ecommerce-shop-v1.netlify.app/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/ecommerecV1",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/crypto.png",
    title: "Crypto Tracker",
    description: ["React", "Redux-toolkit", "Typescript", "MUI"],
    links: [
      {
        id: uuid,
        link: "https://crypto-coins-tracker-react.netlify.app/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-crypto-tracker",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/country-api.png",
    title: "Country API",
    description: ["React", "Redux", "TypeScript", "Rest API"],
    links: [
      {
        id: uuid,
        link: "https://ts-country-api-app.netlify.app/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/country-api-app",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/data-company.png",
    title: "Data Company",
    description: ["React", "Styled-components", "Javascript"],
    links: [
      {
        id: uuid,
        link: "https://data-company.netlify.app/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/data-company",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/delta.png",
    title: "Delta Company",
    description: ["React", "Styled-components", "Javascript"],
    links: [
      {
        id: uuid,
        link: "https://react-smooth-scroll.onrender.com/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-smooth-scroll",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/ultra.png",
    title: "Ultra Company",
    description: ["React", "Styled-components", "Javascript"],
    links: [
      {
        id: uuid,
        link: "https://react-styled-components.onrender.com/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-styled-component",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/fakeshop.png",
    title: "Fake Shop",
    description: ["React", "Redux", "Javascript", "Rest API"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/fakeshop/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/fakeshop",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/pokemon2.png",
    title: "Pokemon Evolution",
    description: ["React", "TypeScript", "Rest API"],
    links: [
      {
        id: uuid,
        link: "https://react-pokemon-ts.onrender.com/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-pokemon-ts",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/rick-and-morty.png",
    title: "Rick and Morty",
    description: ["React", "UseQuery", "Rest API"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/rick-and-morty/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/rick-and-morty",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/rick-and-morty2.png",
    title: "Rick and Morty",
    description: ["React", "Apollo-Client", "TypeScript"],
    links: [
      {
        id: uuid,
        link: "https://rick-and-morty-apollo-client.onrender.com/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/rick-and-morty-apollo-clien",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/star-wars.png",
    title: "Star Wars",
    description: ["React", " UseQuery", "Rest API"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/star-wars/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/star-wars",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/search-user.png",
    title: "Filter Users",
    description: ["React", "TypeScript", "Rest API"],
    links: [
      {
        id: uuid,
        link: "https://search-user-api.netlify.app/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/search-feature",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/kahvila.png",
    title: "Caffee Counter",
    description: ["Angular", "TypeScript"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/kahvila/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/kahvila.git",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/yupfood.png",
    title: "Yupfood",
    description: ["React", "NodeJS", "MongoDB", "TypeScript", "Bootstrap"],
    links: [
      {
        id: uuid,
        link: "https://yupfood.onrender.com/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/recipes-blog",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/socialnetwork.png",
    title: "Social Network",
    description: ["React", "NodeJS", "MongoDB", "TypeScript", "MUI"],
    links: [
      {
        id: uuid,
        link: "https://social-network-t5pv.onrender.com/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/social-app-v2",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/Q-Shop.png",
    title: "Q-Shop",
    description: ["React", "NodeJS", "MongoDB", "Bootstrap", "Paypal"],
    links: [
      {
        id: uuid,
        link: "https://q-shop.onrender.com/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Q_shop",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/secondhandstore.png",
    title: "Second Hand Store",
    description: ["React", "GrapghQL", "Apollo-Client"],
    links: [
      {
        id: uuid,
        link: "https://second-hand-store.netlify.app/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/second_hand-frontend",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/yelpclone.png",
    title: "Restaurant Finder - Yelp Clone",
    description: ["React", "NodeJS", "PostgreSQL", "TypeScript", "Redux"],
    links: [
      {
        id: uuid,
        link: "https://github.com/capo33/restaurant-finder",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/main.png",
    title: "Rental Car",
    description: ["React", "NodeJS", "MongoDB", "TypeScript", "Stripe"],
    links: [
      {
        id: uuid,
        link: "https://car-rental-mern-stack.netlify.app",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/rental-car-backend",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/school-projects.jpg",
    title: "School Projects",
    description: ["HTML", "CSS", "Angular", "Javascript"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/school-projects/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/school-projects.git",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/blitz.png",
    title: "Blitz",
    description: ["HTML", "CSS"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/Blitz/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Blitz",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/splitting.jpg",
    title: "Split Server",
    description: ["Angular", "TypeScript"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/spliting/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/spliting.git",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/joke-list2.jpg",
    title: "Jokes",
    description: ["Angular", "TypeScript"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/joke-list/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/joke-list.git",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/warning-et-success.jpg",
    title: "Success and warning",
    description: ["Angular", "TypeScript"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/warning-et-success/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/warning-et-success.git",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },

  {
    id: uuid,
    tag: "Experimental",
    image: "image/keeper.png",
    title: "Note Keeper",
    description: ["React", "TypeScript"],
    links: [
      {
        id: uuid,
        link: "https://note-keeper-ts.netlify.app/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Note-keeper-ts",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/todo.png",
    title: "Todo App",
    description: ["React", "JavaScript"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/react-todo-app/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-todo-app.git",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/egyption-gods.jpg",
    title: "Egyption Deities",
    description: ["React", "JavaScript"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/egyption-gods/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/egyption-gods.git",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/emojipedia.jpg",
    title: "Emojipedia",
    description: ["React", "JavaScript"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/emojipedia/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/emojipedia",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/Digital-Marketing.jpg",
    title: "Digital Marketing",
    description: ["HTML", " CSS"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/Digital-Marketing/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Digital-Marketing.git",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/tindog.jpg",
    title: "Tindog",
    description: ["HTML", "CSS", "Bootstrap"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/tindog/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/tindog.git",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/travel-agency.jpg",
    title: "Css Project",
    description: ["HTML", "CSS", "Materialize"],
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/travel-agency/",
        icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/travel-agency.git",
        icon: GitHubSVG("w-4 h-4 mr-2 dark_text"),
        title: "Source Code",
      },
    ],
  },
];

// Project Data
export const ProjectHeroObj: IProjectHero = {
  imgStart: true,
  firstLabel: "View on Github",
  icon: GlobalSVG("w-4 h-4 mr-2 dark_text"),
  topLine: "Projects",
  firstHeadLine: "Most Of My Deployed",
  secondHeadLine: " Projects",
  description:
    "These projects will show you my web development skills and knowledge. It shows you how I got started and how my skills have improved over time. I used different technologies and tools to build these projects ...Want to see more? Check out my GitHub repository.",
  img: ProjectApi,
};

export const Tabs: ITab[] = [
  { id: 1, name: "All", icon: TableSVG() },
  { id: 2, name: "Experimental", icon: ExperimentSVG() },
  { id: 3, name: "Frontend", icon: FrontendSVG() },
  { id: 4, name: "Fullstack", icon: StackSVG() },
];
