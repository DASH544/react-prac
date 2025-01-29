import React from "react";
import HeroImg from "/src/assets/hero.png";
import { FaPlay } from "react-icons/fa";
import { motion, spring } from "framer-motion";
import { SlideRight } from "../../src/utils/animate.js";
const Hero = () => {
  return (
    <>
      <div className="mx-auto lg:max-w-6xl px-2 flex md:flex-row items-center flex-col min-h-[650px] relative">
        <div className="flex flex-col md:flex-row justify-center items-center  py-16 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-orange-600 uppercase font-semibold"
            >
              100% Satisfaction Guarantee
            </motion.p>
            <motion.h1
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-semibold lg:text-6xl leading-tight"
            >
              Find Your Perfect <span className="text-orange-500">Tutor</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
            >
              We help you find perfect tutor for 1-on-1 lessons. It is
              completely free and private
            </motion.p>
            <motion.div
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="flex md:gap-8 gap-2 justify-center md:justify-start"
            >
              <button className="bg-yellow-400 font-semibold text-white px-6 py-3  rounded-full ">
                Get Started
              </button>
              <button className="flex items-center justify-center">
                <span className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-300/25">
                  <FaPlay className="text-blue-500" />
                </span>
                See how it works
              </button>
            </motion.div>
          </div>
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={HeroImg}
              alt=""
              className="w-[350px] md:w-[550px] xl:w-[700px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
