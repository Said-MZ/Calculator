import React from "react";

const Button = ({ label, color }) => {
  const btnStyles = `${label === "0" ? "col-span-2" : ""} ${
    color === "grey-light" && "text-black"
  } bg-[--${color}] rounded-full ${
    color === "grey-light" ? "text-3xl sm:text-4xl" : "text-3xl sm:text-5xl "
  } font-medium hover:filter hover:brightness-${
    color === "grey-dark" ? "150" : "125"
  } transition-all hover:saturate-50 ${label !== "0' && aspect-square"}  ${
    label !== "0" ? "w-[20vw] h-[10vh]" : "h-[10vh]"
  } flex justify-center items-center sm:w-auto sm:h-auto`;

  console.log(color);
  return <button className={btnStyles}> {label} </button>;
};

export default Button;
