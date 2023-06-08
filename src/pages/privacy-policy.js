import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { TextBlock } from "./terms-of-use";

const PrivacyPolicy = () => {
  return (
    <>
      <section
        className="h-screen px-6 pb-20 overflow-x-hidden 
      bg-gradient-to-tr from-gray-400 to bg-white xl:px-60 "
      >
        <NavBar />
        <h1 className="text-xl font-semibold py-6 text-center mx-auto w-2/3 2xl:text-4xl">
          {" "}
          Alexandra Coding Privacy Policy
        </h1>
        <p className="pt-10 2xl:text-xl">
          Your privacy is important to us. This Privacy Policy outlines how ALexandra Coding collects, uses, and protects any information you provide
          while using our website.
        </p>

        <TextBlock
          title="Information We Collect:"
          text="lala"
        />
        <TextBlock
          title="Links to External Websites:"
          text="lala"
        />
        <TextBlock
          title="Changes to This Privacy Policy:"
          text="lala"
        />

        <TextBlock
          title="Contact Us:"
          text="lala"
        />

        <TextBlock title="Last updated: " text="June 2023" />

        <Link
          href="/"
          className="text-green-600 font-satisfy text-lg cursor-pointer hover:text-green-400"
        >
          <div className="flex flex-row gap-2 justify-center items-center py-6 font-semibold xl:py-12">
            <IoMdArrowBack />
            <p>Back Home</p>
          </div>
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
