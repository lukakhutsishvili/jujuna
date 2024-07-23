import React from "react";
import { motion } from "framer-motion";

const List = ({ isOpen, onClose }) => {
  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      x: 20,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const menuItems = [
    "ჩვენ შესახებ",
    "სიახლეები",
    "ბოთლი",
    "კოქტეილი",
    "მობილური ბარი",
    "კონტაქტი",
  ];

  return (
    <ul className="list-none pt-5 md:p-0 xl:flex md:gap-10">
      {menuItems.map((item, index) => (
        <motion.li
          key={index}
          className="my-5"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          initial={isOpen ? "open" : "closed"}
          animate={isOpen ? "open" : "closed"}
          onClick={onClose} 
        >
          <a
            href={`#${item.toLowerCase()}`}
            className="no-underline text-white"
          >
            {item}
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

export default List;
