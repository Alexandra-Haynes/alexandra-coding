import React from "react";
import Layout from "@/components/layout";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";
import Avatar from "./Avatar";
import HeroText from "./HeroText";
import Button from "./Button";

const HomePage = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <section
          className="h-screen lg:w-[80%] w-[92%] flex flex-col items-center 
          justify-center mx-auto -translate-y-4 "
        >
          <div
            className="md:grid grid-cols-2 grid-rows-3 flex flex-col  
            md:max-h-[70%]    md:border border-black md:shadow-lg "
          >
            <Avatar />
            <div className="h-[400px] self-start  flex flex-col items-start 
            justify-between" >
              <HeroText />
              {/* <SocialIcons /> */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
