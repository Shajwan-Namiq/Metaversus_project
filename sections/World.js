"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components/CustomText";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => {
  return (
    <section className={`${styles.padding}  relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col"
      >
        <div className="flex justify-center items-center">
          <TypingText title="| People on the World" />
        </div>

        <div className="max-w-[962px] mx-auto text-center ">
          <TitleText
            title={
              <>
                Track friends around you and invite them to play together in the
                same world
              </>
            }
          />
        </div>
      </motion.div>
    </section>
  );
};

export default World;
