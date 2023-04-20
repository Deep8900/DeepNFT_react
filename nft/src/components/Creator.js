import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const creatorData = [
  {
    id: 1,
    imageUrl1: "/img/Avatar-1.png",
    name: "Keepitreal",
    eth: "34.53 ETH",
  },
  {
    id: 2,
    imageUrl1: "/img/Avatar-2.png",
    name: "DigiLab",
    eth: "35.23 ETH",
  },
  {
    id: 3,
    imageUrl1: "/img/Avatar-3.png",
    name: "GravityOne",
    eth: "57.05 ETH",
  },
  {
    id: 4,
    imageUrl1: "/img/Avatar-4.png",
    name: "Juanie",
    eth: "10.53 ETH",
  },
  {
    id: 5,
    imageUrl1: "/img/Avatar-5.png",
    name: "BlueWhale",
    eth: "89.29 ETH",
  },
  {
    id: 6,
    imageUrl1: "/img/Avatar-6.png",
    name: "Mr Fox",
    eth: "56.09 ETH",
  },
  {
    id: 7,
    imageUrl1: "/img/Avatar-7.png",
    name: "Shroomie",
    eth: "36.40 ETH",
  },
  {
    id: 8,
    imageUrl1: "/img/Avatar-8.png",
    name: "Robotica",
    eth: "02.54 ETH",
  },
  {
    id: 9,
    imageUrl1: "/img/Avatar-9.png",
    name: "RustyRobot",
    eth: "46.37 ETH",
  },
  {
    id: 10,
    imageUrl1: "/img/Avatar-10.png",
    name: "Animakid",
    eth: "57.61 ETH",
  },
  {
    id: 11,
    imageUrl1: "/img/Avatar-11.png",
    name: "Dotgu",
    eth: "00.09 ETH",
  },
  {
    id: 12,
    imageUrl1: "/img/Avatar-12.png",
    name: "Ghiblier",
    eth: "73.82 ETH",
  },
];

export const Creator = () => {
  return (
    <>
      <div className="text-white max-w-[1440px] mx-auto w-[100%] relative isolate">
        <div className="absolute gradient-03 top-[30%] left-0 z-[-10]"></div>
        <div className="mb-[50px] flex justify-between items-end">
          <div>
            <h2 className="text-[40px] max1:text-[35px] max1:mb-[15px] font-Libre">
              Top Creators
            </h2>
            <p className="text-[18px] max1:text-[16px] opacity-80 font-cursive">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <Link to="/Rankings" className="max1:hidden">
            <button className="px-[15px] py-[10px] border-[2px] border-[#A259FF] rounded-[15px] text-[#A259FF] font-bold flex justify-center items-center gap-[10px] shadow-lg shadow-indigo-500/50">
              <img src="/img/svg/Rocket2.svg" alt="Rocket" />
              <span>View Rankings</span>
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-gd4 max3:grid-cols-gd1 gap-[40px] max3:gap-[30px] creator_grid">
          {creatorData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col rounded-[20px] p-[10px] bg-clip-padding backdrop-filter backdrop-blur-sm border-gray-100 hover:shadow-black/70 hover:shadow-2xl bg-gr2 shine"
            >
              <div className="absolute top-[10px] left-0[10px] bg-white/50 font-bold text-black leading-none p-[5px] rounded-full min-w-[28px] flex justify-between items-center">
                <span className="mx-auto">{card.id}</span>
              </div>
              <div className="flex flex-col items-center max3:flex-row max3:gap-[30px]">
                <img
                  src={card.imageUrl1}
                  alt={card.name}
                  className="w-[70%] mb-[20px] max3:mb-0 max3:w-[30%]"
                />
                <div className="flex flex-col items-center max3:items-start">
                  <h3 className="text-[25px] max1:text-[22px] mb-[10px] font-bold font-mono">
                    {card.name}
                  </h3>
                  <div className="flex gap-2 text-[18px] max3:text-[17px] creator_sales">
                    Total Sales:
                    <span>{card.eth}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/Rankings" className="sm:hidden w-[100%]">
          <button className="px-[15px] py-[10px] border-[2px] border-[#A259FF] rounded-[15px] text-[#A259FF] font-bold w-[100%] mt-[30px] flex justify-center items-center gap-[15px] shadow-lg shadow-indigo-500/50">
            <img src="/img/svg/Rocket2.svg" alt="Rocket" />
            <span>View Rankings</span>
          </button>
        </Link>
      </div>
    </>
  );
};
