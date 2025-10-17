"use client";
import CollectionImages from "@/components/SliderCss/CollectionImages";
import Collections from "@/components/Homepage/Collections";
import Contactus from "@/components/Contactus";
import CustomBlocks from "@/components/Homepage/CustomBlocks";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/Homepage/HeroSlider";
import LogosSlider from "@/components/Homepage/LogosSlider";
import LuxwInstagram from "@/components/Homepage/LuxwInstagram";
import MenWomenProducts from "@/components/Homepage/MenWomenProducts";
import NewReleases from "@/components/Homepage/NewReleases";
import OffersSection from "@/components/Homepage/OffersSection";
import TopSeller from "@/components/Homepage/TopSeller";
import Navbar from "@/components/Homepage/Navbar";

function Home() {
  return (
    <>
      <Navbar />
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

      {/* <Collections /> */}
      {/* <CollectionImages /> */}
      {/* <div className="seprator h-[1px] w-full bg-[#b7b7b8]"></div>
      <NewReleases /> */}
    </>
  );
}

export default Home;
