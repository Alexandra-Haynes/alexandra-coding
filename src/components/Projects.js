import React from "react";
import Image from "next/image";
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
    <div
      className={`row-span-5 flex flex-col ${
        reversed ? "items-end" : "items-start"
      } justify-around p-8`}
    >
      <h1 className="text-md pb-2">{title}</h1>
      <div className="h-[1px] w-1/2 bg-black/10 mb-2"></div>
      <div className="flex flex-row gap-4 pt-2 pb-6 whitespace-nowrap text-[.7rem]">
        <LinkButton
          link={liveLink}
          color={color}
          icon={<BsEye />}
          text="Live Project"
          className="whitespace-nowrap"
        />
        <LinkButton link={githubLink} icon={<BsCode />} text="Source Code" />
      </div>

      <p
        className={`max-w-[800px] text-justify text-[.8rem] ${reversed ? "text-right" : ""}`}
      >
        {description}
      </p>
      <ToolsList tools={tools} />
    </div>
  );
};

const ProjectCard = (props) => {
  return (
    <div
      className={`border mx-auto shadow-lg h-1/4 lg:grid grid-cols-projectsCard 
    grid-rows-5 lg:w-[80%] w-[92%] bg-white`}
    >
      <div className={`h-full w-2 row-span-5 bg-${props.color}`}></div>

      <ProjectCardContent {...props} />
      <div
        className="h-full row-span-5 overflow-hidden object-center 
      flex items-center justify-center"
      >
        <img src={props.image} className="max-h-[300px] md:max-h-[440px]" />
      </div>
    </div>
  );
};

const ReversedProjectCard = (props) => {
  return (
    <div
      className={`border  mx-auto shadow-lg h-1/4 lg:grid 
    grid-cols-projectsCardReversed grid-rows-5 lg:w-[80%] w-[92%] bg-white`}
    >
      <div
        className="h-full row-span-5 overflow-hidden object-center 
      flex items-center justify-center"
      >
        <img src={props.image} className="max-h-[300px] md:max-h-[440px]" />
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
          title="Full Stack Fitness Platform"
          description={
            <div>
              <div className="flex flex-row items-center justify-start gap-3">
                <img
                  src="./features.png"
                  width={32}
                  height={32}
                  alt="features"
                />
                <p>
                  Developed a comprehensive fitness web application with the
                  following features:
                </p>
              </div>

              <ul
                className="mt-2 flex flex-col items-start justify-center
               gap-2"
              >
                <li>
                  <strong>Exercise Database:</strong> Enabled users to dive deep
                  into an expansive collection of over 800 individual exercises.
                  Features include:
                  <ul className="flex flex-col items-start gap-3 pl-4 py-2">
                    <li>
                      - Advanced search capabilities allowing users to filter
                      exercises by category, difficulty level, targeted muscle,
                      and required equipment;
                    </li>
                    <li>
                      - Comprehensive exercise overviews featuring video
                      tutorials and detailed, step-by-step instructions;
                    </li>
                    <li>
                      - Personalized experience where users can save exercises
                      of interest and later access them in their account
                      section, enhancing user engagement.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Workout Creation & Submission:</strong> Implemented a
                  user-friendly interface allowing individuals to create, save,
                  and submit personalized workout routines.
                </li>
                <li>
                  <strong>Achievement Badges:</strong> Incorporated a
                  gamification aspect by awarding users with badges upon the
                  completion of specific fitness milestones, fostering
                  motivation and consistent platform engagement.
                </li>
                <li>
                  <strong>Health Metrics Calculator:</strong> Introduced
                  features that allow users to compute vital health parameters,
                  including their ideal body weight, body mass index, body fat
                  calculator and basal metabolic rate ensuring they remain
                  informed and can set realistic fitness goals.
                </li>
                <li>
                  <strong>User Account Management:</strong> Designed a secure
                  and intuitive account section, facilitating users to
                  seamlessly manage their profiles, workout history, and earned
                  badges.
                </li>
              </ul>
              <div className="flex flex-row items-center justify-start  gap-3">
                <img src="/tools.png" width={28} height={28} alt="features" />
                <p className="my-4">
                  Developed with a robust tech stack including:
                </p>
              </div>

              <ul className="mt-2 flex flex-col items-start justify-center gap-2">
                <li>
                  <strong>Frontend: </strong>React, NextJS 13, and Tailwind CSS
                  for a responsive and dynamic user experience.
                </li>
                <li>
                  <strong>Backend: </strong>Node.js, enhanced with Mongoose for
                  seamless MongoDB integrations.
                </li>
                <li>
                  <strong>Database: </strong>MongoDB for scalable and reliable
                  data management.
                </li>
                <li>
                  <strong>Authentication: </strong> Implemented NextAuth and JWT
                  to ensure user data security.
                </li>
                <li>
                  <strong>Third-Party Integrations: </strong>Utilized RapidAPI
                  for health calculators, enhancing the platform's
                  functionality.
                </li>
              </ul>
            </div>
          }
          tools={["nextjs", "nextauth", "mongodb", "tailwind"]}
          image="mockups3.png"
          color="underlinedText3"
          githubLink="https://github.com/Alexandra-Haynes/fitness-app"
          liveLink="https://my-workouts-hexieyj9b-alexandra-haynes.vercel.app/"
        />

        <ReversedProjectCard
          title="Code with Aloha"
          description={
            <div>
              <div className="flex flex-row items-center text-justify gap-3">
                <img
                  src="./features.png"
                  width={32}
                  height={32}
                  alt="features"
                />
                <p>
                  Engineered a vibrant website for "Code with Aloha", a group of
                  civic-minded tech enthusiasts. As a proud member of this team,
                  I helped showcase our collective dedication towards community
                  improvement through technology.
                </p>
              </div>

              <ul className="mt-2 text-left flex flex-col items-start justify-center gap-2">
                <li>
                  <strong>About Us:</strong> Elegantly presents the team, their
                  history since 2009, and their core focus: meeting new
                  individuals, making impactful differences, and fostering
                  experience.
                </li>
                <li>
                  <strong>Events & Announcements:</strong> A dedicated section
                  about what to expect at a meeting, showcasing Meetup events,
                  and guiding visitors on what to anticipate during such
                  gatherings.
                </li>
                <li>
                  <strong>Project Portfolios:</strong> Insightfully categorized
                  into active and historic projects, each with a comprehensive
                  description and pertinent links, providing a detailed journey
                  of the team's contributions over time.
                </li>
                <li>
                  <strong>Client Engagements:</strong> Displaying the diverse
                  clientele and offering a structured channel for potential
                  clients to establish contact.
                </li>
                <li>
                  <strong>Volunteer Sign-Up:</strong> An intuitive section
                  providing potential volunteers with direct links to upcoming
                  Meetup events and a dedicated contact email, inviting them to
                  join and become an integral part of our evolving story.
                </li>
              </ul>
              <div className="text-left flex flex-row items-center justify-start gap-4">
                <img src="/tools.png" width={28} height={28} alt="features" />
                <p className="my-4">
                  Utilized NextJS and React for a dynamic and responsive user
                  interface, styled to perfection with Tailwind CSS.
                  Incorporated framer-motion for smooth animations and
                  transitions.
                </p>
              </div>
            </div>
          }
          tools={["react", "nextjs", "tailwind", "framer_motion"]}
          image="mockups1.png"
          color="underlinedText2"
          githubLink="https://github.com/CodeWithAloha/CWAWebsite"
          liveLink="https://code-with-aloha.vercel.app/"
        />
        <ProjectCard
          title="Bayze mobile"
          description={
            <div>
              <div className="flex flex-row items-center text-justify gap-3">
                <img
                  src="./features.png"
                  width={32}
                  height={32}
                  alt="features"
                />
                <p>
                  Crafted a React Native frontend mobile app for Bayze Inc.—a
                  data and AI startup focused on gamification and loyalty
                  programs. The app serves as a social media platform for Bayze
                  members, enabling them to:
                </p>
              </div>

              <ul className="mt-2 flex flex-col items-start justify-center gap-2">
                <li>
                  <strong>Connect & Share:</strong> Engage with friends, view
                  their recent achievements, and share personal badges.
                </li>
                <li>
                  <strong>Badge Overview:</strong> Explore badges earned across
                  various apps integrated with Bayze.
                </li>
                <li>
                  <strong>Notifications:</strong> Stay updated with earned
                  badges, messages, apps udates, competitions, challenges and
                  peer comparisons.
                </li>
                <li>
                  <strong>Post Exploration:</strong> Browse and search for posts
                  within the platform, see what your friends are doing and what
                  your favorite companies are posting.
                </li>
                <li>
                  <strong>Profile Management:</strong> A dedicated section for
                  users to manage their account details and view achievements.
                </li>
              </ul>
              <p className="pt-4">
                {" "}
                It's worth noting that while the app provides a comprehensive
                frontend experience, backend integrations and user
                authentication are yet to be established, making some
                functionalities frontend-only.
              </p>
            </div>
          }
          tools={["react_native", "expo"]}
          image="mockups4.png"
          color="underlinedText1"
          githubLink="https://github.com/Alexandra-Haynes/bayze-mobile"
          liveLink=""
        />
      </div>
    </section>
  );
};

export default Projects;
