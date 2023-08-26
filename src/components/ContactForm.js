"use client";
import React from "react";

import { CiUser } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { MdAlternateEmail, MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsSend } from "react-icons/bs";

const ContactForm = () => {
  return (
    <section id="contact">
      <div
        className="flex flex-col items-center justify-center gap-2 h-[90%] w-full 
        bg-black/[78%] pb-24 pt-24 text-white/90 "
      >
        <h1 className="uppercase text-md ">Contact form</h1>
        <form
          action="https://formsubmit.co/sandamunteanua@yahoo.com"
          method="POST"
          className="flex flex-col items-center justify-center 
         py-12 min-w-[500px] gap-2"
        >
          {/* _thank you page_ */}
          {/* <input
            type="hidden"
            name="_next"
            value="http://http://localhost:3000/thankyou"
          /> */}
          {/* <input
            type="hidden"
            name="_subject"
            value="New alexandracoding.com"
          ></input> */}

          <div
            className="flex flex-row items-center justify-center 
          mb-[30px] relative min-w-[300px]"
          >
            <input
              type="text"
              required
              id="name"
              name="name"
              className="h-8 pl-4"
            ></input>
            <label
              htmlFor="name"
              className="flex flex-row items-center justify-center gap-1"
            >
              <CiUser />
              Name
            </label>
          </div>

          <div
            className="flex flex-row items-center justify-center mb-[30px]
          min-w-[300px] relative"
          >
            <input
              type="text"
              name="number"
              required
              id="number"
              className="h-8 pl-4"
            ></input>
            <label
              htmlFor="number"
              className="flex flex-row items-center justify-center gap-1"
            >
              <AiOutlinePhone />
              Phone no
            </label>
          </div>

          <div
            className="flex flex-row items-center justify-center 
           relative min-w-[300px] mb-[30px]"
          >
            <input
              type="email"
              required
              id="email"
              name="email"
              className="h-8 pl-4"
            ></input>
            <label
              htmlFor="email"
              className="flex flex-row items-center justify-center gap-1"
            >
              <MdAlternateEmail />
              Email
            </label>
          </div>
          <div
            className="mb-[30px] flex flex-row items-center justify-center 
           relative min-w-[300px]"
          >
            <textarea id="message" rows="8" cols="28" required className="pl-4 pt-2"></textarea>
            <label
              htmlFor="message"
              className="flex flex-row items-start justify-center gap-1"
            >
              <MdOutlineMarkEmailUnread className="text-md" />
              Your message
            </label>
          </div>
          <button
            type="submit"
            className="border border-white/20 bg-white/10 rounded-sm
             flex flex-row items-center hover:bg-white/20 transition-all ease-in-out
            justify-center gap-2 p-4 mt-6 w-[200px] cursor-pointer shadow-lg hover:shadow-xl"
          >
            Submit
            <BsSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
