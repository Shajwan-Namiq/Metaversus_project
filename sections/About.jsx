"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components/CustomText";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

import React from "react";

const About = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex-col"
      >
        <div
          className={`${styles.padding}   flex-col justify-center items-center flex-shrink`}
        >
          <h2 className="text-center mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            <TypingText title="| About Metaversus" />
          </h2>

          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mb-6 text-base  text-center text-indigo-100 md:text-[32px] leading-relaxed"
          >
            <span className="font-extrabold">Metaverse</span> is a new thing in
            the future, where you can enjoy the virtual world by feeling like
            it's really real, you can feel what you feel in this metaverse
            world, because this is really the{" "}
            <span className="font-extrabold">madness of the metaverse </span>of
            today, using only <span className="font-extrabold">VR</span> devices
            you can easily explore the metaverse world you want, turn your
            dreams into reality.Let's{" "}
            <span className="font-extrabold">explore</span> the madness of the
            metaverse by scrolling down{" "}
          </motion.p>

        <div className="flex justify-center">
            <motion.img
            variants={fadeIn("up", "tween", 0.3, 1)}
            src="/arrow-down.svg"
            alt="arrow down"
            className="w-[18px] h-[28px]  object-contain mt-[28px]"
          />
        </div>
        


        </div>
      </motion.div>
    </>
  );
};

export default About;
