import { ContactObj } from "../../data/ContactData";
import { ContactDetails, MitionAnimate } from "../../components";

const Contact = () => {
  return (
    <MitionAnimate>
      <section className='container mx-auto px-10 space-y-12 md:space-y-16 lg:space-y-20 py-10'>
        <ContactDetails {...ContactObj} />
      </section>
    </MitionAnimate>
  );
};

export default Contact;
