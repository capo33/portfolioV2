import React from "react";

interface IAnchor {
  icon?: React.JSX.Element | undefined;
  label?: string | undefined;
  aClass?: string;
  sClass?: string;
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
}
const Anchor = ({ icon, label, aClass="inline-flex items-center cursor-pointer justify-center w-full px-5 py-3 text-sm font-medium text-center border border-gray-200 rounded sm:w-auto bg-gray-50 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800", sClass, href }: IAnchor) => {
  return (
    <a href={href} className={aClass} target='_blank' rel='noreferrer'>
      <span className={sClass}>{icon}</span>
      <span className='text-sm'>{label}</span>
    </a>
  );
};

export default Anchor;
