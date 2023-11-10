import {
  ExperimentSVG,
  FrontendSVG,
  StackSVG,
  TableSVG,
} from "../../assets/svg/TabsSVG";
import { uuid } from "../../utils/uuid";
import { IProjectHero, IProjects, ITab } from "../../interfaces";
import ProjectHero from "../../assets/images/projectHero.png";
import { GitHubSVG, GlobalSVG } from "../../assets/svg/NavSVG";

// Array of Projects
export const portfolioProjects: IProjects[] = [
  {
    id: uuid,
    tag: "Frontend",
    image: "image/crypto.png",
    title: "Crypto Tracker",
    description: "React - Redux-toolkit - Typescript- Material-UI",
    links: [
      {
        id: uuid,
        link: "https://crypto-coins-tracker-react.netlify.app/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-crypto-tracker",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/data-company.png",
    title: "Data Company",
    description: "React - Styled-components - Javascript",
    links: [
      {
        id: uuid,
        link: "https://data-company.netlify.app/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/data-company",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/country-api.png",
    title: "Country API",
    description: "React - Redux - TypeScript - Rest API",
    links: [
      {
        id: uuid,
        link: "https://ts-country-api-app.netlify.app/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/country-api-app",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/delta.png",
    title: "Delta Company",
    description: "React - Styled-components - Javascript",
    links: [
      {
        id: uuid,
        link: "https://react-smooth-scroll.onrender.com/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-smooth-scroll",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/fakeshop.png",
    title: "Fake Shop",
    description: "React - Redux - Javascript - Rest API",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/fakeshop/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/fakeshop",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/ultra.png",
    title: "Ultra Company",
    description: "React - Styled-components - Javascript",
    links: [
      {
        id: uuid,
        link: "https://react-styled-components.onrender.com/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-styled-component",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/pokemon2.png",
    title: "Pokemon Evolution",
    description: "React - TypeScript - Rest API",
    links: [
      {
        id: uuid,
        link: "https://react-pokemon-ts.onrender.com/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-pokemon-ts",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  // {
  //   id: uuid,
  //   tag: "Fullstack",
  //   image: "image/corner_blog.png",
  //   title: "Corner Blog",
  //   description: "React - NodeJS - MongoDB - TypeScript - TailwindCSS",
  //   links: [
  //     {
  //       id: uuid,
  //       link: "https://corner-blog.onrender.com/",
  //       icon: GlobalSVG("h-4 w-4"),
  // title: "Live Demo",
  //     },
  //     {
  //       id: uuid,
  //       link: "https://github.com/capo33/blog-backend",
  //       icon: GitHubSVG("h-4 w-4"),
  // title: "Source Code"
  //     },
  //   ],
  // },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/socialnetwork.png",
    title: "Social Network",
    description: "React - NodeJS - MongoDB - TypeScript - Material-ui",
    links: [
      {
        id: uuid,
        link: "https://social-network-t5pv.onrender.com/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/social-app-v2",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/yupfood.png",
    title: "Yupfood",
    description: "React - NodeJS - MongoDB - TypeScript - Bootstrap",
    links: [
      {
        id: uuid,
        link: "https://yupfood.onrender.com/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/recipes-blog",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/Q-Shop.png",
    title: "Q-Shop",
    description: "React - NodeJS - MongoDB - Express - Paypal",
    links: [
      {
        id: uuid,
        link: "https://q-shop.onrender.com/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Q_shop",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/secondhandstore.png",
    title: "Second Hand Store",
    description: "React - GrapghQL - Apollo - Javascript",
    links: [
      {
        id: uuid,
        link: "https://second-hand-store.netlify.app/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/second_hand-frontend",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/social-media.png",
    title: "Social Media",
    description: "React - NodeJS - MongoDB - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://github.com/capo33/social-media-backend",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/social-media-frontend",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/yelpclone.png",
    title: "Restaurant Finder - Yelp Clone",
    description: "React - NodeJS - PostgreSQL - TypeScript - Redux",
    links: [
      {
        id: uuid,
        link: "https://github.com/capo33/restaurant-finder",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/main.png",
    title: "Rental Car",
    description: "React - NodeJS - MongoDB - TypeScript - Stripe",
    links: [
      {
        id: uuid,
        link: "https://car-rental-mern-stack.netlify.app",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/rental-car-backend",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  // {
  //   id: uuid,
  //   tag: "Fullstack",
  //   image: "image/tour-app.png",
  //   title: "Tour App",
  //   description: "React - ReduxToolkit - NodeJS - MongoDB",
  //   links: [
  //     {
  //       id: uuid,
  //       link: "https://mern-tour-app.netlify.app/",
  //       icon: GlobalSVG("h-4 w-4"),
  // title: "Live Demo",
  //     },
  //     {
  //       id: uuid,
  //       link: "https://github.com/capo33/tour-app-client",
  //       icon: GitHubSVG("h-4 w-4"),
  // title: "Source Code"
  //     },
  //   ],
  // },

  {
    id: uuid,
    tag: "Frontend",
    image: "image/rick-and-morty.png",
    title: "Rick and Morty",
    description: "React - UseQuery - Rest API",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/rick-and-morty/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/rick-and-morty",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/rick-and-morty2.png",
    title: "Rick and Morty",
    description: "React - Apollo-Client - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://rick-and-morty-apollo-client.onrender.com/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/rick-and-morty-apollo-clien",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/star-wars.png",
    title: "Star Wars",
    description: "React - UseQuery - Rest API",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/star-wars/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/star-wars",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/search-user.png",
    title: "Search Users",
    description: "React - TypeScript - Rest API",
    links: [
      {
        id: uuid,
        link: "https://search-user-api.netlify.app/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/search-feature",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Frontend",
    image: "image/kahvila.png",
    title: "Caffee Counter",
    description: "Angular - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/kahvila/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/kahvila.git",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  // {
  //   id: uuid,
  //   tag: "Javascript",
  //   image: "/image/speaker.png",
  //   title: "Text Speaker",
  //   description: "JavaScript",
  //   links: [
  //     {
  //       id: uuid,
  //       link: "https://capo33.github.io/Text-to-Speech/",
  //       icon: GlobalSVG("h-4 w-4"),
  // title: "Live Demo",
  //     },
  //     {
  //       id: uuid,
  //       link: "https://github.com/capo33/Text-to-Speech",
  //       icon: GitHubSVG("h-4 w-4"),
  // title: "Source Code"
  //     },
  //   ],
  // },
  // {
  //   id: uuid,
  //   tag: "Javascript",
  //   image: "/image/guss-my-number.png",
  //   title: "Guess My Number",
  //   description: "JavaScript - HTML - CSS - AWS S3",
  //   links: [
  //     {
  //       id: uuid,
  //       link: "https://test-capo-first-bucket.s3.eu-north-1.amazonaws.com/guess-my-number/index.html",
  //       icon: GlobalSVG("h-4 w-4"),
  // title: "Live Demo",
  //     },
  //     {
  //       id: uuid,
  //       link: "hthttps://github.com/capo33/Guss-my-number",
  //       icon: GitHubSVG("h-4 w-4"),
  // title: "Source Code"
  //     },
  //   ],
  // },
  // {
  //   id: uuid,
  //   tag: "Javascript",
  //   image: "image/dice-game.jpg",
  //   title: "Dice Game",
  //   description: "Javascript",
  //   links: [
  //     {
  //       id: uuid,
  //       link: "https://capo33.github.io/dice-game/",
  //       icon: GlobalSVG("h-4 w-4"),
  // title: "Live Demo",
  //     },
  //     {
  //       id: uuid,
  //       link: "https://github.com/capo33/dice-game.git",
  //       icon: GitHubSVG("h-4 w-4"),
  // title: "Source Code"
  //     },
  //   ],
  // },
  // {
  //   id: uuid,
  //   tag: "Javascript",
  //   image: "image/memory.png",
  //   title: "Memory Game",
  //   description: "Javascript",
  //   links: [
  //     {
  //       id: uuid,
  //       link: "https://capo33.github.io/memory-game/",
  //       icon: GlobalSVG("h-4 w-4"),
  // title: "Live Demo",
  //     },
  //     {
  //       id: uuid,
  //       link: "https://github.com/capo33/memory-game",
  //       icon: GitHubSVG("h-4 w-4"),
  // title: "Source Code"
  //     },
  //   ],
  // },

  {
    id: uuid,
    tag: "Experimental",
    image: "image/school-projects.jpg",
    title: "School Projects",
    description: "HTML - CSS - Angular - Javascript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/school-projects/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/school-projects.git",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/blitz.png",
    title: "Blitz",
    description: "HTML - CSS",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/Blitz/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Blitz",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/splitting.jpg",
    title: "Split Server",
    description: "Angular - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/spliting/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/spliting.git",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/joke-list2.jpg",
    title: "Jokes",
    description: "Angular - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/joke-list/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/joke-list.git",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/warning-et-success.jpg",
    title: "Success and warning",
    description: "Angular - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/warning-et-success/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/warning-et-success.git",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  // {
  //   id: uuid,
  //   tag: "Experimental",
  //   image: "image/crazy-button.jpg",
  //   title: "Crazy Buttons",
  //   description: "JavaScript",
  //   links: [
  //     {
  //       id: uuid,
  //       link: "https://capo33.github.io/crazy-button/",
  //       icon: GlobalSVG("h-4 w-4"),
  // title: "Live Demo",
  //     },
  //     {
  //       id: uuid,
  //       link: "https://github.com/capo33/crazy-button.git",
  //       icon: GitHubSVG("h-4 w-4"),
  // title: "Source Code"
  //     },
  //   ],
  // },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/keeper.png",
    title: "Note Keeper",
    description: "React - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://note-keeper-ts.netlify.app/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Note-keeper-ts",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/todo.png",
    title: "Todo App",
    description: "React - JavaScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/react-todo-app/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-todo-app.git",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/egyption-gods.jpg",
    title: "Egyption Deities",
    description: "React - JavaScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/egyption-gods/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/egyption-gods.git",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/emojipedia.jpg",
    title: "Emojipedia",
    description: "React - JavaScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/emojipedia/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/emojipedia",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/Digital-Marketing.jpg",
    title: "Digital Marketing",
    description: "HTML - CSS",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/Digital-Marketing/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Digital-Marketing.git",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/tindog.jpg",
    title: "Tindog",
    description: "HTML - CSS - Bootstrap",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/tindog/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/tindog.git",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/travel-agency.jpg",
    title: "Css Project",
    description: "HTML - CSS - Materialize",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/travel-agency/",
        icon: GlobalSVG("h-4 w-4"),
        title: "Live Demo",
      },
      {
        id: uuid,
        link: "https://github.com/capo33/travel-agency.git",
        icon: GitHubSVG("h-4 w-4"),
        title: "Source Code",
      },
    ],
  },
];

// Project Data
export const ProjectHeroObj: IProjectHero = {
  imgStart: true,
  firstLabel: "View on Github",
  icon: GitHubSVG("w-4 h-4 mr-2"),
  topLine: "Projects",
  firstHeadLine: "My",
  secondHeadLine: " Deployed Projects",
  description:
    "Here are most of the deployed projects I've worked on such as Front-end & Full-Stack projects .. Want to see more? Check out my GitHub repository!",
  img: ProjectHero,
};

export const Tabs: ITab[] = [
  { id: 1, name: "All", icon: TableSVG() },
  { id: 2, name: "Experimental", icon: ExperimentSVG() },
  { id: 3, name: "Frontend", icon: FrontendSVG() },
  { id: 4, name: "Fullstack", icon: StackSVG() },
];
