import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { context } from "../App";
import Flag from "react-world-flags";
import ChangeMode from "./ChangeMode";
import List from "./List";

const countries = ["USA", "Canada", "Mexico", "France", "Italy", "Georgia"];

const ModalMenu = () => {
  const { isOpen, setIsOpen, country, setCountry } = useContext(context);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeIn",
        staggerChildren: 0.1,
      },
    },
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCountrySelect = (country) => {
    setCountry(country);
    setDropdownOpen(false);
  };

  return (
    <div className="relative w-full">
      <motion.div
        className="fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-5 z-40 overflow-y-auto"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <ChangeMode />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-2 right-2 z-50 bg-[#613994] text-white py-2 px-4 rounded"
        >
          დახურვა
        </button>
        <List isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <div
          className="mt-5 p-4 bg-slate-700 rounded-3xl flex items-center gap-3 cursor-pointer"
          onClick={handleDropdownToggle}
        >
          {country ? (
            <Flag
              code={country.slice(0, 2)}
              style={{ width: "40px", height: "auto" }}
            />
          ) : (
            "can't access location"
          )}
          <p>{country}</p>
          <img
            className={`w-4 ml-auto  ${
              dropdownOpen ? "duration-500 rotate-180" : " duration-500"
            }`}
            src="/images/icons8-dropdown-50.png"
            alt="Dropdown Icon"
          />
        </div>
        <motion.div
          className="mt-2 bg-slate-800 rounded-lg shadow-lg overflow-hidden"
          variants={dropdownVariants}
          initial="closed"
          animate={dropdownOpen ? "open" : "closed"}
        >
          {countries.map((country) => (
            <div
              key={country}
              onClick={() => handleCountrySelect(country)}
              className="flex items-center p-2 hover:bg-slate-600 cursor-pointer"
            >
              <Flag
                code={country.slice(0, 2)}
                style={{ width: "30px", height: "auto", marginRight: "8px" }}
              />
              <p>{country}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ModalMenu;
