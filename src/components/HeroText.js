import React from "react";
import Button from "./Button";
import SocialIcons from "./SocialIcons";

const HeroText = () => {
  return (
    <div className="col-span-2 md:px-12 px-4 pt-8  text-left">
      <h2 className="font-abril text-md opacity-10 md:text-lg xl:text-xl ">
        hi, I'm
      </h2>
      <h1 className="font-abril text-[2rem] md:text-xl xl:text-xl ">
        Alexandra Haynes
      </h1>
      {/* <h2 className="font-abril text-xl py-2 uppercase text-black/60 
      absolute bottom-24 right-0">Frontend Developer</h2> */}
      <div
        className="relative w-[80%] flex flex-row items-center justify-between gap-4
       py-2 md:py-8"
      >
        <div className=" h-[1px] md:h-[2px] w-full opacity-30 absolute my-6 bg-slate-400"></div>
        <div className="ml-[42%]">
          <SocialIcons />
        </div>
      </div>

      <p
        className="font-poppins md:text-base/6 lg:text-sm 
      w-2/3 min-w-[300px] pb-8 opacity-90"
      >
        A creative frontend developer, based in Hawaii. Checkout my projects
        section and let's get in touch.
        {/* <br />I believe that digital marvels start with a strong team! */}
      </p>
      <div className="flex flex-row items-center 
      justify-start md:mt-8 gap-1 md:gap-4">
        <Button
          text="Contact me"
          scrollToId="contact"
          className=" -ml-3 md:ml-0  scale-75 md:scale-100  
          md:hover:scale-100"
        />
        <a
        title='download resume'
          href="/resume.pdf"
          download
          className="scale-75 md:scale-100 hover:scale-[103%] 
          hover:-translate-y-1 transition-all ease-in-out"
        >
          <img
            src="resumeIcon.png"
            alt="resume"
            style={{ minWidth: "40px", maxWidth: "46px", height: "auto" }}
          />
        </a>
      </div>
    </div>
  );
};

export default HeroText;
