"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./collection.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const ResponsiveCarousel = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalDots, setTotalDots] = useState(0);

  const settings = {
    dots: false, // disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  // Get total slides count dynamically
  useEffect(() => {
    if (sliderRef.current) {
      const slideCount = sliderRef.current.innerSlider.state.slideCount;
      setTotalDots(slideCount);
    }
  }, []);

  // Custom dot click
  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveIndex(index);
  };

  return (
    <div className="max-w-[1200px] w-full mx-auto mb-[80px] pt-[40px] px-[15px] relative">
      <Slider ref={sliderRef} {...settings} className={`${styles.slideGap}`}>
        <div>
          <div className="col-span-3 lg:col-span-4 h-[420px] content-center bg-[#f5f5f5] mb-[10px] md:mb-[20px]">
            <div className="content-wrapper px-[40px] py-[35px]">
              <h3 className="text-[24px] text-[#0f0f0f] font-medium mb-[15px] text-center uppercase">
                milancelos
              </h3>

              <p className="text-[#5f5f5f] text-[12px] text-center mb-[26px]">
                Nam tempus turpis at metus scelerisque de placerat nullano
                deumantos sollicitudin delos felis pellentesque an milancelos...
              </p>

              <div className="w-full text-center">
                <Link
                  href="#"
                  className="text-[#0f0f0f] font-medium underline decoration-solid underline-offset-[3px] text-center text-[14px] uppercase"
                >
                  learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-4 h-[420px] overflow-hidden relative">
            <img
              src="/images/new collections/3.jpg"
              alt="sample"
              className="w-full h-full object-covertransition-transform duration-500 hover:scale-110"
            />
            <h3 className="text-[24px] text-[#ffffff] font-medium mb-[15px] text-center uppercase absolute bottom-[10px] left-1/2 transform -translate-x-1/2">
              gift packages
            </h3>
          </div>
        </div>
        <div>
          <div className="col-span-3 lg:col-span-4 h-[420px] overflow-hidden relative mb-[10px] md:mb-[20px]">
            <img
              src="/images/new collections/1.jpg"
              alt="sample"
              className="w-full h-full object-covertransition-transform duration-500 hover:scale-110"
            />
            <h3 className="text-[24px] text-[#ffffff] font-medium mb-[15px] text-center uppercase absolute bottom-[10px] left-1/2 transform -translate-x-1/2">
              new releases
            </h3>
          </div>
          <div className="col-span-3 lg:col-span-4 h-[420px] overflow-hidden relative">
            <img
              src="/images/new collections/4.jpg"
              alt="sample"
              className="w-full h-full object-covertransition-transform duration-500 hover:scale-110"
            />
            <div className="content-wrapper text-[#ffffff] px-[40px] py-[35px] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-[24px] font-medium mb-[15px] text-center uppercase">
                loremous
              </h3>
              <p className="text-[12px] text-center mb-[26px]">
                Nam tempus turpis at metus scelerisque de placerat nullano
                deumantos sollicitudin delos felis pellentesque an milancelos...
              </p>
              <div className="w-full text-center">
                <Link
                  href="#"
                  className="font-medium underline decoration-solid underline-offset-[3px] text-center text-[14px] uppercase"
                >
                  learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-span-3 lg:col-span-4 h-[420px] overflow-hidden relative mb-[10px] md:mb-[20px]">
            <img
              src="/images/new collections/2.jpg"
              alt="sample"
              className="w-full h-full object-covertransition-transform duration-500 hover:scale-110"
            />
            <h3 className="text-[24px] text-[#ffffff] font-medium mb-[15px] text-center uppercase absolute bottom-[10px] left-1/2 transform -translate-x-1/2">
              best sellers
            </h3>
          </div>
          <div className="col-span-3 lg:col-span-4 h-[420px] content-center bg-[#f5f5f5]">
            <div className="content-wrapper px-[40px] py-[35px]">
              <h3 className="text-[24px] text-[#0f0f0f] font-medium mb-[15px] text-center uppercase">
                loremous
              </h3>
              <p className="text-[#5f5f5f] text-[12px] text-center mb-[26px]">
                Nam tempus turpis at metus scelerisque de placerat nullano
                deumantos sollicitudin delos felis pellentesque an milancelos...
              </p>
              <div className="w-full text-center">
                <Link
                  href="#"
                  className="text-[#0f0f0f] font-medium underline decoration-solid underline-offset-[3px] text-center text-[14px] uppercase"
                >
                  learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div className="flex lg:hidden justify-center mt-6 items-center gap-3">
        {Array.from({ length: totalDots }).map((_, i) => (
          <div
            key={i}
            onClick={() => handleDotClick(i)}
            className={` w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === activeIndex
                ? "bg-gray-800 scale-110"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCarousel;

{
  /* <div>
            <div className="col-span-3 lg:col-span-4 h-[420px] content-center bg-[#f5f5f5] mb-[10px] md:mb-[20px]">
              <div className="content-wrapper px-[40px] py-[35px]">
                <h3 className="text-[24px] text-[#0f0f0f] font-medium mb-[15px] text-center uppercase">
                  milancelos
                </h3>

                <p className="text-[#5f5f5f] text-[12px] text-center mb-[26px]">
                  Nam tempus turpis at metus scelerisque de placerat nullano
                  deumantos sollicitudin delos felis pellentesque an
                  milancelos...
                </p>

                <div className="w-full text-center">
                  <Link
                    href="#"
                    className="text-[#0f0f0f] font-medium underline decoration-solid underline-offset-[3px] text-center text-[14px] uppercase"
                  >
                    learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-4 h-[420px] overflow-hidden relative">
              <img
                src="/images/new collections/3.jpg"
                alt="sample"
                className="w-full h-full object-covertransition-transform duration-500 hover:scale-110"
              />
              <h3 className="text-[24px] text-[#ffffff] font-medium mb-[15px] text-center uppercase absolute bottom-[10px] left-1/2 transform -translate-x-1/2">
                gift packages
              </h3>
            </div>
          </div>
          <div>
            <div className="col-span-3 lg:col-span-4 h-[420px] overflow-hidden relative mb-[10px] md:mb-[20px]">
              <img
                src="/images/new collections/1.jpg"
                alt="sample"
                className="w-full h-full object-covertransition-transform duration-500 hover:scale-110"
              />
              <h3 className="text-[24px] text-[#ffffff] font-medium mb-[15px] text-center uppercase absolute bottom-[10px] left-1/2 transform -translate-x-1/2">
                new releases
              </h3>
            </div>
            <div className="col-span-3 lg:col-span-4 h-[420px] overflow-hidden relative">
              <img
                src="/images/new collections/4.jpg"
                alt="sample"
                className="w-full h-full object-covertransition-transform duration-500 hover:scale-110"
              />
              <div className="content-wrapper text-[#ffffff] px-[40px] py-[35px] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-[24px] font-medium mb-[15px] text-center uppercase">
                  loremous
                </h3>
                <p className="text-[12px] text-center mb-[26px]">
                  Nam tempus turpis at metus scelerisque de placerat nullano
                  deumantos sollicitudin delos felis pellentesque an
                  milancelos...
                </p>
                <div className="w-full text-center">
                  <Link
                    href="#"
                    className="font-medium underline decoration-solid underline-offset-[3px] text-center text-[14px] uppercase"
                  >
                    learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-span-3 lg:col-span-4 h-[420px] overflow-hidden relative mb-[10px] md:mb-[20px]">
              <img
                src="/images/new collections/2.jpg"
                alt="sample"
                className="w-full h-full object-covertransition-transform duration-500 hover:scale-110"
              />
              <h3 className="text-[24px] text-[#ffffff] font-medium mb-[15px] text-center uppercase absolute bottom-[10px] left-1/2 transform -translate-x-1/2">
                best sellers
              </h3>
            </div>
            <div className="col-span-3 lg:col-span-4 h-[420px] content-center bg-[#f5f5f5]">
              <div className="content-wrapper px-[40px] py-[35px]">
                <h3 className="text-[24px] text-[#0f0f0f] font-medium mb-[15px] text-center uppercase">
                  loremous
                </h3>
                <p className="text-[#5f5f5f] text-[12px] text-center mb-[26px]">
                  Nam tempus turpis at metus scelerisque de placerat nullano
                  deumantos sollicitudin delos felis pellentesque an
                  milancelos...
                </p>
                <div className="w-full text-center">
                  <Link
                    href="#"
                    className="text-[#0f0f0f] font-medium underline decoration-solid underline-offset-[3px] text-center text-[14px] uppercase"
                  >
                    learn more
                  </Link>
                </div>
              </div>
            </div>
          </div> */
}
