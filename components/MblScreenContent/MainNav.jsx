"use client";
import React from "react";
import { FaXmark } from "react-icons/fa6";
import MyContext from "@/context/MyContext";
import { FaChevronRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";
const MainNavContent = () => {
  const { navLeft, setNavLeft } = React.useContext(MyContext);

  return (
    <div className="w-full h-full">
      <div
        className={`w-[430px] max-w-[calc(100%-30px)] h-full top-0 left-0 rounded transform flex flex-row-reverse transition-transform duration-300 fixed z-60 cursor-pointer ${
          !navLeft ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div
          className="bg-red-600 text-white h-[40px] w-[40px] hover:bg-red-800 transform transition-all duration-300 flex items-center justify-center cursor-pointer"
          onClick={() => setNavLeft(!navLeft)}
        >
          <FaXmark fontSize={"22px"} />
        </div>
        <div className="w-full h-full overflow-auto bg-white px-[8px]">
          <ul className="mb-[20px]">
            <li className="text-[12px] text-[#c5c2c2] w-full flex justify-between items-center border-b border-[#ffe9d0]">
              <Link
                href="/men"
                className="px-[20px] pt-[13px] pb-[11px] font-medium uppercase leading-[22px] tracking-[.02em] text-[#0f0f0f]"
                onClick={() => setNavLeft(!navLeft)}
              >
                New Releases
              </Link>
              <FaChevronRight />
            </li>
            <li className="text-[12px] text-[#c5c2c2] w-full flex justify-between items-center border-b border-[#ffe9d0]">
              <Link
                onClick={() => setNavLeft(!navLeft)}
                href="/men"
                className="px-[20px] pt-[13px] pb-[11px] font-medium uppercase leading-[22px] tracking-[.02em] text-[#0f0f0f]"
              >
                mens
              </Link>
              <FaChevronRight />
            </li>
            <li className="text-[12px] text-[#c5c2c2] w-full flex justify-between items-center border-b border-[#ffe9d0]">
              <Link
                onClick={() => setNavLeft(!navLeft)}
                href="/men"
                className="px-[20px] pt-[13px] pb-[11px] font-medium uppercase leading-[22px] tracking-[.02em] text-[#0f0f0f]"
              >
                womens
              </Link>
              <FaChevronRight />
            </li>
            <li className="text-[12px] text-[#c5c2c2] w-full flex justify-between items-center border-b border-[#ffe9d0]">
              <Link
                onClick={() => setNavLeft(!navLeft)}
                href="/men"
                className="px-[20px] pt-[13px] pb-[11px] font-medium uppercase leading-[22px] tracking-[.02em] text-[#0f0f0f]"
              >
                Jewelery
              </Link>
              <FaChevronRight />
            </li>
            <li className="text-[12px] text-[#c5c2c2] w-full flex justify-between items-center border-b border-[#ffe9d0]">
              <Link
                onClick={() => setNavLeft(!navLeft)}
                href="/men"
                className="px-[20px] pt-[13px] pb-[11px] font-medium uppercase leading-[22px] tracking-[.02em] text-[#0f0f0f]"
              >
                accessories
              </Link>
              <FaChevronRight />
            </li>
            <li className="text-[12px] text-[#c5c2c2] w-full flex justify-between items-center border-b border-[#ffe9d0]">
              <Link
                onClick={() => setNavLeft(!navLeft)}
                href="/blog"
                className="px-[20px] pt-[13px] pb-[11px] font-medium uppercase text-[#0f0f0f]"
              >
                blogs
              </Link>
              <FaChevronRight />
            </li>
            <li className="text-[12px] text-[#c5c2c2] w-full flex justify-between items-center border-b border-[#ffe9d0]">
              <Link
                onClick={() => setNavLeft(!navLeft)}
                href="#"
                className="px-[20px] pt-[13px] pb-[11px] font-medium uppercase text-[#0f0f0f]"
              >
                demo
              </Link>
              <FaChevronRight />
            </li>
            <li className="text-[12px] text-[#c5c2c2] w-full flex justify-between items-center border-b border-[#ffe9d0]">
              <Link
                onClick={() => setNavLeft(!navLeft)}
                href="#"
                className="px-[20px] pt-[13px] pb-[11px] font-medium uppercase text-[#0f0f0f]"
              >
                buy theme
              </Link>
              <FaChevronRight />
            </li>
          </ul>
          <div>
            <ul className="text-[#34313a] text-[12px] pb-[20px] border-b border-[#ffe9d0]">
              <li className="px-[20px] py-[7px]">
                <Link href="#" className="leading-[22px]">
                  Login
                </Link>
              </li>
              <li className="px-[20px] py-[7px]">
                <Link href="#" className="leading-[22px]">
                  Create account
                </Link>
              </li>
              <li className="px-[20px] py-[7px]">
                <Link href="#" className="leading-[22px]">
                  My Wishlists
                </Link>
              </li>
              <li className="px-[20px] py-[7px]">
                <Link href="#" className="leading-[22px]">
                  Shipping and returns
                </Link>
              </li>
              <li className="px-[20px] py-[7px]">
                <Link href="#" className="leading-[22px]">
                  Rewards Program
                </Link>
              </li>
            </ul>
            <div className="px-[20px] pt-[20px]">
              <h6 className="py-[7px] mb-[6px] leading-[22px] text-[13px]">
                Language{" "}
              </h6>
            </div>
            <ul className="text-[#34313a] text-[12px] mt-[25px] pb-[20px] border-b border-[#ffe9d0]">
              <li className="px-[20px] py-[7px]">
                <Link
                  onClick={() => setNavLeft(!navLeft)}
                  href="#"
                  className="leading-[22px] flex gap-x-[5px] items-center"
                >
                  <FaPhoneAlt /> +123 456 789
                </Link>
              </li>
              <li className="px-[20px] py-[7px]">
                <Link
                  onClick={() => setNavLeft(!navLeft)}
                  href="#"
                  className="leading-[22px] flex gap-x-[5px] items-center"
                >
                  <FaRegEnvelope /> email@domain.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full fixed top-0 left-0 bg-black/50 z-50 transition-all duration-300 ease-in-out ${
          navLeft ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setNavLeft(!navLeft)}
      ></div>
    </div>
  );
};

export default MainNavContent;
