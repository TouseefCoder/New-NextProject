"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "@/components/SliderCss/collection.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

function NextArrow(props) {
  const { onClick, currentSlide, slideCount, slidesToShow = 5 } = props;

  // Disable button when reaching the last slide
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
          bottom: "-20px",
          transform: "translateX(-50%)",
        }}
      >
        <ul className="flex justify-center space-x-2 m-0 p-0">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
    <div className="max-w-[1200px] w-full mx-auto px-[15px] mt-[50px]">
      <div className="w-full relative">
        <Slider {...settings} className={`${styles.sliderContainer}`}>
          <div className="flex justify-center">
            <Image
              src="/images/logo slider/1.jpg"
              alt="image 1"
              height={70}
              width={204}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logo slider/2.jpg"
              alt="image 1"
              height={70}
              width={204}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logo slider/3.jpg"
              alt="image 1"
              height={70}
              width={204}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logo slider/4.jpg"
              alt="image 1"
              height={70}
              width={204}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logo slider/5.jpg"
              alt="image 1"
              height={70}
              width={204}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logo slider/1.jpg"
              alt="image 1"
              height={70}
              width={204}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TopSeller;
