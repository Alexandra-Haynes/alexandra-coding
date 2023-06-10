
import About from "@/components/About";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";
import React from "react";


export default function Home() {
  return (
    <> 
      <main>
        <HomePage />
        <About />
        <Projects />
      </main>
     
    </>
  );
}
