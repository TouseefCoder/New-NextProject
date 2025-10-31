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

const BlogSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
        <ul className="flex xl:hidden justify-center space-x-2 m-0 p-0">
          {dots}
        </ul>
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
  };
  return (
    <div className="w-full relative mt-[15px]">
      <Slider {...settings} className={`${styles.sliderContainer}`}>
        <div className="relative h-auto text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                New
              </span>
            </p>
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#f8941e] capitalize">
                  sale
                </span>
              </p> */}
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#433b32] capitalize">
                online only
              </span>
            </p>
          </div>
          <Image
            src="/images/new releases/11.jpg"
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

          <ul className="flex items-center mb-[25px]  justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/11.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/12.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/13.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/14.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] hover:bg-transparent hover:border border-[#f8941e]  text-white hover:text-[#f8941e] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                New
              </span>
            </p>
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#f8941e] capitalize">
                sale
              </span>
            </p>
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#433b32] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/12.jpg"
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
          <ul className="flex items-center mb-[25px] justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/11.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/12.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/13.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/14.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#f8941e] hover:text-[#f8941e] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                New
              </span>
            </p>
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#f8941e] capitalize">
                  sale
                </span>
              </p> */}
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#433b32] capitalize">
                online only
              </span>
            </p>
          </div>
          <Image
            src="/images/new releases/13.jpg"
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
          <ul className="flex items-center mb-[25px] justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/11.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/12.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/13.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/14.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#f8941e] hover:text-[#f8941e] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                  New
                </span>
              </p> */}
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#f8941e] capitalize">
                  sale
                </span>
              </p> */}
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#433b32] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/14.jpg"
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
          <ul className="flex items-center mb-[25px] justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/11.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/12.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/13.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/14.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto opacity-[0.6] bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#f8941e] hover:text-[#f8941e] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              unavailable
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                New
              </span>
            </p>
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#f8941e] capitalize">
                  sale
                </span>
              </p> */}
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#433b32] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/15.jpg"
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
          <ul className="flex items-center mb-[25px] justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/11.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/12.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/13.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/14.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#f8941e] hover:text-[#f8941e] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                New
              </span>
            </p>
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#f8941e] capitalize">
                  sale
                </span>
              </p> */}
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#433b32] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/16.jpg"
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
          <ul className="flex items-center mb-[25px] justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/11.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/12.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/13.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/14.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto opacity-[0.6] bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#f8941e] hover:text-[#f8941e] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              unavailable
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                New
              </span>
            </p>
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#f8941e] capitalize">
                sale
              </span>
            </p>
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#433b32] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/17.jpg"
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
          <ul className="flex items-center mb-[25px] justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/11.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/12.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/13.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/14.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#f8941e] hover:text-[#f8941e] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                New
              </span>
            </p>
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#f8941e] capitalize">
                sale
              </span>
            </p>
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#433b32] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/18.jpg"
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
          <ul className="flex items-center mb-[25px] justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/11.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/12.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/13.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/14.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#f8941e] hover:text-[#f8941e] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                New
              </span>
            </p>
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#f8941e] capitalize">
                  sale
                </span>
              </p> */}
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#433b32] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/19.jpg"
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
          <ul className="flex items-center mb-[25px]  justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/11.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/12.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/13.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/14.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#f8941e] hover:text-[#f8941e] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
            <p className="pt-0 top-content text-end mb-[5px]">
              <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                New
              </span>
            </p>
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#f8941e] capitalize">
                  sale
                </span>
              </p> */}
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#433b32] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/20.jpg"
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
          <ul className="flex items-center mb-[25px]  justify-center gap-x-[2px]">
            <li>
              <Image
                src="/images/new releases/11.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/12.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/13.jpg"
                height={22}
                width={22}
                alt="price image"
              />
            </li>
            <li>
              <Image
                src="/images/new releases/14.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#f8941e] hover:text-[#f8941e] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
      </Slider>

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
  );
};

export default BlogSlider;
