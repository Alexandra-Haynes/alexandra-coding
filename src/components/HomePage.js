import React from 'react'
import Layout from '@/app/layout';
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const HomePage = () => {
  return (
    <>
      <Layout>
        <section
          className=" h-screen lg:w-[80%]  w-[92%] flex flex-col items-center justify-center
      mx-auto -translate-y-4 "
        >
          <div
            className="md:grid grid-cols-2 grid-rows-3 flex flex-col-reverse  max-h-[90%] 
            md:max-h-[70%] p-1  
          border border-black shadow-lg"
          >
            <div
              className="h-[600px] flex flex-col items-start xl:justify-between 
             xl:py-20 pl-3 "
            >
              <div className="col-span-2">
                <h1 className="font-abril text-xl py-3">Alexandra Haynes</h1>
                <p className="font-poppins text-base/6 text-sm">
                  Afghanistan taught me the power of having a {}
                  <span className="bg-underlinedText1 bg-bottom bg-underlinedBg bg-no-repeat">
                    disciplined teammate
                  </span>
                  , art taught me{" "}
                  <span className="bg-underlinedText2  bg-bottom bg-underlinedBg bg-no-repeat">
                    thinking outside the box
                  </span>{" "}
                  and the impact of details, managing a small business taught me
                  the need for delivering{" "}
                  <span className="bg-underlinedText3 bg-bottom bg-underlinedBg bg-no-repeat">
                    exceptional results
                  </span>{" "}
                  . If your team is in search of a self-taught developer with a
                  military background, management skills, and an art portfolio,{" "}
                  <span className="p-2  hover:font-semibold underline underline-offset-4
                  cursor-pointer"> contact me! </span> Digital marvels start with a strong team!
                </p>
              </div>
              <div className="flex items-center gap-10 py-3 text-xl">
                <AiOutlineMail className='cursor-pointer hover:scale-105 text-[3rem]'/>
                <a
                  href="https://github.com/Alexandra-Haynes"
                  target="_blank"
                  className="hover:scale-105"
                >
                  <BsGithub fontSize={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/alexandra-haynes-alexslullaby/"
                  className="hover:scale-105"
                  target="_blank"
                >
                  <FaLinkedinIn fontSize={46} />
                </a>
              </div>
            </div>
            <div className="row-span-3  overflow-hidden">
              <img src="avatar.png" className="w-full"></img>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default HomePage
