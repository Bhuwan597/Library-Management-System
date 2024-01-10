import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CarouselComponent from "@/app/components/Carousel";
import NewArrivals from "@/app/components/NewArrivals";
import RecommendedBooks from "@/app/components/RecommendedBooks";
import RecentNotices from "./components/RecentNotices";
import UpcomingBooks from "./components/UpcomingBooks";
import Footer from "@/app/components/Footer";
import Statistics from "./components/Statistics";
import MessageFromPresident from "./components/MessageFromPresident";
import Testimonials from "@/app/components/Testimonials";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <UpcomingBooks/>
            <CarouselComponent/>
            <NewArrivals/>
            <RecommendedBooks/>
            <RecentNotices/>
            <Statistics/>
            <MessageFromPresident/>
            <Testimonials/>
            <Footer/>
        </>
    );
}
