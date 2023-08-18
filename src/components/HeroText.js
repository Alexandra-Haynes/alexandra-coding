import React from "react";
import Button from "./Button";
import SocialIcons from "./SocialIcons";

const HeroText = () => {
  return (
    <div className="col-span-2 md:px-12 px-4 pt-8  text-left">
      <h2 className="font-abril text-lg opacity-10 md:text-xl xl:text-xl ">
        Hi, I'm
      </h2>
      <h1 className="font-abril text-[2rem] md:text-xl xl:text-2xl ">
        Alexandra Haynes
      </h1>
      {/* <h2 className="font-abril text-xl py-2 uppercase text-black/60 
      absolute bottom-24 right-0">Frontend Developer</h2> */}
      <div className="relative w-[80%] flex flex-row items-center justify-between gap-4
       py-2 md:py-8">
        <div className=" h-[1px] md:h-[2px] w-full opacity-30 absolute my-6 bg-slate-400"></div>
        <div className="ml-[42%]">
          <SocialIcons />
        </div>
      </div>

      <p className="font-poppins md:text-base/6 lg:text-md w-2/3 pb-8">
        A creative frontend developer with roots in art, based in Hawaii.
        Checkout my projects section and let's get in touch.
        {/* <br />I believe that digital marvels start with a strong team! */}
      </p>
      <Button
        text="Contact me"
        scrollToId="contact"
        className=" -ml-3 md:ml-0 md:mt-8 scale-75 md:scale-100"
      />
    </div>
  );
};

export default HeroText;
