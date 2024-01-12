import React from "react";
import NoticeCard from "./partials/NoticeCard";
import {FaBullhorn} from "react-icons/fa";
import Link from "next/link";
import {newsAndNotices} from "@/app/data/NewsAndNoticesData";

const RecentNotices = () => {

    return (
        <div className="container mt-10 mx-auto md:px-6 mb-20">
            <div className="text-center mb-8">
                <p className="text-sm text-red-500">Be Updated</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                    Notices and Announcements
                </h2>
            </div>
            <section className=" text-center md:text-left mt-5 grid grid-cols-1 md:grid-cols-2">
                {newsAndNotices?.slice(0, 4).map((n, index) => {
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
            </section>
            <div className="mt-4 text-center">
                <Link href="/notices" className="font-semibold leading-6 text-red-600 hover:text-red-500 ">
                    <span className='underline'>View All Notices</span>
                    <FaBullhorn className="inline-block ml-2 text-xl text-red-400 pointer-events-none flex-shrink-0"/>
                </Link>
            </div>
        </div>
    );
};

export default RecentNotices;
