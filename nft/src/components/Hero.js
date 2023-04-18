import React, { useRef, useEffect } from "react";
import '../index.css';
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

export const Hero = () => {
  const tiltRef = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 1000,
      glare: true,
      "max-glare": 1,
      // scale: 1,
      easing: "cubic-bezier(3.9,.98,.52,.99)",
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-gd1 max2:grid-cols-gd2 w-[100%] h-[100%] text-white items-center min-h-[calc(100vh-80px)] max-w-[1440px] mx-auto py-[40px] max2:gap-[25px] relative isolate">
        <div className="absolute gradient-01 w-[70%] left-[-10%] top-[-50%] z-[-1] h-[100%] opacity-50"></div>
        <div className="flex flex-col items-center">
          <div className="w-[70%] max1:w-[85%] flex flex-col gap-7">
            <h1 className="text-[70px] leading-tight font-Libre max3:text-[50px] home_h1">
              Discover <br className="max2:hidden" />
              Digital Art & <br className="max2:hidden" />
              Collect NFTs
            </h1>
            <p className="text-[14px] opacity-80 w-[90%]">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <Link
              to="/marketplace"
              className="flex gap-2 bg-[#A259FF] hover:bg-[#a665f9] rounded-[10px] w-fit px-[15px] py-[8px] items-center max1:hidden"
            >
              <img
                src="/img/svg/Rocket.svg"
                alt="Rocket"
                className="h-[17px]"
              />
              <span className="">Get Started</span>
            </Link>
            <div className="flex justify-between w-[80%] max1:w-[100%] max2:mx-auto max1:hidden">
              <div>
                <h3 className="text-[25px]">240k+</h3>
                <p className="opacity-70">Total Sale</p>
              </div>
              <div>
                <h3 className="text-[25px]">100k+</h3>
                <p className="opacity-70">Auctions</p>
              </div>
              <div>
                <h3 className="text-[25px]">240k+</h3>
                <p className="opacity-70">Artists</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Tilt
            ref={tiltRef}
            className="w-[70%] max1:w-[85%] flex flex-col justify-between hover:drop-shadow-glow"
          >
            <img
              src="/img/home_image.png"
              alt="painting"
              className="w-[100%]"
            />
            <div className="w-[100%] bg-[#3B3B3B]/90 px-[20px] py-[15px] font-mono rounded-bl-[17px] rounded-br-[17px] backdrop-blur-sm">
              <p className="text-[18px]">Space Walking</p>
              <div className="flex gap-3 items-center mt-[15px]">
                <img
                  src="/img/avatar-10.png"
                  alt="avatar"
                  className="h-[30px]"
                />
                <span className="text-[14px]">Animakid</span>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="flex justify-center items-center flex-col sm:hidden">
          <Link
            to="/marketplace"
            className="flex gap-2 bg-[#A259FF] hover:bg-[#a665f9] rounded-[10px] w-[85%] px-[15px] py-[8px] items-center justify-center mt-[20px]"
          >
            <img src="/img/svg/Rocket.svg" alt="Rocket" className="h-[17px]" />
            <span className="">Get Started</span>
          </Link>
          <div className="flex justify-between w-[85%] max2:mx-auto mt-[30px]">
            <div>
              <h3 className="text-[25px]">240k+</h3>
              <p className="opacity-70">Total Sale</p>
            </div>
            <div>
              <h3 className="text-[25px]">100k+</h3>
              <p className="opacity-70">Auctions</p>
            </div>
            <div>
              <h3 className="text-[25px]">240k+</h3>
              <p className="opacity-70">Artists</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
