import Link from "next/link";
import React from "react";

import { useRouter } from "next/router";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} pl-10 whitespace-nowrap text-md uppercase 
       `}
    >
      {title}
    </Link>
  );
};

const MobileCustomLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle(); //automatically close the mobile nav div when clicking on a link
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} lg:text-2xl text-black whitespace-nowrap my-4 
       uppercase hover:text-green-500 transition-all ease-in-out w-[100px]
       `}
    >
      {title}
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed t-0 w-full pt-5 px-10 flex justify-between items-center">
      <Link href="/">
        <img src="logo.png" className="h-10 cursor-pointer" alt="Company Logo" />
      </Link>
      <div className="lg:flex justify-between items-center hidden">
        <nav>
          <CustomLink
            href="#about"
            title="About"
            className="bg-underlinedText1 bg-bottom bg-underlinedBg bg-no-repeat"
          />
          <CustomLink
            href="#projects"
            title="Projects"
            className="ml-4 bg-underlinedText2 bg-bottom bg-underlinedBg bg-no-repeat"
          />
          <CustomLink
            href="/contact"
            target="_blank"
            className="ml-4 bg-underlinedText3 bg-bottom bg-underlinedBg bg-no-repeat"
            title="Contact"
          />
        </nav>
      </div>

      {/* ____________________mobile menu______________________________ */}
      <button
        className="flex flex-col justify-center items-center lg:hidden z-50"
        onClick={handleClick}
      >
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm transition-all 300ms ease-in-out 
          ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm m-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm transition-all 300ms ease-in-out 
          ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}
        ></span>
      </button>

      {isOpen ? (
        <div
          className="w-1/2 max-w-[300px] flex pt-20 pr-10 flex-col justify-end items-end fixed
      top-0 right-0  bg-white/70  backdrop-blur-md pb-36 z-30 shadow-xl "
        >
          <nav className="flex flex-col justify-center items-end mt-8">
            <MobileCustomLink
              href="#about"
              title="About"
              toggle={handleClick}
              className=" bg-underlinedText1 bg-bottom bg-underlinedBg bg-no-repeat"
            />
            <MobileCustomLink
              href="#projects"
              title="Projects"
              toggle={handleClick}
              className=" bg-underlinedText2 bg-bottom bg-underlinedBg bg-no-repeat"
            />
            <MobileCustomLink
              href="/contact"
              target="_blank"
              className=" bg-underlinedText3 bg-bottom bg-underlinedBg bg-no-repeat"
              title="Contact"
              toggle={handleClick}
            />
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default NavBar;
