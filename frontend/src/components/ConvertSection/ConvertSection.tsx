// import React from "react";
import { CgArrowsExchange } from "react-icons/cg";
import CurrencySelect from "../Shadcn-components/CurrencySelect";
import InputField from "../Shadcn-components/InputField";

const ConvertSection = () => {
  return (
    <div className="flex-col w-[100%] h-[100%]  bg-slate-100 items-center justify-center mx-auto">

        <div className="flex flex-col w-[100%] py-[50px] h-auto items-center justify-center bg-slate-300">
            <h1 className="font-camptonBold text-primary text-[40px]">CURRENCY CONVERTER</h1>
            <p className="font-camptonBook text-[16px]"> Convert the Currencies based on their exchange rate.</p>
        </div>

      <div className="flex w-auto h-[100%] items-center justify-center">
      {/* FROM Section */}
      <div className="flex flex-col w-auto bg-slate-500 h-[100%] justify-center items-center">
        {/* FROM currency field */}
        <div className="flex w-[100%]">
          <CurrencySelect />
        </div>
        
        {/* Input field */}
        <div className="flex w-[100%]">
          <InputField />
        </div>
      </div>
      
      {/* Exchange Icon */}
      <i className="text-[25px] text-primary mx-4">
        <CgArrowsExchange />
      </i>

      {/* TO Section */}
      <div className="flex flex-col w-auto bg-slate-500 h-[100%] justify-center items-center">
        {/* TO currency field */}
        <div className="flex w-[100%]">
          <CurrencySelect />
        </div>
        
        {/* Input field */}
        <div className="flex w-[100%]">
          <InputField />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ConvertSection;