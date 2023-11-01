type IDescription = {
  id?: number;
  title?: string;
  emoji?: string;
};
export default interface IAboutMainObj {
  imgStart: boolean;
  topLine: string;
  firstHeadLine: string;
  secondHeadLine: string;
  description: IDescription[];
  img: string;
}
