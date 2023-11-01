export default interface IHomeMainObj<T> {
  imgStart: boolean;
  topLine: string;
  firstHeadLine: string;
  secondHeadLine: string;
  description: T;
  firstLabel?: string;
  secondLabel?: string;
  firstIcon?: React.JSX.Element;
  secondIcon?: React.JSX.Element;
  img: string;
}
