import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./newreleases.module.css";

function NextArrow(props) {
  const { onClick, currentSlide, slideCount } = props;
  const isHidden = currentSlide === slideCount - 4; // hide when at end
  return (
    !isHidden && (
      <div
        className="hidden lg:block absolute right-0 top-1/3 transform -translate-y-1/3 h-[40px] w-[40px] bg-black text-white rounded-full p-2 z-10"
        onClick={onClick}
      >
        <ChevronRight />
      </div>
    )
  );
}

function PrevArrow(props) {
  const { onClick, currentSlide } = props;
  const isHidden = currentSlide === 0;
  return (
    !isHidden && (
      <div
        className="hidden lg:block absolute left-0 top-1/3 transform -translate-y-1/3 h-[40px] w-[40px] bg-black text-white rounded-full p-2 z-10"
        onClick={onClick}
      >
        <ChevronLeft />
      </div>
    )
  );
}

function Responsive() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "-30px",
        }}
      >
        <ul className="flex lg:hidden justify-center space-x-2 m-0 p-0">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === activeIndex
            ? "border border-gray-400"
            : "bg-gray-400 hover:bg-gray-600"
        }`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const arrayData = [
    {
      title: "milancelo",
      subtitle: "1 product",
      image: "/images/collections/collection1.jpg",
      alt: "collection 1",
    },
    {
      title: "blazero",
      subtitle: "7 products",
      image: "/images/collections/collection2.jpg",
      alt: "collection 2",
    },
    {
      title: "cosmopolis",
      subtitle: "8 products",
      image: "/images/collections/collection3.jpg",
      alt: "collection 3",
    },
    {
      title: "scarvero",
      subtitle: "1 product",
      image: "/images/collections/collection4.jpg",
      alt: "collection 4",
    },
    {
      title: "luxury watches",
      subtitle: "13 products",
      image: "/images/collections/collection5.jpg",
      alt: "collection 5",
    },
  ];

  return (
    <div className="relative slider-container w-full">
      <Slider {...settings} className={styles.sliderContainer}>
        {arrayData.map((num) => {
          return (
            <div key={num}>
              <div
                className={`lg:col-span-3 col-span-4 flex justify-center items-center flex-col`}
              >
                <Image src={num.image} alt={num.alt} width={300} height={300} />
                <div className="collection-wrapper mt-[25px]">
                  <h3 className="uppercase font-medium text-[#0f0f0f] text-[20px] mb-[8px] text-center">
                    {num.title}
                  </h3>
                  <p className="text-[#636468] text-[12px] text-center">
                    {num.subtitle}
                  </p>
                  <div className="w-full mt-[15px] text-center">
                    <button className="px-[25px] pt-[13px] pb-[10px] transition-all duration-300 font-medium text-[12px] uppercase hover:bg-[#0f0f0f] hover:text-[#ffffff] border border-[#0f0f0f] text-[#0f0f0f]">
                      shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Responsive;
