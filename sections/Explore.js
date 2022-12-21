"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components/CustomText";
import  ExploreCard   from "../components/ExploreCard";
import {  staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";
import React, { useState } from "react";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <>
      <section  >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="lg:w-[90%] w-[100%] mx-auto flex flex-col"
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

          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[73vh] gap-5 ">
            {exploreWorlds.map((world, index) => (
             
                <ExploreCard
                  key={world.id}
                  {...world}
                  index={index}
                  active={active}
                  handleClick={setActive}
                />
             
                
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Explore;
