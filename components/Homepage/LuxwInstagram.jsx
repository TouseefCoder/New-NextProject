import { FilePlus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FiPlus } from "react-icons/fi";

const LuxwInstagram = () => {
  return (
    <div className="py-[40px] w-full">
      <div className="w-full max-w-[1600px] px-[15px] mx-auto">
        <h3 className="text-[24px] text-[#433b32] tracking-[.05rem] mb-[20px] font-medium text-center uppercase">
          #luxw on instagram
        </h3>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <Image
              src="/images/new collections/5.jpg"
              alt="image 5"
              height={1000}
              width={1000}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <Image
              src="/images/new collections/6.jpg"
              alt="image 6"
              height={1000}
              width={1000}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <Image
              src="/images/new collections/7.jpg"
              alt="image 3"
              height={1000}
              width={1000}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <Image
              src="/images/new collections/8.jpg"
              alt="image 4"
              height={1000}
              width={1000}
            />
          </div>
        </div>
        <div className="mt-[30px] flex justify-center">
          <FiPlus size={70} color={"#f8941e"} />
        </div>
      </div>
    </div>
  );
};

export default LuxwInstagram;
