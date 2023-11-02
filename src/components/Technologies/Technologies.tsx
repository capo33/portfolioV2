import { TechCard } from "..";
import {
  BackEndIcons,
  CloudIcon,
  DatabaseIcons,
  FrontEndIcons,
  GameIcons,
  StylesIcons,
  ToolsIcons,
} from "../../data/AboutData";

const Technologies = () => {
  return (
    <section className='container mx-auto'>
      <span className='text-main-color font-semibold text-lg'>
        Technologies
      </span>
      <span className='ml-2 inline-block h-[1px] w-8 bg-blue-400'></span>
      <h2 className='max-w-5xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
        Tech
        <span className='text-blue-500'> Stack</span>
      </h2>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 py-5'>
        <TechCard data={FrontEndIcons} title='Frontend' />
        <TechCard data={StylesIcons} title='Styles' />
        <TechCard data={BackEndIcons} title='Backend' />
        <TechCard data={DatabaseIcons} title='Database & API' />
        <TechCard data={ToolsIcons} title='Tools' />
        <TechCard data={GameIcons} title='Game' />
        <TechCard data={CloudIcon} title='Cloud' />
      </div>
    </section>
  );
};

export default Technologies;
