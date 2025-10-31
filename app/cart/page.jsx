"use client";

import TopSeller from "@/components/cart/TopSeller";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChevronRightIcon } from "lucide-react";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaShield, FaXmark } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="w-full max-w-[1170px] mx-auto mt-[30px] mb-[45px] xl:my-[70px] px-[15px] xl:px-[15px]">
          <div className="heading relative mb-[39px]">
            <h3 className="text-[24px] text-[#0f0f0f] tracking-[.05rem] mb-[20px] font-medium text-center uppercase">
              your cart
            </h3>
            <Link
              className="uppercase text-[12px] text-[#0f0f0f] flex items-center gap-1 absolute bottom:10 sm:bottom-0 right-0"
              href={"/checkout"}
            >
              <span className="underline underline-offset-2">checkout</span>
              <ChevronRightIcon size={18} />
            </Link>
          </div>
          <div className="progess">
            <div className="free_shipping_progress">
              <div
                className="progress_shipping"
                role="progressbar"
                style={{
                  height: "15px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  backgroundColor: "#e1dfd6",
                  WebkitBoxShadow: "inset 0 1px 2px rgba(0,0,0,.1)",
                  boxShadow: "inset 0 1px 2px rgba(0,0,0,.1)",
                }}
              >
                <div
                  className="progress-meter"
                  style={{
                    position: "relative",
                    display: "block",
                    height: "100%",
                    backgroundColor: "#69c69c",
                    textAlign: "center",
                    lineHeight: "15px",
                    color: "#ffffff",
                    width: "100%",
                    WebkitAnimation:
                      "2s linear 0s normal none infinite running progress-bar-stripes",
                    animation:
                      "2s linear 0s normal none infinite running progress-bar-stripes",
                    backgroundImage:
                      "linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)",
                    backgroundSize: "40px 40px",
                    transition: "0.9s linear",
                    transitionProperty: "width, background-color",
                  }}
                >
                  100%
                </div>
              </div>
            </div>
            <div className="quality mt-[15px] mb-[20px] text-[12px] text-[#0f0f0f]">
              <span>Your qaulity for free shipping!</span>
            </div>
          </div>
          <div className="grid grid-cols-12 w-full h-full">
            <div className="col-span-12 lg:col-span-8 px-[15px] h-full mb-[30px]">
              <h2 className="uppercase text-[12px] text-[#0f0f0f] py-[12px] px-[20px] bg-[#f8f8f8] font-medium leading-[22px] tracking-[0.02em]">
                products
              </h2>
              <ul className="mt-[5px] w-full mb-[30px]">
                <li className="py-[35px] border-b border-[#f7f7f7] flex">
                  <Link href={"#"}>
                    <Image
                      src="/images/new releases/11.jpg"
                      alt="image 1"
                      height={139}
                      width={109}
                      className="mr-[30px]"
                    />
                  </Link>
                  <div>
                    <Link
                      href={"#"}
                      className="text-[12px] font-medium text-[#0f0f0f] leading-[22px] mt-[-5px] mb-[5px] block"
                    >
                      Maliduar A Delerisque Loremous Scele
                    </Link>
                    <span className="text-[12px] leading-[22px] text-[#5f5f5f] mb-[15px] block">
                      Mango
                    </span>
                    <p className="text-[14px] leading-[22px] mb-[18px]">
                      $ 530.0
                    </p>
                    <label
                      htmlFor="quantity"
                      className="text-[12px] leading-[20px] mb-[6px] block"
                    >
                      Quantity
                    </label>

                    <div className="flex justify-start flex-col lg:flex-row  gap-y-4 items-flex-start lg:items-center w-full">
                      <div className="extraItem h-[42px] w-[144px] border border-[#ccc] mr-[30px] flex justify-between">
                        <div className="flex justify-center items-center w-[40px]  text-center h-full">
                          <Link href="#" className="text-[#7b7b7b] text-[16px]">
                            -
                          </Link>
                        </div>
                        <div className="input w-[64px] border-l border-r border-[#ccc] h-full text-[12px] text-[#0f0f0f]">
                          <input
                            type="number"
                            defaultValue="1"
                            className="text-center h-full w-full"
                          />
                        </div>
                        <div className="flex justify-center items-center w-[40px] text-center h-full">
                          <Link href="#" className="text-[#7b7b7b] text-[16px]">
                            +
                          </Link>
                        </div>
                      </div>

                      <div className="extraItem h-[42px] w-[164px] border border-[#f8941e] hover:border-[#ff8800] mr-[30px] flex justify-center items-center">
                        <Link
                          href={"#"}
                          className="text-[12px] text-[#f8941e] font-medium"
                        >
                          Update Cart
                        </Link>
                      </div>
                      <div className="extraItem h-[42px] w-[164px] border border-[#f8941e] hover:border-[#b20000] mr-[30px] flex justify-center items-center">
                        <Link
                          href={"#"}
                          className="text-[12px] font-medium text-[#f8941e] flex items-center gap-[3px]"
                        >
                          <FaXmark /> <span>Remove</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="py-[35px] border-b border-[#f7f7f7] flex">
                  <Link href={"#"}>
                    <Image
                      src="/images/new releases/14.jpg"
                      alt="image 1"
                      height={139}
                      width={109}
                      className="mr-[30px]"
                    />
                  </Link>
                  <div>
                    <Link
                      href={"#"}
                      className="text-[12px] font-medium text-[#0f0f0f] leading-[22px] mt-[-5px] mb-[5px] block"
                    >
                      Maliduar A Delerisque Loremous Scele
                    </Link>
                    <span className="text-[12px] leading-[22px] text-[#5f5f5f] mb-[15px] block">
                      Mango
                    </span>
                    <p className="text-[14px] leading-[22px] mb-[18px]">
                      $ 530.0
                    </p>
                    <label
                      htmlFor="quantity"
                      className="text-[12px] leading-[20px] mb-[6px] block"
                    >
                      Quantity
                    </label>

                    <div className="flex justify-start flex-col lg:flex-row gap-y-4 items-flex-start lg:items-center w-full">
                      <div className="extraItem h-[42px] w-[144px] border border-[#ccc] mr-[30px] flex justify-between">
                        <div className="flex justify-center items-center w-[40px]  text-center h-full">
                          <Link href="#" className="text-[#7b7b7b] text-[16px]">
                            -
                          </Link>
                        </div>
                        <div className="input w-[64px] border-l border-r border-[#ccc] h-full text-[12px] text-[#0f0f0f]">
                          <input
                            type="number"
                            defaultValue="1"
                            className="text-center h-full w-full"
                          />
                        </div>
                        <div className="flex justify-center items-center w-[40px] text-center h-full">
                          <Link href="#" className="text-[#7b7b7b] text-[16px]">
                            +
                          </Link>
                        </div>
                      </div>

                      <div className="extraItem h-[42px] w-[164px] border border-[#f8941e] hover:border-[#ff8800] mr-[30px] flex justify-center items-center">
                        <Link
                          href={"#"}
                          className="text-[12px] text-[#f8941e] font-medium"
                        >
                          Update Cart
                        </Link>
                      </div>
                      <div className="extraItem h-[42px] w-[164px] border border-[#f8941e] hover:border-[#b20000] mr-[30px] flex justify-center items-center">
                        <Link
                          href={"#"}
                          className="text-[12px] font-medium text-[#f8941e] flex items-center gap-[3px]"
                        >
                          <FaXmark /> <span>Remove</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="continue-button mb-[30px]">
                <Link
                  className="uppercase text-[12px] text-[#0f0f0f] leading-[20px] flex items-center gap-1"
                  href={"#"}
                >
                  <ChevronLeftIcon size={18} />
                  <span className="underline underline-offset-2 font-medium">
                    continue shopping
                  </span>
                </Link>
              </div>
              <div className="border border-[#f7f7f7] pb-[38px] mb-[31px]">
                <h2 className="text-[14px] uppercase font-medium tracking-[0.05em] p-[32px]">
                  add an extra options
                </h2>
                <div className="hidden md:block extra-image px-[35px] w-full relative">
                  <div className="px-[43px] flex justify-flex-start">
                    <div className="contentLeft relative w-[139px] mr-[30px]">
                      <Image
                        src="/images/new releases/14.jpg"
                        alt="image 1"
                        height={139}
                        width={109}
                      />
                      <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
                        <p className="pt-0 top-content text-end mb-[5px]">
                          <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                            New
                          </span>
                        </p>

                        <p className="pt-0 top-content text-end mb-[5px]">
                          <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#232323] capitalize">
                            online only
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="contentCenter px-[35px]">
                      <span className="text-[12px] leading-[22px] text-[#5f5f5f] mb-[15px] block">
                        Donatello
                      </span>
                      <Link
                        href={"#"}
                        className="text-[12px] font-medium text-[#0f0f0f] leading-[22px] mt-[-5px] mb-[5px] block"
                      >
                        Cosmo De Milancelos Gempus
                      </Link>

                      <p className="text-[14px] leading-[22px] mb-[18px] tex-[#5f5f5f] text-[#b20000]">
                        <span className="text-[#969696] line-through mr-[10px]">
                          $ 530.0
                        </span>
                        +$ 530.0
                      </p>
                    </div>
                    <div className="contentRight pl-[35px] border-l border-[#f7f7f7] h-[55px]">
                      <div className="extraItem h-[42px] w-[164px] border mt-[15px] hover:border-[#0f0f0f] bg-[#000] text-[#fff] flex justify-center items-center">
                        <Link
                          href={"#"}
                          className="text-[12px] font-medium flex items-center gap-[3px]"
                        >
                          ADD+
                        </Link>
                      </div>
                    </div>
                  </div>
                  <ChevronRightIcon className="absolute right-[20px] top-1/4" />
                  <ChevronLeftIcon className="absolute left-[20px] top-1/4" />
                </div>
                <div className="flex flex-col w-full items-center md:hidden relative h-auto text-center text-[#232323]">
                  <div className="absolute top-0 left-0 w-full h-auto p-[15px]">
                    <p className="pt-0 top-content text-end mb-[5px]">
                      <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#0073bd]">
                        New
                      </span>
                    </p>
                    {/* <p className="pt-0 top-content text-end mb-[5px]">
                                <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#f8941e] capitalize">
                                  sale
                                </span>
                              </p> */}
                    <p className="pt-0 top-content text-end mb-[5px]">
                      <span className="mt-0 px-[7px] pt-[4px] pb-[3px] text-[12px] font-[400] text-[#ffffff] bg-[#433b32] capitalize">
                        online only
                      </span>
                    </p>
                  </div>
                  <Image
                    src="/images/new releases/11.jpg"
                    alt="image 1"
                    height={500}
                    width={500}
                    className="mb-[12px]"
                  />
                  <p className="text-[12px] ">Mangos</p>
                  <p className="leading-[22px] text-[14px] font-medium mb-[4px] ">
                    Ampus Cosmo De Milancelos Scelerisque
                  </p>
                  <p className="text-[14px] font-[400] mb-[15px]">$ 500.00</p>

                  <ul className="flex items-center mb-[25px]  justify-center gap-x-[2px]">
                    <li>
                      <Image
                        src="/images/new releases/11.jpg"
                        height={22}
                        width={22}
                        alt="price image"
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/new releases/12.jpg"
                        height={22}
                        width={22}
                        alt="price image"
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/new releases/13.jpg"
                        height={22}
                        width={22}
                        alt="price image"
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/new releases/14.jpg"
                        height={22}
                        width={22}
                        alt="price image"
                      />
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[#787878] text-[12px] font-[400px]"
                      >
                        +2
                      </Link>
                    </li>
                  </ul>
                  <div className="text-[14px] font-[400] mb-[15px] mx-auto bg-[#f8941e] hover:bg-transparent hover:border border-[#f8941e]  text-white hover:text-[#f8941e] max-w-[420px] w-full p-[15px]">
                    <Link href="#" className="uppercase font-medium">
                      select options
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex text-[12px] text-[#5f5f5f] leading-[22px] items-center gap-[5px]">
                <FaShieldAlt /> <span>Secure Shopping Guarantee.</span>
              </div>
              <div className="seallogo mt-[22px]">
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
            <div className="col-span-12 lg:col-span-4 px-[15px] mb-[30px]">
              <h2 className="uppercase text-[12px] text-[#0f0f0f] text-cener py-[12px] bg-[#f8f8f8] px-[20px] font-medium leading-[22px] tracking-[0.02em]">
                order summery
              </h2>
              <div className="subtotal pt-[30px] pb-[23px] mb-[21px] font-medium border-b border-[#f7f7f7] text-[12px] text-[#0f0f0f] flex justify-between items-center">
                <h2 className="text-[12px]">subtotal:</h2>
                <h3 className="text-[16px]">$ 530.0</h3>
              </div>
              <form action="">
                <div className="inputgroup">
                  <label
                    htmlFor=""
                    className="text-[12px] text-[#0f0f0f] font-medium mb-[15px] flex items-center"
                  >
                    <span className="bg-[#f8941e] text-[#fff] text-[10px] flex justify-center px-[5px] items-center mr-[5px]">
                      Note
                    </span>
                    Additional Comments
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    className="w-full resize-y border border-[#cbcbcb] mb-[20px] outline-none px-[12px] pt-[10px] pb-[8px] text-[#3c3c3c]"
                  ></textarea>
                  <div className="terms text-[12px] flex items-center mb-[24px] gap-[10px]">
                    <input type="checkbox" name="" id="terms" />
                    <label htmlFor="terms">
                      I agree with the terms and conditions
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="proceed to checkout"
                    className="w-full leading-[42px] bg-[#b20000] hover:bg-transparent uppercase cursor-pointer hover:border border-[#b20000] hover:bg-none hover:text-[#b20000] opacity-[.65] font-medium text-[#fff] mb-[45px] text-[14px]"
                  />
                  <div className="shippingCalculation text-[#0f0f0f]">
                    <h2 className="text-[14px] uppercase font-medium tracking-[0.05em] py-[12px] pr-[20px] mb-[20px]">
                      get shipping estimates
                    </h2>
                    <div className="inputgroup mb-[16px]">
                      <label
                        htmlFor="country"
                        className=" text-[12px] text-[#0f0f0f] font-medium mb-[6px] block"
                      >
                        Country
                      </label>
                      <select
                        name=""
                        id=""
                        className="w-full border border-[#f8941e] outline-none text-[12px] px-[12px] pt-[10px] pb-[8px] text-[#3c3c3c]"
                      >
                        <option value="">---</option>
                        <option value="">Pakistan</option>
                        <option value="">India</option>
                      </select>
                    </div>
                    <div className="inputgroup mb-[16px]">
                      <label
                        htmlFor="postalcode"
                        className=" text-[12px] text-[#0f0f0f] font-medium mb-[6px] block"
                      >
                        Postal/Zip Code
                      </label>
                      <input
                        type="text"
                        name=""
                        id="postalcode"
                        className="w-full border border-[#f8941e] outline-none text-[12px] px-[12px] pt-[10px] pb-[8px] text-[#3c3c3c"
                      />
                    </div>
                    <input
                      type="submit"
                      value="calculate shipping"
                      className="w-full leading-[42px] bg-[#f8941e] hover:bg-transparent uppercase cursor-pointer hover:border border-[#f8941e] hover:bg-none hover:text-[#f8941e] font-medium text-[#fff] mb-[45px] text-[14px]"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <TopSeller />
        </div>
        <div className="flex justify-center items-center gap-x-[10px] py-[16px]">
          <Link href="#" className="text-center text-[#5a5a5a] text-[12px]">
            Home
          </Link>
          <FaAngleRight className="text-[#f8941e] text-[12px]" />
          <Link href="#" className="text-center text-[#f8941e] text-[12px]">
            Cart
          </Link>
        </div>
        <Contactus />
        <Footer />
      </div>
    </>
  );
};

export default page;
