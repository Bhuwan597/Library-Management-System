import React from 'react';
import NoticeCard from "@/app/components/partials/NoticeCard";
import {newsAndNotices} from "@/app/data/NewsAndNoticesData";
const NoticesPage = () => {
    return (
        <div className=' text-center md:text-left mt-5 grid grid-cols-1 md:grid-cols-2'>
            {newsAndNotices?.map((n, index) => {
                return (
                    <NoticeCard
                        key={index + 1}
                        title={n.title}
                        description={n.description}
                        publishedDate={n.publishedDate}
                        category={n.category}
                    />
                );
            })}
        </div>
    );
};

export default NoticesPage;