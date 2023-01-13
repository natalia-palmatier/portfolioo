import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
        'SERVICEID', 
        'TEMPLATEID', 
        form.current, 
        'PUBLICKEY'
        )
        .then(
            (result) => {
                console.log(result.text);
                console.log("message sent")
         }, 
         (error) => {
          console.log(error.text);
      }
    );
    e.target.reset()
  };


  return (
    <section id="contact" className="relative">
    <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-red-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <img src="./contact-me.gif" alt="animated gif of woman on computer"/>
        
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
          Contact Me
        </h2>
        <p className="leading-relaxed mb-5">
        Don't hesitate to reach out, I would be happy to hear from you!
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="w-full bg-red-200 rounded border border-gray-700 focus:border-purple-200 focus:ring-2 focus:ring-purple-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          {/* <label htmlFor="email" className="leading-7 text-sm text-black">
            Email
          </label> */}
          <input
            type="hidden"
            value="nataliapalmatier@protonmail.com"
            id="email"
            name="user_email"
            className="w-full bg-red-200 rounded border border-gray-700 focus:border-purple-200 focus:ring-2 focus:ring-purple-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="email"
            className="leading-7 text-sm text-black">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="their_email"
            className="w-full bg-red-200 rounded border border-gray-700 focus:border-purple-200 focus:ring-2 focus:ring-purple-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-black">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-red-200 rounded border border-gray-700 focus:border-purple-200 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            // onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        

        <button
          href="#about"
          type="submit"
          value="Send"
          className="text-black bg-purple-300 border-0 py-2 px-6 focus:outline-none hover:bg-purple-200 rounded text-lg">
          Submit
        </button>
      </form>
    </div>
  </section>
  );
};

export default Contact;