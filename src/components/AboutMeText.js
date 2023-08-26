import React from "react";
import Button from "./Button";
import SocialIcons from "./SocialIcons";

const AboutMeText = () => {
  return (
    <div className="px-4 pt-8  text-left opacity-90 ">
      <h2 className="font-abril text-lg opacity-10 md:text-[1.7rem] ">
        a few words
      </h2>
      <h1 className="font-abril text-[2rem] md:text-xl xl:text-2xl ">
        about me
      </h1>

      <p className="font-poppins md:text-base/6 
       text-[.8rem] w-full pb-8 xl:w-[600px]">
        <br />
        Before my dive into the digital world, I proudly served in the Romanian
        military. My tenure included graduating from a military high school and
        Land Forces Academy, earning my master's degree, and managing all the
        official social media platforms for the Romanian military alongside a
        small team.
        <br />
        <br />
        A transformative deployment to Afghanistan as a PR officer was a pivotal
        point in my life. The lessons learned and perspectives gained during
        those seven intense months led me to reevaluate my path.
        <br /> <br />
        Seeking change and fresh beginnings, I moved to the U.S. and channeled
        my creativity into digital art, working as a freelance illustrator and
        capturing stories and emotions through my art.
        <br /> <br />
        In January 2023, I embarked on a self-taught journey into web
        development. Recognizing the need for technical expertise in community
        initiatives, I volunteered with Code for Hawaii, a brigade of Code for
        America, to leverage my newfound skills on civic projects.
        <br /> <br />
        This journey of self-growth took another exciting turn when I interned
        at an innovative startup, where I had the privilege to be mentored by a
        seasoned developer with a rich 24-year tenure at Microsoft.
        {/* <br />I believe that digital marvels start with a strong team! */}
        <br /> <br />
        I'm excited to merge my unique blend of military discipline, creative
        flair, and technical acumen to create impactful digital solutions.
      </p>
    </div>
  );
};

export default AboutMeText;
