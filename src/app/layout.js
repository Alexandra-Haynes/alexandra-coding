import "/src/styles/globals.css";


import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-full" id='gradient-background'>
      <header>{/* Your header content */}</header>
      <main>{children}</main>
      <footer>{/* Your footer content */}</footer>
    </div>
  );
};

export default Layout;