"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { startingFeatures } from "../constants";
import { TypingText, TitleText } from "../components/CustomText";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { StartSteps } from "../components/StartSteps";

const GetStarted = () => {
  return (
    <section className={`${styles.padding} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex lg:flex-row flex-col gap-8"
      >
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-16 row-gap-10 lg:grid-cols-2">
            <motion.div
              variants={planetVariants("left")}
              className="flex justify-center items-center"
            >
              <img
                className=" w-[100%] h-[100%] object-contain"
                src="/get-started.png"
                alt="get-started"
              />
            </motion.div>

            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className=" flex-[0.75] flex justify-center flex-col"
            >
              <div className=" mx-0 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="  text-[14px]">
                    {" "}
                    <TypingText title="| How Metaversus Works" />
                  </h2>
                  <h2 className="">
                    <TitleText
                      title={<>Get started with just a few clicks</>}
                    />
                  </h2>
                </div>

                <div className="mt-[25px] flex flex-col max-w-[370px] gap-[24px]  ">
                  <div className=" ">
                    {startingFeatures.map((feature, index) => (
                      <StartSteps
                        key={feature}
                        number={`${index < 10 ? "0" : ""} ${index + 1}`}
                        text={feature}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
