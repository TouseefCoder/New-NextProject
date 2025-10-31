// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import SvgFile from "@/components/checkout/SvgFile";

const page = () => {
  return (
    <>
      <div className="bg-[#433b32] w-full">
        <div className="w-full max-w-[1060px] p-[21px]  mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <img
                src="/images/logo/logo.png"
                alt="Logo"
                className="invert w-[200px] h-[32px] sm:w-[300px] sm:h-[47px]"
              />
            </Link>
          </div>
          <div>
            <Link href={"/cart"}>
              <HiOutlineShoppingBag size={24} color="#fff" />
            </Link>
          </div>
        </div>
      </div>
      <div className="sticky top-0">
        <div className="max-w-[1060px] w-full flex flex-col md:flex-row gap-y-[20px] mx-auto">
          <div className="w-full md:w-[50%] h-[100vh] p-[38px] overflow-auto scrollbar-none">
            <div className="contact flex justify-between items-baseline mb-[14px]">
              <h4 className="font-medium text-[21px]">Contact</h4>
              <Link href={"#"} className="underline text-[#197bbd] text-[12px]">
                Sign in
              </Link>
            </div>
            <div className="input">
              <input
                type="text"
                name=""
                placeholder="Email or mobile phone number"
                className="py-[13.5px] px-[11px] text-[12px] rounded leading-[1.5] border border-[#f8941e] w-full outline-none"
              />
            </div>
            <div className="terms flex items-center mt-[14px]">
              <input type="checkbox" name="" id="check" className="" />
              <label
                htmlFor="check"
                className="text-[12px] text-[#000000] ml-[8px]"
              >
                Email with news and offers
              </label>
            </div>
            <div className="mt-[46px] flex flex-col gap-y-[16px] w-full">
              <div>
                <h4 className="font-medium text-[21px]">Delivery</h4>
              </div>
              <div className="flex flex-col gap-y-[32px] w-full">
                <div className="flex flex-col gap-y-[16px] w-full">
                  <div className="input pt-[21px] pr-[30px] pb-[6px] pl-[11px] w-full border border-[#f8941e] focus:border-[#232323] rounded relative">
                    <select
                      name=""
                      className="appearance-none text-[12px] w-full focus:outline-none"
                      id=""
                    >
                      <option value="1">Nambilia</option>
                      <option value="2">Pakistan</option>
                    </select>
                    <p className="absolute text-[12px] text-[#0000008f] top-[6px] lef-[11px]">
                      Country/Region
                    </p>
                    <FaAngleDown
                      size={12}
                      color="#0000008f"
                      className="absolute right-3.5 top-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div className="flex gap-x-[16px] flex-col md:flex-row gap-y-[16px]">
                    <div className="py-[13.5px] px-[11px] w-full md:w-1/2 border border-[#f8941e] focus:border-[#232323] rounded">
                      <input
                        type="text"
                        placeholder="First name (optional)"
                        name=""
                        className="focus:outline-none w-full text-[12px] leading-[1.5]"
                        id=""
                      />
                    </div>
                    <div className="py-[13.5px] px-[11px] w-full md:w-1/2 border border-[#f8941e] focus:border-[#232323] rounded">
                      <input
                        type="text"
                        placeholder="Last name"
                        name=""
                        className="focus:outline-none w-full text-[12px] leading-[1.5]"
                        id=""
                      />
                    </div>
                  </div>
                  <div className="py-[13.5px] px-[11px] w-full border border-[#f8941e] focus:border-[#232323] rounded">
                    <input
                      type="text"
                      placeholder="Address"
                      name=""
                      className="focus:outline-none w-full text-[12px] leading-[1.5]"
                      id=""
                    />
                  </div>
                  <div className="py-[13.5px] px-[11px] w-full border border-[#f8941e] focus:border-[#232323] rounded">
                    <input
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                      name=""
                      className="focus:outline-none w-full text-[12px] leading-[1.5]"
                      id=""
                    />
                  </div>
                  <div className="flex gap-x-[16px] flex-col md:flex-row gap-y-[16px]">
                    <div className="py-[13.5px] px-[11px] w-full md:w-1/2 border border-[#f8941e] focus:border-[#232323] rounded">
                      <input
                        type="text"
                        placeholder="City"
                        name=""
                        className="focus:outline-none w-full text-[12px] leading-[1.5]"
                        id=""
                      />
                    </div>
                    <div className="py-[13.5px] px-[11px] w-full md:w-1/2 border border-[#f8941e] focus:border-[#232323] rounded">
                      <input
                        type="text"
                        placeholder="Postal code (optional)"
                        name=""
                        className="focus:outline-none w-full text-[12px] leading-[1.5]"
                        id=""
                      />
                    </div>
                  </div>
                  <div className="terms flex items-center">
                    <input type="checkbox" name="" id="check" className="" />
                    <label
                      htmlFor="check"
                      className="text-[12px] text-[#000000] ml-[8px]"
                    >
                      Email with news and offers
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="text-[21px] font-medium mb-[16px]">
                    Shipping method
                  </h3>
                  <div className="py-[13.5px] px-[11px] w-full border flex items-center justify-between border-[#f8941e] focus:border-[#232323] rounded">
                    <p className="text-[12px]">Free Shipping</p>
                    <h5 className="text-[12px] font-medium">FREE</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[52px]">
              <h3 className="text-[21px] ">Payment</h3>
              <p className="text-[12px] mb-[16px] text-[#0000008f]">
                All transactions are secure and encrypted.
              </p>
              <div className="p-[17px] bg-[#f6f6f6] rounded border border-[#f8941e] flex flex-col items-center">
                <div className="mb-[16px]">
                  <SvgFile />
                </div>
                <p className="text-[12px] text-[#0000008f]">
                  This store can’t accept payments right now.
                </p>
              </div>
            </div>
            <div className="py-[13.5px] px-[11px] w-full mt-[16px] bg-[#f6f6f6] border border-[#f8941e] focus:border-[#232323] rounded">
              <button className="w-full text-center font-medium text-[14px] text-[#000] opacity-[0.5]">
                Pay now
              </button>
            </div>
          </div>
          <div className="w-full md:w-[50%] p-[38px] flex flex-col gap-y-8">
            <div>
              <ul className="flex flex-col">
                <li className="h-auto flex items-center mt-[14px]">
                  <div className="image relative h-[64px] w-[64px] shadow flex justify-center items-center">
                    <img
                      src={"/images/new releases/14.jpg"}
                      alt="cart item"
                      className="h-full w-full object-cover rounded"
                    />
                    <div className="h-[18px] w-[18px] text-[12px] bg-[#f8941e] text-[#fff] rounded absolute top-[-6px] right-[-6px] flex justify-center items-center">
                      1
                    </div>
                  </div>
                  <div className="w-full pl-[14px]">
                    <p className="text-[12px] text-[#000000]">
                      Maliduar A Delerisque Loremous Scele
                    </p>
                  </div>
                  <div className="pl-[14px]">
                    <p className="text-[12px] text-[#000000] whitespace-nowrap">
                      $ 30.00
                    </p>
                  </div>
                </li>
                <li className="h-auto flex items-center mt-[14px]">
                  <div className="image relative h-[64px] w-[64px] shadow flex justify-center items-center">
                    <img
                      src={"/images/new releases/15.jpg"}
                      alt="cart item"
                      className="h-full w-full object-cover rounded"
                    />
                    <div className="h-[18px] w-[18px] text-[12px] bg-[#f8941e] text-[#fff] rounded absolute top-[-6px] right-[-6px] flex justify-center items-center">
                      3
                    </div>
                  </div>
                  <div className="w-full pl-[14px]">
                    <p className="text-[12px] text-[#000000]">
                      Metropolis Daciniad Darturien
                    </p>
                    <p className="text-[12px] text-[#0000008f]">white</p>
                  </div>
                  <div className="pl-[14px]">
                    <p className="text-[12px] text-[#000000] whitespace-nowrap">
                      $ 20.00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <div className="text-[12px] w-full text-[#000000] leading-[22px] flex">
                <div className="w-[50%] text-left">Subtotal · 3 items</div>
                <div className="w-[50%] text-right">$1,528.00</div>
              </div>
              <div className="text-[12px] w-full text-[#000000] leading-[22px] flex mt-[7px]">
                <div className="w-[50%] text-left">Shipping</div>
                <div className="w-[50%] text-right uppercase">free</div>
              </div>
              <div className="text-[19px] w-full font-medium text-[#000000] flex mt-[17px]">
                <div className="w-[50%] text-left">Total</div>
                <div className="w-[50%] text-right uppercase">
                  <span className="text-[12px] uppercase font-normal text-[#0000008f] mr-[8px]">
                    usd
                  </span>
                  $1,528.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
