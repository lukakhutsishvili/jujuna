import React, { useContext } from "react";
import { context } from "../../App";
import List from "../List";
import SelectCountries from "../SelectCountries";
import ChangeMode from "../ChangeMode";

function Header() {
  const { isOpen, setIsOpen } = useContext(context);

  return (
    <div className="bg-black xl:pl-[64px] xl:pr-[64px] px-5 pt-10 pb-[10px] h-[96px] xl:h-[67px] xl:p-0">
      <div className="flex xl:justify-between justify-between items-center ">
        <div className="w-[45px] h-[45px] bg-backgroundColor-purpleStart rounded-[50%] flex items-center justify-center">
          <p className="text-3xl font-tommaso text-black">ჟ</p>
        </div>
        <button
          onMouseEnter={() => setIsOpen(!isOpen)}
          className="text-white text-4xl font-tommaso tracking-wide mr-10 ml-auto xl:hidden"
        >
          მენიუ
        </button>
        <div className="hidden xl:block">
          <List isOpen={true} onClose={() => {}} />
        </div>
        <div className="hidden xl:block">
          <SelectCountries />
        </div>
        <div className="hidden xl:block">
          <ChangeMode />
        </div>
      </div>
    </div>
  );
}

export default Header;
