"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import "../styles/search.css";
import { navVariants, menuVariants } from "../utils/motion";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPadding}  py-8`}
      >
        <div className=" text-white sm:px-16 px-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="search-container">
                <form action="/search" method="get">
                  <input
                    className="search"
                    id="searchleft"
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
                  <label className="button searchbutton" for="searchleft">
                    <span className="mglass">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </label>
                </form>
              </div>
            </div>

            <div>
              <p className="font-bold text-[24px]">METAVERSUS</p>
            </div>

            <div>
              <div>
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 13.005C20 13.555 19.554 14 19.005 14H10.995C10.7311 14 10.478 13.8952 10.2914 13.7086C10.1048 13.522 10 13.2689 10 13.005C10 12.7411 10.1048 12.488 10.2914 12.3014C10.478 12.1148 10.7311 12.01 10.995 12.01H19.005C19.555 12.01 20 12.455 20 13.005ZM20 7C20 7.55 19.554 7.995 19.005 7.995H0.995C0.731109 7.995 0.478028 7.89017 0.291429 7.70357C0.10483 7.51697 0 7.26389 0 7C0 6.73611 0.10483 6.48303 0.291429 6.29643C0.478028 6.10983 0.731109 6.005 0.995 6.005H19.005C19.555 6.005 20 6.451 20 7ZM19.005 1.99C19.2689 1.99 19.522 1.88517 19.7086 1.69857C19.8952 1.51197 20 1.25889 20 0.995C20 0.731109 19.8952 0.478027 19.7086 0.291429C19.522 0.10483 19.2689 7.86455e-09 19.005 0H6.995C6.86433 -3.89413e-09 6.73495 0.0257364 6.61423 0.0757399C6.49351 0.125743 6.38382 0.199034 6.29143 0.291429C6.19903 0.383823 6.12574 0.493511 6.07574 0.61423C6.02574 0.734949 6 0.864335 6 0.995C6 1.12567 6.02574 1.25505 6.07574 1.37577C6.12574 1.49649 6.19903 1.60618 6.29143 1.69857C6.38382 1.79097 6.49351 1.86426 6.61423 1.91426C6.73495 1.96426 6.86433 1.99 6.995 1.99H19.005Z"
                      fill="white"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    whileInView="show"
                    class="py-8 md:py-[40px] px-10 absolute top-0 right-0 w-full md:w-1/2"
                  >
                    <div class="p-5 bg-white border rounded shadow-sm">
                      <div class="flex items-center justify-between mb-4">
                        <div>
                          <a
                            to="/"
                            aria-label="Company"
                            title="Company"
                            class="inline-flex items-center"
                          >
                            <svg
                              class="w-8 text-deep-purple-accent-400"
                              viewBox="0 0 24 24"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              stroke="currentColor"
                              fill="none"
                            >
                              <rect x="3" y="1" width="7" height="12" />
                              <rect x="3" y="17" width="7" height="6" />
                              <rect x="14" y="1" width="7" height="6" />
                              <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                              Company
                            </span>
                          </a>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <nav>
                        <ul class="space-y-4">
                          <li>
                            <a
                              to="/"
                              aria-label="Our product"
                              title="Our product"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Product
                            </a>
                          </li>
                          <li>
                            <a
                              to="/"
                              aria-label="Our product"
                              title="Our product"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Features
                            </a>
                          </li>
                          <li>
                            <a
                              to="/"
                              aria-label="Product pricing"
                              title="Product pricing"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Pricing
                            </a>
                          </li>
                          <li>
                            <a
                              to="/"
                              aria-label="About us"
                              title="About us"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              About us
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
