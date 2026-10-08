import AllProducts from "@/components/AllProducts";
import HeroSection from "@/components/HeroSection";
import PriceDecreased from "@/components/PriceDecreased";
import PricesIncreased from "@/components/PricesIncreased";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <PricesIncreased/>
   <PriceDecreased/>
   <AllProducts/>
   </>
  );
}
