import React from "react";

interface IAnchor {
  icon?: React.JSX.Element | undefined;
  label?: string | undefined;
  aClass?: string;
  sClass?: string;
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
}
const Anchor = ({
  icon,
  label,
  aClass = "inline-flex items-center cursor-pointer justify-center w-full px-5 py-3 text-sm font-medium text-center border border-gray-200 rounded sm:w-auto  bg-gradient-to-r from-[#efefef] to-[#dcdcdc]",
  sClass,
  href,
}: IAnchor) => {
  return (
    <a href={href} className={aClass} target='_blank' rel='noreferrer'>
      <span className={sClass}>{icon}</span>
      <span className='text-sm bg-clip-text'>{label}</span>
    </a>
  );
};

export default Anchor;
