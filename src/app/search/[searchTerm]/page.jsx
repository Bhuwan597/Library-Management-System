import React from 'react';
import Bookcard from "@/app/components/partials/Bookcard";
import BooksTabsAndSearchbar from "@/app/components/partials/BooksTabsAndSearchbar";

const SearchPage = ({params}) => {

    const searchTerm = params.searchTerm;
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
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            imageSrc: "/richdadpoordad.jpg",
        },
        {
            title: "Summer Love",
            author: "Subin Bhattrai",
            imageSrc: "/summerlove.jpg",
        },
        {
            title: "Fatsungh",
            author: "Chuden Kabimo",
            imageSrc: "/fatsungh.jpg",
        },
        {
            title: "The Power of Positive Thinking",
            author: "Norman Vincent Peale",
            imageSrc: "/thepowerofpositivethinking.jpg",
        },
        {
            title: "Like It Happened Yesterday",
            author: "Ravinder Singh",
            imageSrc: "/likeithappenedyesterday.jpg",
        },
        {
            title: "Think and Grow Rich",
            author: "Napolean Hill",
            imageSrc: "/thinkandgrowrich.jpg",
        },


    ];
    const results = booksData.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <BooksTabsAndSearchbar/>
            {results.length === 0 && (
                <div className="text-center text-2xl font-bold text-red-500 mt-6">
                    No results found
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
                {results.map((book, index) => (
                    <Bookcard
                        key={index}
                        title={book.title}
                        author={book.author}
                        imageSrc={book.imageSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;