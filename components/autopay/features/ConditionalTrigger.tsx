"use client";
import { cn } from "@/lib/utils/cn";
import React, { useState } from "react";

const ConditionalTriggers = () => {
  const [selectedValue, setSelectedValue] = useState("Time");
  return (
    <div className="bg-[#373A40] rounded-[16px] md:w-[100%] md:flex-row flex-col w-full lg:w-[70%] md:my-10 mt-8 p-[8px] mx-auto gap-[8px] flex items-center justify-between">
      {["Time", "Token Pair Price", "Gas Price Estimate", "ABI Functions"].map(
        (item, index) => (
          <button
            key={index}
            onClick={() => setSelectedValue(item)}
            className={cn(
              "md:w-[30%] bg-[#262229] w-full text-sm leading-[17.64px]  py-2.5 rounded-[12px]",
              selectedValue === item
                ? "bg-[#1867FD] text-white"
                : "text-[#A0A0A0]"
            )}
          >
            {item}
          </button>
        )
      )}
    </div>
  );
};

export default ConditionalTriggers;
