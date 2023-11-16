import { ContactObj } from "../../data/ContactData";
import { ContactDetails, MitionAnimate } from "../../components";

const Contact = () => {
  return (
    <section className='container mx-auto px-10'>
      <MitionAnimate>
        <ContactDetails {...ContactObj} />
      </MitionAnimate>
    </section>
  );
};

export default Contact;
