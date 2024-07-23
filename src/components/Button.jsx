import React from "react";

function Button({ bgColor, index }) {
  return (
    <button
      className={`${
        index % 2 == 1 ? "bg-[#613994]" : "bg-black"
      } font-arialgeo w-[130px] h-[32px] rounded-2xl ${bgColor}  text-white`}
    >
      გაიგე მეტი
    </button>
  );
}

export default Button;
