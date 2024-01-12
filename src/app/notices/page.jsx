import React from 'react';
import NoticeCard from "@/app/components/partials/NoticeCard";
import {newsAndNotices} from "@/app/data/NewsAndNoticesData";
import Footer from "@/app/components/Footer";

const NoticesPage = () => {
    return (

        <>
            <div className='container mt-10 mx-auto md:px-6 mb-20'>
                <div className='text-center mb-8'>
                    <p className='text-sm text-red-500'>Stay Informed</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-black'>Latest Notices and Announcements</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {newsAndNotices?.map((n, index) => (
                        <NoticeCard
                            key={index + 1}
                            title={n.title}
                            description={n.description}
                            publishedDate={n.publishedDate}
                            category={n.category}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default NoticesPage;
