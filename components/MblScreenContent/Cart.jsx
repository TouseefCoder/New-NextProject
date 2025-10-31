"use client";
import React from "react";

import MyContext from "@/context/MyContext";
import { FaXmark } from "react-icons/fa6";
import CartSlider from "./cartSlider";

const CartContent = () => {
  const { cartOpen, setCartOpen } = React.useContext(MyContext);

  return (
    <div className="w-full h-full">
      <div
        className={`w-[430px] max-w-[calc(100%-30px)] p-[15px] bg-white h-screen overflow-y-auto right-0 top-0 rounded transform transition-transform duration-300 fixed z-60 cursor-pointer ${
          !cartOpen ? "translate-x-full" : "-translate-x-0"
        }`}
      >
        <div className="mt-[7px] mb-[22px] w-full">
          <div className="w-full flex justify-end">
            <button
              className="text-center uppercase text-[12px] flex items-center gap-x-1 cursor-pointer"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <FaXmark fontSize={17} color="#f8941e" />
              close
            </button>
          </div>

          <h6 className="text-[13px] text-center font-medium tracking-[.05em] block mt-[30px] uppercase text-[#000]">
            review you cart
          </h6>
          <p className="my-[20px] text-center text-[12px] text-[#727272]">
            Your cart is currently empty
          </p>
          <button className="text-center mb-[20px] uppercase w-full border text-[#f8941e] font-medium py-[7px] text-[14px] transform transition-all duration-300 px-[15px] hover:bg-[#f8941e] hover:text-[#fff]">
            continue shopping
          </button>
        </div>
        <div className="extra-options mt-[30px] mb-[20px]">
          <h6 className="text-[13px] text-center font-medium tracking-[.05em] block mt-[30px] uppercase text-[#000]">
            add an extra options
          </h6>
          <div className="w-[250px] mx-auto mt-[15px]">
            <CartSlider />
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full fixed top-0 left-0 bg-black/50 z-50 cursor-pointer transition-all duration-300 ease-in-out ${
          cartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setCartOpen(!cartOpen)}
      ></div>
    </div>
  );
};

export default CartContent;
