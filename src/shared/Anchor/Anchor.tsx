import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface IAnchor {
  icon?: React.JSX.Element | undefined;
  label?: string | undefined;
  aClass?: string;
  sClass?: string;
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
}
const Anchor = ({ icon, label, aClass, sClass, href }: IAnchor) => {
  const { toggle } = useContext(ThemeContext);
  aClass = !toggle ? "btn" : "btn text-black";
  return (
    <a href={href} className={aClass} target='_blank' rel='noreferrer'>
      <span className={sClass}>{icon}</span>
      <span className='text-sm bg-clip-text'>{label}</span>
    </a>
  );
};

export default Anchor;
