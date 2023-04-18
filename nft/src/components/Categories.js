import React from "react";
import "../index.css";

const categoryData = [
  {
    id: 1,
    imgUrl: "/img/cat-1.png",
    title: "Art",
  },
  {
    id: 2,
    imgUrl: "/img/cat-2.png",
    title: "Collectibles",
  },
  {
    id: 3,
    imgUrl: "/img/cat-3.png",
    title: "Music",
  },
  {
    id: 4,
    imgUrl: "/img/cat-4.png",
    title: "Photography",
  },
  {
    id: 5,
    imgUrl: "/img/cat-5.png",
    title: "Video",
  },
  {
    id: 6,
    imgUrl: "/img/cat-6.png",
    title: "Utility",
  },
  {
    id: 7,
    imgUrl: "/img/cat-7.png",
    title: "Sport",
  },
  {
    id: 8,
    imgUrl: "/img/cat-8.png",
    title: "Virtual Worlds",
  },
];

export const Categories = () => {
  return (
    <>
      <div className="text-white max-w-[1440px] mx-auto w-[100%] relative isolate">
        <div className="absolute gradient-04 top-0 right-[20%] w-[100%] z-[-10]"></div>
        <div className="mb-[50px]">
          <h2 className="text-[40px] max1:text-[35px] max1:mb-[15px] font-Libre">
            Browse Categories
          </h2>
        </div>
        <div className="grid grid-cols-gd4 max3:grid-cols-gd3 gap-[40px] max3:gap-[30px] categories_grid">
          {categoryData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col rounded-[25px] bg-clip-padding backdrop-filter backdrop-blur-sm border-gray-100 hover:shadow-black/70 hover:shadow-2xl bg-gr2 shine"
            >
              <img src={card.imgUrl} alt={card.title} />
              <div className="px-[15px] py-[7px] text-center">
                <p className="font-cursive">{card.title}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
