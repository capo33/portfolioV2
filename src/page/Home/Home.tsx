import { Hero, Marquee } from "../../components";
import Showcase from "../../components/Showcase/Showcase";
import { HeroObjOne, HeroObjTwo } from "../../data/HeroData";

const Home = () => {
  return (
    <main className='container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20 py-10'>
      <Hero {...HeroObjOne} />
      <Marquee link='/contact' />
      <Showcase {...HeroObjTwo} />
    </main>
  );
};

export default Home;
