import "/src/styles/globals.css";
import React from 'react';
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";



const Layout = ({ children }) => {
  return (
    <div className="h-screen w-full bg-gradientBg bg-hugeBg animate-bgAnimation">
      <header><NavBar /></header>
      <main>{children}</main>
      <footer><Footer /></footer>
    </div>
  );
};

export default Layout;