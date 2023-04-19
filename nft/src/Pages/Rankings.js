import React from "react";
import "../index.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const rankingData = [
  {
    id: 1,
    imageUrl1: "/img/Avatar-1.png",
    name: "Jaydon Ekstrom Bothman",
    sold: "205",
    volume: "12.4 ETH",
    change: "+0.26%",
  },
  {
    id: 2,
    imageUrl1: "/img/Avatar-2.png",
    name: "Ruben Carder",
    sold: "536",
    volume: "23.5 ETH",
    change: "+2.36%",
  },
  {
    id: 3,
    imageUrl1: "/img/Avatar-3.png",
    name: "Alfredo Septimus",
    sold: "560",
    volume: "03.5 ETH",
    change: "+1.41%",
  },
  {
    id: 4,
    imageUrl1: "/img/Avatar-4.png",
    name: "Davis Franci",
    sold: "152",
    volume: "53.7 ETH",
    change: "+4.23%",
  },
  {
    id: 5,
    imageUrl1: "/img/Avatar-5.png",
    name: "Livia Rosser",
    sold: "452",
    volume: "15.9 ETH",
    change: "+0.08%",
  },
  {
    id: 6,
    imageUrl1: "/img/Avatar-6.png",
    name: "Kianna Donin",
    sold: "630",
    volume: "15.0 ETH",
    change: "+0.02%",
  },
  {
    id: 7,
    imageUrl1: "/img/Avatar-7.png",
    name: "Phillip Lipshutz",
    sold: "806",
    volume: "00.8 ETH",
    change: "+1.41%",
  },
  {
    id: 8,
    imageUrl1: "/img/Avatar-8.png",
    name: "Phillip Lipshutz",
    sold: "433",
    volume: "48.6 ETH",
    change: "+0.01%",
  },
  {
    id: 9,
    imageUrl1: "/img/Avatar-9.png",
    name: "Kianna Stanton",
    sold: "507",
    volume: "45.3 ETH",
    change: "+1.47%",
  },
  {
    id: 10,
    imageUrl1: "/img/Avatar-10.png",
    name: "Angel Lubin",
    sold: "707",
    volume: "85.2 ETH",
    change: "+3.61%",
  },
  {
    id: 11,
    imageUrl1: "/img/Avatar-11.png",
    name: "Allison Torff",
    sold: "203",
    volume: "43.1 ETH",
    change: "+1.26%",
  },
  {
    id: 12,
    imageUrl1: "/img/Avatar-12.png",
    name: "Davis Workman",
    sold: "436",
    volume: "92.4 ETH",
    change: "+1.42%",
  },
  {
    id: 13,
    imageUrl1: "/img/Avatar-13.png",
    name: "Lindsey Lipshutz",
    sold: "634",
    volume: "62.4 ETH",
    change: "+1.41%",
  },
  {
    id: 14,
    imageUrl1: "/img/Avatar-14.png",
    name: "Randy Carder",
    sold: "596",
    volume: "43.0 ETH",
    change: "+1.53%",
  },
  {
    id: 15,
    imageUrl1: "/img/Avatar-15.png",
    name: "Lydia Culhane",
    sold: "449",
    volume: "79.2 ETH",
    change: "+1.92%",
  },
  {
    id: 16,
    imageUrl1: "/img/Avatar-16.png",
    name: "Rayna Bator",
    sold: "409",
    volume: "32.6 ETH",
    change: "+2.01%",
  },
  {
    id: 17,
    imageUrl1: "/img/Avatar-17.png",
    name: "Jocelyn Westervelt",
    sold: "736",
    volume: "46.9 ETH",
    change: "+2.04%",
  },
  {
    id: 18,
    imageUrl1: "/img/Avatar-11.png",
    name: "Marilyn Torff",
    sold: "821",
    volume: "44.3 ETH",
    change: "+0.08%",
  },
  {
    id: 19,
    imageUrl1: "/img/Avatar-14.png",
    name: "Skylar Levin",
    sold: "429",
    volume: "16.5 ETH",
    change: "+0.91%",
  },
  {
    id: 20,
    imageUrl1: "/img/Avatar-7.png",
    name: "Terry Dorwart",
    sold: "207",
    volume: "56.4 ETH",
    change: "+0.72%",
  },
];

export const Rankings = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="bg-gr1 py-[80px] max1:py-[60px] px-[50px] max1:px-[25px] w-[100%] h-[100%] isolate">
        <div className="feedback-gradient right-[10%] top-[10%] z-[-10]"></div>
        <div className="text-white flex flex-col gap-[50px] max-w-[1440px] mx-auto">
          <div>
            <h1 className="text-[50px] max1:text-[35px] font-libre">
              Top Creators
            </h1>
            <p className="font-cursive opacity-75 mt-[10px]">
              Check out top ranking NFT artists on the NFT Marketplace.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-gd6 max3:grid-cols-gd7 px-[25px] max1:px-[10px] py-[10px] rounded-[15px] mb-[20px] border border-white/20 opacity-50 gap-[5px] ranking_grid">
              <p>#</p>
              <p>Artist</p>
              <p className=" max1:hidden">Change</p>
              <p className=" max3:hidden">NFTs sold</p>
              <p>Volume</p>
            </div>

            <div className="flex flex-col w-[100%] gap-[15px]">
              {rankingData.map((card) => (
                <div
                  key={card.id}
                  className="grid grid-cols-gd6 max3:grid-cols-gd7 px-[25px] max1:px-[10px] py-[10px] rounded-[15px] bg-gr2 shine-1 shine items-center ranking_grid gap-[5px]"
                >
                  <p className="opacity-30 max1:text-[12px]">
                    <span className="ranking_id">{card.id}</span>
                  </p>
                  <div className="flex gap-[20px] items-center">
                    <img
                      src={card.imageUrl1}
                      alt={card.name}
                      className="h-[45px]"
                    />
                    <span className="max1:text-[15px] opacity-80">
                      {card.name}
                    </span>
                  </div>
                  <p className="text-[#00AC4F] max1:hidden">{card.change}</p>
                  <p className="opacity-70 max3:hidden">{card.sold}</p>
                  <p className="opacity-70 max1:text-[14px]">{card.volume}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};
