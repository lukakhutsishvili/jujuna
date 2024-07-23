import React, { useContext, useState } from "react";
import { context } from "../App";

function ChangeMode() {
  const { theme, setTheme } = useContext(context);

  const handleDark = () => {
    setTheme(!theme);
  };

  return (
    <>
      <div className="flex items-center">
        <svg
          enableBackground="new 0 0 512 512"
          height="30px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="30px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <g>
              <path
                className={`${!theme ? "fill-[#ebe7ef]" : "fill-[#838383]"}`}
                d="M256,144c-61.75,0-112,50.25-112,112c0,61.749,50.25,112,112,112s112-50.251,112-112    C368,194.25,317.75,144,256,144z M256,112c8.833,0,16-7.146,16-16V64c0-8.833-7.167-16-16-16c-8.854,0-16,7.167-16,16v32    C240,104.854,247.146,112,256,112z M256,400c-8.854,0-16,7.167-16,16v32c0,8.854,7.146,16,16,16c8.833,0,16-7.146,16-16v-32    C272,407.167,264.833,400,256,400z M380.417,154.167l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625    c-6.251-6.25-16.375-6.25-22.625,0l-22.625,22.625c-6.251,6.25-6.251,16.375,0,22.625    C364.042,160.416,374.166,160.416,380.417,154.167z M131.541,357.854l-22.623,22.625c-6.252,6.25-6.252,16.377,0,22.625    c6.249,6.25,16.373,6.25,22.623,0l22.625-22.625c6.251-6.291,6.251-16.375,0-22.625    C147.917,351.604,137.792,351.562,131.541,357.854z M112,256c0-8.833-7.167-16-16-16H64c-8.854,0-16,7.167-16,16    c0,8.854,7.146,16,16,16h32C104.833,272,112,264.854,112,256z M448,240h-32c-8.854,0-16,7.167-16,16c0,8.854,7.146,16,16,16h32    c8.833,0,16-7.146,16-16C464,247.167,456.833,240,448,240z M131.521,154.167c6.249,6.25,16.375,6.25,22.625,0    c6.249-6.25,6.249-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.376-6.25-22.625,0c-6.25,6.25-6.25,16.375,0,22.625    L131.521,154.167z M380.459,357.812c-6.293-6.25-16.376-6.25-22.625,0c-6.25,6.248-6.293,16.375,0,22.625l22.625,22.625    c6.249,6.248,16.374,6.248,22.625,0c6.249-6.25,6.249-16.377,0-22.625L380.459,357.812z"
              />
            </g>
          </g>
        </svg>
        <div
          onClick={handleDark}
          className={`w-12 h-6 rounded-full flex items-center p-1 cursor-pointer transition-colors duration-300 ${
            theme ? "bg-[#613994]" : "bg-slate-500"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              theme ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
        <svg
          className={`moon-svg ml-1 transition-colors duration-300 ${
            theme ? "pulse-moon" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            className={`${theme ? "stroke-[#613994]" : "stroke-[#838383]"}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </div>
    </>
  );
}

export default ChangeMode;
