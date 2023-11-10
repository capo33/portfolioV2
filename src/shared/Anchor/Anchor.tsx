import React from "react";

interface IAnchor {
  icon?: React.JSX.Element | undefined;
  label?: string | undefined;
  aClass?: string;
  sClass?: string;
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  download?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}
const Anchor = ({ icon, label, aClass = "btn", sClass, href }: IAnchor) => {
  return (
    <a href={href} className={aClass} target='_blank' rel='noreferrer' download>
      <span className={sClass}>{icon}</span>
      <span className='dark_text text-sm bg-clip-text'>{label}</span>
    </a>
  );
};

export default Anchor;
