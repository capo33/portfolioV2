export interface IIProjectLinks {
  id: () => void;
  link: string;
  icon: JSX.Element;
}

export default interface IProject {
  id: () => void;
  tag: string;
  image: string;
  title: string;
  description: string;
  links: IIProjectLinks[];
}
