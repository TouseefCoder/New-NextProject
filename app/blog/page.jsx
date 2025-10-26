"use client";
import BlogSlider from "@/components/blog/blogSlider";
import Contactus from "@/components/Contactus";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar />
      {/* <div className="relative">
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>

        <div
          className={`fixed top-0 left-0 h-full lg:static w-64 bg-white shadow-xl z-50 transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <ul className="p-4 space-y-3">
            <li>
              <a href="#" className="block hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="m-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Open Menu
        </button>
      </div> */}
      <div className="w-full">
        <div className="max-w-[1170px] w-full mx-auto px-[15px]">
          <h3 className="text-[24px] text-[#0f0f0f] tracking-[.05rem] mt-[38px] mb-[42px] font-medium text-center uppercase">
            blog
          </h3>
          <div className="content w-full flex">
            <div
              className={`left w-[270px] px-[30px] py-[30px] xl:py-0 xl:px-[15px] fixed top-0 left-0 h-screen overflow-auto xl:overflow-hidden xl:h-full xl:static bg-white z-50 xl:z-0 transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}
            >
              <div className="mb-[45px]">
                <h1 className="tracking-[.02em] text-[18px] text-[#0f0f0f] font-medium mb-[13px] uppercase">
                  search
                </h1>
                <div className="searchbar px-[15px] py-[10px] w-full bg-[#fafafa] text-[#3c3c3c] text-[12px] flex">
                  <input
                    type="text"
                    placeholder="Search..."
                    className=" w-full"
                  />
                  <IoSearchOutline size={"24px"} className="text-[#000000]" />
                </div>
              </div>
              <div className="mb-[45px]">
                <h1 className="tracking-[.02em] text-[18px] text-[#0f0f0f] font-medium leading-[36px] uppercase">
                  categories
                </h1>
                <ul className="list-none">
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Habitasse Lateas
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Milancelos
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Cosmodum Loremous
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Nostra Sinceptos
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Loremous
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Quisque Dolutpates
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-[45px]">
                <h1 className="tracking-[.02em] text-[18px] text-[#0f0f0f] font-medium leading-[36px] uppercase">
                  recent articles
                </h1>
                <ul className="list-none">
                  <li className="mb-[15px]">
                    <Link
                      href={"#"}
                      className="block text-[#0f0f0f] tracking-[.02em] leading-[24px] font-medium text-[12px]"
                    >
                      Commodo Muso Magna Cosmopolis
                    </Link>
                    <em className="text-[#5f5f5f] not-italic text-[12px]">
                      August 20, 2019
                    </em>
                  </li>
                  <Divider />
                  <li className="my-[15px]">
                    <Link
                      href={"#"}
                      className="block text-[#0f0f0f] tracking-[.02em] leading-[24px] font-medium text-[12px]"
                    >
                      Commodo Muso Magna Cosmopolis
                    </Link>
                    <em className="text-[#5f5f5f] not-italic text-[12px]">
                      August 20, 2019
                    </em>
                  </li>
                  <Divider />
                  <li className="my-[15px]">
                    <Link
                      href={"#"}
                      className="block text-[#0f0f0f] tracking-[.02em] leading-[24px] font-medium text-[12px]"
                    >
                      Commodo Muso Magna Cosmopolis
                    </Link>
                    <em className="text-[#5f5f5f] not-italic text-[12px]">
                      August 20, 2019
                    </em>
                  </li>
                </ul>
              </div>
              <div className="mb-[95px]">
                <h1 className="tracking-[.02em] text-[18px] text-[#0f0f0f] font-medium leading-[36px] uppercase">
                  featured products
                </h1>
                <BlogSlider />
              </div>
              <div className="mb-[45px]">
                <Link href={"#"} className="block">
                  <Image
                    src="/images/blog featured/1.jpg"
                    alt="blog img"
                    height={700}
                    width={650}
                    className="h-full w-full object-cover my-[30px]"
                  />
                </Link>
                <Link href={"#"} className="block">
                  <Image
                    src="/images/blog featured/2.jpg"
                    alt="blog img"
                    height={700}
                    width={650}
                    className="h-full w-full object-cover my-[30px]"
                  />
                </Link>
              </div>
              <div className="">
                <h1 className="tracking-[.02em] text-[18px] text-[#0f0f0f] font-medium leading-[36px] uppercase">
                  custom cms blocks
                </h1>
                <div className="content mt-[18px]">
                  <p className=" text-[#5a5a5a] text-[12px] mb-[12px]">
                    Custom CMS block displayed at the left sidebar on the
                    Catalog Page. Put your own content here: text, html, images,
                    media... or whatever you like.
                  </p>
                  <p className=" text-[#5a5a5a] text-[12px]">
                    There are many similar sample content placeholders across
                    the store. All editable from admin panel.
                  </p>
                </div>
              </div>
            </div>
            <div className="right xl:w-[calc(100%-270px)] w-full">
              <div className="xl:px-[15px] w-full">
                <div
                  onClick={() => setIsOpen(false)}
                  className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
                    isOpen
                      ? "opacity-100 visible xl:opacity-0 xl:invisible"
                      : "opacity-0 invisible"
                  }`}
                ></div>
                <div className="xl:hidden block">
                  <h2
                    onClick={() => setIsOpen(true)}
                    className="text-[12px] tracking-[.05em] leading-[22px] text-[#232323] font-medium uppercase flex items-center gap-x-[15px]"
                  >
                    <BsSliders size={24} />
                    show sidebar
                  </h2>
                </div>
                <ul className="list-none">
                  <li>
                    <h1 className="tracking-[.02em] text-[18px] text-[#0f0f0f] font-medium leading-[36px] capitalize">
                      <Link href="#" className="">
                        Commodo Muso Magna Cosmopolis
                      </Link>
                    </h1>
                    <p className="text-[#5a5a5a] text-[12px] mb-[28px]">
                      <span className="inline-block mr-1.5">
                        by Halo Themes August 20, 2019
                      </span>
                      <Link href={"#"}>3 Comments</Link>
                    </p>
                    <Link href={"#"}>
                      <Image
                        src="/images/blog featured/3.jpg"
                        height={587}
                        width={992}
                        alt="blog img"
                        className="mb-[30px]"
                      />
                    </Link>
                    <p className="mb-[23px] leading-[24px] text-[#5a5a5a] text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis risus leo, elementum in malesuada an darius ut augue.
                      Cras sit amet lectus et justo feugiat euismod sed non
                      erat. Nulla non felis id metus bibendum iaculis quis sit
                      amet eros. Nam suscipit mollis tellus vel malesuada. Duis
                      danos an molestie, sem in sollicitudin sodales mi justo
                      sagittis est id consequat ipsum ligula a...
                    </p>
                    <div className="w-full pb-[35px] border-b border-[#f8f8f8] mb-[45px]">
                      <div className="text-[14px] font-[400] mb-[15px] bg-transparent hover:bg-[#0f0f0f] border border-[#0f0f0f] hover:text-[#ffffff] text-[#0f0f0f] max-w-[163px] py-[8px] md:p-[15px] text-center">
                        <Link href="#" className="uppercase font-medium">
                          read more
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h1 className="tracking-[.02em] text-[18px] text-[#0f0f0f] font-medium leading-[36px] capitalize">
                      <Link href="#" className="whitespace-nowrap">
                        Loremous Comodous: Trending
                      </Link>
                    </h1>
                    <p className="text-[#5a5a5a] text-[12px] mb-[28px]">
                      <span className="inline-block mr-1.5">
                        by Halo Themes August 20, 2019
                      </span>
                      <Link href={"#"}>3 Comments</Link>
                    </p>
                    <Link href={"#"}>
                      <Image
                        src="/images/blog featured/5.jpg"
                        height={587}
                        width={992}
                        alt="blog img"
                        className="mb-[30px]"
                      />
                    </Link>
                    <p className="mb-[23px] leading-[24px] text-[#5a5a5a] text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis risus leo, elementum in malesuada an darius ut augue.
                      Cras sit amet lectus et justo feugiat euismod sed non
                      erat. Nulla non felis id metus bibendum iaculis quis sit
                      amet eros. Nam suscipit mollis tellus vel malesuada. Duis
                      danos an molestie, sem in sollicitudin sodales mi justo
                      sagittis est id consequat ipsum ligula a...
                    </p>
                    <div className="w-full pb-[35px] border-b border-[#f8f8f8] mb-[45px]">
                      <div className="text-[14px] font-[400] mb-[15px] bg-transparent hover:bg-[#0f0f0f] border border-[#0f0f0f] hover:text-[#ffffff] text-[#0f0f0f] max-w-[163px]  py-[8px] md:p-[15px] text-center">
                        <Link href="#" className="uppercase font-medium">
                          read more
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h1 className="tracking-[.02em] text-[18px] text-[#0f0f0f] font-medium leading-[36px] capitalize">
                      <Link href="#">
                        Deumanto Sollicitudin Delo Milancelos
                      </Link>
                    </h1>
                    <p className="text-[#5a5a5a] text-[12px] mb-[28px]">
                      <span className="inline-block mr-1.5">
                        by Halo Themes August 20, 2019
                      </span>
                      <Link href={"#"}>3 Comments</Link>
                    </p>
                    <Link href={"#"}>
                      <Image
                        src="/images/blog featured/4.jpg"
                        height={587}
                        width={992}
                        alt="blog img"
                        className="mb-[30px]"
                      />
                    </Link>
                    <p className="mb-[23px] leading-[24px] text-[#5a5a5a] text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis risus leo, elementum in malesuada an darius ut augue.
                      Cras sit amet lectus et justo feugiat euismod sed non
                      erat. Nulla non felis id metus bibendum iaculis quis sit
                      amet eros. Nam suscipit mollis tellus vel malesuada. Duis
                      danos an molestie, sem in sollicitudin sodales mi justo
                      sagittis est id consequat ipsum ligula a...
                    </p>
                    <div className="w-full pb-[35px] border-b border-[#f8f8f8] mb-[45px]">
                      <div className="text-[14px] font-[400] mb-[15px] bg-transparent hover:bg-[#0f0f0f] border border-[#0f0f0f] hover:text-[#ffffff] text-[#0f0f0f] max-w-[163px] py-[8px] md:p-[15px] text-center">
                        <Link href="#" className="uppercase font-medium">
                          read more
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-[10px] py-[16px]">
          <Link href="#" className="text-center text-[#5a5a5a] text-[12px]">
            Home
          </Link>
          <FaAngleRight className="text-[#5a5a5a] text-[12px]" />
          <Link href="#" className="text-center text-[#5a5a5a] text-[12px]">
            Blog
          </Link>
        </div>
        <Contactus />
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
