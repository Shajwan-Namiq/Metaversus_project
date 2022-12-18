"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { newFeatures } from "../constants";
import { TitleText, TypingText } from "../components/CustomText";
import NewFeatures from "../components/NewFeatures";

import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => {
  return (
    <>
      <section className={`${styles.padding}  relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex lg:flex-row flex-col gap-8"
        >
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                className=" flex-[0.75] flex  justify-center flex-col"
              >
                <div className="  ">
                  <TypingText title="| Whats New?" />

                  <TitleText title={<>What's new about Metaversus ?</>} />
                </div>

                <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
                  {newFeatures.map((feature) => (
                    <NewFeatures key={feature.title} {...feature} />
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={planetVariants("right")}
                className="flex justify-center items-center"
              >
                <img
                  className=" w-[100%] h-[100%] object-contain"
                  src="/whats-new.png"
                  alt="get-started"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default WhatsNew;
