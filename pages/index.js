
import About from "@/components/About";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import React from "react";
import Contact from "./contact";


export default function Home() {
  return (
    <>
      <main>
        <HomePage />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
