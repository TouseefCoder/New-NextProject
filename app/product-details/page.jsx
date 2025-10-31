"use client";
import BlogSlider from "@/components/product-details/blogSlider";
import Contactus from "@/components/Contactus";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";
import {
  FaAngleRight,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaRegCircleCheck,
  FaShieldHalved,
} from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import ItemsSlider from "@/components/product-details/ItemsSlider";
import {
  FaFire,
  FaGlobeAfrica,
  FaMinus,
  FaPlus,
  FaRuler,
  FaRulerVertical,
  FaSearch,
  FaUndo,
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CiHeart, CiRuler } from "react-icons/ci";
import NewReleases from "@/components/product-details/RelatedProducts";
import RecentlyViewed from "@/components/product-details/Recently Viewed";

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar />

      <div className="w-full">
        <div className="max-w-[1890px] w-full mx-auto px-[15px] 2xl:px-[60px]">
          <div className="content w-full mt-[30px] lg:mt-[70px] flex">
            <div
              className={`left w-[270px] px-[30px] py-[30px] xl:py-0 xl:px-[15px] fixed top-0 left-0 h-screen overflow-auto 2xl:h-full 2xl:static bg-white z-50 2xl:z-0 transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full 2xl:translate-x-0"}`}
            >
              <div className="mb-[45px]">
                <h1 className="tracking-[.02em] text-[16px] text-[#433b32] font-medium leading-[36px] uppercase">
                  categories
                </h1>
                <ul className="list-none">
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Cosmopolis
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Suito
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Melancelos
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Blazero
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Glamos
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Metropolis
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Valkyrio
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Scarvero
                    </Link>
                  </li>
                  <li className="tracking-[.02em] leading-[22px]">
                    <Link
                      href="#"
                      className="text-[#5f5f5f] text-[12px] leading-[36px] font-medium capitalize"
                    >
                      Congue
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mb-[95px]">
                <h1 className="tracking-[.02em] text-[18px] text-[#433b32] font-medium leading-[36px] uppercase">
                  featured products
                </h1>
                <BlogSlider />
              </div>
              <div className="mb-[45px]">
                <Link href={"#"} className="block">
                  <Image
                    src="/images/blog featured/9.jpg"
                    alt="blog img"
                    height={700}
                    width={650}
                    className="h-full w-full object-cover my-[30px]"
                  />
                </Link>
                <Link href={"#"} className="block">
                  <Image
                    src="/images/blog featured/10.jpg"
                    alt="blog img"
                    height={700}
                    width={650}
                    className="h-full w-full object-cover my-[30px]"
                  />
                </Link>
              </div>
              <div className="">
                <h1 className="tracking-[.02em] text-[18px] text-[#433b32] font-medium leading-[36px] uppercase">
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
            <div className="right 2xl:w-[calc(100%-270px)] w-full">
              <div className="xl:px-[15px] w-full">
                <div
                  onClick={() => setIsOpen(false)}
                  className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
                    isOpen
                      ? "opacity-100 visible 2xl:opacity-0 2xl:invisible"
                      : "opacity-0 invisible"
                  }`}
                ></div>
                <div className="2xl:hidden block mt-[12px] mb-[33px]">
                  <h2
                    onClick={() => setIsOpen(true)}
                    className="text-[12px] tracking-[.05em] cursor-pointer leading-[22px] text-[#232323] font-medium uppercase flex items-center gap-x-[15px]"
                  >
                    <BsSliders size={24} />
                    show sidebar
                  </h2>
                </div>
                <div className="border-b border-[#eaeaea]">
                  <div className="flex flex-col md:flex-row px-0 lg-[15px] xl:px-[60px] 2xl:px-[15px] mb-[65px] gap-y-[30px]">
                    <div className="md:w-[50%] w-full px-[5px] sm:px-[10px]  h-full">
                      <div className="flex xl:flex-row gap-[20px] flex-col items-flex-start w-full">
                        <div className="py-[40px] relative hidden xl:block h-[740px]">
                          <div className="flex flex-col gap-[10px] h-[660px] overflow-auto scrollbar-none w-[100px]">
                            <Link href={"#"}>
                              <Image
                                src="/images/new releases/12.jpg"
                                height={128}
                                width={100}
                                alt="blog img"
                                className=" object-cover"
                              />
                            </Link>
                            <Link href={"#"}>
                              <Image
                                src="/images/new releases/13.jpg"
                                height={128}
                                width={100}
                                alt="blog img"
                                className=" object-cover"
                              />
                            </Link>
                            <Link href={"#"}>
                              <Image
                                src="/images/new releases/14.jpg"
                                height={128}
                                width={100}
                                alt="blog img"
                                className=" object-cover"
                              />
                            </Link>
                            <Link href={"#"}>
                              <Image
                                src="/images/new releases/15.jpg"
                                height={128}
                                width={100}
                                alt="blog img"
                                className=" object-cover"
                              />
                            </Link>
                            <Link href={"#"}>
                              <Image
                                src="/images/new releases/13.jpg"
                                height={128}
                                width={100}
                                alt="blog img"
                                className=" object-cover"
                              />
                            </Link>
                            <Link href={"#"}>
                              <Image
                                src="/images/new releases/16.jpg"
                                height={128}
                                width={100}
                                alt="blog img"
                                className=" object-cover"
                              />
                            </Link>
                            <Link href={"#"}>
                              <Image
                                src="/images/new releases/13.jpg"
                                height={128}
                                width={100}
                                alt="blog img"
                                className=" object-cover"
                              />
                            </Link>
                            <Link href={"#"}>
                              <Image
                                src="/images/new releases/20.jpg"
                                height={128}
                                width={100}
                                alt="blog img"
                                className=" object-cover"
                              />
                            </Link>
                          </div>
                          <FaChevronDown
                            fontSize={"21px"}
                            className="absolute bottom-0 transform -translate-x-1/2 left-1/2"
                          />
                          <FaChevronUp
                            fontSize={"21px"}
                            className="absolute top-0 transform -translate-x-1/2 left-1/2"
                          />
                        </div>
                        <div className="h-full w-full">
                          <div className="h-full xl:h-[740px]">
                            <Link href={"#"}>
                              <Image
                                src="/images/new releases/13.jpg"
                                height={910}
                                width={910}
                                alt="blog img"
                              />
                            </Link>
                          </div>
                          <div className="xl:hidden flex w-full px-[30px]">
                            <ItemsSlider />
                          </div>
                          <div className="content mt-[15px] w-full h-full">
                            <p className="text-[12px] text-[#999999] hidden xl:flex items-center justify-center gap-x-[10px]">
                              <FaSearch />
                              <span>Zoom the image with the mouse</span>
                            </p>
                            <div className="mt-[50px] text-center">
                              <button
                                href={"#"}
                                className="text-center p-[15px] border-2 border-[#f8941e] uppercase text-[12px] min-w-[171px] font-medium hover:bg-[#f8941e] text-[#f8941e] hover:text-[#ffffff]"
                              >
                                ask an expert
                              </button>
                            </div>
                            <div className="product-customblock mt-[35px] flex justify-between flex-wrap gap-y-[20px] ">
                              <div className="px-[10px] flex flex-col items-center text-[#232323]">
                                <FaGlobeAfrica
                                  fontSize={"51px"}
                                  className="mb-[8px]"
                                  color="#f8941e"
                                />
                                <p className="text-[12px] text-center tracking-[.05em] font-medium uppercase leading-[16px]">
                                  free shipping <br /> worldwide
                                </p>
                              </div>
                              <div className="px-[10px] flex flex-col items-center text-[#232323]">
                                <FaUndo
                                  fontSize={"51px"}
                                  className="mb-[8px]"
                                  color="#f8941e"
                                />
                                <p className="text-[12px] text-center tracking-[.05em] font-medium uppercase leading-[16px]">
                                  free in-store <br /> returns
                                </p>
                              </div>
                              <div className="px-[10px] flex flex-col items-center text-[#232323]">
                                <FaShieldHalved
                                  fontSize={"51px"}
                                  className="mb-[8px]"
                                  color="#f8941e"
                                />
                                <p className="text-[12px] text-center tracking-[.05em] font-medium uppercase leading-[16px]">
                                  secure shopping <br /> guarantee
                                </p>
                              </div>
                              <div className="px-[10px] flex flex-col items-center text-[#232323]">
                                <FaRegCircleCheck
                                  fontSize={"51px"}
                                  className="mb-[8px]"
                                  color="#f8941e"
                                />
                                <p className="text-[12px] text-center tracking-[.05em] font-medium uppercase leading-[16px]">
                                  24 month <br /> warranty
                                </p>
                              </div>
                            </div>
                            {/* <div className="buttons mt-[30px]">
                            <Link
                              href="#"
                              className="uppercase p-[15px] w-[171px] border-2 border-[#eaeaea] font-medium text-[12px] hover:bg-[#433b32] hover:text-[#ffffff]"
                            >
                              ask an expert
                            </Link>
                          </div>
                          <div className="buttons mt-[30px]">
                            <Link
                              href="#"
                              className="uppercase p-[15px] w-[171px] border-2 border-[#eaeaea] font-medium text-[12px] hover:bg-[#433b32] hover:text-[#ffffff]"
                            >
                              ask an expert
                            </Link>
                          </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-[50%] relative w-full px-[5px] sm:px-[10px] h-full">
                      <div className="absolute top-[32px] right-0 flex">
                        <FaChevronLeft
                          strokeWidth={1}
                          fontSize={22}
                          color="#f8941e"
                        />
                        <FaChevronRight
                          fontSize={22}
                          className="ml-[25px] font-thin"
                          color="#f8941e"
                        />
                      </div>
                      <p className="text-[12px] leading-[22px] uppercase font-medium mb-[5px]">
                        paul smith
                      </p>
                      <h1 className="text-[20px] font-medium hover:underline underline-offset-[3px] leading-[32px] mb-[5px]">
                        Metropolis Daciniad Darturien
                      </h1>
                      <p className="text-[12px] text-[#f8941e] leading-[22px] flex items-center gap-x-[5px] mb-[15px]">
                        <FaFire fontSize={18} color={"#dc3545"} />
                        <span>7 sold in last 17 hour</span>
                      </p>
                      <div className="stock mb-[15px] w-full">
                        <div className="mb-[10px] text-[12px] uppercase underline underline-offset-3 leading-[22px] font-medium">
                          In stock
                        </div>
                        <div className="text-[12px] leading-[22px] flex items-center gap-x-[10px]">
                          <label htmlFor="" className="uppercase font-medium">
                            sku:
                          </label>
                          <span className="text-[#5f5f5f] uppercase">dfri</span>
                        </div>
                      </div>
                      <div className="price text-[20px] font-medium leading-[32px] mb-[20px]">
                        <span className="text-[20px] line-through font-medium text-[#969696] mr-[15px]">
                          $2,000
                        </span>
                        <span className="text-[#f8941e]">$1,000</span>
                      </div>
                      <p className="text-[12px] text-[#5f5f5f] mb-[25px]">
                        Nam tempus turpis at metus scelerisque placerat nulla
                        deumantos sollicitudin delos felis. Pellentesquae diam
                        dolor an elementum et lobortis at mollis ut risus.
                        Curabitur semper sagittis mino de condimentum. Donec an
                        mullamcorper mauris. Lorem ipsum dolor sit amet
                        consectetur curabitur porttitor. Pellentesque habitant
                        morbi tristique senectus et netus et malesuada...
                      </p>
                      <div className="color mb-[13px]">
                        <label
                          htmlFor=""
                          className="mb-[10px] leading-[20px] text-[12px] font-medium"
                        >
                          Color <span className="text-[#f8941e]">*</span>
                        </label>
                        <div className="images flex items-center flex-wrap mt-[10px]">
                          <div className="w-[38px] h-[38px] mr-[8px] mb-[10px]">
                            <img
                              src="/images/new releases/17.jpg"
                              alt="color1"
                              className="w-full h-full object-cover cursor-pointer border-3 border-[#f8941e] rounded-full"
                            />
                          </div>
                          <div className="w-[38px] h-[38px] mr-[8px] mb-[10px]">
                            <img
                              src="/images/new releases/12.jpg"
                              alt="color1"
                              className="w-full h-full object-cover cursor-pointer"
                            />
                          </div>
                          <div className="w-[38px] h-[38px] mr-[8px] mb-[10px]">
                            <img
                              src="/images/new releases/13.jpg"
                              alt="color1"
                              className="w-full h-full object-cover cursor-pointer"
                            />
                          </div>
                          <div className="w-[38px] h-[38px] mr-[8px] mb-[10px]">
                            <img
                              src="/images/new releases/14.jpg"
                              alt="color1"
                              className="w-full h-full object-cover cursor-pointer"
                            />
                          </div>
                          <div className="w-[38px] h-[38px] mr-[8px] mb-[10px]">
                            <img
                              src="/images/new releases/15.jpg"
                              alt="color1"
                              className="w-full h-full object-cover cursor-pointer"
                            />
                          </div>
                          <div className="w-[38px] h-[38px] mr-[8px] mb-[10px]">
                            <img
                              src="/images/new releases/16.jpg"
                              alt="color1"
                              className="w-full h-full object-cover cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="quantity mb-[10px]">
                        <label
                          htmlFor=""
                          className="mb-[10px] leading-[20px] text-[12px] font-medium"
                        >
                          Quantity:
                        </label>
                        <div className="quantities h-[42px] flex items-center mt-[10px] border border-[#f8941e] max-w-[154px] w-full">
                          <div className="h-full flex items-center cursor-pointer justify-center border-r border-[#f8941e] font-medium text-[#f8941e] w-[42px]">
                            <FaMinus fontSize={13} className="h-full" />
                          </div>
                          <div className="w-full h-full text-center content-center text-[#7b7b7b] max-w-[70px] mt-[10px]">
                            1
                          </div>
                          <div className="h-full flex items-center cursor-pointer justify-center w-[42px] text-[#f8941e] border-l border-[#f8941e] font-medium ">
                            <FaPlus fontSize={13} className="h-full" />
                          </div>
                        </div>
                      </div>
                      <div className="subtotal text-[12px] leading-[22px] mb-[15px]">
                        <span className="text-[#5f5f5f] mr-[3px] mb-[6px]">
                          Subtotal:
                        </span>{" "}
                        <span className="font-medium">$499.00</span>
                      </div>
                      <button className="w-full uppercase text-[12px] bg-[#f8941e] hover:border border-[#f8941e] text-white hover:text-[#f8941e] px-[15px] py-[10px] font-medium hover:bg-transparent leading-[22px] mb-[20px]">
                        Add to cart
                      </button>
                      <div className="terms flex items-center mb-[15px]">
                        <input
                          type="checkbox"
                          id="terms"
                          className="mr-[10px] mb-[9px]"
                        />
                        <label
                          htmlFor="terms"
                          className="text-[12px] text-[#433b32] leading-[22px] mb-[9px]"
                        >
                          I agree with the terms and conditions
                        </label>
                      </div>
                      <button className="w-full uppercase text-[12px] hover:bg-[#f8941e] text-[#f8941e] hover:text-white bg-transparent border border-[#f8941e] px-[15px] py-[10px] font-medium  leading-[22px] mb-[24px]">
                        buy it now
                      </button>
                      <div className="button-group flex gap-x-[30px]">
                        <Link
                          href={"#"}
                          className="text-[12px] hover:text-[#5f5f5f] flex items-center gap-x-[8px] mb-[15px]"
                        >
                          <CiRuler fontSize={25} />
                          <span>Size Chart</span>
                        </Link>
                        <Link
                          href={"#"}
                          className="text-[12px] hover:text-[#5f5f5f] flex items-center gap-x-[8px] mb-[15px]"
                        >
                          <CiHeart fontSize={25} />
                          <span>Add to Wish List</span>
                        </Link>
                      </div>
                      <div className="viewing mb-[15px]">
                        <p className="text-[12px] text-[#433b32] leading-[22px]">
                          112 customers are viewing this product
                        </p>
                      </div>
                      <div className="mb-[30px]"></div>
                      <div className="seallogo">
                        <ul className="flex gap-x-[20px]">
                          <li>
                            <Link href={"#"}>
                              <img
                                src="/images/seal-logos/1.jpg"
                                height={"100%"}
                                width={"100%"}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={"#"}>
                              <img
                                src="/images/seal-logos/2.jpg"
                                height={"100%"}
                                width={"100%"}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={"#"}>
                              <img
                                src="/images/seal-logos/3.jpg"
                                height={"100%"}
                                width={"100%"}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={"#"}>
                              <img
                                src="/images/seal-logos/4.jpg"
                                height={"100%"}
                                width={"100%"}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="insta-product mb-[20px]">
                  <div className="heading pt-[48px] mb-[60px]">
                    <div className="heading-content pt-[15px] mb-[30px]">
                      <h3 className="text-[24px] uppercase leading-[22px] font-medium text-center mb-[12px]">
                        see it styled
                      </h3>
                      <p className="text-[12px] text-[#5f5f5f] text-center leading-[16px]">
                        Nam tempus turpis at metus scelerisque placerat nulla
                        deumantos.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <ul className="flex justify-center items-center mb-[45px]">
                      <li className="relative py-[12px] pr-[42px] pl-[28px]">
                        <Link
                          href={"#"}
                          className="uppercase text-[#f8941e] font-medium underline underline-offset-4 tracking-[.02em]"
                        >
                          description
                        </Link>
                        <span className="absolute text-[#f8941e] right-0 top-1/2 transform -translate-y-1/2 text-[12px] text-[#5f5f5f]">
                          /
                        </span>
                      </li>
                      <li className="relative py-[12px] pr-[42px] pl-[28px]">
                        <Link
                          href={"#"}
                          className="uppercase font-medium tracking-[.02em]"
                        >
                          customer reviews
                        </Link>
                        <span className="absolute text-[#f8941e] right-0 top-1/2 transform -translate-y-1/2 text-[12px] text-[#5f5f5f]">
                          /
                        </span>
                      </li>
                      <li className="relative py-[12px] pr-[42px] pl-[28px]">
                        <Link
                          href={"#"}
                          className="uppercase font-medium tracking-[.02em]"
                        >
                          shipping + returns
                        </Link>
                      </li>
                    </ul>
                    <p className="text-[12px] text-[#5f5f5f] pb-[24px]">
                      Nam tempus turpis at metus scelerisque placerat nulla
                      deumantos sollicitudin delos felis. Pellentesquae diam
                      dolor an elementum et lobortis at mollis ut risus.
                      Curabitur semper sagittis mino de condimentum. Donec an
                      mullamcorper mauris. Lorem ipsum dolor sit amet
                      consectetur curabitur porttitor. Pellentesque habitant
                      morbi tristique senectus et netus et malesuada fames ac
                      turpis egestas. Sed efficitur vulputate turpis, a
                      fermentum diam condimentum eget. Donec egestas ante vitae
                      risus dignissim nec efficitur enim vulputate.
                    </p>
                    <table className="w-full max-w-full mb-[1rem]">
                      <tbody>
                        <tr className="border-b-1 border-[#ffe9d0]">
                          <td className="w-[50%] py-[9px] pr-[9px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                            defficitur
                          </td>
                          <td className="w-[65%] p-[9px] leading-[22px] text-[12px] text-[#5f5f5f]">
                            Comodous de milance
                          </td>
                        </tr>
                        <tr className="border-b-1 border-[#ffe9d0]">
                          <td className="w-[35%] py-[9px] pr-[9px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                            Selementum
                          </td>
                          <td className="w-[65%] p-[9px] leading-[22px] text-[12px] text-[#5f5f5f]">
                            Pellentesque de neque mollis
                          </td>
                        </tr>
                        <tr className="border-b-1 border-[#ffe9d0]">
                          <td className="w-[35%] py-[9px] pr-[9px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                            Montes
                          </td>
                          <td className="w-[65%] p-[9px] leading-[22px] text-[12px] text-[#5f5f5f]">
                            Divamus
                          </td>
                        </tr>
                        <tr className="border-b-1 border-[#ffe9d0]">
                          <td className="w-[35%] py-[9px] pr-[9px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                            Fermentum
                          </td>
                          <td className="w-[65%] p-[9px] leading-[22px] text-[12px] text-[#5f5f5f]">
                            Risus posuere loremous
                          </td>
                        </tr>
                        <tr className="border-b-1 border-[#ffe9d0]">
                          <td className="w-[35%] py-[9px] pr-[9px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                            Pellenatesque
                          </td>
                          <td className="w-[65%] p-[9px] leading-[22px] text-[12px] text-[#5f5f5f]">
                            Comodous in tempor dullamcorper
                          </td>
                        </tr>
                        <tr className="border-b-1 border-[#ffe9d0]">
                          <td className="w-[35%] py-[9px] pr-[9px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                            Diaculis
                          </td>
                          <td className="w-[65%] p-[9px] leading-[22px] text-[12px] text-[#5f5f5f]">
                            Pellentesque de neque mattis
                          </td>
                        </tr>
                        <tr className="">
                          <td className="w-[35%] py-[9px] pr-[9px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                            Sollicitudino
                          </td>
                          <td className="w-[65%] p-[9px] leading-[22px] text-[12px] text-[#5f5f5f]">
                            Divamus purus justo
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="block md:hidden">
                    <table className="w-full">
                      <tbody>
                        <tr className="relative border-t border-[#ccc]">
                          <td className="w-full py-[15px] pr-[30px] leading-[22px] text-[16px] text-[#433b32] font-medium uppercase">
                            description
                          </td>
                          <td>
                            <FaChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[14px] text-[#ccc]" />
                          </td>
                        </tr>
                        <tr className="relative border-t border-[#ccc]">
                          <td className="w-full py-[15px] pr-[30px] leading-[22px] text-[16px] text-[#433b32] font-medium uppercase">
                            customer reviews
                          </td>
                          <td>
                            <FaChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[14px] text-[#ccc]" />
                          </td>
                        </tr>
                        <tr className="relative border-t border-[#ccc]">
                          <td className="w-full py-[15px] pr-[30px] leading-[22px] text-[16px] text-[#433b32] font-medium uppercase">
                            shipping + returns
                          </td>
                          <td>
                            <FaChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[14px] text-[#ccc]" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="custom-prod bg-[#f8f8f8] px-0 lg-[15px] xl:px-[60px] w-full">
                  <div className="container w-full flex flex-col md:flex-row mx-auto">
                    <div className="w-full md:w-1/2 px-[15px]">
                      <Image
                        src="/images/new releases/15.jpg"
                        height={800}
                        width={620}
                        alt="custom task"
                        className="border"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-[15px] pb-[30px]">
                      <h1 className="mb-[30px] pt-[52px] text-[24px] font-medium uppercase text-[#433b32] tracking-[.02em] leading-[32px] text-center">
                        custom text
                      </h1>
                      <div className="tabs mb-[25px] w-full flex gap-[20px]">
                        <Link
                          className="px-[15px] py-[14px] w-1/2 bg-[#f8941e] hover:bg-white text-white hover:text-[#f8941e] text-center tracking-[.02em] uppercase font-medium hover:border-2 border-[#f8941e]"
                          href={"#"}
                        >
                          the spaces
                        </Link>
                        <Link
                          className="px-[15px] py-[14px] w-1/2 text-[#f8941e] hover:text-white text-center tracking-[.02em] uppercase font-medium border-2 border-[#f8941e] bg-[#fff] hover:bg-[#f8941e]"
                          href={"#"}
                        >
                          size
                        </Link>
                      </div>
                      <div className="tab-content">
                        <p className="text-[12px] text-[#5f5f5f]">
                          Loremis dolor turpis at metus scelerisque placerat
                          nulla deumantos sollicitudin delos felis.
                          Pellentesquae diam dolor an elementum et lobortis at
                          mollis ut risus. Curabitur semper sagittis mino de
                          condimentum. Donec an mullamcorper mauris. Lorem ipsum
                          dolor sit amet consectetur curabitur porttitor. Sed
                          efficitur vulputate turpis, a fermentum diam
                          condimentum eget. Donec egestas ante vitae risus
                          dignissim nec efficitur enim vulputate.
                        </p>
                        <table className="w-full max-w-full mb-[1rem] mt-[7px]">
                          <tbody>
                            <tr className="border-b-1 border-[#ffe9d0]">
                              <td className="w-[50%] py-[16px] pr-[15px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                                defficitur
                              </td>
                              <td className="w-[50%] text-end py-[16px] pl-[15px] leading-[22px] text-[12px] text-[#5f5f5f]">
                                Comodous de milance
                              </td>
                            </tr>
                            <tr className="border-b-1 border-[#ffe9d0]">
                              <td className="w-[50%] py-[16px] pr-[15px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                                Selementum
                              </td>
                              <td className="w-[50%] text-end py-[16px] pl-[15px] leading-[22px] text-[12px] text-[#5f5f5f]">
                                Pellentesque de neque mollis
                              </td>
                            </tr>
                            <tr className="border-b-1 border-[#ffe9d0]">
                              <td className="w-[50%] py-[16px] pr-[15px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                                Montes
                              </td>
                              <td className="w-[50%] text-end py-[16px] pl-[15px] leading-[22px] text-[12px] text-[#5f5f5f]">
                                Divamus
                              </td>
                            </tr>
                            <tr className="border-b-1 border-[#ffe9d0]">
                              <td className="w-[50%] py-[16px] pr-[15px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                                Fermentum
                              </td>
                              <td className="w-[50%] text-end py-[16px] pl-[15px] leading-[22px] text-[12px] text-[#5f5f5f]">
                                Risus posuere loremous
                              </td>
                            </tr>
                            <tr className="border-b-1 border-[#ffe9d0]">
                              <td className="w-[50%] py-[16px] pr-[15px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                                Pellenatesque
                              </td>
                              <td className="w-[50%] text-end py-[16px] pl-[15px] leading-[22px] text-[12px] text-[#5f5f5f]">
                                Comodous in tempor dullamcorper
                              </td>
                            </tr>
                            <tr className="border-b-1 border-[#ffe9d0]">
                              <td className="w-[50%] py-[16px] pr-[15px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                                Diaculis
                              </td>
                              <td className="w-[50%] text-end py-[16px] pl-[15px] leading-[22px] text-[12px] text-[#5f5f5f]">
                                Pellentesque de neque mattis
                              </td>
                            </tr>
                            <tr className="">
                              <td className="w-[50%] py-[16px] pr-[15px] leading-[22px] text-[12px] text-[#433b32] font-medium uppercase">
                                Sollicitudino
                              </td>
                              <td className="w-[50%] text-end py-[16px] pl-[15px] leading-[22px] text-[12px] text-[#5f5f5f]">
                                Divamus purus justo
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="relative w-full ">
                    <Image
                      src="/images/hero-slider/slider5.jpg"
                      alt="Slide 1"
                      height={700}
                      width={1920}
                      className="w-full object-cover"
                    />
                    <div className="max-w-[575px] w-full mx-auto mb-[25px] sm:mb-0  h-[174px] relative md:absolute md:top-1/2 p-5 lg:left-[21%] md:left-[4%] md:-translate-y-1/2">
                      <h3 className="text-[24px] hidden sm:block lg:text-[30px] font-medium text-center lg:text-left mb-[10px] uppercase text-[#000000] md:text-[#ffffff]">
                        metropolis
                      </h3>
                      <p className="text-[12px] lg:text-[14px] font-normal leading-[22px] mb-[18px] text-center lg:text-left text-[#000000] md:text-[#ffffff]">
                        Nam tempus turpis at metus scelerisque placerat nulla
                        deumantos sollicitudin delos felis de cosmo milancelos.
                        Pellentesque diam dolor an elementum et lobortis. Nuncos
                        vestibulum interdum turpis.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col md:flex-row gap-[10px] mb-[60px]">
                    <div className="relative md:w-[50%] w-full">
                      <Image
                        src="/images/new collections/6.jpg"
                        alt="Slide 1"
                        height={770}
                        width={664}
                        className="w-full object-cover"
                      />
                      <div className="max-w-[575px] w-full mx-auto mb-[25px] sm:mb-0  h-[174px] relative md:absolute bottom-0 xl:bottom-[80px] md:left-[15px] md:right-[15px] py-[20px] xl:px-[100px]">
                        <h3 className="text-[24px] hidden sm:block lg:text-[30px] font-medium text-center lg:text-left mb-[10px] uppercase text-[#000000] md:text-[#ffffff]">
                          Milancé
                        </h3>
                        <p className="text-[12px] lg:text-[14px] font-normal leading-[22px] mb-[18px] text-center lg:text-left text-[#000000] md:text-[#ffffff]">
                          Nam tempus turpis at metus scelerisque placerat nulla
                          deumantos sollicitudin delos felis de cosmo
                          milancelos. Pellentesque diam dolor an elementum et
                          lobortis. Nuncos vestibulum interdum turpis.
                        </p>
                      </div>
                    </div>
                    <div className="relative md:w-[50%] w-full">
                      <Image
                        src="/images/new collections/8.jpg"
                        alt="Slide 1"
                        height={770}
                        width={664}
                        className="w-full object-cover"
                      />
                      <div className="max-w-[575px] w-full mx-auto mb-[25px] sm:mb-0  h-[174px] relative md:absolute bottom-0 xl:bottom-[80px] md:left-[15px] md:right-[15px] py-[20px] xl:px-[100px]">
                        <h3 className="text-[24px] hidden sm:block lg:text-[30px] font-medium text-center lg:text-left mb-[10px] uppercase text-[#000000] md:text-[#ffffff]">
                          Cosmopolis
                        </h3>
                        <p className="text-[12px] lg:text-[14px] font-normal leading-[22px] mb-[18px] text-center lg:text-left text-[#000000] md:text-[#ffffff]">
                          Nam tempus turpis at metus scelerisque placerat nulla
                          deumantos sollicitudin delos felis de cosmo
                          milancelos. Pellentesque diam dolor an elementum et
                          lobortis. Nuncos vestibulum interdum turpis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <NewReleases />
                <RecentlyViewed />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-[10px] py-[16px]">
          <Link href="#" className="text-center text-[#5a5a5a] text-[12px]">
            Home
          </Link>
          <FaAngleRight className="text-[#f8942e] text-[12px]" />
          <Link href="#" className="text-center text-[#f8941e] text-[12px]">
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
