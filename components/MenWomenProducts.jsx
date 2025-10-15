"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenWomenProducts = () => {
  return (
    <div className="max-w-[1600px] w-full mx-auto px-[15px]">
      <div className="flex justify-between flex-col sm:flex-row items-center gap-x-[30px]">
        <div className="w-[100%] h-auto sm:w-[50%] mb-[20px] overflow-hidden relative">
          <Image
            src="/images/menwomen/1.jpg"
            alt="women"
            height={669}
            width={644}
            className="w-full h-full object-covertransition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-0 left-0 h-auto w-full p-[70px] text-[#fff]">
            <h1 className="uppercase  mb-[40px] tracking-[.05rem] text-[30px] font-medium">
              womens watches
            </h1>
            <div>
              <Link
                href="#"
                className="uppercase pt-[12px] tracking-[.05rem] pb-[11px] pl-[50px] pr-[49px] border border-[#fff] text-[14px] font-medium"
              >
                show now
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-auto sm:w-[50%] mb-[20px] overflow-hidden relative">
          <Image
            src="/images/menwomen/2.jpg"
            alt="women"
            height={669}
            width={644}
            className="w-full h-full object-covertransition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-0 left-0 h-auto w-full p-[70px] text-[#fff]">
            <h1 className="uppercase  mb-[40px] text-right tracking-[.05rem] text-[30px] font-medium">
              mens watches
            </h1>
            <div className="text-right">
              <Link
                href="#"
                className="uppercase pt-[12px] tracking-[.05rem] pb-[11px] pl-[50px] pr-[49px] border border-[#fff] text-[14px] font-medium"
              >
                show now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenWomenProducts;
