"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { FaAngleDown } from "react-icons/fa6";
const page = () => {
  return (
    <div className="">
      <Navbar />
      <div className="h-[320px] w-full scroll-mt-[160px]">
        <Image
          src="/images/hero-slider/slider3.jpg"
          height={340}
          width={2000}
          alt="men"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full max-w-[1170px] mx-auto mt-[30px] mb-[45px] xl:my-[45px] px-[10px] xl:px-[15px]">
        <h3 className="text-[24px] text-[#0f0f0f] tracking-[.05rem] mb-[20px] font-medium text-center uppercase">
          mens
        </h3>
        <p className="text-center text-[#5a5a5a] text-[14px]">
          Nam tempus turpis at metus scelerisque placerat nulla deumantos
          sollicitudin delos felis. Pellentesque diam dolor an elementum et
          lobortis at mollis ut risus. Curabitur semper sagittis mino de
          condimentum. Donec an mullamcorper mauris. Lorem ipsum dolor sit amet
          consectetur curabitur porttitor.
        </p>
      </div>
      <div className="w-full max-w-[1770px] mx-auto px-[10px] xl:px-[15px] toolbar mb-[35px] flex justify-between items-center">
        <div className="left">
          <h2 className="text-[12px] tracking-[.05em] text-[#232323] font-medium uppercase flex items-center gap-x-[15px]">
            <BsSliders size={24} />
            shop by
          </h2>
        </div>
        <div className="right flex items-center justify-between gap-x-[30px]">
          <div className="flex items-center">
            <h2 className="text-[12px] tracking-[.05em] mr-[15px] text-[#232323] font-medium uppercase">
              view as
            </h2>
            <div className="flex items-center divide-x divide-[#dadada] border border-[#dadada]">
              <span className="h-[45px] w-[45px] flex items-center justify-center">
                <BsFillGrid3X3GapFill size={14} />
              </span>
              <span className="h-[45px] w-[45px] flex items-center justify-center">
                <ImMenu size={14} color={"#dadada"} />
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <h2 className="text-[12px] tracking-[.05em] mr-[15px] text-[#232323] font-medium uppercase">
              show
            </h2>
            <div className="relative">
              <div className="text-[12px] text-[#5f5f5f] flex justify-between items-center w-[187px] h-[42px] py-[10px] px-[15px] border border-[#dadada]">
                <p>16 shows</p>
                <FaAngleDown size={12} />
              </div>
              <div className="absolute hidden mt-[5px] text-[12px] text-[#5f5f5f] w-[187px] py-[10px] px-[15px] border border-[#dadada]">
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
          <div className="flex items-center">
            <h2 className="text-[12px] tracking-[.05em] mr-[15px] text-[#232323] font-medium uppercase">
              sort by
            </h2>
            <div className="relative">
              <div className="text-[12px] text-[#5f5f5f] flex justify-between items-center w-[187px] h-[42px] py-[10px] px-[15px] border border-[#dadada]">
                <p>16 shows</p>
                <FaAngleDown size={12} />
              </div>
              <div className="absolute hidden mt-[5px] text-[12px] text-[#5f5f5f] w-[187px] py-[10px] px-[15px] border border-[#dadada]">
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
      <div className="h-screen w-full bg-amber-500">
        <h1>Helo Pizza Shop</h1>
      </div>
    </div>
  );
};

export default page;
