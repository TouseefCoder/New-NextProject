import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

const Contactus = () => {
  return (
    <div className="w-full relative box-border">
      <img
        src="/images/contactpage/1.jpg"
        alt="contact us"
        className="h-full min-h-[300px] w-full object-cover"
      />
      <div className="content absolute left-0 top-0 w-full h-full flex items-center justify-center flex-col">
        <h4 className="text-[20px] sm:text-[24px] text-[#ffffff] font-medium mb-[12px] md:mb-[22px] uppercase">
          be the first
        </h4>
        <h3 className="text-[12px] font-[400] mb-[16px] lg:mb-[20px] xl:mb-[35px] text-[#ffffff] uppercase">
          Get the latest news, invites and offers straight to your mail.
        </h3>
        <form
          action=""
          className="flex items-center flex-col gap-x-[10px] gap-y-[10px] mb-[12px] md:mb-[20px] lg:mb-[30px] sm:flex-row justify-center flex-wrap w-full px-[15px]"
        >
          <input
            type="text"
            className="w-full sm:max-w-[330px] py-[7px] px-[15px] bg-[#ffffff] text-[#5f5f5f] text-[14px] text-center"
            name=""
            placeholder="Email address"
            id=""
            required
          />
          <input
            type="submit"
            className="sm:max-w-[146px] w-full px-[15px] bg-[#0f0f0f] text-[#ffffff] text-[14px] py-[7px] cursor-pointer uppercase"
            value="submit"
          />
        </form>
        <p className="text-[12px] font-[400] mb-[16px] lg:mb-[20px] text-center xl:mb-[35px] text-[#ffffff] ">
          Click here to read information on how LUXWatches processes your
          personal data
        </p>
        <div className="icons text-center text-[#ffffff] flex justify-center gap-x-[15px]">
          <FaFacebookF />
          <FaTwitter />
          <TiSocialGooglePlus />
          <FaPinterestP />
          <FaInstagram />
          <FaWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
