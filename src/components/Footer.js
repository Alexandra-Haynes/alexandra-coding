import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import {SiLeetcode} from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="w-full bg-black opacity-[85%] text-white ">
      <div className="">
        <div className="h-1 grid grid-cols-3 ">
          <div className="bg-underlinedText1"></div>
          <div className="bg-underlinedText2"></div>
          <div className="bg-underlinedText3"></div>
        </div>
        <h4 className="text-center py-10 font-thin">Connect with me</h4>

        <div
          className="flex items-center justify-center gap-10  
      px-20  text-center"
        >
          <a
            href="https://github.com/Alexandra-Haynes"
            target="_blank"
            className="hover:scale-105"
          >
            <BsGithub fontSize={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandra-haynes-alexslullaby/"
            className="hover:scale-105"
            target="_blank"
          >
            <FaLinkedinIn fontSize={36} />
          </a>
          <a
            href="https://www.leetcode.com/alexandrahaynes"
            className="hover:scale-105"
            target="_blank"
          >
            <SiLeetcode fontSize={32} />
          </a>
        </div>
        <div
          className="flex flex-col items-center gap-2 
      justify-center pt-6 "
        >
          {/* <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link> */}
        </div>
        <div className="flex flex-row items-center justify-center py-4">
          <AiOutlineMail fontSize="1.5rem" className="opacity-75" />

          <h2 className="pl-2">
            <span className="px-2 font-thin">alexandrahaynes1003@gmail.com</span>{" "}
          </h2>
        </div>
        <div className="h-[1px] w-1/2 mx-auto bg-white/20"></div>
        <p className="text-center text-[.7rem] py-6">
          Copyright © Alexandra Coding 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
