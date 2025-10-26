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
      className={`hidden lg:block absolute right-0 top-1/3 transform -translate-y-1/3 
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
      className={`hidden lg:block absolute left-0 top-1/3 transform -translate-y-1/3 h-[40px] w-[40px] bg-black text-white rounded-full p-2 z-10 ${
        isHidden ? "opacity-40" : "opacity-100"
      }`}
      onClick={onClick}
      disabled={isHidden}
    >
      <ChevronLeft />
    </div>
  );
}

const RecentlyViewed = () => {
  // const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [totalDots, setTotalDots] = useState(0);

  const settings = {
    dots: true, // disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
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
        <ul className="flex sm:hidden justify-center space-x-2 m-0 p-0">
          {dots}
        </ul>
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
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="max-w-[1890px] lg:px-[60px] pt-[40px] mb-[60px] mx-auto pl-[20px] pr-[20px] w-full h-full">
      {/* <h3 className="text-[24px] text-[#0f0f0f] font-medium mb-[15px] text-center uppercase">
        new releases
      </h3> */}
      <h3 className="text-[24px] text-[#0f0f0f] font-medium mb-[30px] text-left md:text-center uppercase">
        Recently Viewed products
      </h3>
      {/* <ul className="flex items-center sm:justify-center overflow-x-auto whitespace-nowrap scroll-smooth pb-[15px] sm:pb-0 mb-[18px]">
        <li className="text-[14px] font-medium capitalize border border-[#5f5f5f] text-[#5f5f5f] rounded-[20px] px-[15px] py-[11px]">
          mens
        </li>
        <li className="text-[14px] font-medium capitalize text-[#5f5f5f] rounded-[20px] px-[15px] py-[11px]">
          womens
        </li>
        <li className="text-[14px] font-medium capitalize text-[#5f5f5f] rounded-[20px] px-[15px] py-[11px] whitespace-nowrap">
          luxury watches
        </li>
        <li className="text-[14px] font-medium capitalize text-[#5f5f5f] rounded-[20px] px-[15px] py-[11px]">
          jewelery
        </li>
        <li className="text-[14px] font-medium capitalize text-[#5f5f5f] rounded-[20px] px-[15px] py-[11px]">
          accessories
        </li>
        <li className="text-[14px] font-medium capitalize text-[#5f5f5f] rounded-[20px] px-[15px] py-[11px] whitespace-nowrap">
          special offers
        </li>
      </ul> */}
      <div className="w-full relative grid grid-cols-12 gap-x-[15px]">
        {/* <Slider
          // ref={sliderRef}
          {...settings}
          className={`${styles.sliderContainer}`}
        > */}
        <div className="relative text-center text-[#232323] col-span-2">
          <div className="absolute top-0 left-0 w-full h-full p-[15px] bg-transparent">
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                New
              </span>
            </p>
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#b20000] capitalize">
                  sale
                </span>
              </p> */}
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#232323] capitalize">
                online only
              </span>
            </p>
          </div>
          <Image
            src="/images/new releases/1.jpg"
            alt="image 1"
            height={500}
            width={500}
            className="mb-[12px]"
          />
          <p className="text-[12px] ">Mangos</p>
          <p className="leading-[22px] text-[14px] font-medium mb-[4px] ">
            Ampus Cosmo De Milancelos Scelerisque
          </p>
          <p className="text-[14px] font-[400] mb-[15px]">$ 500.00</p>
          <ul className="flex items-center justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/1.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/1.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/1.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/1.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Link
                href="#"
                className="text-[#787878] text-[12px] font-[400px]"
              >
                +2
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative text-center text-[#232323] col-span-2">
          <div className="absolute top-0 left-0 w-full h-full p-[15px]">
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                New
              </span>
            </p>
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#b20000] capitalize">
                sale
              </span>
            </p>
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#232323] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/2.jpg"
            alt="image 1"
            height={500}
            width={500}
            className="mb-[12px]"
          />
          <p className="text-[12px] ">Mangos</p>
          <p className="leading-[22px] text-[14px] font-medium mb-[4px] ">
            Ampus Cosmo De Milancelos Scelerisque
          </p>
          <p className="text-[14px] font-[400] mb-[15px]">$ 500.00</p>
          <ul className="flex items-center justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/1.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/1.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/1.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/1.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Link
                href="#"
                className="text-[#787878] text-[12px] font-[400px]"
              >
                +2
              </Link>
            </li>
          </ul>
        </div>
        {/* </Slider> */}

        {/* <div className="flex lg:hidden justify-center mt-6 items-center gap-3">
          {Array.from({ length: totalDots }).map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={` w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === activeIndex
                  ? "bg-gray-800 scale-110"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            ></div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default RecentlyViewed;
