import React from "react";
import Footer from "../components/Footer";
import {Books} from '../data/BooksData';
import BooksTabsAndSearchbar from "../components/partials/BooksTabsAndSearchbar";
import Bookcard from "../components/partials/Bookcard";

const BooksPage = async ({searchParams}) => {
    const searchQueries = await searchParams;
    const lowercaseSearch = searchQueries?.search?.toLowerCase();

    const booksData = lowercaseSearch
        ? Books.filter((book) => book.title.toLowerCase().includes(lowercaseSearch))
        : Books;

    return (
        <>
            <BooksTabsAndSearchbar search={searchParams?.search} type={searchParams?.type}/>


            {booksData.length === 0 && (
                <div className="text-center mx-auto mt-8">
                    <h2 className="text-2xl font-bold text-red-500">
                        No Books Found!!!
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Try adjusting your search or explore other categories.
                    </p>
                </div>
            )}


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-10">




                {booksData.map((book, index) => (
                    <Bookcard
                        key={index}
                        title={book.title}
                        author={book.author}
                        imageSrc={book.imageSrc}
                        slug={book.title.replace(/\s+/g, "").toLowerCase()}
                    />
                ))}
            </div>
            <Footer/>
        </>
    );
};

export default BooksPage;
