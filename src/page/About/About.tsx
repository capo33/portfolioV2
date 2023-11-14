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
    <MitionAnimate>
      <section className='container mx-auto px-10 space-y-12 md:space-y-16 lg:space-y-20 py-10'>
        <AboutDetails {...AboutMainObj} />
        <TimeLine
          educaction={...EducactionData}
          workExperience={WorkExperienceData}
        />
        <Technologies />
      </section>
    </MitionAnimate>
  );
};

export default About;
