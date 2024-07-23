import React from "react";

function Bottle() {
  return (
    <div id="ბოთლი" className="xl:mx-20 dark:text-white">
      <h1 className="dark:text-white xl:text-[64px] font-tommaso text-[48px] ml-5 ">
        ბოთლი
      </h1>
      <div className="xl:justify-between xl:pr-[60px] xl:bg-[url('public/images/Vector5.png')] xl:h-[482px] xl:bg-right bg-no-repeat bg-[url('/images/littleBlackDiv.png')] bg-customRight h-[382px] xl:p-0 border-t-2 border-b-2 border-[#613994] pt-[14px] pb-[14px] pr-[20px] pl-[9px] flex gap-5">
        <div className="xl:w-[386px]  xl:flex-shrink-0">
          <img
            className="xl:h-full xl:w-[386px] w-[205px]  h-[255px] "
            src="/images/bottle1.png"
          />
          <p className="dark:text-white xl:hidden font-arialgeo text-[16px] text-black font-bold">
            ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
            მისართმევად საუკეთესო ტემპერატურასა და გაზს.
          </p>
        </div>
        <div className="ml-auto xl:w-[769px]">
          <h1 className="dark:text-white xl:mt-6 font-tommaso text-[30px] text-white xl:text-black">
            ჟუჟუნა ბოთლი
          </h1>
          <div className=" xl:flex gap-3 xl:ml-0 xl:mt-10">
            <div className="w-[160px] h-16 bg-[#613994] rounded-2xl flex items-center justify-center mt-[10px]">
              <p className="text-[14px] xl:text-[20px]  font-arialgeo text-white text-center">
                მოცულობა
                <br />
                250 მლ
              </p>
            </div>
            <div className="w-[160px] h-16 bg-[#613994] rounded-2xl flex items-center justify-center  mt-[10px]">
              <p className="text-[14px] xl:text-[20px] font-arialgeo text-white text-center">
                მოცულობა
                <br />
                250 მლ
              </p>
            </div>
            <div className="w-[160px] h-16 bg-[#613994] rounded-2xl flex items-center justify-center mt-[10px] ">
              <p className="text-[14px] xl:text-[20px] font-arialgeo text-white text-center">
                მოცულობა
                <br />
                250 მლ
              </p>
            </div>
          </div>
          <p className="dark:text-white xl:mt-[50px]  xl:block hidden font-arialgeo text-[16px] xl:text-[24px] text-black font-bold">
            ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორ
            <span className="text-white">ცია</span> ინარჩუნებს მისართმევად
            საუკეთესო ტემპერატურასა <span className="text-white">და გაზს.</span>
          </p>
          <div className="xl:text-white xl:mt-10 xl:h-[108px] xl:w-[114px] w-[61px] h-[58px] border-2 xl:bg-[#613994] border-[#613994] rounded-2xl ml-auto mt-[16px] flex items-center justify-center">
            <p className="text-[14px] font-arialgeo text-center">4.5₾</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottle;
