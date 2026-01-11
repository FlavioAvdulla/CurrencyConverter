import React from "react";
import { Input } from "@/components/ui/input";

const InputField = () => {
  return (
    <div>
      <Input className="flex w-[200px] bg-white rounded-tl-none rounded-tr-none border-t-none" type="text" placeholder="Value" />
    </div>
  );
};

export default InputField;
