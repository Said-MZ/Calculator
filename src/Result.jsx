import React from "react";
import { useGlobalContext } from "./context";

const Result = () => {
  const { operation } = useGlobalContext();
  return (
    <div className="w-[90vw] sm:w-[26rem]  mx-auto flex justify-end py-8 text-7xl">
      <h1>{operation}</h1>
    </div>
  );
};

export default Result;
