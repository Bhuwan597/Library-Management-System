import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CarouselComponent from "@/app/components/Carousel";
import Newarrivals from "./components/Newarrivals";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselComponent/>
      <Newarrivals/>
    </>
  );
}
