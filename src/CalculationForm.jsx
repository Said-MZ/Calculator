import React from "react";
import buttons from "./data";
import Button from "./button";
const CalculationForm = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-[90vw] h-[70vh] sm:w-[26rem] sm:h-[32rem] mx-auto">
      {buttons.map(({ id, label, color }) => {
        return <Button key={id} label={label} color={color} />;
      })}
    </div>
  );
};

export default CalculationForm;
