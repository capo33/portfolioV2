import { Email } from "..";
import { SharedSection } from "../../shared";
import { IHomeMainObj } from "../../interfaces";

const ContactDetails = ({
  firstHeadLine,
  secondHeadLine,
  topLine,
  description,
  img,
}: IHomeMainObj<string>) => {
  return (
    <SharedSection
      topLine={topLine}
      firstHeadLine={firstHeadLine}
      secondHeadLine={secondHeadLine}
      img={img}
      imgStart={true}
    >
      <div>
        <ul className='space-y-3'>{description}</ul>
        <div className='py-8'>
          <Email line='Please send message for futher information!' />
        </div>
      </div>
    </SharedSection>
  );
};

export default ContactDetails;
