// import './globals.css'



// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Your header content */}
      </header>
      <main >
        {children}
      </main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default Layout;