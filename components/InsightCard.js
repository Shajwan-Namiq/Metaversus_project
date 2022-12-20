"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4 py-4"
    >
      <img
        src={imgUrl}
        alt="insight"
        className="w-full h-[250px] md:w-[270px] rounded-[32px] object-cover"
      />

      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[60px] flex flex-col max-w-[646px]">
          <h2 className="lg:text-[42px] text-[26px] text-white font-bold ">
            {title}
          </h2>
          <p className="mt-[16px] lg:text-[20px] text-[14px] text-white">
            {subtitle}
          </p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[2px] border-white">
          <img
            src="/arrow.svg"
            alt="arrow-insight"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
