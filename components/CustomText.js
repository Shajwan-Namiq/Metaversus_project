"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";
import React from "react";

export const TypingText = ({ title }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white `}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);



export const TitleText = ({ title }) => (
  <motion.p
    variants={textVariant2}
  initial="hidden"
  whileInView="show"
    className={` mt-0 md:mt-[8px] font-bold text-[40px]  md:text-[64px] text-white `}
  >
    {title}
  </motion.p>
);
