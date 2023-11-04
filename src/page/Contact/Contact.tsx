import { ContactDetails, MitionAnimate } from "../../components";
import { ContactObj } from "../../data/ContactData";

const Contact = () => {
  return (
    <section className='container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20 py-10'>
      <MitionAnimate>
        <ContactDetails {...ContactObj} />
      </MitionAnimate>
    </section>
  );
};

export default Contact;
