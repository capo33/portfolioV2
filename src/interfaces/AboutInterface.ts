export default interface IAboutMainObj {
  imgStart: boolean;
  topLine: string;
  firstHeadLine: string;
  secondHeadLine: string;
  description: {
    id: number;
    emoji?: string;
    title: string;
  }[];
  img: string;
}
