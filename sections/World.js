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

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </div>

          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-02.png" alt="people" className="w-full h-full" />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </div>

          <div className="absolute top-10 right-[20%] w-[150px] h-[100px] lg:w-[196px] lg:h-[150px] p-[6px] rounded-3xl bg-[#5D6680]">
            <img
              src="map-pic1.png"
              alt="people"
              className="w-full h-full relative"
            />
            <div className="absolute  flex gap-2 items-center left-[20px]  bottom-[50px]">
              <img src="people-03.png" alt="people" className="w-10 h-10 " />
              <h2 className=" text-xs text-white ">+ 264 has joined</h2>
            </div>
            <p className="absolute bottom-[20px] left-[20px] text-white text-sm lg:text-lg font-bold">
              Hawkins Labs
            </p>
          </div>

          <div className="absolute bottom-10 left-[20%] w-[150px] h-[100px] lg:w-[196px] lg:h-[150px] p-[6px] rounded-3xl bg-[#5D6680]">
            <img
              src="map-pic2.png"
              alt="people"
              className="w-full h-full relative rounded-3xl"
            />
            <div className="absolute  flex gap-2 items-center left-[20px]  bottom-[50px]">
              <img src="people-03.png" alt="people" className="w-10 h-10 " />
              <h2 className=" text-xs text-white ">+ 264 has joined</h2>
            </div>
            <p className="absolute bottom-[20px] left-[20px] text-white  text-sm lg:text-lg font-bold">
              The Upside Down
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
