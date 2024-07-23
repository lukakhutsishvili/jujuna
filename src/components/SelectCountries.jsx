import React, { useContext, useState } from "react";
import { context } from "../App";
import { motion } from "framer-motion";
import Flag from "react-world-flags";

function SelectCountries() {
  const { country, setCountry } = useContext(context);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const countries = ["USA", "Canada", "Mexico", "France", "Italy", "Georgia"];
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleCountrySelect = (country) => {
    setCountry(country);
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
  return (
    <div className="relative">
      <div
        className="xl:mt-0 xl:h-[35px]  mt-5 p-2 xl:text-white bg-slate-700 xl:p-1 xl:rounded-lg rounded-3xl flex items-center gap-3 cursor-pointer"
        onClick={handleDropdownToggle}
      >
        {country ? (
          <Flag
            code={country.slice(0, 2)}
            style={{ width: "30px", height: "36px" }}
          />
        ) : (
          "can't acces location"
        )}
        <img
          className={`w-4 ml-auto  ${
            dropdownOpen ? "duration-500 rotate-180" : " duration-500"
          }`}
          src="/images/icons8-dropdown-50.png"
          alt="Dropdown Icon"
        />
      </div>
      <motion.div
        className="xl:absolute xl:w-[110px] xl:text-white xl:z-10 mt-2 bg-slate-800 rounded-lg shadow-lg overflow-hidden"
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
              code={country.slice(0, 3)}
              style={{ width: "30px", height: "auto", marginRight: "8px" }}
            />
            <p>{country}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default SelectCountries;
