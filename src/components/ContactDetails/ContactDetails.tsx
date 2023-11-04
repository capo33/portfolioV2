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
            <button className='inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 '>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SharedSection>
  );
};

export default ContactDetails;
