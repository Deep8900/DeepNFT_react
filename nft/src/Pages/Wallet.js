import React from "react";
import "../index.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Wallet = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="bg-gr1 w-[100%] h-[100%] md:h-[calc(100vh-80px)]">
        <div className="grid grid-cols-gd5 max2:grid-cols-gd2">
          <div className="md:h-[calc(100vh-80px)]">
            <img
              src="/img/wallet_image.png"
              alt="spaceship"
              className="h-[100%] max2:hidden object-cover"
            />
            <img
              src="/img/wallet_image2.png"
              alt="spaceship"
              className="h-[100%] md:hidden w-[100%] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center font-mono text-white px-[40px] max1:px-[25px] py-[40px] max1:py-[25px] gap-[30px]">
            <h1 className="text-[50px] max1:text-[35px]">Connect Wallet</h1>
            <p className="text-[20px] max1:text-[17px]">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>

            <div className="w-[80%] max-w-[400px] max1:w-[100%] flex flex-col gap-[20px]">
              <div className="flex gap-[15px] items-center border-[#A259FF] border rounded-2xl shine px-[30px] py-[10px] gradient-05">
                <img src="/img/svg/wallet-1.svg" alt="wallet" />
                <span className="font-mono text-[20px]">Metamask</span>
              </div>
              <div className="flex gap-[15px] items-center border-[#A259FF] border rounded-2xl shine px-[30px] py-[10px] gradient-05">
                <img src="/img/svg/wallet-2.svg" alt="wallet" />
                <span className="font-mono text-[20px]">Wallet Coonect</span>
              </div>
              <div className="flex gap-[15px] items-center border-[#A259FF] border rounded-2xl shine px-[30px] py-[10px] gradient-05">
                <img src="/img/svg/wallet-3.svg" alt="wallet" />
                <span className="font-mono text-[20px]">Coinbase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};
