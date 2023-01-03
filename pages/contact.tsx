import React, { useRef } from 'react';
import Layout from '../components/Layout';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const telephoneRef = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('gmail ', 'template_gk9vjvi', e.target, 'G2lpCxE7Bm_KknnOI')
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            'We will respond to you via your email as soon as possible.'
          );
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
        }
      );
  }
  return (
    <Layout title="Contact">
         <div className="max-w-6xl mx-auto px-8 my-10 contact">
      <form className="shadow-md bg-gray-50 rounded-md p-7 my-10" onSubmit={sendEmail}>
      <h1 className="mb-4 text-2xl font-bold">Contact Us</h1>
        <div className="mb-4">
          <input
            type="text"
            // ref={nameRef}
            name="name"
            className="w-full mt-4 py-2 pl-2 text-gray-700"
            id="name"
            required
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            // ref={emailRef}
            name="email"
            className="w-full mt-4 py-2 pl-2 text-gray-700"
            id="email"
            required
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            // ref={telephoneRef}
            className="w-full mt-4 py-2 pl-2 text-gray-700"
            id="phone"
            required
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-10">
          <textarea
            className="w-full mt-4 py-2 pl-2 text-gray-700"
            name="message"
            id="message"
            required
            rows={10}
            placeholder="Message"
          />
        </div>
        <div>
          <button className="border-black text-white hover:bg-black px-7 py-3 rounded-md bg-zinc-900 text-base font-medium">Submit</button>
        </div>
      </form>
      </div>
    </Layout>
  );
}
