import React from "react";
import CurrencySelect from "../Shadcn-components/CurrencySelect";

const ConvertSection = () => {
  return (
    <div className="flex w-[85%] h-auto bg-slate-300 items-center justify-center mx-auto">
      <div className="flex w-[100%] h-[100%] bg-slate-300 justify-center">
        <CurrencySelect />
      </div>
    </div>
  );
};

export default ConvertSection;
