import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GrFormClose } from "react-icons/gr";
import { MdOutlineDone } from "react-icons/md";

const SocialIcons = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    setShowPopup(true);
    setCopied(false);
  };

  const handleClose = () => {
    setShowPopup(false);
    setCopied(false);
  };
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("alexandrahaynes1003@gmail.com")
      .then(() => {
        setCopied(true); // Show the check icon
      })
      .catch((err) => {
        alert("Failed to copy email: ", err);
      });
  };
  return (
    <div
      className="z-[99] flex justify-center items-center lg:px-12 gap-2 
    md:gap-8 py-3 text-xl "
    >
      <div
        onClick={handleEmailClick}
        className=" scale-75 md:scale-100 hover:scale-[103%] hover:-translate-y-1 transition-all ease-in-out"
      >
        <img
          src="email.png"
          alt="Email"
          // className="scale-75  md:scale-100 cursor-pointer hover:scale-[103%] hover:-translate-y-1 transition-all ease-in-out "
          style={{ minWidth: "36px", maxWidth: "46px", height: "auto" }}
        />{" "}
      </div>

    
      <a
        href="https://github.com/Alexandra-Haynes"
        target="_blank"
        rel="noopener noreferrer"
        className="scale-75 md:scale-100 hover:scale-[103%] hover:-translate-y-1 transition-all ease-in-out"
      >
        <img
          src="github.png"
          alt="GitHub"
          style={{ minWidth: "30px", maxWidth: "40px", height: "auto" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/alexandra-haynes-alexslullaby/"
        target="_blank"
        rel="noopener noreferrer"
        className="scale-75 md:scale-100 hover:scale-[103%] hover:-translate-y-1 transition-all ease-in-out "
      >
        <img
          src="linkedin.png"
          alt="LinkedIn"
          style={{ minWidth: "30px", maxWidth: "40px", height: "auto" }}
        />
      </a>
      {/* Email Pop-up */}
      {showPopup && (
        <div
          className="fixed top-0 left-0  w-full h-full bg-white/40 
        bg-opacity-50 flex justify-center items-center z-50 shadow-xl"
        >
          <div className="bg-white p-8 rounded relative ">
            <button
              className="absolute text-[.9rem] hover:scale-[120%] opacity-70 top-4 right-4"
              onClick={handleClose}
            >
              <GrFormClose />
            </button>

            <p className="text-[.9rem] pt-6"> alexandrahaynes1003@gmail.com</p>
            <div
              className="flex flex-row gap-4 items-center
            justify-start mt-8"
            >
              <button
                onClick={handleCopyEmail}
                className="text-[.7rem] px-4 py-1 rounded-full bg-gradient-yellow
               hover:scale-105 shadow-md transition-all ease-in-out"
              >
                Copy to Clipboard
              </button>
              {copied && (
                <span className="">
                  <MdOutlineDone className="h-4 text-green-500" />
                </span>
              )}
            </div>
            <img
              src="/emailIcon.png"
              alt="email icon"
              className="absolute h-[4rem] -top-6 animate-float"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialIcons;
