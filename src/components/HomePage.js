import React from 'react'
import Layout from '@/app/layout';
import NavBar from './NavBar';
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <section
          className=" h-screen w-[80%]  flex flex-col items-center justify-center
      mx-auto  "
        >
          <div
            className="grid grid-cols-2 grid-rows-3 max-h-[70%] p-2 
          border border-black shadow-lg"
          >
            <div className="h-[620px] flex flex-col items-start justify-between 
             py-20 pl-4 ">
              <div>
                <h1 className="font-abril text-4xl py-4">Alexandra Haynes</h1>
                <p className="font-poppins  font-light">
                  Afghanistan taught me the power of having a disciplined
                  teammate, art taught me thinking outside the box and the
                  impact of details, managing a small business taught me the
                  need for delivering exceptional results. If your team is in
                  search of a self-taught developer with a military background,
                  management skills, and an art portfolio, contact me! Digital
                  marvels start with a strong team!
                </p>
              </div>
              <div className="flex justify-start gap-10 py-4 text-xl">
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
            <div className=''>
              <img src="avatar.png"></img>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default HomePage
