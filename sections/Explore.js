"use client";

import { motion } from "framer-motion";
import { ExploreCard, TitleText, TypingText } from "../components/CustomText";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";
import React from "react";

const Explore = () => {
  return (
    <>
      <section className={`${styles.padding}`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="lg:w-[80%] w-[100%] mx-auto flex flex-col"
        >
          <h2 className="text-center mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            <TypingText title="| The World" />
          </h2>

          <h2 className="text-center font-sans tracking-tight text-white  ">
            <TitleText
              title={
                <>
                  Choose the world you want
                  <br className="md:block hidden " /> to explore
                </>
              }
            />{" "}
          </h2>
        </motion.div>
      </section>
    </>
  );
};

export default Explore;
