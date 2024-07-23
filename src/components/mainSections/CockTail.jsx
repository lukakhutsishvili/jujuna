import React from "react";
import useCocktails from "../../hooks/useCocktails";
import LoadingSpinner from "../LoadingSpinner";

function CockTail() {
  const { isLoading, data, isError, error } = useCocktails();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id="კოქტეილი" className="mt-2 xl:mx-20 ">
      <h1 className="dark:text-white xl:text-[64px] font-tommaso text-[48px] text-black ml-[22px]">
        კოკტეილი
      </h1>
      <div className="xl:grid xl:grid-cols-2 xl:gap-4">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className={`p-4 ${
                index === 0
                  ? "xl:mt-0 xl:col-start-1 xl:col-end-3 mt-2"
                  : "mt-0"
              } pl-0 bg-black flex relative min-h-[352px] bg-no-repeat xl:min-h-[467px]`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "220px auto",
                backgroundPositionY: "bottom",
              }}
            >
              <div
                className={`w-full h-full  ${
                  index === 0 ? "xl:pr-[184px]" : "xl:pr-[100px]"
                } xl:pr-[184px]`}
              >
                <h1 className="xl:ml-[50%] xl:text-start font-tommaso mt-4 text-[48px] text-white text-center">
                  {item.name}
                </h1>
                <div
                  className={`grid ${
                    index !== 0 ? "xl:grid-cols-1 grid-cols-2" : "grid-cols-2"
                  } mt-6 ml-[50%] gap-x-[38px] gap-y-[31px]`}
                >
                  {item.ingredients.map((ing, index) => (
                    <div
                      key={index}
                      className={`text-white h-[68px]  border-gray-600 ${
                        index == item.ingredients.length - 1
                          ? "border-b-0"
                          : "border-b-2"
                      }`}
                    >
                      <p className="text-[16px] ">{ing}</p>
                      <p className="text-[16px] mt-2 opacity-40">50მლ</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CockTail;
