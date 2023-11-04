import { IHomeMainObj } from "../../interfaces";
import { SharedSection } from "../../shared";

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
      imgStart
    >
      <div>
        <ul className='space-y-3'>{description}</ul>
        <div className='py-8'>
          <form>
            <div className='mb-6'>
              <h2 className='text-base'>
                Please send message for futher information!{" "}
              </h2>
            </div>

            <input
              className='w-full px-3 py-2 mb-4 outline-none border rounded bg-gray-100'
              type='text'
              placeholder='Name'
              required
            />
            <input
              className='w-full px-3 py-2 mb-4 outline-none border rounded bg-gray-100'
              type='email'
              placeholder='Email'
              required
            />
            <textarea
              rows={4}
              typeof='message'
              placeholder='Write a message...'
              required
              className='block w-full px-4 mb-4 outline-none border rounded py-7 resize-none bg-gray-100'
              defaultValue={""}
            />
            <button className='w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-gray-800 rounded-md hover:bg-gray-950'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SharedSection>
  );
};

export default ContactDetails;
