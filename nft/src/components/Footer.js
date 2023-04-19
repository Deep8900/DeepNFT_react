import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <section className="bg-gr4 py-[50px] px-[50px] max1:px-[25px] w-[100%] h-[100%]">
        <div className="text-white max-w-[1440px] mx-auto w-[100%] relative isolate">
          <div className="footer-gradient left-[30%] z-[-10]"></div>
          <div className="flex max2:flex-col justify-between gap-[50px] pb-[30px] border-b border-slate-500">
            <div className="flex flex-col justify-start items-start gap-[20px]">
              <Link to="/" className="flex gap-2 items-center z-20 relative">
                <img src="/img/svg/Logo.svg" alt="Logo" className="h-[25px]" />
                <span className="text-[20px]">DEEPNFT</span>
              </Link>
              <p className="font-mono text-[16px] lg:max-w-[400px] opacity-50">
                NFT marketplace UI created with Anima for Figma.
              </p>
              <div>
                <p className="font-mono text-[16px] opacity-50">
                  Join our community
                </p>
                <div className="flex gap-[10px]">
                  <img src="/img/svg/Discord.svg" alt="Discord" />
                  <img src="/img/svg/Youtube.svg" alt="Youtube" />
                  <img src="/img/svg/Twitter.svg" alt="Twitter" />
                  <img src="/img/svg/Insta.svg" alt="Instagram" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-[20px]">
              <h2 className="text-[20px] font-Libre">Explore</h2>
              <ul className="font-mono text-[16px] opacity-60 gap-[20px] flex flex-col">
                <li className="hover:border-b w-fit">
                  <Link to="/marketplace">MarketPlace</Link>
                </li>
                <li className="hover:border-b w-fit">
                  <Link to="/Rankings">Rankings</Link>
                </li>
                <li className="hover:border-b w-fit">
                  <Link to="/Wallet">Connect a Wallet</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-start items-start gap-[20px]">
              <h3 className="text-[20px] leading-tight font-Libre">
                Join Our Weekly Digest
              </h3>
              <p className="text-[16px] font-mono opacity-50 lg:max-w-[350px]">
                Get exclusive promotions & updates straight to your inbox.
              </p>

              <div className="flex w-[100%] relative max3:hidden">
                <input
                  type="text"
                  placeholder="Enter Your email here"
                  className="w-[100%] text-[18px] rounded-xl px-[15px] py-[8px] news_input text-black outline-none"
                />
                <button className="bg-[#A259FF] flex gap-[10px] text-[18px] rounded-xl items-center justify-center px-[15px] py-[8px] absolute right-0 hover:opacity-90">
                  <img src="/img/svg/email.svg" alt="mail" />
                  <span className="font-mono"> Subscribe</span>
                </button>
              </div>

              <div className="lg:hidden flex flex-col w-[100%] max-w-[500px] mx-auto gap-[10px]">
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
          <div className="pt-[30px] opacity-50 font-mono">
            Ⓒ DeepNFT | All Rights Reserved.
          </div>
        </div>
      </section>
    </>
  );
};
