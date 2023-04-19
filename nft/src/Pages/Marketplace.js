import React from "react";
import "../index.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


const marketData = [
  {
    id: 1,
    imageUrl1: "/img/market/mar-1.png",
    name: "Magic Mushroom 0325",
    name2: "Shroomie",
    volume: "12.4 ETH",
    volume2: "23.5 wETH",
    img2: "/img/Avatar-1.png",
  },
  {
    id: 2,
    imageUrl1: "/img/market/mar-2.png",
    name: "Happy Robot 032",
    name2: "BeKind2Robots",
    volume: "23.5 ETH",
    volume2: "45.0 wETH",
    img2: "/img/Avatar-2.png",
  },
  {
    id: 3,
    imageUrl1: "/img/market/mar-3.png",
    name: "Happy Robot 032",
    name2: "BeKind2Robots",
    volume: "03.5 ETH",
    volume2: "12.0 wETH",
    img2: "/img/Avatar-3.png",
  },
  {
    id: 4,
    imageUrl1: "/img/market/mar-4.png",
    name: "Designer Bear",
    name2: "Mr Fox",
    volume: "53.7 ETH",
    volume2: "5.0 wETH",
    img2: "/img/Avatar-4.png",
  },
  {
    id: 5,
    imageUrl1: "/img/market/mar-5.png",
    name: "Colorful Dog 0356",
    name2: "KeepitReal",
    volume: "15.9 ETH",
    volume2: "86.5 wETH",
    img2: "/img/Avatar-5.png",
  },
  {
    id: 6,
    imageUrl1: "/img/market/mar-6.png",
    name: "Dancing Robot 0312",
    name2: "Robotica",
    volume: "15.0 ETH",
    volume2: "00.2 wETH",
    img2: "/img/Avatar-6.png",
  },
  {
    id: 7,
    imageUrl1: "/img/market/mar-7.png",
    name: "Cherry Blossom Girl 035",
    name2: "MoonDancer",
    volume: "00.8 ETH",
    volume2: "04.9 wETH",
    img2: "/img/Avatar-7.png",
  },
  {
    id: 8,
    imageUrl1: "/img/market/mar-8.png",
    name: "Space Travel",
    name2: "NebulaKid",
    volume: "48.6 ETH",
    volume2: "49.1 wETH",
    img2: "/img/Avatar-8.png",
  },
  {
    id: 9,
    imageUrl1: "/img/market/mar-9.png",
    name: "Sunset Dimension",
    name2: "AnimaKid",
    volume: "45.3 ETH",
    volume2: "31.5 wETH",
    img2: "/img/Avatar-9.png",
  },
  {
    id: 10,
    imageUrl1: "/img/market/mar-10.png",
    name: "Desert Walk",
    name2: "Catch 22",
    volume: "85.2 ETH",
    volume2: "73.4 wETH",
    img2: "/img/Avatar-10.png",
  },
  {
    id: 11,
    imageUrl1: "/img/market/mar-11.png",
    name: "IceCream Ape 0324",
    name2: "Ice Ape Club",
    volume: "43.1 ETH",
    volume2: "82.0 wETH",
    img2: "/img/Avatar-11.png",
  },
  {
    id: 12,
    imageUrl1: "/img/market/mar-12.png",
    name: "Colorful Dog 0344",
    name2: "PuppyPower",
    volume: "92.4 ETH",
    volume2: "53.4 wETH",
    img2: "/img/Avatar-12.png",
  },
]

export const Marketplace = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="bg-gr1 py-[80px] max1:py-[60px] px-[50px] max1:px-[25px] w-[100%] h-[100%] isolate">
        <div className="feedback-gradient right-[10%] top-[10%] z-[-10]"></div>
        <div className="text-white flex flex-col gap-[50px] max-w-[1440px] mx-auto">
          <div>
            <h1 className="text-[50px] max1:text-[35px] font-libre">
              Browse Marketplace
            </h1>
            <p className="font-cursive opacity-75 mt-[10px]">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
            <div className="w-[80%] max1:w-[100%] relative mt-[20px]">
              <input
                type="text"
                placeholder="Search your favourite NFTs"
                className="w-[100%] bg-transparent border border-white/10 rounded-[15px] placeholder-white/20 placeholder:text-[14px] py-[10px] px-[15px] outline-none"
              />
              <img
                src="/img/svg/search.svg"
                alt="search"
                className="absolute top-[12px] right-[15px] h-[20px] opacity-60"
              />
            </div>
          </div>


          <div className="grid grid-cols-gd3 max3:grid-cols-gd1 gap-[40px] max3:gap-[30px] market_grid">
            {marketData.map((card) => (
              <div
                key={card.id}
                className="flex flex-col rounded-[25px] hover:shadow-2xl bg-gr2 shine"
              >
                <img src={card.imageUrl1} alt={card.title} />
                <div className="px-[20px] py-[15px] flex flex-col gap-[15px]">
                  <p className="font-cursive text-[20px]">{card.name}</p>
                  <div className="flex gap-[15px] items-center">
                    <img src={card.img2} alt={card.name2} className="h-[35px]"/>
                    <span className="font-mono text-[16px] opacity-80">{card.name2}</span>
                  </div>
                  <div className="flex justify-between mt-[20px]"> 
                    <div>
                      <p className="font-mono opacity-70">Price</p>
                      <p className="text-[20px]">{card.volume}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-mono opacity-70">Highest Bid</p>
                      <p className="text-[20px]">{card.volume2}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};
