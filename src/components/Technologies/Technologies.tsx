import { TechCard } from "..";
import {
  BackEndIcons,
  CloudIcon,
  DatabaseIcons,
  FrontEndIcons,
  GameIcons,
  StylesIcons,
  ToolsIcons,
} from "../../data/AboutData";
import { HeaderTitle } from "../../shared";

const Technologies = () => {
  return (
    <HeaderTitle
      topLine='Technologies'
      firstHeadLine='Tech'
      secondHeadLine=' Stack'
    >
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 py-5'>
        <TechCard data={FrontEndIcons} title='Frontend' />
        <TechCard data={StylesIcons} title='Styles' />
        <TechCard data={BackEndIcons} title='Backend' />
        <TechCard data={DatabaseIcons} title='Database & API' />
        <TechCard data={ToolsIcons} title='Tools' />
        <TechCard data={GameIcons} title='Game' />
        <TechCard data={CloudIcon} title='Cloud' />
      </div>
    </HeaderTitle>
  );
};

export default Technologies;
