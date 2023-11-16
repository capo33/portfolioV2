import {
  AboutMainObj,
  EducactionData,
  WorkExperienceData,
} from "../../data/AboutData";
import {
  MitionAnimate,
  AboutDetails,
  TimeLine,
  Technologies,
} from "../../components";

const About = () => {
  return (
    <section className='container mx-auto px-10'>
      <MitionAnimate>
        <AboutDetails {...AboutMainObj} />
        <TimeLine
          educaction={EducactionData}
          workExperience={WorkExperienceData}
        />
        <Technologies />
      </MitionAnimate>
    </section>
  );
};

export default About;
