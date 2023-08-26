import React from "react";
import { BsCode, BsEye } from "react-icons/bs";

const LinkButton = ({ link, color, icon, text }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-1 border shadow-lg 
      border-slate-400 p-1 px-2 hover:scale-[102%] ease-in-out 
      transition-all hover:shadow-xl ${color ? `bg-${color}` : ""}`}
    >
      {icon}
      {text}
    </a>
  );
};

const ToolsList = ({ tools }) => (
  <ul className="flex flex-row gap-2 py-6">
    {tools.map((tool, index) => (
      <li key={index}>
        <img src={`/${tool}.png`} alt={tool} width="40px" height="40px" title={tool} />
      </li>
    ))}
  </ul>
);

const ProjectCardContent = ({ title, description, tools, color, githubLink, liveLink, reversed }) => {
  return (
    <div className={`row-span-5 flex flex-col ${reversed ? "items-end" : "items-start"} justify-around p-8`}>
      <h1 className="text-md pb-2">{title}</h1>
      <div className="h-[1px] w-1/2 bg-black/10 mb-6"></div>
      <p className={`max-w-[400px] text-[.8rem] ${reversed ? "text-right" : ""}`}>{description}</p>
      <div className="flex flex-row gap-4 pt-6 whitespace-nowrap text-[.7rem]">
        <LinkButton link={liveLink} color={color} icon={<BsEye />} text="Live Project" className='whitespace-nowrap'/>
        <LinkButton link={githubLink} icon={<BsCode />} text="Source Code" />
      </div>
      <ToolsList tools={tools} />
    </div>
  );
};

const ProjectCard = (props) => {
  return (
    <div className={`border mx-auto shadow-lg h-1/4 grid grid-cols-projectsCard 
    grid-rows-5 max-w-[1000px] bg-white`}>
      <div className={`h-full w-2 row-span-5 bg-${props.color}`}></div>
      <ProjectCardContent {...props} />
      <div className="h-full row-span-5 overflow-hidden object-center flex items-center justify-center">
        <img src={props.image} className=" max-h-[340px]" />
      </div>
    </div>
  );
};

const ReversedProjectCard = (props) => {
  return (
    <div className={`border  mx-auto shadow-lg h-1/4 grid grid-cols-projectsCardReversed grid-rows-5 max-w-[1000px] bg-white`}>
      <div className="h-full row-span-5 overflow-hidden object-center flex items-center justify-center">
        <img src={props.image} className=" max-h-[340px]" />
      </div>
      <ProjectCardContent {...props} reversed />
      <div className={`h-full w-2 row-span-5 bg-${props.color}`}></div>
    </div>
  );
};


const Projects = () => {
  return (
    <section id="projects" className="">
      <div
        className="h-fit min-h-screen p-4 pt-24  flex flex-col gap-4 
      justify-center items-center bg-bgCyan pb-12 "
      >
        <div className="relative mb-4">
          <h2
            className="font-semibold text-xl uppercase absolute
         text-cyan-100/50 left-1 top-1"
          >
            Projects
          </h2>
          <h1 className="font-semibold text-xl relative uppercase">Projects</h1>

       
          
        </div>

        <ProjectCard
          title="ReLeaf"
          description="A mobile app where people can sell house plants or bid to buy some."
          tools={["react_native", "expo"]}
          image="mockups2.png"
          color="underlinedText1"
          githubLink=""
          liveLink=""
        />

        <ReversedProjectCard
          title="Code with ALoha"
          description="Code with Aloha is a volunteer group working on civic projects."
          tools={["react", "nextjs", "tailwindcss", "framer_motion"]}
          image="mockups1.png"
          color="underlinedText2"
          githubLink=""
          liveLink=""
        />

        <ProjectCard
          title="My workouts"
          description="A full stack fitness website where users can search for exercise, 
          create and submit workouts and achieve badges."
          tools={["nextjs", "nextauth", "mongodb", "tailwindcss"]}
          image="mockups3.png"
          color="underlinedText3"
          githubLink=""
          liveLink=""
        />
      </div>
    </section>
  );
};

export default Projects;
