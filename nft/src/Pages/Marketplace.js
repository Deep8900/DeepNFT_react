import React, { useState, useRef, useEffect  } from "react";
import "../index.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrolltoTop } from "../components/ScrolltoTop";


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
  {
    id: 13,
    imageUrl1: "/img/market/mar-13.png",
    name: "Foxy Life",
    name2: "Orbitian",
    volume: "12.3 ETH",
    volume2: "05.9 wETH",
    img2: "/img/Avatar-13.png",
  },
  {
    id: 14,
    imageUrl1: "/img/market/mar-14.png",
    name: "Cat from future",
    name2: "Animakid",
    volume: "15.9 ETH",
    volume2: "00.9 wETH",
    img2: "/img/Avatar-9.png",
  },
  {
    id: 15,
    imageUrl1: "/img/market/mar-15.png",
    name: "Psycho Dog",
    name2: "Orbitian",
    volume: "45.8 ETH",
    volume2: "45.0 wETH",
    img2: "/img/Avatar-13.png",
  },
  {
    id: 16,
    imageUrl1: "/img/market/mar-16.png",
    name: "Dancing Robot 0375",
    name2: "Mr Fox",
    volume: "49.2 ETH",
    volume2: "75.2 wETH",
    img2: "/img/Avatar-4.png",
  },
  {
    id: 17,
    imageUrl1: "/img/market/mar-17.png",
    name: "Dancing Robot 0356",
    name2: "Shroomie",
    volume: "42.9 ETH",
    volume2: "53.5 wETH",
    img2: "/img/Avatar-1.png",
  },
  {
    id: 18,
    imageUrl1: "/img/market/mar-18.png",
    name: "Dancing Robot 0321",
    name2: "NebulaKid",
    volume: "83.1 ETH",
    volume2: "53.4 wETH",
    img2: "/img/Avatar-8.png",
  },
  {
    id: 19,
    imageUrl1: "/img/market/mar-19.png",
    name: "Dancing Robot 0512",
    name2: "Catch 22",
    volume: "73.9 ETH",
    volume2: "06.9 wETH",
    img2: "/img/Avatar-10.png",
  },
  {
    id: 20,
    imageUrl1: "/img/market/mar-20.png",
    name: "",
    name2: "Robotica",
    volume: "82.4 ETH",
    volume2: "53.6 wETH",
    img2: "/img/Avatar-6.png",
  },
  {
    id: 21,
    imageUrl1: "/img/market/mar-21.png",
    name: "Distant Galaxy",
    name2: "Orbitian",
    volume: "15.3 ETH",
    volume2: "75.3 wETH",
    img2: "/img/Avatar-13.png",
  },
  {
    id: 22,
    imageUrl1: "/img/market/mar-22.png",
    name: "Life On Edena",
    name2: "Shroomie",
    volume: "85.2 ETH",
    volume2: "42.0 wETH",
    img2: "/img/Avatar-1.png",
  },
  {
    id: 23,
    imageUrl1: "/img/market/mar-23.png",
    name: "AstroFiction",
    name2: "PuppyPower",
    volume: "45.0 ETH",
    volume2: "71.7 wETH",
    img2: "/img/Avatar-13.png",
  },
  {
    id: 24,
    imageUrl1: "/img/market/mar-24.png",
    name: "CryptoCity",
    name2: "Catch 22",
    volume: "96.6 ETH",
    volume2: "91.2 wETH",
    img2: "/img/Avatar-10.png",
  },
  {
    id: 25,
    imageUrl1: "/img/market/mar-25.png",
    name: "ColorfulDog 0524",
    name2: "NebulaKid",
    volume: "75.7 ETH",
    volume2: "46.8 wETH",
    img2: "/img/Avatar-8.png",
  },
  {
    id: 26,
    imageUrl1: "/img/market/mar-26.png",
    name: "Space Tales",
    name2: "KeepitReal",
    volume: "82.4 ETH",
    volume2: "57.2 wETH",
    img2: "/img/Avatar-5.png",
  },
  {
    id: 27,
    imageUrl1: "/img/market/mar-27.png",
    name: "IceCream Ape ",
    name2: "Mr Fox",
    volume: "82.1 ETH",
    volume2: "61.9 wETH",
    img2: "/img/Avatar-4.png",
  },
];


export const Marketplace = () => {

  // search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = marketData.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.name2.toLowerCase().includes(searchQuery.toLowerCase())
  );


  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }


  // search bar open when we click on search icon
  const searchInputRef = useRef(null);


  // No result found message on top
  const searchMessage1 = `${searchQuery}`;


  // to scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [currentPage])


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
                className="w-[100%] bg-transparent border border-white/10 rounded-[15px] placeholder-white/20 placeholder:text-[14px] py-[10px] px-[15px] outline-none focus:border-white/40"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                ref={searchInputRef}
              />
              <img
                src="/img/svg/search.svg"
                alt="search"
                className="absolute top-[12px] right-[15px] h-[20px] opacity-60 cursor-pointer"
                onClick={() => searchInputRef.current.focus()}
              />
            </div>
          </div>

          <div>
            {filteredData && filteredData.length ? (
              <div>
                <div className="grid grid-cols-gd3 max3:grid-cols-gd1 gap-[40px] max3:gap-[30px] market_grid">
                  {currentItems.map((card) => (
                    <div
                      key={card.id}
                      className="flex flex-col rounded-[25px] hover:shadow-2xl bg-gr2 shine"
                    >
                      <img src={card.imageUrl1} alt={card.title} loading="lazy"/>
                      <div className="px-[20px] py-[15px] flex flex-col gap-[15px]">
                        <p className="font-cursive text-[20px]">{card.name}</p>
                        <div className="flex gap-[15px] items-center">
                          <img
                            src={card.img2}
                            alt={card.name2}
                            className="h-[35px]"
                            loading="lazy"
                          />
                          <span className="font-mono text-[16px] opacity-80">
                            {card.name2}
                          </span>
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
                <div className="flex justify-center mt-[50px]">
                  <div className="pagi_con flex gap-[5px] rounded-[8px]">
                  {pageNumbers.map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-3 rounded-[8px] pagi_btn leading-tight hover:bg-gray-800 ${
                        currentPage === pageNumber ? "z-10 px-4 py-3  bg-gray-800 text-white/40" : "bg-gray-700 text-white/80 pagi_btn_notactive"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  </div>
                </div>
              </div>
            ) : (
              <p className="font-mono mb-[20px] text-[16px]">No results found for "{searchMessage1}"</p>        
            )}
          </div>
        </div>
      </section>

      {/* scroll to Top */}
      <ScrolltoTop />
      
      {/* Footer */}
      <Footer />
    </>
  );
};