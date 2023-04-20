import React, { useEffect } from "react";
import "../index.css";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Collection } from "../components/Collection";
import { Creator } from "../components/Creator";
import { Categories } from "../components/Categories";
import { Setup } from "../components/Setup";
import { Timer } from "../components/Timer";
import { NewsLetter } from "../components/NewsLetter";
import { Footer } from "../components/Footer";

export const Home = () => {

  // to scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])


  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* hero section */}
      <section className="bg-gr1 w-[100%] min-h-[calc(100vh-80px)]">
        <Hero />
      </section>

      {/* Trending collection */}
      <section className="bg-gr1 py-[80px] max1:py-[60px] px-[50px] max1:px-[25px] w-[100%] h-[100%]">
        <Collection />
      </section>

      {/* Top Creator */}
      <section className="bg-gr1 py-[80px] max1:py-[60px] px-[50px] max1:px-[25px] w-[100%] h-[100%]">
        <Creator />
      </section>

      {/* Browse Categories */}
      <section className="bg-gr1 py-[80px] max1:py-[60px] px-[50px] max1:px-[25px] w-[100%] h-[100%]">
        <Categories />
      </section>

      {/* Home Timer */}
      <section className="bg-hero_timer w-[100%] h-[100vh] bg-cover bg-center relative">
        <Timer />
      </section>

      {/* How it Works */}
      <section className="bg-gr1 py-[80px] max1:py-[60px] px-[50px] max1:px-[25px] w-[100%] h-[100%]">
        <Setup />
      </section>

      {/* Newsletter */}
      <section className="bg-gr1 py-[80px] max1:py-[60px] px-[50px] max1:px-[25px] w-[100%] h-[100%]">
        <NewsLetter />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};