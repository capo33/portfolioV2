import { HeroObj, ShowcaseObj } from "../../data/HeroData";
import { Hero, Marquee, MitionAnimate, Showcase } from "../../components";

const Home = () => {
  return (
    <section className='container mx-auto px-10 space-y-12 md:space-y-16 lg:space-y-20 py-10'>
      <MitionAnimate>
        <Hero {...HeroObj} />
        <div className="py-12">
          <Marquee link='/about' />
        </div>
        <Showcase {...ShowcaseObj} />
      </MitionAnimate>
    </section>
  );
};

export default Home;
