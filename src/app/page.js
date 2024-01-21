import Hero from "@/components/Hero";
import UpcomingBooks from "@/components/UpcomingBooks";
import CarouselComponent from "@/components/Carousel";
import NewArrivals from "@/components/NewArrivals";
import RecommendedBooks from "@/components/RecommendedBooks";
import RecentNotices from "@/components/RecentNotices";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MessageFromPresident from "@/components/MessageFromPresident";


export default function Home() {
    return (
        <>
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
