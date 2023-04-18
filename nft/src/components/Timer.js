import React from "react";
import { Link } from "react-router-dom";

export const Timer = () => {
  return (
    <>
      <div className="w-[100%] h-[100%] bg-gr3 absolute top-0 left-0 z-2"></div>
      <div className="text-white max-w-[1440px] mx-auto w-[100%] h-[100%] relative isolate z-3 flex items-end pb-[100px] max2:pb-0 px-[50px] max1:px-[25px] max2:flex max2:items-center">
        <div className="w-[100%] grid grid-cols-gd1 max2:grid-cols-gd2 items-end relative">
          <div className="flex flex-col gap-[60px] max2:gap-[40px] max1:w-[100%]">
            <div className="flex gap-[20px] bg-[#3B3B3B] w-fit px-[15px] py-[8px] rounded-full justify-center items-center">
              <img src="/img/Avatar-7.png" alt="Avatar" className="h-[50px]" />
              <span className="text-[22px]">Shroomie</span>
            </div>
            <p className="text-[50px] max1:text-[36px] font-mono">Magic Mashrooms</p>
            <Link className="flex gap-[20px] px-[20px] py-[12px] bg-white w-fit rounded-[20px] max1:hidden max1:w-fit">
              <img src="/img/svg/eye.svg" alt="eye" />
              <span className="text-black">See NFT</span>
            </Link>
          </div>
          <div className="max1:w-[100%] max2:mt-[40px]">
            <div className="w-fit max1:w-[100%] bg-gray-900 bg-opacity-50 backdrop-blur-5 rounded-[20px] px-[35px] max1:px-[15px] py-[20px] self-end font-mono flex flex-col justify-center items-center">
              <div className="text-[22px] mb-[25px]">Auction ends in:</div>
              <div className="flex gap-[25px] max1:gap-[15px] items-center text-center">
                <div>
                  <div className="text-[55px] max1:text-[35px]">59</div>
                  <div className="text-[16px] max1:text-[15px]">Hours</div>
                </div>
                <div className="text-[30px]">:</div>
                <div>
                  <div className="text-[55px] max1:text-[35px]">59</div>
                  <div className="text-[16px] max1:text-[15px]">Minutes</div>
                </div>
                <div className="text-[30px]">:</div>
                <div>
                  <div className="text-[55px] max1:text-[35px]">59</div>
                  <div className="text-[16px] max1:text-[15px]">Seconds</div>
                </div>
              </div>
            </div>
          </div>
          <Link className="flex justify-center gap-[20px] px-[20px] py-[12px] bg-white w-[100%] rounded-[15px] sm:hidden mt-[60px]">
            <img src="/img/svg/eye.svg" alt="eye" />
            <span className="text-black font-bold">See NFT</span>
          </Link>
        </div>
      </div>
    </>
  );
};
