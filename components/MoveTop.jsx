"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const MoveTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div
      className={`h-[52px] w-[52px] border-2 bg-[#fff] flex justify-center items-center fixed bottom-[15vh] right-[3.175%] cursor-pointer z-50 transform transition-all duration-300 ease-in-out ${
        scrolled ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href="#topNav">
        <FaAngleUp size={33} />
      </Link>
    </div>
  );
};

export default MoveTop;
