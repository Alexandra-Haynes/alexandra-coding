import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-green-400">
      <h4 className="text-center xl:text-4xl text-3xl  pt-10 font-thin">
        Contact me
      </h4>

      <div className="flex flex-row items-center justify-center py-4">
        <AiOutlineMail fontSize="2rem" />

        <h2 className="pl-2 text-md xl:text-xl">
          Email:
          <span className="text-md xl:text-xl  px-2">
            sandamunteanua@yahoo.com
          </span>{" "}
        </h2>
      </div>

      <div className="flex items-center justify-center gap-10  px-20 py-4 text-xl text-center">
        <a
          href="https://github.com/Alexandra-Haynes"
          target="_blank"
          className="hover:scale-105"
        >
          <BsGithub fontSize={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexandra-haynes-alexslullaby/"
          className="hover:scale-105"
          target="_blank"
        >
          <FaLinkedinIn fontSize={46} />
        </a>
      </div>
      <div
        className="flex flex-col items-center gap-2 
      justify-center text-sm xl:text-xl pt-6  "
      >
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
      </div>
      <p className="text-md xl:text-xl font-semibold text-center py-6">
        Copyright © Alexandra Coding 2023
      </p>
    </footer>
  );
};

export default Footer;
