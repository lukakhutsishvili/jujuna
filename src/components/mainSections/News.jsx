import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import useBlogs from "../../hooks/useBlogs";
import LoadingSpinner from "../LoadingSpinner";
import { useMediaQuery } from "@custom-react-hooks/all";

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthNames = [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი",
  ];
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]}, ${year}`;
}

function News() {
  const { isLoading, data, isError, error } = useBlogs();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      id="სიახლეები"
      className="p-5 xl:p-10 xl:px-20  w-[100%] overflow-hidden"
    >
      <h2 className="dark:text-white xl:text-[64px]font-tommaso text-[48px]">
        სიახლეები
      </h2>
      <div className="mt-[33px] ">
        {isLoading && <LoadingSpinner />}
        {data && data.length > 0 && (
          <Swiper
            slidesPerView={isMobile ? 1 : 3}
            spaceBetween={30}
            loop={true}
            pagination={isMobile ? { clickable: true } : false}
            navigation={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect={isMobile ? "fade" : "slide"}
            speed={2000}
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`rounded-md xl:rounded-2xl w-full font-arialgeo  ${
                    index % 2 !== 1 ? "bg-[#613994]" : "bg-black"
                  } overflow-hidden`}
                >
                  <img src={item.image} alt={item.title} className="w-full" />
                  <div className="px-4 py-5 grid gap-5 text-white">
                    <p className="text-[16px]">{formatDate(item.created_at)}</p>
                    <p className="text-[24px]">ღვინის საღამო</p>
                    <p className="text-[16px]">
                      დააგემოვნეთ ჩვენი ღვინო ყოველწლიურად გამართულ დეგუსტაციაზე
                      და იგრძენით ნამდვილი გემო
                    </p>
                    <div className="grid justify-end">
                      <button
                        className={`${
                          index % 2 == 1 ? "bg-[#613994]" : "bg-black"
                        } xl:rounded-full xl:w-[126px] xl:h-[49px] font-arialgeo w-[130px] h-[32px] rounded-2xl   text-white`}
                      >
                        გაიგე მეტი
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default News;
