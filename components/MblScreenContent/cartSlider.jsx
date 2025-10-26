"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
// import styles from "./newreleases.module.css";
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
      className={`hidden xl:block absolute right-0 top-1/3 transform -translate-y-1/3 
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
      className={`hidden xl:block absolute left-0 top-1/3 transform -translate-y-1/3  text-black rounded-full z-10 ${
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

const CartSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${
          i === activeIndex
            ? "border border-gray-400"
            : "bg-gray-400 hover:bg-gray-600"
        }`}
      ></div>
    ),
  };
  return (
    <div className="w-full relative mt-[15px]">
      <Slider {...settings}>
        <div className="relative h-auto text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto ">
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

          <ul className="flex items-center mb-[25px]  justify-center gap-x-[2px]">
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#0f0f0f] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] text-[#ffffff] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto ">
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
          <ul className="flex items-center mb-[25px] justify-center gap-x-[2px]">
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#0f0f0f] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto ">
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
            src="/images/new releases/3.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#0f0f0f] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto ">
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                  New
                </span>
              </p> */}
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#b20000] capitalize">
                  sale
                </span>
              </p> */}
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#232323] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/4.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#787878] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              unavailable
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto ">
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
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#232323] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/5.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#0f0f0f] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto ">
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
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#232323] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/6.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#787878] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              unavailable
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto ">
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
            src="/images/new releases/7.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#0f0f0f] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto ">
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
            src="/images/new releases/8.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#0f0f0f] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto ">
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
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#232323] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/9.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#0f0f0f] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
        <div className="relative text-center text-[#232323]">
          <div className="absolute top-0 left-0 w-full h-auto ">
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
            {/* <p className="pt-0 top-content text-end mb-[5px]">
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#232323] capitalize">
                  online only
                </span>
              </p> */}
          </div>
          <Image
            src="/images/new releases/10.jpg"
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
          <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#0f0f0f] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
            <Link href="#" className="uppercase font-medium">
              select options
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CartSlider;
