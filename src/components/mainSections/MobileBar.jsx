import React from "react";
import Button from "../Button";

function MobileBar() {
  return (
    <div
      id="მობილური ბარი"
      className=" bg-[url('/images/banner2.png')]  xl:pt-[90px] xl:pl-[50%] xl:pr-[100px]   xl:h-[635px] xl:mt-10 w-full h-[259px] p-3 pl-[100px] bg-no-repeat flex flex-col bg-cover font-tommaso"
    >
      <h1 className="xl:text-[64px] font-tommaso text-[32px] text-black">
        მობილური ბარი
      </h1>
      <h2 className="xl:mt-[52px] font-tommaso xl:text-[32px] text-[24px] text-white">
        გავჩნდებით ყველგან, სადაც ისურვებ
      </h2>
      <p className="xl:mb-[77px] text-[16px] xl:text-[24px] text-white mt-6 mb-2 font-arialgeo">
        ჟუჟუნას ბარი მოგაგნებს ყველგან, სადაც იქნები. თან მოიყვანს ბარმენს,
        ქორფა ჟუჟუნას მაცივარს დააა შენი სტუმრების ჩაჟუჟუნებაზე უუამრავი
        კოქტეილით იზრუნებს.
      </p>
      <button
        className={`xl:w-[222px] xl:h-14 xl:rounded-full font-arialgeo w-[130px] h-[32px] rounded-2xl bg-[#613994] xl:ml-[50%] ml-auto xl:justify-self-center  justify-self-end text-white`}
      >
        გაიგე მეტი
      </button>
    </div>
  );
}

export default MobileBar;
