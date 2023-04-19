import React from "react";
import "../index.css";

export const NewsLetter = () => {
  return (
    <>
      <div className="text-white max-w-[1440px] mx-auto w-[100%] relative isolate bg-[#3B3B3B] px-[50px] max3:px-[25px] py-[50px] max3:py-[25px] rounded-[25px]">
        <div className="grid grid-cols-gd1 max1:grid-cols-gd2 gap-[80px] max3:gap-[30px]">
          <div>
            <img src="/img/email_image.png" alt="Astronaut" />
          </div>

          <div className="flex flex-col justify-start items-start gap-[20px] max-w-[500px]">
            <h3 className="text-[50px] font-mono leading-tight max3:text-[25px]">
              Join Our Weekly Digest
            </h3>
            <p className="text-[22px] max3:text-[17px] font-proxima opacity-75">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <div className="flex w-[100%] relative max3:hidden">
              <input
                type="text"
                placeholder="Enter Your email here"
                className="w-[100%] text-[20px] rounded-xl px-[15px] py-[8px] news_input text-black outline-none"
              />
              <button className="bg-[#A259FF] flex gap-[10px] text-[20px] rounded-xl items-center justify-center px-[15px] py-[8px] absolute right-0 hover:opacity-90">
                <img src="/img/svg/email.svg" alt="mail" />
                <span className="font-mono"> Subscribe</span>
              </button>
            </div>

            <div className="lg:hidden flex flex-col w-[100%] gap-[20px]">
              <input
                type="text"
                placeholder="Enter Your email here"
                className="w-[100%] text-[20px] max1:text-[17px] rounded-xl px-[15px] py-[8px] news_input text-center text-black outline-none"
              />
              <button className="bg-[#A259FF] flex gap-[10px] text-[20px] rounded-xl items-center justify-center px-[15px] py-[8px] hover:opacity-90">
                <img src="/img/svg/email.svg" alt="mail" />
                <span className="font-mono"> Subscribe</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
