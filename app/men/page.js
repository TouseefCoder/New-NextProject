"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { FaAngleDown } from "react-icons/fa6";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Footer";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="h-[320px] w-full scroll-mt-[160px]">
          <Image
            src="/images/hero-slider/slider4.jpeg"
            height={340}
            width={2000}
            alt="men"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full max-w-[1170px] mx-auto mt-[30px] mb-[45px] xl:my-[45px] px-[10px] xl:px-[15px]">
          <h3 className="text-[24px] text-[#433b32] tracking-[.05rem] mb-[20px] font-medium text-center uppercase">
            mens
          </h3>
          <p className="text-center text-[#5a5a5a] text-[12px]">
            Nam tempus turpis at metus scelerisque placerat nulla deumantos
            sollicitudin delos felis. Pellentesque diam dolor an elementum et
            lobortis at mollis ut risus. Curabitur semper sagittis mino de
            condimentum. Donec an mullamcorper mauris. Lorem ipsum dolor sit
            amet consectetur curabitur porttitor.
          </p>
        </div>
        <div className="w-full max-w-[1770px] mx-auto px-[10px] xl:px-[15px] toolbar mb-[35px] flex flex-col xl:flex-row xl:justify-between justify-between xl:items-center items-start gap-y-[15px] xl:gap-y-0">
          <div className="left hidden sm:block">
            <h2 className="text-[12px] tracking-[.05em] text-[#232323] font-medium uppercase flex items-center gap-x-[15px]">
              <BsSliders size={24} />
              shop by
            </h2>
          </div>
          <div className="right w-full xl:w-auto flex flex-col sm:flex-row items-center justify-between gap-x-[30px] gap-y-[15px] sm:gap-y-0">
            <div className="flex justify-between w-full sm:w-auto items-center">
              <div className="left block sm:hidden">
                <h2 className="text-[12px] tracking-[.05em] text-[#232323] font-medium uppercase flex items-center gap-x-[15px]">
                  <BsSliders size={24} />
                  shop by
                </h2>
              </div>
              <div className="flex items-center">
                <h2 className="text-[12px] tracking-[.05em] mr-[15px] text-[#232323] font-medium uppercase">
                  view as
                </h2>
                <div className="flex items-center divide-x divide-[#f8941e] border border-[#f8941e]">
                  <span className="h-[45px] w-[45px] flex items-center justify-center">
                    <BsFillGrid3X3GapFill size={14} />
                  </span>
                  <span className="h-[45px] w-[45px] flex items-center justify-center">
                    <ImMenu size={14} color={"#dadada"} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full sm:w-auto">
              <h2 className="text-[12px] tracking-[.05em] mr-[15px] text-[#232323] font-medium uppercase">
                show
              </h2>
              <div className="relative">
                <div className="text-[12px] text-[#5f5f5f] flex justify-between items-center w-[187px] h-[42px] py-[10px] px-[15px] border border-[#f8941e]">
                  <p>16 shows</p>
                  <FaAngleDown size={12} />
                </div>
                <div className="absolute z-20 mt-[5px] text-[12px] text-[#5f5f5f] bg-[#fff] w-[187px] py-[10px] px-[15px] border border-[#f8941e]">
                  <ul>
                    <li className="py-[8px]">16 shows</li>
                    <li className="py-[8px]">16 shows</li>
                    <li className="py-[8px]">16 shows</li>
                    <li className="py-[8px]">16 shows</li>
                    <li className="py-[8px]">16 shows</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full sm:w-auto">
              <h2 className="text-[12px] tracking-[.05em] mr-[15px] text-[#232323] font-medium uppercase">
                sort by
              </h2>
              <div className="relative">
                <div className="text-[12px] text-[#5f5f5f] flex justify-between items-center w-[187px] h-[42px] py-[10px] px-[15px] border border-[#f8941e]">
                  <p>Featured</p>
                  <FaAngleDown size={12} />
                </div>
                <div className="absolute hidden mt-[5px] text-[12px] bg-[#fff] text-[#5f5f5f] w-[187px] py-[10px] px-[15px] border border-[#f8941e]">
                  <ul>
                    <li className="py-[8px]">16 shows</li>
                    <li className="py-[8px]">16 shows</li>
                    <li className="py-[8px]">16 shows</li>
                    <li className="py-[8px]">16 shows</li>
                    <li className="py-[8px]">16 shows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1770px] mx-auto px-[10px] xl:px-[15px] grid grid-cols-12 gap-[30px]">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
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
                  <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[text-[12px] font-[400] text-[#ffffff] bg-[#232323]] capitalize">
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
              <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] text-[#ffffff] max-w-[240px] p-[15px]">
                <Link href="#" className="uppercase font-medium">
                  select options
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
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
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[text-[12px] font-[400] text-[#ffffff] bg-[#232323]] capitalize">
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
              <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
                <Link href="#" className="uppercase font-medium">
                  select options
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
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
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[text-[12px] font-[400] text-[#ffffff] bg-[#232323]] capitalize">
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
              <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] opacity-[0.6] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
                <Link href="#" className="uppercase font-medium">
                  unavailable
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
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
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[text-[12px] font-[400] text-[#ffffff] bg-[#232323]] capitalize">
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
              <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
                <Link href="#" className="uppercase font-medium">
                  select options
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
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
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[text-[12px] font-[400] text-[#ffffff] bg-[#232323]] capitalize">
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
              <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] opacity-[0.6] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
                <Link href="#" className="uppercase font-medium">
                  unavailable
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
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
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[text-[12px] font-[400] text-[#ffffff] bg-[#232323]] capitalize">
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
              <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] opacity-[0.6] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
                <Link href="#" className="uppercase font-medium">
                  unavailable
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
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
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[text-[12px] font-[400] text-[#ffffff] bg-[#232323]] capitalize">
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
              <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
                <Link href="#" className="uppercase font-medium">
                  select options
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
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
                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[text-[12px] font-[400] text-[#ffffff] bg-[#232323]] capitalize">
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
              <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] text-[#ffffff] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] max-w-[240px] p-[15px]">
                <Link href="#" className="uppercase font-medium">
                  select options
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1770px] mx-auto px-[10px] xl:px-[15px] pt-[10px] flex justify-end">
          <Link
            href="#"
            className="text-[#3c3c3c] text-[12px] font-medium uppercase flex items-end"
          >
            <span className="underline underline-offset-1">
              compare selected
            </span>
            <span className="h-[22px] w-[22px] rounded-full bg-[#f8941e] text-[#ffffff] flex items-center justify-center ml-[5px]">
              0
            </span>
          </Link>
        </div>
        <div className="w-full max-w-[1170px] mx-auto px-[10px] xl:px-[15px]">
          <h3 className="text-[24px] text-[#433b32] tracking-[.05rem]  mt-[25px] mb-[60px] font-medium text-center uppercase">
            recently viewed products
          </h3>
          <div className="grid grid-cols-12 gap-[15px]">
            <div className="col-span-2">
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
                    <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[text-[12px] font-[400] text-[#ffffff] bg-[#232323]] capitalize">
                      online only
                    </span>
                  </p>
                </div>
                <Image
                  src="/images/new releases/12.jpg"
                  alt="image 1"
                  height={500}
                  width={500}
                />
                <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] hover:bg-transparent hover:border border-[#0f0f0f] hover:text-[#0f0f0f] text-[#ffffff] w-full p-[15px]">
                  <Link href="#" className="uppercase font-medium">
                    select options
                  </Link>
                </div>
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
              </div>
            </div>
          </div>
          <p className="text-center text-[#5a5a5a] text-[12px] mt-[25px] mb-[70px]">
            Sample Paragraph Text Block: Nam tempus turpis at metus scelerisque
            placerat nulla deumantos sollicitudin delos felis. Pellentesque diam
            dolor an elementum et lobortis at mollis delos risus. Curabitur
            semper sagittis mino de condimentum. Donec an mullamcorper mauris.
            Lorem ipsum dolor sit amet consectetur curabitur porttitor porta
            augue ddeu milance justo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse et mattis ante. Mauris laoreet nisi
            sagittis lectus lacinia vestibulum.
          </p>
          <div className="flex justify-center items-center gap-x-[10px] py-[16px]">
            <Link href="#" className="text-center text-[#5a5a5a] text-[12px]">
              Home
            </Link>
            <FaAngleRight className="text-[#f8941e] text-[12px]" />
            <Link href="#" className="text-center text-[#5a5a5a] text-[12px]">
              Accessories
            </Link>
          </div>
        </div>
        <Contactus />
        <Footer />
      </div>
    </>
  );
};

export default page;
