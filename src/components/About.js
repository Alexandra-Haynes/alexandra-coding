import React from "react";
import AboutMeText from "./AboutMeText";
import Skills from "./Skills";
import Button from "./Button";

const About = () => {
  return (
    <>
      <section
        className="h-fit min-h-screen  w-full px-12 flex 
          flex-col-reverse md:flex-row-reverse md:px-48 md:gap-48
           border-black border-y items-center
          justify-center "
      >
        
          <Skills />
          <div
            className="  flex flex-col items-start 
            justify-between my-8"
          >
            <AboutMeText />
            <Button
              text="Download CV"
              scrollToId=""
              className="ml-5 md:mt-4 scale-75 md:scale-100"
            />
          </div>
        
        {/* <ConnectWithMe /> */}
      </section>
    </>
  );
};

export default About;

