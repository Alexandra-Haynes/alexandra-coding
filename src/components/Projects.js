import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { BsCode, BsEye } from "react-icons/bs";
import Layout from "./layout";

const ProjectCard = ({ title, description, skills, image, color }) => {
  return (
    <>
      <div
        className="border mx-auto border-black shadow-lg h-1/4 grid grid-cols-projectsCard 
      grid-rows-5 max-w-[1000px] bg-white/80"
      >
        <div className={`h-full w-2 row-span-5 bg-${color}`}></div>
        <div
          className="row-span-5 flex flex-col justify-around pl-4 py-4
        "
        >
          <h1 className="text-lg">{title}</h1>
          <p>{description}</p>
          <h2 className="font-semibold">Skills</h2>
          <ul className="flex flex-row gap-2">
            {skills.map((skill, index) => {
              {
                /* <AiFillCheckSquare /> */
              }
              <li key={index}>{skill}</li>;
            })}
          </ul>
          <div className="flex flex-row gap-4">
            <button
              className={` flex items-center justify-center gap-1 border-2 border-black p-1 bg-${color}`}
            >
              <BsEye />
              Live Project
            </button>
            <button className="flex items-center justify-center gap-1 border-2 border-black p-1">
              <BsCode />
              Source Code
            </button>
          </div>
        </div>

        <div
          className="h-full row-span-5 overflow-hidden object-center
        flex items-center justify-center bg-black/70 "
        >
          <img src={image} className=" max-h-[340px] border border-black" />
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
   
      <div className="h-screen p-4  flex flex-col gap-4 
      justify-center items-center bg-bgCyan">
        <h1 className="font-semibold text-lg">Projects</h1>
        <ProjectCard
          title="Discover Romania"
          description="A website that presents interesting facts about Romania, 
     visiting tips and a photo gallery."
          skills={["React", "JS", "CSS"]}
          image="mockup1.png"
          color="underlinedText1"
        />

        <ProjectCard
          title="Code with ALoha"
          description="Code with Aloha is a volunteer group working on civic projects."
          skills={["React", "Next", "Tailwind", "Motion"]}
          image="mockup2.png"
          color="underlinedText2"
        />

        <ProjectCard
          title="Art portfolio"
          description="I designed a website I can use as my art portfolio for my illustration freelance job."
          skills={["React", "Next", "CSS"]}
          image="mockup3.png"
          color="underlinedText3"
        />
      </div>
     
    </>
  );
};

export default Projects;
