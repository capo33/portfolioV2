type IDescriptionV1 = {
  id?: number;
  title?: string;
  description?: string;
  emoji?: string;
};
export default interface IAboutMainObj {
  imgStart: boolean;
  topLine: string;
  firstHeadLine: string;
  secondHeadLine: string;
  description: IDescriptionV1[];
  img: string;
}
