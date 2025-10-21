"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./newreleases.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function NextArrow(props) {
  const { onClick, currentSlide, slideCount, slidesToShow = 5 } = props;
  const isDisabled = currentSlide >= slideCount - slidesToShow;

  return (
    <div
      className={`hidden absolute right-0 top-1/3 transform -translate-y-1/3 
        h-[40px] w-[40px] bg-black text-white rounded-full p-2 z-10 
        ${
          isDisabled
            ? "opacity-40 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }`}
      onClick={!isDisabled ? onClick : undefined}
    >
      <ChevronRight />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, currentSlide } = props;
  const isHidden = currentSlide === 0;
  return (
    <div
      className={`hidden absolute left-0 top-1/3 transform -translate-y-1/3 h-[40px] w-[40px] bg-black text-white rounded-full p-2 z-10 ${
        isHidden ? "opacity-40" : "opacity-100"
      }`}
      onClick={onClick}
      disabled={isHidden}
    >
      <ChevronLeft />
    </div>
  );
}

const TopSeller = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "-30px",
          transform: "translateX(-50%)",
        }}
      >
        <ul className="flex justify-center space-x-2 m-0 p-0">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-[8px] h-[8px] sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
          i === activeIndex
            ? "border border-gray-400"
            : "bg-gray-400 hover:bg-gray-600"
        }`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 14440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full bg-[#f4f4f4] box-border ">
      <div className="max-w-[1200px] mx-auto px-[15px]  w-full relative">
        <Slider {...settings} className={`${styles.sliderContainer}`}>
          <div className="pt-[18px] pb-[26px] text-center">
            <span className="text-center text-[12px] uppercase font-medium text-[#0f0f0f] leading-[.1rem]">
              free shopping worldwide
            </span>
          </div>
          <div className="pt-[18px] pb-[26px] text-center">
            <span className="text-center text-[12px] uppercase font-medium text-[#0f0f0f] leading-[.1rem]">
              free in-store returns
            </span>
          </div>
          <div className="pt-[18px] pb-[26px] text-center">
            <span className="text-center text-[12px] uppercase font-medium text-[#0f0f0f] leading-[.1rem]">
              genuine product guarantee
            </span>
          </div>
          <div className="pt-[18px] pb-[26px] text-center">
            <span className="text-center text-[12px] uppercase font-medium text-[#0f0f0f] leading-[.1rem]">
              100% secure shopping
            </span>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TopSeller;
