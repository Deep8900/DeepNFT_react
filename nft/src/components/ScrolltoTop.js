import React, { useState } from "react";
import "../index.css";

export const ScrolltoTop = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900) {
      setVisible(true);
    } else if (scrolled <= 900) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  
  return (
    <>
      <button
        className="cursor-pointer bottom-5 max1:bottom-3 right-5 max1:right-3 fixed rounded-full p-[6px] bg-gr5 scroll_top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <img src="/img/svg/Arrow.svg" alt="Arrow" className="h-[25px] max1:h-[20px]" />
      </button>
    </>
  );
};
