import { AboutMainObj } from "../../data/AboutData/Index";
import { MitionAnimate, AboutDetails } from "../../components";

const About = () => {
  return (
    <section className='container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20 py-10'>
      <MitionAnimate>
        <AboutDetails {...AboutMainObj} />
      </MitionAnimate>
    </section>
  );
};

export default About;
