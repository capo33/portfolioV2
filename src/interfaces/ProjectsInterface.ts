export interface IIProjectLinks {
  id: () => string | number | null;
  link: string;
  title: string;
  icon: JSX.Element;
}

export default interface IProject {
  id: () => string | number | null ;
  tag: string;
  image: string;
  title: string;
  description: string;
  links: IIProjectLinks[];
}
