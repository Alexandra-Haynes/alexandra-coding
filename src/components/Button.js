
import React from "react";

function Button({ text, onClick, scrollToId, className='' }) {

     const handleClick = () => {
       if (scrollToId) {
         const targetElement = document.getElementById(scrollToId);
         if (targetElement) {
           targetElement.scrollIntoView({ behavior: "smooth" });
         }
       }

       // If there's an additional onClick prop provided, execute it.
       if (onClick) {
         onClick();
       }
     };
  return (
    <button
      onClick={handleClick}
      className={`${className}  px-6 md:px-12 py-3 md:py-3 
      rounded-sm  whitespace-nowrap 
    cursor-pointer bg-slate-700 text-white shadow-customShadow2 uppercase
    hover:scale-[103%] hover:-translate-y-[2px] transition-all ease-in-out`}
    >
      {text}
    </button>
  );
}

export default Button;
