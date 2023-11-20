import {
  JsSVG,
  AwsSVG,
  GitSVG,
  NetSVG,
  SassSVG,
  NodeSVG,
  ReactSVG,
  UnitySVG,
  GithubSVG,
  DockerSVG,
  CSharpSVG,
  ApolloSVG,
  PythonSVG,
  BugFixing,
  RestAPISVG,
  ExpressSVG,
  AngularSVG,
  MongoDBSVG,
  PostmamSVG,
  GraphqlSVG,
  TailwindSVG,
  BootStrapSVG,
  MaterialUISVG,
  TypescriptSVG,
  PostgresqlSVG,
  GitHubActionsSVG,
  StyledComponentSVG,
} from "../../assets/svg";
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
        "A dedicated Software Developer driven by a fervor for crafting visually appealing and seamlessly functional websites.",
    },

    {
      id: 2,
      title:
        "My journey into programming ignited in 2019, prompting my decision to embark on the path of web development through studies at BUSINESS COLLEGE HELSINKI.",
    },
    {
      id: 3,
      title:
        "Throughout my programming odyssey, I've worked with various technologies integral to web development, including JavaScript, React, TypeScript, NodeJS, and more",
    },
    {
      id: 4,
      title:
        "Having garnered experience in both collaborative team settings and independent endeavors, I bring versatility to my professional repertoire.",
    },
    {
      id: 5,
      title: `Currently, I am learning AWS and Python, while also indulging my creative side by exploring C# and Unity for game development`,
    },
  ],
  img: BugFixing,
};

// Qualification
const WorkExperienceData: IQualification[] = [
  {
    id: 1,
    date: "11/2023 - Present",
    title: "Software Developer",
    company: "Bitwards, Helsinki",
    description:
      "Developing and maintaining the company's software products and services",
  },
  {
    id: 2,
    date: "09/2022 - 02/2023",
    title: "Software Developer",
    company: "Nordcloud IBM Company, Helsinki",
    description:
      "Designed reusable and reliable code for use within distributed cloud environments",
  },
  {
    id: 3,
    date: "04/2022 - 08/20220",
    title: "Full Stack Developer Intern",
    company: "Integrify, Helsinki",
    description:
      "Designed and built book library management system application using TypeScript, ReactJS, Redux, and Material‑UI.",
  },
  {
    id: 4,
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
    img: NodeSVG,
    alt: "NodeJs",
  },
  {
    id: 2,
    img: PythonSVG,
    alt: "Python",
  },
  {
    id: 3,
    img: TypescriptSVG,
    alt: "TypeScript",
  },
  {
    id: 4,
    img: ExpressSVG,
    alt: "Express",
  },
  {
    id: 5,
    img: NetSVG,
    alt: "TypeScript",
  },
];

const DatabaseIcons: ITechIcons[] = [
  {
    id: 1,
    img: MongoDBSVG,
    alt: "MongoDB",
  },
  {
    id: 2,
    img: PostgresqlSVG,
    alt: "PostgreSQL",
  },
  {
    id: 3,
    img: RestAPISVG,
    alt: "Rest API",
  },
  {
    id: 4,
    img: GraphqlSVG,
    alt: "GraphQL",
  },
  {
    id: 5,
    img: ApolloSVG,
    alt: "Apollo",
  },
];

const FrontEndIcons: ITechIcons[] = [
  {
    id: 1,
    img: JsSVG,
    alt: "JavaScript",
  },
  {
    id: 2,
    img: TypescriptSVG,
    alt: "TypeScript",
  },
  {
    id: 3,
    img: ReactSVG,
    alt: "React",
  },
  {
    id: 4,
    img: AngularSVG,
    alt: "Angular",
  },
];

const StylesIcons: ITechIcons[] = [
  {
    id: 1,
    img: MaterialUISVG,
    alt: "AWS",
  },
  {
    id: 2,
    img: SassSVG,
    alt: "Sass",
  },
  {
    id: 3,
    img: BootStrapSVG,
    alt: "Bootstrap",
  },
  {
    id: 4,
    img: TailwindSVG,
    alt: "Tailwind CSS",
  },
  {
    id: 5,
    img: StyledComponentSVG,
    alt: "Styled-components",
  },
];

const ToolsIcons: ITechIcons[] = [
  {
    id: 1,
    img: GitSVG,
    alt: "Git",
  },
  {
    id: 2,
    img: GithubSVG,
    alt: "GitHub",
  },
  {
    id: 3,
    img: GitHubActionsSVG,
    alt: "GitHub Action",
  },
  {
    id: 4,
    img: PostmamSVG,
    alt: "Postman",
  },
  {
    id: 5,
    img: DockerSVG,
    alt: "Dockers",
  },
];

const GameIcons: ITechIcons[] = [
  {
    id: 1,
    img: CSharpSVG,
    alt: "C#",
  },
  {
    id: 2,
    img: UnitySVG,
    alt: "Unity",
  },
];

const CloudIcon: ITechIcons[] = [
  {
    id: 1,
    img: AwsSVG,
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
