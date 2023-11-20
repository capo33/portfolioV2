import CV from '../../assets/pdf/CV.pdf'
import { SharedSection, AnchorTag } from "../../shared";
import IHomeMainObj from "../../interfaces/HomeInterface";

const Hero = ({
  firstHeadLine,
  secondHeadLine,
  topLine,
  firstLabel,
  secondLabel,
  firstIcon,
  secondIcon,
  img,
  description,
}: IHomeMainObj<string>) => {
  return (
    <SharedSection
      topLine={topLine}
      firstHeadLine={firstHeadLine}
      secondHeadLine={secondHeadLine}
      description={description}
      img={img}
    >
      <div className='pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
        <AnchorTag
          icon={firstIcon}
          label={firstLabel}
          href='https://github.com/capo33'
        />
        <AnchorTag
          icon={secondIcon}
          label={secondLabel}
          href={CV}
          aClass='btn green_bg hover:bg-[#49bd96]'
        />
      </div>
    </SharedSection>
  );
};

export default Hero;
