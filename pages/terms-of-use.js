import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export const TextBlock = ({ title, text }) => {
  return (
    <div>
      <h2 className="text-md font-semibold py-3 2xl:text-2xl">{title}</h2>
      <p className="2xl:text-xl">{text}</p>
    </div>
  );
};

export default function TermsOfUse () {
  return (
    <>
      <section
        className="h-screen px-6 pb-20 overflow-x-hidden 
      bg-gradient-to-tr from-gray-300 to bg-white xl:px-60 "
      >
        <NavBar />
        <h1 className="text-xl font-semibold py-6 text-center mx-auto w-2/3 2xl:text-4xl">
          {" "}
          Alexandra Coding Terms of Use
        </h1>

        <TextBlock
          title="1. Acceptance of Terms"
          text="By using the Website, you acknowledge that you have read, understood,
          and agree to be bound by these Terms."
        />
        <TextBlock
          title="2. Use of the Website"
          text="bla"
        />
        <TextBlock
          title="3. Intellectual Property"
          text="bla"
        />

        <TextBlock
          title="4. Third-Party Links"
          text="bla"
        />

        <TextBlock
          title="5. Disclaimer of Warranties"
          text='bla'
        />
        <TextBlock
          title="6. Limitation of Liability"
          text="blabla"
        />
        <TextBlock
          title="7. Governing Law and Jurisdiction"
          text="blabla"
        />

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


