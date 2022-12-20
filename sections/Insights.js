"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { insights } from "../constants";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/CustomText";
import InsightCard from "../components/InsightCard";

const Insights = () => {
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
          <TypingText title="| Insight" />
        </div>

        <div className="max-w-[962px] mx-auto text-center ">
          <TitleText title={<>Insight about metaverse</>} />
        </div>

        <div className="mt-10">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
