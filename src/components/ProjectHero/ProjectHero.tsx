import Anchor from "../../shared/Anchor/Anchor";
import { GitHubSVG } from "../../assets/svg/NavSVG";

const ProjectHero = () => {
  return (
    <section className='py-10'>
      <span className='font-semibold text-lg'>Projects</span>
      <span className='ml-2 inline-block h-[1px] w-8 bg-blue-400'></span>
      <h2 className='max-w-5xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
        My
        <span className='text-blue-500'> Deployed Projects</span>
      </h2>
      <p className='py-4 text-2xl font-bold '>
        Want to see more? Check out my Github profile{" "}
        <Anchor
          href='https://github.com/capo33'
          icon={GitHubSVG(
            "w-5 h-5 inline-block hover:text-black text-blue-500"
          )}
        />
      </p>
    </section>
  );
};

export default ProjectHero;
