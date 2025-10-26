"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { IoCartOutline, IoMenuSharp } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { CiSearch, CiMail } from "react-icons/ci";
import { VscMenu } from "react-icons/vsc";
import { useContext } from "react";
import MainNavContent from "./MblScreenContent/MainNav";
import MyContext from "@/context/MyContext";
import CartContent from "./MblScreenContent/Cart";
import UserContent from "./MblScreenContent/UserInfo";
import RightNav from "./MblScreenContent/RightNav";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Navbar = () => {
  const {
    navLeft,
    setNavLeft,
    cartOpen,
    setCartOpen,
    user,
    setUser,
    rightNav,
    setRightNav,
    scrolled,
    setScrolled,
  } = useContext(MyContext);
  console.log(scrolled);

  return (
    <>
      <div
        id="topNav"
        className={`flex flex-col sticky top-0 z-40 border-box w-full items-center justify-center text-[#ffffff] bg-[#0f0f0f]
        `}
      >
        <div
          className={`max-w-[1890px] lg:px-[60px] pl-[20px] pr-[20px]  xl:h-[70px] h-[50px] w-full flex items-center text-white  ${
            scrolled ? "xl:h-[116px] 2xl:h-[70px]" : "xl:h-[70px]"
          }`}
        >
          <div className="md:w-[340px] w-full left-class h-full flex items-center">
            {scrolled ? (
              <Link href="/" className="hidden xl:flex">
                <Image
                  src="/images/logo/logo.png"
                  alt="Logo"
                  width={157}
                  height={25}
                  className="invert"
                />
              </Link>
            ) : (
              <ul className="hidden xl:flex justify-start items-center w-full h-full gap-x-[10px] text-[15px] font-medium">
                <li>
                  <Link
                    className={`gap-x-[5px] text-[12px] text-[#ffffff] tracking-widest w-full flex items-center gap-1`}
                    href="/"
                  >
                    <MdOutlinePhone size={12} />
                    <span className="whitespace-nowrap">+123 456 789</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`gap-x-[10px] text-[12px] text-[#ffffff] tracking-widest flex items-center gap-1`}
                    href="/"
                  >
                    <CiMail size={12} />
                    <span>email@gmaildomain.com</span>
                  </Link>
                </li>
              </ul>
            )}

            <ul className="flex xl:hidden justify-start items-center w-full h-full gap-6 text-[15px] font-medium">
              <li>
                <Link
                  onClick={() => setNavLeft(!navLeft)}
                  className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-[#ffffff] tracking-widest flex items-center gap-1`}
                  href="#"
                >
                  <VscMenu size={28} />
                </Link>
              </li>
              <li>
                <Link
                  className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-[#ffffff] tracking-widest flex items-center gap-1`}
                  href="#"
                >
                  <CiSearch className=" text-[#ffffff] w-[22px] h-[22px]" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[calc(100%-680px)] center-class h-full flex items-center justify-center">
            {!scrolled ? (
              <Link href="/" className={`${!scrolled ? "flex" : "xl:hidden"}`}>
                <div className="w-[157px] h-[25px] flex justify-center items-center">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Logo"
                    width={157}
                    height={25}
                    className="invert sm:w-[157px] w-[100px]"
                  />
                </div>
              </Link>
            ) : (
              <>
                <Link href="/" className="flex xl:hidden">
                  <div className="w-[157px] h-[25px] flex justify-center items-center">
                    <Image
                      src="/images/logo/logo.png"
                      alt="Logo"
                      width={157}
                      height={25}
                      className="invert sm:w-[157px] w-[100px]"
                    />
                  </div>
                </Link>
                <ul className="hidden xl:flex justify-center items-center flex-wrap w-full gap-x-10 gap-y-[10px] text-[15px] font-medium">
                  <li className="">
                    <Link
                      className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-white tracking-widest`}
                      href="/product-details"
                    >
                      New Releases
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-white tracking-widest`}
                      href="/men"
                    >
                      mens
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-white tracking-widest`}
                      href="/men"
                    >
                      womens
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-white tracking-widest`}
                      href="/men"
                    >
                      Jewelery
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-white tracking-widest`}
                      href="/men"
                    >
                      accessories
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-white tracking-widest`}
                      href="/blog"
                    >
                      blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-white tracking-widest`}
                      href="/"
                    >
                      demo
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-white tracking-widest`}
                      href="/"
                    >
                      my theme
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
          <div className="md:w-[410px] w-full right-class h-full">
            <ul className="flex justify-end items-center w-full h-full gap-6 text-[15px] font-medium">
              <li>
                <Link
                  className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-white tracking-widest flex items-center gap-1`}
                  href="#"
                >
                  <span className="hidden xl:flex">account</span>
                  <CiUser size={22} onClick={() => setUser(!user)} />
                </Link>
              </li>
              <li className="relative">
                <Link
                  className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-white tracking-widest flex items-center gap-1`}
                  href="#"
                  onClick={() => setCartOpen(!cartOpen)}
                >
                  <span className="hidden xl:flex">cart</span>
                  <IoCartOutline size={20} />
                  <span className="absolute top-[-10px] right-[-10px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#b20000] text-[#ffffff]">
                    0
                  </span>
                </Link>
              </li>
              <li className="hidden xl:flex w-[0.5px] h-[20px] border border-l-[#000] border-dotted"></li>
              <li className="hidden xl:flex ">
                <Link
                  className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-[#0f0f0f] tracking-widest flex items-center gap-1`}
                  href="/"
                >
                  <CiSearch
                    className="text-white w-[18px] h-[17px]"
                    strokeWidth={2}
                  />
                </Link>
              </li>
              <li className="hidden xl:flex ">
                <Link
                  onClick={() => setRightNav(!rightNav)}
                  className={`${poppins.variable} ${poppins.className} font-medium uppercase text-[12px] text-white tracking-widest flex items-center gap-1`}
                  href="#"
                >
                  <VscMenu size={28} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {!scrolled && (
          <div className="hidden xl:flex h-[55px] bg-[#f5f5f5] w-full items-center justify-center text-[rgba(0,0,0,0.5)]">
            <ul className="hidden lg:flex justify-center items-center flex-wrap w-full gap-x-10 gap-y-[10px] text-[15px] font-medium">
              <li className="">
                <Link
                  className={`font-medium uppercase text-[12px] text-[#000] tracking-widest`}
                  href="/product-details"
                >
                  New Releases
                </Link>
              </li>

              <li>
                <Link
                  className={`font-medium uppercase text-[12px] text-[#000] tracking-widest`}
                  href="/men"
                >
                  mens
                </Link>
              </li>

              <li>
                <Link
                  className={`font-medium uppercase text-[12px] text-[#000] tracking-widest`}
                  href="/men"
                >
                  womens
                </Link>
              </li>

              <li>
                <Link
                  className={`font-medium uppercase text-[12px] text-[#000] tracking-widest`}
                  href="/men"
                >
                  Jewelery
                </Link>
              </li>

              <li>
                <Link
                  className={`font-medium uppercase text-[12px] text-[#000] tracking-widest`}
                  href="/"
                >
                  accessories
                </Link>
              </li>

              <li>
                <Link
                  className={`font-medium uppercase text-[12px] text-[#000] tracking-widest`}
                  href="/blog"
                >
                  blog
                </Link>
              </li>

              <li>
                <Link
                  className={`font-medium uppercase text-[12px] text-[#000] tracking-widest`}
                  href="/"
                >
                  demo
                </Link>
              </li>

              <li>
                <Link
                  className={`font-medium uppercase text-[12px] text-[#000] tracking-widest`}
                  href="/"
                >
                  my theme
                </Link>
              </li>
            </ul>
          </div>
        )}
        <RightNav />
      </div>
    </>
  );
};

export default Navbar;
