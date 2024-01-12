import React from "react";
import { useGlobalContext } from "./context";

const Result = () => {
  const { operation } = useGlobalContext();
  const h1Styles = `
   ${operation.length > 22 && "text-3xl"}
  ${(operation.length > 16) & (operation.length < 23) && "text-4xl"} ${
    (operation.length > 10) & (operation.length < 17) && "text-5xl"
  }`;
  return (
    <div className="w-[90vw] sm:w-[26rem]  mx-auto flex justify-end py-8 text-7xl">
      <h1 className={h1Styles}>{operation}</h1>
    </div>
  );
};

export default Result;
