import React from "react";
import "../index.css";

const setupData = [
  {
    id: 1,
    imgUrl: "/img/svg/setup-1.svg",
    title: "Setup Your wallet",
    desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
  },
  {
    id: 2,
    imgUrl: "/img/svg/setup-2.svg",
    title: "Create Collection",
    desc: "Upload your work and setup your collection. Add a description, social links and floor price."
  },
  {
    id: 3,
    imgUrl: "/img/svg/setup-3.svg",
    title: "Start Earning",
    desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
  }
]

export const Setup = () => {
  return (
    <>
      <div className="text-white max-w-[1440px] mx-auto w-[100%] relative isolate">
        <div className="feedback-gradient right-0 bottom-[-20%] z-[-10]"></div>
        <div className="mb-[50px]">
          <h2 className="text-[40px] max1:text-[35px] max1:mb-[15px] font-Libre">
            How It Works
          </h2>
          <p className="text-[18px] max1:text-[16px] opacity-80 font-cursive">
            Find out how to get started
          </p>
        </div>
        <div className="grid grid-cols-gd3 max3:grid-cols-gd1 gap-[40px] max3:gap-[30px] setup_grid">
          {setupData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col rounded-[25px] bg-clip-padding backdrop-filter backdrop-blur-sm border-gray-100 hover:shadow-black/70 hover:shadow-2xl bg-gr2 shine px-[10px] py-[20px]"
            >
              <img src={card.imgUrl} alt={card.title} />
              <div className="px-[15px] py-[7px] text-center">
                <h3 className="text-[25px] font-mono mb-[10px]">{card.title}</h3>
                <p className="font-cursive opacity-70">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
