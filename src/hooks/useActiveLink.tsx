import { useLocation } from "react-router-dom";

const useActiveLink = () => {
  const { pathname } = useLocation();

  let subpage = pathname.split("/")[1];

  console.log(subpage);

  const linkness = (type: string) => {
    if (subpage === "") {
      subpage = "";
    }
    let classes =
      "px-2 text-lg font-semibold flex items-center space-x-2 cursor-pointer";
    if (type === subpage) {
      classes += " text-cyan-500";
    } else {
      classes += " ";
    }
    return classes;
  };

  return { linkness };
};

export default useActiveLink;
