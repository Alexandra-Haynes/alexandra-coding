import React from "react";
import { BsCode, BsEye } from "react-icons/bs";


const ProjectCard = ({ title, description, skills, image, color }) => {
  return (
    <>
      <div
        className="border mx-auto border-black shadow-lg h-1/4 grid grid-cols-projectsCard 
      grid-rows-5 max-w-[1000px] bg-white"
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
              className={` flex items-center justify-center gap-1 border shadow-lg border-black p-1 bg-${color}`}
            >
              <BsEye />
              Live Project
            </button>
            <button className="flex items-center justify-center gap-1 shadow-lg border border-black p-1">
              <BsCode />
              Source Code
            </button>
          </div>
        </div>

        <div
          className="h-full row-span-5 overflow-hidden object-center
        flex items-center justify-center "
        >
          <img src={image} className=" max-h-[340px]" />
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
          title="ReLeaf"
          description="A mobile app where people can sell house plants or bid to buy some."
          skills={["React Native", "Expo",]}
          image="mockups2.png"
          color="underlinedText1"
        />

        <ProjectCard
          title="Code with ALoha"
          description="Code with Aloha is a volunteer group working on civic projects."
          skills={["React", "Next", "Tailwind", "Motion"]}
          image="mockups1.png"
          color="underlinedText2"
        />

        <ProjectCard
          title="My workouts"
          description="A full stack fitness website where users can search for exercise, 
          create and submit workouts and achieve badges."
          skills={["Next", "MongoDB", "Tailwind"]}
          image="mockups3.png"
          color="underlinedText3"
        />
      </div>
     
    </>
  );
};

export default Projects;
