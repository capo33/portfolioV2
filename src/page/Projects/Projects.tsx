import { ProjectHeroObj } from "../../data/ProjectData";
import { MitionAnimate, ProjectHero, ProjectDtails } from "../../components";

const Projects = () => {
  return (
    <section className='container mx-auto px-10 '>
      <MitionAnimate>
        <ProjectHero {...ProjectHeroObj} />
        <ProjectDtails />
      </MitionAnimate>
    </section>
  );
};

export default Projects;
