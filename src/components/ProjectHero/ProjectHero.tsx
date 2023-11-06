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
          aClass='inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
        />
      </div>
    </SharedSection>
  );
};

export default ProjectHero;
