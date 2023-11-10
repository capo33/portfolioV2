import { IProjectHero } from "../../interfaces";
import { SharedSection, AnchorTag } from "../../shared";

const ProjectHero = ({
  firstHeadLine,
  secondHeadLine,
  firstLabel,
  topLine,
  description,
  img,
  icon,
}: IProjectHero) => {
  return (
    <SharedSection
      topLine={topLine}
      firstHeadLine={firstHeadLine}
      secondHeadLine={secondHeadLine}
      description={description}
      img={img}
      imgStart
    >
      <div className='pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
        <AnchorTag
          href='https://github.com/capo33'
          label={firstLabel}
          icon={icon}
          aClass='btn'
        />
      </div>
    </SharedSection>
  );
};

export default ProjectHero;
