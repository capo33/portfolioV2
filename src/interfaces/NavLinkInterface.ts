export default interface ILinks {
  id: () => string | number | null;
  to: string;
  text: string;
  icon?: React.ReactElement;
}
