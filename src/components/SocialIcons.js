import React from 'react'

const SocialIcons = () => {
  return (
    <div
      className=" flex justify-center items-center lg:px-12 gap-2 
    md:gap-8 py-3 text-xl "
    >
      <img
        src="email.png"
        alt="Email"
        className="scale-75  md:scale-100 cursor-pointer hover:scale-[103%] hover:-translate-y-1 transition-all ease-in-out "
        style={{ minWidth: "30px", maxWidth: "40px", height: "auto" }}
      />{" "}
      <a
        href="https://github.com/Alexandra-Haynes"
        target="_blank"
        rel="noopener noreferrer"
        className="scale-75 md:scale-100 hover:scale-[103%] hover:-translate-y-1 transition-all ease-in-out"
      >
        <img
          src="github.png"
          alt="GitHub"
          style={{ minWidth: "30px", maxWidth: "40px", height: "auto" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/alexandra-haynes-alexslullaby/"
        target="_blank"
        rel="noopener noreferrer"
        className="scale-75 md:scale-100 hover:scale-[103%] hover:-translate-y-1 transition-all ease-in-out "
      >
        <img
          src="linkedin.png"
          alt="LinkedIn"
          style={{ minWidth: "30px", maxWidth: "40px", height: "auto" }}
        />
      </a>
    </div>
  );
}

export default SocialIcons
