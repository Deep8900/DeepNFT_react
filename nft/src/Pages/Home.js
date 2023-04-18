import React from "react";
import "../index.css";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Collection } from "../components/Collection";
import { Creator } from "../components/Creator";
import { Categories } from "../components/Categories";
import { Setup } from "../components/Setup";
import { Timer } from "../components/Timer";


export const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* hero section */}
      <section className="[ bg-gradient-to-r from-black/90 to-black/75 ] w-[100%] min-h-[calc(100vh-80px)]">
        <Hero />
      </section>

      {/* Trending collection */}
      <section className="[ bg-gradient-to-r from-black/90 to-black/75 ] py-[80px] max1:py-[60px] px-[50px] max1:px-[25px] w-[100%] h-[100%]">
        <Collection />
      </section>

      {/* Top Creator */}
      <section className="[ bg-gradient-to-r from-black/90 to-black/75 ] py-[80px] max1:py-[60px] px-[50px] max1:px-[25px] w-[100%] h-[100%]">
        <Creator />
      </section>

      {/* Browse Categories */}
      <section className="[ bg-gradient-to-r from-black/90 to-black/75 ] py-[80px] max1:py-[60px] px-[50px] max1:px-[25px] w-[100%] h-[100%]">
        <Categories />
      </section>

      {/* Home Timer */}
      <section className="w-[100%] h-[100%]">
        <Timer />
      </section>

      {/* How it Works */}
      <section className="[ bg-gradient-to-r from-black/90 to-black/75 ] py-[80px] max1:py-[60px] px-[50px] max1:px-[25px] w-[100%] h-[100%]">
        <Setup />
      </section>
    </>
  );
};
