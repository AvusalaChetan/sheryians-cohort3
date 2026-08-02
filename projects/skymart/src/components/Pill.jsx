import { X } from "lucide-react";
import React from "react";

const Pill = ({ value, onClear }) => {
  return (
    <div className="mt-3  flex flex-wrap gap-1 border-t border-white pt-3">
      <span className="flex border items-center gap-1.5 rounded-full bg-[#3A4A1A] px-3 py-1 text-xs font-medium text-[#B4D14A]">
        {value}
        <X size={12} className="cursor-pointer" onClick={onClear} />
      </span>
    </div>
  );
};

export default Pill;
