import React, { useEffect } from "react";
import "../index.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Signup = () => {

  // to scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])


  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="bg-gr1 w-[100%] h-[100%] md:h-[calc(100vh-80px)]">
        <div className="grid grid-cols-gd5 max2:grid-cols-gd2">
          <div className="md:h-[calc(100vh-80px)]">
            <img src="/img/signup_image.png" alt="spaceship" className="h-[100%] max2:hidden object-cover" loading="lazy"/>
            <img src="/img/signup_image2.png" alt="spaceship" className="h-[100%] md:hidden w-[100%] object-cover" loading="lazy"/>
          </div>

          <div className="flex flex-col justify-center font-mono text-white px-[40px] max1:px-[25px] py-[40px] max1:py-[25px] gap-[30px] max1:gap-[15px]">
            <h1 className="text-[50px] max1:text-[35px]">Create Account</h1>
            <p className="text-[20px] max1:text-[17px]">Welcome! enter your details and start creating, collecting and selling NFTs.</p>


            <div className="w-[80%] max1:w-[100%] flex flex-col gap-[20px]">
              <div className="w-[100%] text-[18px] relative">
                <img src="/img/svg/user2.svg" alt="icon" className="absolute top-[10px] left-[15px] h-[20px] w-[20px] object-cover"/>
                <input type="text" placeholder="Username" className="w-[100%] rounded-2xl px-[15px] py-[10px] text-black outline-none pl-[50px] leading-none" />
              </div>
              <div className="w-[100%] text-[18px] relative">
                <img src="/img/svg/email2.svg" alt="icon" className="absolute top-[10px] left-[15px] h-[20px] w-[20px]"/>
                <input type="text" placeholder="Email Address" className="w-[100%] rounded-2xl px-[15px] py-[10px] text-black outline-none pl-[50px] leading-none" />
              </div>
              <div className="w-[100%] text-[18px] relative">
                <img src="/img/svg/Lock.svg" alt="icon" className="absolute top-[10px] left-[15px] h-[20px] w-[20px]"/>
                <input type="text" placeholder="Password" className="w-[100%] rounded-2xl px-[15px] py-[10px] text-black outline-none pl-[50px] leading-none" />
              </div>
              <div className="w-[100%] text-[18px] relative">
                <img src="/img/svg/Lock.svg" alt="icon" className="absolute top-[10px] left-[15px] h-[20px] w-[20px]"/>
                <input type="text" placeholder="Confirm Password" className="w-[100%] rounded-2xl px-[15px] py-[10px] text-black outline-none pl-[50px] leading-none" />
              </div>
              <button className="bg-[#A259FF] text-[18px] px-[15px] py-[10px] rounded-2xl mt-[10px] hover:opacity-90">
                Create account
              </button>


            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};