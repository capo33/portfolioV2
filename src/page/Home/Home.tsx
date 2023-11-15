import { HeroObj, ShowcaseObj } from "../../data/HeroData";
import { Hero, Marquee, MitionAnimate, Showcase } from "../../components";

const Home = () => {
  return (
    <MitionAnimate>
      <section className='container mx-auto px-10'>
        <Hero {...HeroObj} />
        <div className='md:py-12'>
          <Marquee link='/about' />
        </div>
        <Showcase {...ShowcaseObj} />
      </section>
    </MitionAnimate>
  );
};

export default Home;
