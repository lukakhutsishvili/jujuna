import React from "react";

function Footer() {
  return (
    <div id="კონტაქტი" className="bg-black pl-6 p-5 ">
      <div className="flex gap-5">
        <div className="w-[45px] h-[45px] bg-backgroundColor-purpleStart rounded-[50%] flex items-center justify-center">
          <p className="text-3xl font-tommaso text-black">ჟ</p>
        </div>
        <div className="flex flex-col gap-4 flex-1 ">
          <div className="flex flex-col gap-3">
            <p className="font-arialgeo text-[12px] text-white">ტელეფონი</p>
            <p className="font-arialgeo text-[12px] text-white">
              +995579760006
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-arialgeo text-[12px] text-white">ელ.ფოსტა</p>
            <p className="font-arialgeo text-[12px] text-white">
              Hello@jujuna.ge
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-arialgeo text-[12px] text-white">მისამართი:</p>
            <div className="flex  justify-between ">
              <p className="font-arialgeo text-[12px] text-white">
                ნინოშვილი #8 თბილისი,საქართველო
              </p>
              <div className="flex gap-2">
                <img src="/images/instagram.svg" />
                <img src="/images/Vector (3).png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
