"use client";
import React from "react";
import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  return (
    <>
      <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div className="footer-gradient" />
        <div className=" px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center">
            <p className="py-5  text-[50px] md:text-[64px] text-white font-bold">
              Enter the Metaverse
            </p>

            <button
              className="inline-flex  items-center rounded-full border-2 border-[#25618b] bg-[#25618b] px-[32px] py-[18px] text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-white focus:outline-none focus:ring active:opacity-75"
              href="/login"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/headset.svg"
                alt="headset"
                className="w-[24px] h-[24px] object-contain"
              />

              <span className="ml-2"> ENTER METAVERSE</span>
            </button>
          </div>

          <div className="py-4"></div>
          <div className=" flex flex-col md:flex-row  lg:justify-between lg:items-center pt-10 pb-2 border-t-4 border-gray-800  ">
            <p className="pb-2 md:pb-0 text-[24px] text-white font-bold">
              METAVERSUS
            </p>

            <p className="pb-2 md:pb-0 text-base text-gray-500 ">
              © 2022-2023 Metaversus. All rights reserved.
            </p>

            <div className="flex flex-row gap-4">
              {socials.map((social, index) => (
                
                  <img
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
               
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
