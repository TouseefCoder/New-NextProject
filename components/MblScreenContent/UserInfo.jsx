"use client";
import React from "react";
import MyContext from "@/context/MyContext";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";

const UserContent = () => {
  const { user, setUser } = React.useContext(MyContext);

  return (
    <div className="w-full h-full">
      <div
        className={`w-[430px] max-w-[calc(100%-30px)] px-[15px] pt-[15px] text-[#5f5f5f] pb-[25px] bg-white h-full right-0 top-0 rounded transform transition-transform duration-300 fixed z-60 cursor-pointer ${
          !user ? "translate-x-full" : "-translate-x-0"
        }`}
      >
        <div className="mt-[7px] mb-[22px] w-full">
          <div className="w-full flex justify-end">
            <button
              className="text-center uppercase text-[12px] flex items-center gap-x-1 cursor-pointer"
              onClick={() => setUser(!user)}
            >
              <FaXmark fontSize={17} color="#f8941e" />
              close
            </button>
          </div>

          <h6 className="text-[13px] font-semibold border-b border-[#ffe9d0] tracking-[.05em] pb-[17px] block mt-[30px] uppercase text-[#000]">
            customer login:
          </h6>
        </div>
        <form className="w-full">
          <div className="mb-[15px]">
            <label
              htmlFor="email"
              className="block mb-[5px] text-[#000] text-[12px]"
            >
              Email address*
            </label>
            <input
              type="email"
              className="w-full py-[7px] px-[15px] bg-transparent border border-[#ffe9d0] text-[#5f5f5f] text-[14px] text-center"
              name="email"
              placeholder="Email address"
            />
          </div>
          <div className="mb-[15px]">
            <label
              htmlFor="password"
              className="block mb-[5px] text-[12px] text-[#000]"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full py-[7px] px-[15px] bg-transparent border border-[#ffe9d0] text-[#5f5f5f] text-[14px] text-center"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="action-btn mb-[20px]">
            <button className="text-center mb-[15px] uppercase w-full border text-[#f8941e] font-medium py-[7px] text-[14px] transform transition-all duration-300 px-[15px] hover:bg-[#f8941e] hover:text-[#fff]">
              login
            </button>
            <div className="text-center w-full">
              <Link href="#" className="text-[12px]">
                Forgot your password
              </Link>
            </div>
          </div>
          <div className="text-center w-full px-[15px] text-[#fff] py-[7px] bg-[#f8941e] hover:bg-transparent hover:text-[#f8941e] border border-[#f8931e] transform transition-all duration-300">
            <Link href="#" className="text-[14px] uppercase  font-medium">
              Create an account
            </Link>
          </div>
        </form>
      </div>
      <div
        className={`w-full h-full fixed top-0 left-0 bg-black/50 z-50 cursor-pointer transition-all duration-300 ease-in-out ${
          user ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setUser(!user)}
      ></div>
    </div>
  );
};

export default UserContent;
