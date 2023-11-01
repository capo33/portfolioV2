import { AboutObj } from "../../data/AboutData/Index";
import AboutDetails from "../../components/AboutDetails/AboutDetails";
import { MitionAnimate } from "../../components";

const About = () => {
  return (
    <section className='container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20 py-10'>
      <MitionAnimate>
        <AboutDetails {...AboutObj} />
      </MitionAnimate>
    </section>
  );
};

export default About;
