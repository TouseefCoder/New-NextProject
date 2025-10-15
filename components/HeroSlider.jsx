"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer
                 opacity-0 md:group-hover:opacity-100
                 transition-all duration-300 ease-in-out
                 flex justify-center items-center
                 w-[72px] h-[72px] rounded-full border border-gray-400"
    >
      <ChevronRight size={35} strokeWidth={1} color={"#99a1af"} />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer
                 opacity-0 md:group-hover:opacity-100
                 transition-all duration-300 ease-in-out
                 flex justify-center items-center
                 w-[72px] h-[72px] rounded-full border border-gray-400"
    >
      <ChevronLeft size={35} strokeWidth={1} color={"#99a1af"} />
    </button>
  );
}

export default function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  const settings = {
    // autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    fade: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    appendDots: (dots) => (
      <div
        style={{
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul className=" flex justify-center space-x-2 m-0 p-0">{dots}</ul>
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
  };

  return (
    <>
      <div className="relative group mb-0 pb-0">
        <Slider {...settings} className="bg-transparent sm:bg-[#f4f4f4]">
          <div className="mb-0 pb-0">
            <Image
              src="/images/hero-slider/slider1.jpg"
              alt="Slide 1"
              height={710}
              width={1920}
            />
            <h3 className="text-[24px] block sm:hidden absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-[40px] font-medium text-center mb-[10px] uppercase text-[#ffffff]">
              cosmopolis
            </h3>
            <div className="max-w-[455px] w-full mx-auto h-[174px] relative sm:absolute sm:top-1/2 p-5 lg:left-[21%] md:left-[4%] sm:-translate-y-1/2">
              <h3 className="text-[24px] hidden sm:block lg:text-[40px] font-medium text-center mb-[10px] uppercase text-[#ffffff]">
                cosmopolis
              </h3>
              <p className="text-[12px] lg:text-[14px] font-normal leading-[22px] mb-[18px] text-center text-[#000000] sm:text-[#ffffff]">
                Quisquemos sodales suscipit tortor ditaemcos milancelos
                condimentum de cosmo lacus meleifend blanditios.
              </p>
              <div className="w-full flex justify-center">
                <button className="w-[240px] text-center h-[40px] text-[14px] cursor-pointer hover:bg-[#000000] bg-[#000000] sm:bg-transparent text-white font-[500] border border-white uppercase">
                  shop this collection
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/images/hero-slider/slider2.jpg"
              alt="Slide 1"
              height={700}
              width={1920}
              className="w-full object-cover"
            />
            <h3 className="text-[24px] block sm:hidden absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-[40px] font-medium text-center mb-[10px] uppercase text-[#ffffff]">
              milancelos
            </h3>
            <div className="max-w-[455px] w-full mx-auto h-[174px] relative sm:absolute sm:top-1/2 p-5 lg:left-[21%] md:left-[4%] sm:-translate-y-1/2">
              <h3 className="text-[24px] hidden sm:block lg:text-[40px] font-medium text-center mb-[10px] uppercase text-[#ffffff]">
                milancelos
              </h3>
              <p className="text-[12px] lg:text-[14px] font-normal leading-[22px] mb-[18px] text-center text-[#000000] sm:text-[#ffffff]">
                Quisquemos sodales suscipit tortor ditaemcos milancelos
                condimentum de cosmo lacus meleifend blanditios.
              </p>
              <div className="w-full flex justify-center">
                <button className="w-[240px] text-center h-[40px] text-[14px] cursor-pointer hover:bg-[#000000] bg-[#000000] sm:bg-transparent text-white font-[500] border border-white uppercase">
                  shop this collection
                </button>
              </div>
            </div>
          </div>
          {/* <div className="relative">
            <Image
              src="/images/hero-slider/slider3.jpg"
              alt="Slide 2"
              height={600}
              width={1920}
            />
            <h3 className="text-[24px] block sm:hidden absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-[40px] font-medium text-center mb-[10px] uppercase text-[#ffffff]">
              milancelos
            </h3>
            <div className="max-w-[455px] w-full h-[174px] mx-auto sm:absolute sm:top-1/2 p-5 sm:lg:left-[21%] md:left-[4%] sm:-translate-y-1/2">
              <h3 className="text-[24px] hidden sm:block lg:text-[40px] font-medium text-center mb-[10px] uppercase text-[#ffffff]">
                milancelos
              </h3>
              <p className="text-[12px] lg:text-[14px] font-normal leading-[22px] mb-[18px] text-center text-[#000000] sm:text-[#ffffff]">
                Quisquemos sodales suscipit tortor ditaemcos milancelos
                condimentum de cosmo lacus meleifend blanditios.
              </p>
              <div className="w-full flex justify-center">
                <button className="w-[240px] text-center h-[40px] text-[14px] cursor-pointer hover:bg-[#000000] bg-[#000000] sm:bg-transparent text-white font-[500] border border-white uppercase">
                  shop this collection
                </button>
              </div>
            </div>
          </div> */}
          <div className="">
            <Image
              src="/images/hero-slider/slider3.jpg"
              alt="Slide 3"
              height={600}
              width={1920}
              className="w-full object-cover"
            />
            <h3 className="text-[24px] block sm:hidden absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-[40px] font-medium text-center mb-[10px] uppercase text-[#ffffff]">
              special offers
            </h3>
            <div className="max-w-[455px] w-full mx-auto mb-[25px] sm:mb-0 relative sm:absolute sm:top-1/2 p-5 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
              <h3 className="text-[24px] hidden sm:block lg:text-[40px] font-medium text-center mb-[10px] uppercase text-[#ffffff]">
                special offers
              </h3>
              <p className="text-[12px] lg:text-[14px] font-normal leading-[22px] mb-[18px] text-center text-[#000000] sm:text-[#ffffff]">
                Quisquemos sodales suscipit tortor ditaemcos milancelos
                condimentum de cosmo lacus meleifend blanditios.
              </p>
              <div className="w-full flex mb-[25px] lg:mb-[30px] justify-center">
                <div className="w-[80px] lg:w-[full] h-full border border-[#000000] text-[#000000] sm:border-white sm:text-white flex flex-col p-[15px] justify-center items-center">
                  <h1 className="text-[20px] lg:text-[30px] font-medium">00</h1>
                  <p className="uppercase text-[12px] font-medium">days</p>
                </div>
                <div className="w-[80px] lg:w-[full] h-full border border-[#000000] text-[#000000] sm:border-white sm:text-white flex flex-col p-[15px] justify-center items-center">
                  <h1 className="text-[20px] lg:text-[30px] font-medium">00</h1>
                  <p className="uppercase text-[12px] font-medium">mins</p>
                </div>
                <div className="w-[80px] lg:w-[full] h-full border border-[#000000] text-[#000000] sm:border-white sm:text-white flex flex-col p-[15px] justify-center items-center">
                  <h1 className="text-[20px] lg:text-[30px] font-medium">00</h1>
                  <p className="uppercase text-[12px] font-medium">secs</p>
                </div>
                <div className="w-[80px] lg:w-[full] h-full border border-[#000000] text-[#000000] sm:border-white sm:text-white flex flex-col p-[15px] justify-center items-center">
                  <h1 className="text-[20px] lg:text-[30px] font-medium">00</h1>
                  <p className="uppercase text-[12px] font-medium">secs</p>
                </div>
              </div>
              <div className="w-full flex justify-between items-center gap-x-[30px]">
                <Link
                  href="#"
                  className="w-full transition-all duration-300 ease-in-out text-[14px] font-medium text-[#000] text-center  bg-white sm:border-none border border-[#000] hover:text-white hover:bg-[#000] uppercase px-[15px] py-[8px]"
                >
                  shop mens
                </Link>
                <Link
                  href="#"
                  className="w-full transition-all duration-300 ease-in-out text-[14px] font-medium text-[#000] text-center bg-white sm:border-none border border-[#000]hover:text-white hover:bg-[#000] uppercase px-[15px] py-[8px]"
                >
                  shop womens
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
