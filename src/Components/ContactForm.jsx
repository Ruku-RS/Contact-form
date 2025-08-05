import React, { useRef } from "react";
import emailjs from '@emailjs/browser'

const ContactForm = () => {

const formData = useRef('');

const sendEmail = (e)=>{
    e.preventDefault();

    // Email setup
    emailjs.sendForm('service_l4n9zqb', 'template_50wvi88', formData.current, 'r0MzDsaymRwexDK_-').then(
        ()=>{
            alert('Message sent successfully!');
            formData.current.reset();
        },
        (error)=>{
            alert('Failed to send message!');
            console.error(error.text);
        }
    )
}

  return (
    <main className="bg-white p-7 w-[600px] border-1 border-zinc-300 rounded-lg shadow-lg">
      {/* Form Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl text-zinc-800 mb-2 font-bold">Get in Touch</h1>
        <p className="text-md text-zinc-500">
          We're here to help. Send us message and we'll get to you
        </p>
      </div>

      {/* Form */}
      <form autoComplete="off" ref={formData} onSubmit={sendEmail}>
        <div className="flex items-center gap-5">
          <div className="flex-1">
            <label htmlFor="user-name" className="text-zinc-800">
              Name
            </label>
            <input
              type="text"
              name="user-name"
              id="user-name"
              placeholder="Name"
              required
              className="border-1 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 mt-2 text-sm focus:outline-blue-600 rounded-lg"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="user-email" className="text-zinc-800">
              Email
            </label>
            <input
              type="email"
              name="user-email"
              id="user-email"
              placeholder="Email"
              required
              className="border-1 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 mt-2 text-sm focus:outline-blue-600 rounded-lg"
            />
          </div>
        </div>

        {/* Subject field */}
        <div className="mt-3">
          <label htmlFor="user-subject" className="text-zinc-800">
            Subject
          </label>
          <input
            type="text"
            name="user-subject"
            id="user-subject"
            placeholder="Subject"
            required
            className="border-1 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 mt-2 text-sm focus:outline-blue-600 rounded-lg"
          />
        </div>

        {/* Message Field */}
        <div className="mt-3">
          <label htmlFor="message" className="text-zinc-800">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message here...."
            rows={5}
            required
            className="border-1 border-zinc-300 w-full bg-zinc-100  p-3 mt-2 text-sm focus:outline-blue-600 rounded-lg resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="mt-8">
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg active:bg-blue-700 cursor-pointer">
            Send message
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactForm;
