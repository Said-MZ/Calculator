import React from "react";
import { useGlobalContext } from "./context";

const Button = ({ label, color }) => {
  const { handleClick, clear } = useGlobalContext();
  const btnStyles = `${label === 0 ? "col-span-2" : ""} ${
    color === "grey-light" && "text-black"
  } ${color} rounded-full ${
    color === "grey-light" ? "text-3xl sm:text-4xl" : "text-3xl sm:text-5xl "
  } font-medium hover:filter hover:brightness-${
    color === "grey-dark" ? "150" : "125"
  } transition-all hover:saturate-50 ${label !== "0' && aspect-square"}  ${
    label !== 0 ? "w-[20vw] h-[10vh]" : "h-[10vh]"
  } flex justify-center items-center sm:w-auto sm:h-auto`;

  return (
    <button
      className={btnStyles}
      onClick={() => {
        handleClick(label === "AC" ? clear : label);
      }}
    >
      {label === "AC" ? clear : label}
    </button>
  );
};

export default Button;
