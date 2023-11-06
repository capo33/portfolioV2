import { MitionAnimate, ProjectHero, ProjectDtails } from "../../components";

const Projects = () => {
  return (
    <section className='container mx-auto px-4 m md:space-y-16 lg:space-y-20 py-10'>
      <MitionAnimate>
        <ProjectHero />
        <ProjectDtails />
      </MitionAnimate>
    </section>
  );
};

export default Projects;
