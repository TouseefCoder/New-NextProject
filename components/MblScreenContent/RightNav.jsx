"use client";
import React from "react";

import MyContext from "@/context/MyContext";
import Link from "next/link";
import Divider from "../Divider";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const RightNav = () => {
  const { rightNav, setRightNav } = React.useContext(MyContext);

  return (
    <div className="w-full h-full">
      <div
        className={`w-[430px] max-w-[calc(100%-30px)] px-[30px] py-[35px] bg-white h-full right-0 top-0 rounded transform transition-transform duration-300 fixed z-60 cursor-pointer text-[12px] text-[#34313a] ${
          !rightNav ? "translate-x-full" : "-translate-x-0"
        }`}
      >
        <div className="mb-[25px]">
          <ul className="list-none pb-[18px]">
            <li className="py-[4px]">
              <Link href="#" className="leading-[22px]">
                Login
              </Link>
            </li>
            <li className="py-[4px]">
              <Link href="#" className="leading-[22px]">
                Create account
              </Link>
            </li>
            <li className="py-[4px]">
              <Link href="#" className="leading-[22px]">
                My Wishlists
              </Link>
            </li>
            <li className="py-[4px]">
              <Link href="#" className="leading-[22px]">
                Shipping and returns
              </Link>
            </li>
            <li className="py-[4px]">
              <Link href="#" className="leading-[22px]">
                Rewards Program
              </Link>
            </li>
          </ul>
          <Divider />
        </div>
        <div className="dropdowns">
          <ul>
            <li className="mb-[16px]">
              <div className="flex flex-row items-center cursor-pointer">
                <div className="langImage inline-flex gap-x-[5px]">
                  <Image
                    src="/images/language-logo/1.png"
                    alt="langImage"
                    height={20}
                    width={20}
                    className="rounded-full mr-[8px]"
                  />
                  <span className="text-[#34313a] font-medium">EN</span>
                </div>
                <div className="chervon-down ml-[6px]">
                  <IoIosArrowDown />
                </div>
              </div>
            </li>
            <li className="leading-[22px]">
              <div className="flex flex-row items-center cursor-pointer">
                <div className="langImage inline-flex gap-x-[5px]">
                  <Image
                    src="/images/language-logo/2.png"
                    alt="langImage"
                    height={20}
                    width={20}
                    className="rounded-full mr-[8px]"
                  />
                  <span className="text-[#34313a] font-medium">USD</span>
                </div>
                <div className="chervon-down ml-[6px]">
                  <IoIosArrowDown />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`w-full h-full fixed top-0 left-0 bg-black/50 z-50 cursor-pointer transition-all duration-300 ease-in-out ${
          rightNav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setRightNav(!rightNav)}
      ></div>
    </div>
  );
};

export default RightNav;
