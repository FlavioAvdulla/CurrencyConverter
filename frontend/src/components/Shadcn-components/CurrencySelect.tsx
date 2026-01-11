import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CurrencySelect = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="flex w-[200px] bg-white border-[1px] rounded-bl-none rounded-br-none">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent className="bg-white cursor-pointer">
          <SelectItem className="cursor-pointer hover:bg-slate-100" value="usd">USD</SelectItem>
          <SelectItem className="cursor-pointer hover:bg-slate-100" value="eur">EUR</SelectItem>
          <SelectItem className="cursor-pointer hover:bg-slate-100" value="gbp">GBP</SelectItem>
          <SelectItem className="cursor-pointer hover:bg-slate-100" value="all">ALL</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CurrencySelect;
