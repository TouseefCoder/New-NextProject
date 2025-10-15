"use client";
import CollectionImages from "@/components/collectionImage/CollectionImages";
import Collections from "@/components/Collections";
import Contactus from "@/components/Contactus";
import CustomBlocks from "@/components/CustomBlocks";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import LogosSlider from "@/components/LogosSlider";
import LuxwInstagram from "@/components/LuxwInstagram";
import MenWomenProducts from "@/components/MenWomenProducts";
import NewReleases from "@/components/NewReleases";
import OffersSection from "@/components/OffersSection";
import TopSeller from "@/components/TopSeller";
import Link from "next/link";
import { FaAngleUp } from "react-icons/fa6";

function Home() {
  return (
    <>
      <HeroSlider />
      <OffersSection />
      <TopSeller />
      <MenWomenProducts />
      <FeaturedProducts />
      <CustomBlocks />
      <LogosSlider />
      <LuxwInstagram />
      <Contactus />
      <Footer />
      <div className="h-[52px] w-[52px] border-2 bg-[#fff] flex justify-center items-center fixed bottom-[15vh] right-[3.175%] cursor-pointer z-50">
        <Link href="#topNav">
          <FaAngleUp size={33} />
        </Link>
      </div>
      {/* <Collections /> */}
      {/* <CollectionImages /> */}
      {/* <div className="seprator h-[1px] w-full bg-[#b7b7b8]"></div>
      <NewReleases /> */}
    </>
  );
}

export default Home;
