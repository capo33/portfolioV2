import { ProjectHeroObj } from "../../data/ProjectData";
import { MitionAnimate, ProjectHero, ProjectDtails } from "../../components";

const Projects = () => {
  return (
    <MitionAnimate>
      <section className='container mx-auto px-10 space-y-12 md:space-y-16 lg:space-y-20 py-10'>
        <ProjectHero {...ProjectHeroObj} />
        <ProjectDtails />
      </section>
    </MitionAnimate>
  );
};

export default Projects;
