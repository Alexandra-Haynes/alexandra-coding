import React from 'react'

import {CiUser} from 'react-icons/ci'
import {AiOutlinePhone} from 'react-icons/ai'
import { MdAlternateEmail, MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsSend } from "react-icons/bs";

const ContactForm = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center h-[90%] w-full 
        bg-black/[78%] py-12 text-white"
      >
        <h1>Contact form</h1>
        <form
          className="flex flex-col items-center justify-center w-[90%] 
         py-12"
        >
          <div className="flex flex-row items-center justify-center mb-[30px] relative">
            <input type="text" required id="name"></input>
            <label
              htmlFor="name"
              className="flex flex-row items-center justify-center gap-1"
            >
              <CiUser />
              Name
            </label>
          </div>
          <div className="mb-[30px] relative">
            <input type="text" id="number"></input>
            <label
              htmlFor="number"
              className="flex flex-row items-center justify-center gap-1"
            >
              <AiOutlinePhone />
              Phone no
            </label>
          </div>
          <div className="mb-[30px] relative">
            <input type="email" required id="email"></input>
            <label
              htmlFor="email"
              className="flex flex-row items-center justify-center gap-1"
            >
              <MdAlternateEmail />
              Email
            </label>
          </div>
          <div className="mb-[30px] relative">
            <textarea id="message" rows="8" cols='28' required></textarea>
            <label
              htmlFor="message"
              className="flex flex-row items-start justify-center gap-1"
            >
              <MdOutlineMarkEmailUnread className='text-lg'/>
              Your message
            </label>
          </div>
          <button
            type="submit"
            className="border border-white flex flex-row items-center justify-center gap-1 p-4 mt-6 w-[70%] cursor-pointer"
          >
            Submit
            <BsSend />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm
