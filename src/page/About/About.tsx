import {
  AboutMainObj,
  EducactionData,
  WorkExperienceData,
} from "../../data/AboutData";
import { MitionAnimate, AboutDetails } from "../../components";
import TimeLine from "../../components/TimeLine/TimeLine";

const About = () => {
  return (
    <section className='container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20 py-10'>
      <MitionAnimate>
        <AboutDetails {...AboutMainObj} />
        <TimeLine
          educaction={...EducactionData}
          workExperience={WorkExperienceData}
        />
      </MitionAnimate>
    </section>
  );
};

export default About;
