export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const portfolioProjects = [
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
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-crypto-tracker",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/data-company",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/country-api-app",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-smooth-scroll",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/fakeshop",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-styled-component",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-pokemon-ts",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
  //       icon: <FcGlobe style={{ fontSize: "30px" }} />,
  //     },
  //     {
  //       id: uuid,
  //       link: "https://github.com/capo33/blog-backend",
  //       icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
  //     },
  //   ],
  // },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/social-network.png",
    title: "Social Network",
    description: "React - NodeJS - MongoDB - TypeScript - Material-ui",
    links: [
      {
        id: uuid,
        link: "https://social-network-t5pv.onrender.com/",
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/social-app-v2",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/home-page.png",
    title: "Yupfood",
    description: "React - NodeJS - MongoDB - TypeScript - Bootstrap",
    links: [
      {
        id: uuid,
        link: "https://yupfood.onrender.com/",
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/recipes-blog",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Q_shop",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Fullstack",
    image: "image/homeScreen.png",
    title: "Second Hand Store",
    description: "React - GrapghQL - Apollo - Javascript",
    links: [
      {
        id: uuid,
        link: "https://second-hand-store.netlify.app/",
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/second_hand-frontend",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/social-media-frontend",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/rental-car-backend",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
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
        // icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/rental-car-backend",
        // icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
 ];
