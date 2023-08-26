import React from "react";
import AboutMeText from "./AboutMeText";
import Skills from "./Skills";
import Button from "./Button";

const About = () => {
  return (
    <>
      <section
        id='about'
        className="h-fit min-h-screen  w-full px-12 lg:px-48 flex 
          flex-col xl:flex-row  xl:gap-52
           border-black border-y items-center 
          justify-center pb-12"
      >
        <div
          className="  flex flex-col items-start
            justify-between my-8"
        >
          <AboutMeText />
          <Button
            text="Download CV"
            scrollToId=""
            className="md:ml-5 md:mt-4 scale-75 md:scale-100"
          />
        </div>
        <Skills />

        {/* <ConnectWithMe /> */}
      </section>
    </>
  );
};

export default About;

