import React from 'react';
import Bookcard from "@/app/components/partials/Bookcard";
import {PiBooksBold} from "react-icons/pi";
import Link from "next/link";
import {bookDatas} from "@/app/data/BooksData";

const Books = () => {

    return (
        <>
            <div className="container mx-auto my-10 px-4">
                <div className="text-center mb-8">
                    <p className="text-sm text-red-500">Explore our collection of books</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Recommended Books</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                    {bookDatas?.slice(0, 8).map((book, index) => (
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
                    <Link href="/books" className="font-semibold leading-6 text-red-600 hover:text-red-500 ">
                        <span className='underline'>View All Books</span>
                        <PiBooksBold
                            className="inline-block ml-2 text-xl text-red-400 pointer-events-none flex-shrink-0"/>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default Books;