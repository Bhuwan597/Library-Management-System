// pages/books.jsx
'use client'
import React, {useState, useEffect} from 'react';
import Divider from "@/app/components/partials/Divider";
import Bookcard from "@/app/components/partials/Bookcard";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {PiBooksBold} from "react-icons/pi";

const Books = () => {
    // Sample data for books
    const booksData = [
        {
            title: "Think and Grow Rich",
            author: "Napolean Hill",
            imageSrc: "/thinkandgrowrich.jpg",
        },
        {
            title: "Jhola",
            author: "Krishna Dharabasi",
            imageSrc: "/jhola.jpg",
        },
        {
            title: "FirFire",
            author: "BuddhiSagar",
            imageSrc: "/firfire.jpg",
        }, {
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            imageSrc: "/richdadpoordad.jpg",
        }, {
            title: "Summer Love",
            author: "Subin Bhattrai",
            imageSrc: "/summerlove.jpg",
        }, {
            title: "Fatsungh",
            author: "Chuden Kabimo",
            imageSrc: "/fatsungh.jpg",
        },
    ];

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        updateScreenWidth();
        window.addEventListener("resize", updateScreenWidth);

        return () => {
            window.removeEventListener("resize", updateScreenWidth);
        };
    }, []);

    // Determine the number of books to display based on screen size
    const numBooksToShow = screenWidth >= 768 ? 6 : 4;

    return (
        <>
            <div className="container mx-auto my-10 px-4">
                <div className="text-center mb-8">
                    <p className="text-sm text-red-500">Explore our collection of books</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Recommended Books</h2>
                    <Divider text={'Swipe Down to view more'}/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {booksData.slice(0, numBooksToShow).map((book, index) => (
                        <Bookcard
                            key={index}
                            title={book.title}
                            author={book.author}
                            imageSrc={book.imageSrc}
                            slug={book.title.replace(/\s+/g, '').toLowerCase()}
                        />
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link href="/books" passHref>
                        <Button color="default" variant="faded"
                                className="w-[50%] lg:w-[30%] p-2 hover:scale-105 transition-transform ease-in-out duration-300 "
                                endContent={<PiBooksBold size={20} className='text-red-700'/>}>
                            <span className='text-red-900 font-semibold'>View All Books</span>
                        </Button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default Books;