import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="w-full sm:py-[57px] pt-[57px] pb-[25px]">
        <div className="px-[15px] max-w-[1600px] w-full mx-auto">
          <div className="grid grid-cols-12 gap-[10px]">
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <ul className="text-[#5f5f5f] text-[12px] font-[400]">
                <li className="mt-[12px] mb-[17px]">
                  <b className="text-[14px] font-medium text-[#232323] uppercase">
                    shop
                  </b>
                </li>
                <li>
                  <Link href="#">New In</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Mens</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Womens</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Jewelry</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Accessories</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Brands</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Lookbook</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <ul className="text-[#5f5f5f] text-[12px] font-[400]">
                <li className="mt-[12px] mb-[17px]">
                  <b className="font-medium text-[#232323] uppercase">
                    information
                  </b>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">About</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Customer Service</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Reward Program</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Reward Program</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Terms & Conditions</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <ul className="text-[#5f5f5f] text-[12px] font-[400]">
                <li className="mt-[12px] mb-[17px]">
                  <b className="text-[14px] font-medium text-[#232323] uppercase">
                    customer service
                  </b>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Search Terms</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Advanced Search</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Orders and Returns</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Contact Us</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Theme FAQs</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Consultant</Link>
                </li>
                <li className="mt-[12px]">
                  <Link href="#">Store Locations</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-[#5f5f5f] text-[12px] font-[400]">
              <h3 className="mt-[12px] mb-[17px] text-[14px] font-medium text-[#232323] uppercase">
                store info.
              </h3>
              <div className="mb-[35px]">
                <p className="mb-[8px]">
                  <span className="leading-[20px]">
                    685 Market Street, San Francisco, CA 94105, United States
                  </span>
                </p>
                <p className="mb-[8px]">
                  <span className="leading-[20px]">+0123 456 7890</span>
                </p>
                <p className="mb-[8px]">
                  <span className="leading-[20px]">email@domain.com</span>
                </p>
                <p className="mb-[8px]">
                  <span className="leading-[20px]">M-T 8:30-2:00 pm</span>
                </p>
                <p className="mb-[8px]">
                  <span className="leading-[20px]">F-S 9:00-1:00 pm GMT+7</span>
                </p>
              </div>
              <div className="w-full flex shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)]">
                <div className="w-[50%] p-[12px] flex flex-row justify-between items-center">
                  <div className="langImage inline-flex gap-x-[5px]">
                    <Image
                      src="/images/language-logo/1.png"
                      alt="langImage"
                      height={20}
                      width={20}
                      className="rounded-full"
                    />
                    <span className="text-[#34313a] font-medium">EN</span>
                  </div>
                  <div className="chervon-down">
                    <IoIosArrowDown />
                  </div>
                </div>
                <div className="w-[50%] p-[12px] flex flex-row justify-between items-center">
                  <div className="langImage inline-flex gap-x-[5px]">
                    <Image
                      src="/images/language-logo/2.png"
                      alt="langImage"
                      height={20}
                      width={20}
                      className="rounded-full"
                    />
                    <span className="text-[#34313a] font-medium">USD</span>
                  </div>
                  <div className="chervon-down">
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="seprator h-[1px] w-full bg-[#b7b7b8]"></div>
      <div className="pt-[35px] pb-[55px]">
        <div className="px-[15px] max-w-[1600px] w-full mx-auto">
          <div className="grid grid-cols-12 gap-[30px] sm:gap-[15px]">
            <div className="col-span-12 sm:col-span-6 md:col-span-4 flex justify-center sm:justify-flex-start gap-x-[10px] sm:gap-x-0">
              <div>
                <Image
                  src="/images/footer-logos/1.png"
                  height={24}
                  width={38}
                  alt="logo 1"
                />
              </div>
              <div>
                <Image
                  src="/images/footer-logos/2.png"
                  height={24}
                  width={38}
                  alt="logo 2"
                />
              </div>
              <div>
                <Image
                  src="/images/footer-logos/3.png"
                  height={24}
                  width={38}
                  alt="logo 3"
                />
              </div>
              <div>
                <Image
                  src="/images/footer-logos/4.png"
                  height={24}
                  width={38}
                  alt="logo 4"
                />
              </div>
              <div>
                <Image
                  src="/images/footer-logos/5.png"
                  height={24}
                  width={38}
                  alt="logo 5"
                />
              </div>
              <div>
                <Image
                  src="/images/footer-logos/6.png"
                  height={24}
                  width={38}
                  alt="logo 6"
                />
              </div>
              <div>
                <Image
                  src="/images/footer-logos/7.png"
                  height={24}
                  width={38}
                  alt="logo 7"
                />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 flex justify-center">
              <Link href="/" className="">
                <Image
                  src="/images/logo/logo.png"
                  alt="Logo"
                  width={157}
                  height={25}
                />
              </Link>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="text-[#5f5f5f] text-[12px] text-center md:text-right leading-[30px]">
                <span>
                  © 2019 LUXWatches Demo. All rights reserved. Powered by
                  Shopify.
                </span>
                <br />
                <Link href="#">Shopify theme by HeloThemes.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
