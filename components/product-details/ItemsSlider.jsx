"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./newreleases.module.css";
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
      className={`block absolute right-[-35px] top-1/2 transform -translate-y-1/2 translate-x-0
        text-black rounded-full z-10 
        ${
          isDisabled
            ? "opacity-40 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }`}
      onClick={!isDisabled ? onClick : undefined}
    >
      <ChevronRight size={"40px"} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, currentSlide } = props;
  const isHidden = currentSlide === 0;
  return (
    <div
      className={`block absolute left-[-35px] top-1/2 transform -translate-y-1/2 translate-x-0  text-black rounded-full z-10 ${
        isHidden
          ? "opacity-40  cursor-not-allowed"
          : "opacity-100 cursor-pointer"
      }`}
      onClick={onClick}
      disabled={isHidden}
    >
      <ChevronLeft size={"40px"} />
    </div>
  );
}

const ItemsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
        <ul className="hidden justify-center space-x-2 m-0 p-0">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${
          i === activeIndex
            ? "border border-gray-400"
            : "bg-gray-400 hover:bg-gray-600"
        }`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full relative mt-[15px]">
      <Slider {...settings} className={styles.sliderContainer}>
        <div className="relative h-auto text-center text-[#232323]">
          <Image
            src="/images/new releases/11.jpg"
            alt="image 1"
            height={500}
            width={500}
            className="mb-[12px]"
          />
        </div>
        <div className="relative h-auto text-center text-[#232323]">
          <Image
            src="/images/new releases/12.jpg"
            alt="image 1"
            height={500}
            width={500}
            className="mb-[12px]"
          />
        </div>
        <div className="relative h-auto text-center text-[#232323]">
          <Image
            src="/images/new releases/13.jpg"
            alt="image 1"
            height={500}
            width={500}
            className="mb-[12px]"
          />
        </div>
        <div className="relative h-auto text-center text-[#232323]">
          <Image
            src="/images/new releases/14.jpg"
            alt="image 1"
            height={500}
            width={500}
            className="mb-[12px]"
          />
        </div>
        <div className="relative h-auto text-center text-[#232323]">
          <Image
            src="/images/new releases/15.jpg"
            alt="image 1"
            height={500}
            width={500}
            className="mb-[12px]"
          />
        </div>
        <div className="relative h-auto text-center text-[#232323]">
          <Image
            src="/images/new releases/16.jpg"
            alt="image 1"
            height={500}
            width={500}
            className="mb-[12px]"
          />
        </div>
        <div className="relative h-auto text-center text-[#232323]">
          <Image
            src="/images/new releases/17.jpg"
            alt="image 1"
            height={500}
            width={500}
            className="mb-[12px]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ItemsSlider;
