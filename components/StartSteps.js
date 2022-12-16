import React from "react";

export const StartSteps = ({ number, text }) => {
  return (
    <div className="flex py-4">
      <div class="text-white text-xl font-bold w-16 h-16 inline-flex items-center justify-center rounded-3xl bg-[#bfbcbc17]  flex-shrink-0">
        {" "}
        {number}
      </div>
      <div class="pl-6">
        <p className="flex text-[18px] text-[#b0b0b0]">{text} </p>
      </div>
    </div>
  );
};
