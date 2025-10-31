"use client";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="w-full max-w-[1170px] mx-auto mt-[30px] mb-[45px] xl:my-[70px] px-[15px] xl:px-[15px]">
          <h3 className="text-[24px] text-[#433b32] tracking-[.05rem] mb-[20px] font-medium text-center uppercase">
            create account
          </h3>
          <p className="text-left lg:text-center text-[#5a5a5a] text-[12px] lg:px-[160px] px-[0px]">
            By creating an account you will be able to shop faster, be up to
            date on an order's status, and keep track of the orders you have
            previously made.
          </p>
          <form className="form w-full max-w-[380px] mx-0 lg:mx-auto mt-[15px] mb-[15px]">
            <div className="labelgroup w-full flex flex-col mb-[12px]">
              <label
                htmlFor="fname"
                className="leading-[20px] font-medium text-[12px] text-[433b32] mb-[6px] inline-block"
              >
                First Name
              </label>
              <input
                type="text"
                name=""
                id="fname"
                className="w-full border border-[#f8941e] outline-none px-[12px] pt-[10px] pb-[8px] text-[#3c3c3c]"
              />
            </div>
            <div className="labelgroup w-full flex flex-col mb-[12px]">
              <label
                htmlFor="lname"
                className="leading-[20px] font-medium text-[12px] text-[433b32] mb-[6px] inline-block"
              >
                Last Name
              </label>
              <input
                type="text"
                name=""
                id="lname"
                className="w-full border border-[#f8941e] outline-none px-[12px] pt-[10px] pb-[8px] text-[#3c3c3c]"
              />
            </div>
            <div className="labelgroup w-full flex flex-col mb-[12px]">
              <label
                htmlFor="email"
                className="leading-[20px] font-medium text-[12px] text-[433b32] mb-[6px] inline-block"
              >
                Email*
              </label>
              <input
                type="email"
                name=""
                id="email"
                className="w-full border border-[#f8941e] outline-none px-[12px] pt-[10px] pb-[8px] text-[#3c3c3c]"
              />
            </div>
            <div className="labelgroup w-full flex flex-col mb-[12px]">
              <label
                htmlFor="password"
                className="leading-[20px] font-medium text-[12px] text-[433b32] mb-[6px] inline-block"
              >
                Password*
              </label>
              <input
                type="password"
                name=""
                id="password"
                className="w-full border border-[#f8941e] outline-none px-[12px] pt-[10px] pb-[8px] text-[#3c3c3c]"
              />
            </div>
            <div className="labelgroup w-full flex flex-col mt-[5px] mb-[15px]">
              <button
                type="submit"
                name=""
                className="w-full max-w-[275px] outline-none px-[12px] pt-[10px] pb-[8px] bg-[#f8941e] text-white text-[14px] uppercase
                hover:bg-[#e7e7e7] hover:border hover:text-[#f8941e] font-medium tracking-[0.02em] cursor-pointer "
              >
                create an account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-[10px] py-[16px]">
        <Link href="#" className="text-center text-[#5a5a5a] text-[12px]">
          Home
        </Link>
        <FaAngleRight className="text-[#f8941e] text-[12px]" />
        <Link
          href="/register"
          className="text-center text-[#f8941e] text-[12px]"
        >
          Create Account
        </Link>
      </div>
      <Contactus />
      <Footer />
    </>
  );
};

export default page;
