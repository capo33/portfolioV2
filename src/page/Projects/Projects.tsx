import { MitionAnimate, ProjectHero, ProjectDtails } from "../../components";
import { ProjectHeroObj } from "../../data/ProjectData";

const Projects = () => {
  return (
    <section className='container mx-auto px-4 m md:space-y-16 lg:space-y-20 py-10'>
      <MitionAnimate>
        <ProjectHero {...ProjectHeroObj}/>
        <ProjectDtails />
      </MitionAnimate>
    </section>
  );
};

export default Projects;
