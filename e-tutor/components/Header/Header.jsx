import React, { useState } from "react";
import { MdComputer, MdMenu } from "react-icons/md";
import { NavbarMenu } from "./mockData.js";
import ResponsiveMobileMenu from "./ResponsiveMobileMenu.jsx";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setMobileMenu] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mx-auto lg:max-w-6xl px-2"
      >
        <div className="flex  items-center justify-between py-6">
          <div className="flex items-center justify-between gap-2 text-2xl font-bold">
            <MdComputer className="text-3xl text-blue-500" />
            E-Tutor
          </div>
          <div className="hidden lg:block ">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <p className="cursor-pointer text-gray-600 text-sm py-1 px-2 xl:text-base xl:py-3 hover:text-blue-500 transition all duration-300 font-semibold">
                      {item.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold rounded-full px-6 cursor-pointer py-2">
              Sign In
            </button>
            <button className="font-semibold bg-blue-500 rounded-full px-6 cursor-pointer py-2">
              Register
            </button>
          </div>
          <div
            className="lg:hidden"
            onClick={() => setMobileMenu((value) => !value)}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>
      <ResponsiveMobileMenu isOpen={isOpen} />
    </>
  );
};

export default Header;
