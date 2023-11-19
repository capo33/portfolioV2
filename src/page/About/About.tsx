import {
  AboutMainObj,
  EducactionData,
  WorkExperienceData,
} from "../../data/AboutData";
import { MitionAnimate, AboutDetails, TimeLine } from "../../components";

const About = () => {
  return (
    <section className='container mx-auto px-10'>
      <MitionAnimate>
        <AboutDetails {...AboutMainObj} />
        <TimeLine
          educaction={EducactionData}
          workExperience={WorkExperienceData}
        />
      </MitionAnimate>
    </section>
  );
};

export default About;
