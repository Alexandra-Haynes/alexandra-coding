import React from "react";
import { BsCode, BsEye } from "react-icons/bs";

const ProjectCard = ({
  title,
  description,
  tools,
  image,
  color,
  githubLink,
  liveLink,
}) => {
  return (
    <>
      <div
        className={`border mx-auto shadow-lg h-1/4 
        grid  grid-cols-projectsCard        
        grid-rows-5 max-w-[1000px] bg-white`}
      >
        <div className={`h-full w-2 row-span-5 bg-${color}`}></div>
        <div
          className="row-span-5 flex flex-col justify-around pl-8 py-8
        "
        >
          <h1 className="text-lg pb-2">{title}</h1>
          <div className="h-[1px] w-1/2 bg-black/10 mb-6"></div>
          <p className="max-w-[400px] ">{description}</p>

          <div className="flex flex-row gap-4 pt-6">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={` flex items-center justify-center 
        gap-1 border shadow-lg border-slate-400 p-1 px-2
        hover:scale-[102%] ease-in-out transition-all hover:shadow-xl
         bg-${color}`}
            >
              <BsEye />
              Live Project
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center 
      gap-1 px-2 shadow-lg border border-slate-400 p-1 
      hover:scale-[102%] ease-in-out transition-all hover:shadow-xl"
            >
              <BsCode />
              Source Code
            </a>
          </div>

          <ul className="flex flex-row gap-2 py-6">
            {tools.map((tool, index) => (
              <li key={index}>
                <img
                  src={`/${tool}.png`}
                  alt={tool}
                  width="40px"
                  height="40px"
                  title={tool}
                />
              </li>
            ))}
          </ul>
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

const ReversedProjectCard = ({
  title,
  description,
  tools,
  image,
  color,
  githubLink,
  liveLink,
}) => {
  return (
    <>
      <div
        className={`border mx-auto shadow-lg h-1/4 
        grid grid-cols-projectsCardReversed
        grid-rows-5 max-w-[1000px] bg-white`}
      >
        <div
          className="h-full row-span-5 overflow-hidden object-center
        flex items-center justify-center "
        >
          <img src={image} className=" max-h-[340px]" />
        </div>
        <div
          className="row-span-5 flex flex-col items-end justify-around pr-8 py-8
        "
        >
          <h1 className="text-lg pb-2">{title}</h1>
          <div className="h-[1px] w-1/2 bg-black/10 mb-6"></div>
          <p className="max-w-[400px] text-right">{description}</p>
          <div className="flex flex-row gap-4 pt-6">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={` flex items-center justify-center 
        gap-1 border shadow-lg border-slate-400 p-1 px-2 
        hover:scale-[102%] ease-in-out transition-all hover:shadow-xl
        bg-${color}`}
            >
              <BsEye />
              Live Project
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center 
      gap-1 px-2 shadow-lg border border-slate-400 p-1
      hover:scale-[102%] ease-in-out transition-all hover:shadow-xl"
            >
              <BsCode />
              Source Code
            </a>
          </div>

          <ul className="flex flex-row gap-2 py-6">
            {tools.map((tool, index) => (
              <li key={index}>
                <img
                  src={`/${tool}.png`}
                  alt={tool}
                  width="40px"
                  height="40px"
                  title={tool}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={`h-full w-2 row-span-5 bg-${color}`}></div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <div
        className="h-fit min-h-screen p-4 pt-24 pb-6  flex flex-col gap-4 
      justify-center items-center bg-bgCyan"
      >
        <div className="relative">
          <h2
            className="font-semibold text-xl uppercase absolute
         text-white/50 left-1 top-1"
          >
            Projects
          </h2>
          <h1 className="font-semibold text-xl relative uppercase">Projects</h1>
        </div>

        <ProjectCard
          title="ReLeaf"
          description="A mobile app where people can sell house plants or bid to buy some."
          tools={["React Native", "Expo"]}
          image="mockups2.png"
          color="underlinedText1"
          githubLink=""
          liveLink=""
        />

        <ReversedProjectCard
          title="Code with ALoha"
          description="Code with Aloha is a volunteer group working on civic projects."
          tools={["React", "NextJS", "TailwindCSS", "Framer Motion"]}
          image="mockups1.png"
          color="underlinedText2"
          githubLink=""
          liveLink=""
        />

        <ProjectCard
          title="My workouts"
          description="A full stack fitness website where users can search for exercise, 
          create and submit workouts and achieve badges."
          tools={["NextJS", "NextAuth", "MongoDB", "TailwindCSS"]}
          image="mockups3.png"
          color="underlinedText3"
          githubLink=""
          liveLink=""
        />
      </div>
    </>
  );
};

export default Projects;
