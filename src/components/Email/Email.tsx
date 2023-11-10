import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { IFormData } from "../../interfaces";

interface IEmailProps {
  line?: string;
}

const Email = ({ line }: IEmailProps) => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    message: "",
  });

  // we need to use useRef to get the form data
  const form: React.MutableRefObject<HTMLFormElement | null> = useRef(null);

  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID as string;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID as string;
    const USER_ID = import.meta.env.VITE_PUBLIC_KEY as string;

    console.log(SERVICE_ID, TEMPLATE_ID, USER_ID);

    // emailjs contains a sendForm method that takes the service id, template id, form element, and user id
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current || "", USER_ID).then(
      (result: { text: string }) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error: { text: string }) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    // reset the form
    // e.target.reset();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={sendEmail} ref={form}>
      <div className='mb-6'>
        <h2 className='text-base text-gray-900'>{line}</h2>
      </div>

      <input
        className='w-full px-3 py-2 mb-4 outline-none border rounded bg-gray-100'
        type='text'
        name='name'
        id='name'
        value={formData.name}
        onChange={handleChanges}
        placeholder='Name'
        autoComplete='nope'
      />
      <input
        className='w-full px-3 py-2 mb-4 outline-none border rounded bg-gray-100'
        type='email'
        name='email'
        id='email'
        onChange={handleChanges}
        value={formData.email}
        placeholder='Email'
        autoComplete='nope'
      />
      <textarea
        rows={4}
        typeof='message'
        placeholder='Write a message...'
        name='message'
        value={formData.message}
        id='message'
        onChange={handleChanges}
        className='block w-full px-4 mb-4 outline-none border rounded py-7 resize-none bg-gray-100'
      />
      <button type='submit' className='btn w-full px-5 py-3 text-base'>
        Send Message
      </button>
    </form>
  );
};

export default Email;
