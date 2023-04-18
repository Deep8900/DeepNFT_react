import React from "react";
import "../index.css";

const cardsData = [
  {
    id: 1,
    imageUrl1: "/img/col_A1.png",
    imageUrl2: "/img/col_A2.png",
    imageUrl3: "/img/col_A3.png",
    imageUrl4: "/img/col_A.png",
    title: "DSGN Animals",
    imageUrl5: "/img/Avatar-6.png",
    name: "MrFox",
  },
  {
    id: 2,
    imageUrl1: "/img/col_B1.png",
    imageUrl2: "/img/col_B2.png",
    imageUrl3: "/img/col_B3.png",
    imageUrl4: "/img/col_A.png",
    title: "Magic Mushrooms",
    imageUrl5: "/img/Avatar-7.png",
    name: "Shroomie",
  },
  {
    id: 3,
    imageUrl1: "/img/col_C1.png",
    imageUrl2: "/img/col_C2.png",
    imageUrl3: "/img/col_C3.png",
    imageUrl4: "/img/col_A.png",
    title: "Disco Machines",
    imageUrl5: "/img/Avatar-13.png",
    name: "BeKind2Robots",
  },
];

export const Collection = () => {
  return (
    <>
      <div className="text-white max-w-[1440px] mx-auto relative isolate">
        <div className="absolute gradient-02 top-[50%] right-[20%] z-[-10]"></div>
        <div className="mb-[50px]">
          <h2 className="text-[40px] max1:text-[35px] max1:mb-[15px] font-Libre">
            Trending collection
          </h2>
          <p className="text-[18px] max1:text-[16px] opacity-80 font-cursive">
            Checkout our weekly updated trending collection.
          </p>
        </div>
        <div className="grid grid-cols-gd3 max3:grid-cols-gd1 gap-[40px] collection_grid">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col gap-[15px] rounded-[25px] p-[10px] bg-clip-padding backdrop-filter backdrop-blur-sm border-gray-100 hover:shadow-black/70 hover:shadow-2xl [ bg-gradient-to-bl from-gray-600 to-black/40 ] shine"
            >
              <img src={card.imageUrl1} alt={card.title} />
              <div className="flex gap-[10px] justify-between">
                <img
                  src={card.imageUrl2}
                  alt={card.title}
                  className="w-[30%]"
                />
                <img
                  src={card.imageUrl3}
                  alt={card.title}
                  className="w-[30%]"
                />
                <img
                  src={card.imageUrl4}
                  alt={card.title}
                  className="w-[30%]"
                />
              </div>
              <h3 className="text-[20px] font-mono">{card.title}</h3>
              <div className="flex gap-3 items-center">
                <img
                  src={card.imageUrl5}
                  alt={card.title}
                  className="h-[30px]"
                />
                <span className="text-[16px] opacity-80 font-math">
                  {card.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
