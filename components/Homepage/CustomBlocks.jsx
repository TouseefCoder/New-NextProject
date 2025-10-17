import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomBlocks = () => {
  return (
    <div className="max-w-[1600px] w-full mx-auto px-[15px]">
      <div className="title pt-[67px] mb-[40px]">
        <h3 className="text-[24px] text-[#0f0f0f] tracking-[.05rem] mb-[20px] font-medium text-center uppercase">
          #custom blocks
        </h3>
        <p className="p-0 sm:px-[90px] md:px-[200px] lg:px-[160px] xl:px-[460px] text-center text-[#5a5a5a] text-[14px]">
          Nullam aliquet vestibulum augue non varius. Cras nec congue elit duis
          tristique vel ante nec aliquam. Praesent urna tellus laoreet eu tellus
          ullamcorper fermentum facilisis erat. Suspendisse tellus erat saliquam
          vel loremous a posuere tincidunt melitos.
        </p>
      </div>
      <div className="flex justify-between flex-col sm:flex-row items-center">
        <div className="w-[100%] mb-[20px] overflow-hidden relative">
          <Image
            src="/images/custom block/1.jpg"
            alt="women"
            height={669}
            width={644}
            className="w-full h-full object-covertransition-transform duration-500 hover:scale-110"
          />
          <div className="max-w-[455px] w-full mx-auto relative sm:absolute sm:top-1/2 p-5 sm:right-[10%] sm:-translate-y-1/2">
            <h3 className="text-[14px] uppercase text-[#000000] sm:text-[#ffffff] font-medium text-center mb-[10px]">
              editor's picks
            </h3>
            <h1 className="text-[24px] lg:text-[40px] font-medium text-center mb-[10px] uppercase text-[#000000] sm:text-[#ffffff]">
              milancelos
            </h1>
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
      </div>
    </div>
  );
};

export default CustomBlocks;
