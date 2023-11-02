import { IMarqueeIcons } from "../../interfaces";
import {
  PostgresqlSVG,
  ReactSVG,
  PostmamSVG,
  AwsSVG,
  GithubSVG,
  GraphqlSVG,
  NodeSVG,
  TypescriptSVG,
  TailwindSVG,
} from ".";

const Icons: IMarqueeIcons[] = [
  {
    id: 1,
    icon: ReactSVG,
    alt: "React",
  },
  {
    id: 2,
    icon: PostgresqlSVG,
    alt: "Postgresql",
  },
  {
    id: 3,
    icon: PostmamSVG,
    alt: "Postmam",
  },
  {
    id: 4,
    icon: AwsSVG,
    alt: "Aws",
  },
  {
    id: 5,
    icon: GithubSVG,
    alt: "Github",
  },
  {
    id: 6,
    icon: GraphqlSVG,
    alt: "Graphql",
  },
  {
    id: 7,
    icon: NodeSVG,
    alt: "Node",
  },
  {
    id: 8,
    icon: TypescriptSVG,
    alt: "Typescript",
  },
  {
    id: 9,
    icon: TailwindSVG,
    alt: "Tailwind",
  },
];

export default Icons;
