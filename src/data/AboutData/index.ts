import Capo from "../../assets/images/coding.gif";
import { IAboutMainObj, IQualification, ITechIcons } from "../../interfaces";

// Main
const AboutMainObj: IAboutMainObj = {
  imgStart: true,
  topLine: "Snippet",
  firstHeadLine: "Who",
  secondHeadLine: " I am",
  description: [
    {
      id: 1,
      title:
        "A Software Developer with a passion for building beautiful and functional websites.",
    },

    {
      id: 2,
      title:
        "My coding journey started in 2020 when I decided to become a developer.",
    },
    {
      id: 3,
      title: "I studied web-development at Business Collage School.",
    },
    {
      id: 4,
      title:
        "During my programming journey, I have learned technologies related to web development, such as JavaScript, React, TypeScript, NodeJS, etc.",
    },
    {
      id: 5,
      title:
        "I motivate myself by looking for new challenges and new ways to improve my skills and knowledge.",
    },
    {
      id: 6,
      title:
        "I now have experience working as part of a team and individually.",
    },
    {
      id: 7,
      title: `Currently I'm learning AWS, Python and .NET`,
    },
    {
      id: 8,
      title: "For fun I use C# and Unity to develop games.",
    },
  ],
  img: Capo,
};

// Qualification
const WorkExperienceData: IQualification[] = [
  {
    id: 1,
    date: "09/2022 - 02/2023",
    title: "Software Developer",
    company: "Nordcloud IBM Company, Helsinki",
    description:
      "Designed reusable and reliable code for use within distributed cloud environments",
  },
  {
    id: 2,
    date: "04/2022 - 08/20220",
    title: "Full Stack Developer Intern",
    company: "Integrify, Helsinki",
    description:
      "Designed and built book library management system application using TypeScript, ReactJS, Redux, and Material‑UI.",
  },
  {
    id: 3,
    date: "04/2019 - 07/2020",
    title: "The restaurateur - an entrepreneur",
    company: "Capo33, Helsinki",
    description:
      "Implemented effective inventory control systems to reduce food spoilage and waste",
  },
];

const EducactionData: IQualification[] = [
  {
    id: 1,
    date: "08/2020 - Present",
    title: "Software development Angular and .Net",
    company: "Business College Helsinki",
    description:
      "I have completed the coding part & what remains is the theoretical part.",
  },
  {
    id: 2,
    date: "2012 - 2015",
    title: "Hotel, restaurant and catering industry",
    company: "Stadin Ammattiopisto, Varia, Vantaa",
    description:
      "I have learned how to care about Hygiene & Food Safety, Products Purchasing & Inventory Management",
  },
  {
    id: 3,
    date: "06/2003 - 06/2007",
    title: "Business management",
    company:
      "Higher Institute for Cooperative-administrative Studies Egypt, Cairo",
    description:
      "Financial accounting, marketing strategy, and business decision-making",
  },
];

// Tech Skills
const BackEndIcons: ITechIcons[] = [
  {
    id: 1,
    img: "icons/nodejs-1.svg",
    alt: "NodeJs",
  },
  {
    id: 2,
    img: "icons/python.svg",
    alt: "Python",
  },
  {
    id: 3,
    img: "icons/typescript.svg",
    alt: "TypeScript",
  },
  {
    id: 4,
    img: "icons/express.svg",
    alt: "Express",
  },
  {
    id: 5,
    img: "icons/net.svg",
    alt: "TypeScript",
  },
];

const DatabaseIcons: ITechIcons[] = [
  {
    id: 1,
    img: "icons/mongodb.svg",
    alt: "MongoDB",
  },
  {
    id: 2,
    img: "icons/postgresql.svg",
    alt: "PostgreSQL",
  },
  {
    id: 3,
    img: "icons/Rest-api.svg",
    alt: "Rest API",
  },
  {
    id: 4,
    img: "icons/graphql.svg",
    alt: "GraphQL",
  },
  {
    id: 5,
    img: "icons/apollographql.svg",
    alt: "Apollo",
  },
];

const FrontEndIcons: ITechIcons[] = [
  {
    id: 1,
    img: "icons/js.svg",
    alt: "JavaScript",
  },
  {
    id: 2,
    img: "icons/typescript.svg",
    alt: "TypeScript",
  },
  {
    id: 3,
    img: "icons/react.svg",
    alt: "React",
  },
  {
    id: 4,
    img: "icons/angular.svg",
    alt: "Angular",
  },
];

const StylesIcons: ITechIcons[] = [
  {
    id: 1,
    img: "icons/material-ui.svg",
    alt: "Material-Ui",
  },
  {
    id: 2,
    img: "icons/bootstrap.svg",
    alt: "Bootstrap",
  },
  {
    id: 3,
    img: "icons/sass.svg",
    alt: "Sass",
  },
  {
    id: 4,
    img: "icons/tailwind.svg",
    alt: "Tailwind CSS",
  },
  {
    id: 5,
    img: "icons/styled-components.svg",
    alt: "Styled-components",
  },
];

const ToolsIcons: ITechIcons[] = [
  {
    id: 1,
    img: "icons/git.svg",
    alt: "Git",
  },
  {
    id: 2,
    img: "icons/github.svg",
    alt: "GitHub",
  },
  {
    id: 3,
    img: "icons/githubactions.svg",
    alt: "GitHub Action",
  },
  {
    id: 4,
    img: "icons/postman.svg",
    alt: "Postman",
  },
  {
    id: 5,
    img: "icons/docker.svg",
    alt: "Dockers",
  },
];

const GameIcons: ITechIcons[] = [
  {
    id: 1,
    img: "icons/c-sharp.svg",
    alt: "C#",
  },
  {
    id: 2,
    img: "icons/unity.svg",
    alt: "Unity",
  },
];

const CloudIcon: ITechIcons[] = [
  {
    id: 1,
    img: "icons/aws.svg",
    alt: "AWS",
  },
];

export {
  AboutMainObj,
  EducactionData,
  WorkExperienceData,
  BackEndIcons,
  DatabaseIcons,
  FrontEndIcons,
  StylesIcons,
  ToolsIcons,
  GameIcons,
  CloudIcon,
};
