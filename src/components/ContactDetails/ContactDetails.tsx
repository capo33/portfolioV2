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
      description={description}
      imgStart={true}
    >
      <Email line='Please send message for futher information!' />
    </SharedSection>
  );
};

export default ContactDetails;
