import Image from "next/image";
import Link from "next/link";
import React from "react";
import Responsive from "./CollectionSlider";

const Collections = () => {
  return (
    <>
      <div className="max-w-[1890px] lg:px-[60px] pl-[20px] pt-[40px] mb-[60px] pr-[20px] w-full h-full flex items-center mx-auto">
        <div className="flex justify-between flex-wrap w-full">
          <div className="w-[100%] lg:w-[33.33%] mb-[20px] mb:0 text-center md:text-left pt-0 pb-0 pl-0 pr-[10px] lg:pt-[62px] lg:pr-[100px] lg:pl-[10px]">
            <h1 className="font-medium text-[24px] text-center lg:text-left text-[#0f0f0f] uppercase mb-[12px]">
              Shop The Collections
            </h1>
            <p className="mb-[18px] text-[#5f5f5f] text-center lg:text-left text-[12px] leading-[22px]">
              Nam tempus turpis at metus scelerisque placerat nulla deumantos
              sollicitudin delos felis. Pellentesque diam dolor an elementum et
              lobortis at mollis ut risus. Curabitur semper sagittis mi
              condimentum...
            </p>
            <div className="w-full text-center lg:text-left">
              <Link
                href="#"
                className="text-[#0f0f0f] font-medium underline decoration-solid underline-offset-[3px] text-center lg:text-left text-[14px] uppercase"
              >
                discover
              </Link>
            </div>
          </div>
          <div className="w-[100%] lg:w-[66.66%]">
            <Responsive />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
