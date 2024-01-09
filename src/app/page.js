import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CarouselComponent from "@/app/components/Carousel";
import NewArrivals from "@/app/components/NewArrivals";
import RecommendedBooks from "@/app/components/RecommendedBooks";
import RecentNotices from "./components/RecentNotices";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <CarouselComponent/>
            <NewArrivals/>
            <RecommendedBooks/>
            <RecentNotices/>
        </>
    );
}
