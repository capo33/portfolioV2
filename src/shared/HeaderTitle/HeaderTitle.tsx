import React from "react";

interface HeaderTitleProps {
  children: React.ReactNode;
  topLine?: string;
  firstHeadLine?: string;
  secondHeadLine?: string;
}

const HeaderTitle = ({
  children,
  firstHeadLine,
  secondHeadLine,
  topLine,
}: HeaderTitleProps) => {
  return (
    <section className='container mx-auto py-10'>
      <span className='font-semibold text-lg'>{topLine}</span>
      <span className='ml-2 inline-block h-[1px] w-8 orange_bg'></span>
      <h2 className='max-w-5xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl'>
        {firstHeadLine}
        <span className='orange_text'>{secondHeadLine}</span>
      </h2>
      {children}
    </section>
  );
};

export default HeaderTitle;
