'use client';
import React from "react";

import {AiOutlineSearch, AiOutlineBook} from "react-icons/ai";
import {Books} from './../data/BooksData';
import {useRouter} from "next/navigation";
import Link from "next/link";


const Hero = () => {
    const router = useRouter();
    const [input, setInput] = React.useState("");
    const [suggestions, setSuggestions] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) {
            return;
        }
        router.push(`/books?search=${input}`);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);

        if (inputValue === "") {
            setSuggestions([]);
        } else {
            const filteredSuggestions = Books.filter((book) =>
                book.title.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        }
    };


    return (
        <div className="flex flex-col gap-2 w-full max-w-[90%] mx-auto items-center sm:max-w-xl lg:max-w-2xl">
            <form
                onSubmit={handleSubmit}
                className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl relative"
            >
                <AiOutlineSearch className="text-xl text-gray-500 mr-3"/>
                <input
                    type="text"
                    className="flex-grow focus:outline-none"
                    placeholder="Search for Books..."
                    value={input}
                    onChange={handleInputChange}
                />
                {input && suggestions.length > 0 && (
                    <ul className="absolute mt-8 left-0 right-0  bg-white border border-gray-200 rounded-md shadow-md max-h-40 overflow-y-auto">
                        {suggestions.map((book, index) => (
                            <li
                                key={index}
                                className="p-2 cursor-pointer flex items-center font-semibold hover:bg-gray-100"
                            >
                                <AiOutlineBook className="text-xl text-gray-500 mr-3"/>
                                <Link href={`/books/${book.slug}`}>
                                    <p>{book.title}</p>
                                    <p className="text-gray-500 text-sm">{`By ${book.author}`}</p>
                                </Link>
                            </li>
                            ))}
                    </ul>
                    )}

                {input && suggestions.length === 0 && (
                    <p className="absolute mt-8 left-0 right-0  bg-white border border-gray-200 rounded-md shadow-md p-2 text-gray-500 text-sm">
                        No suggestions found.
                    </p>)}
            </form>
            <p className="text-center text-xs text-red-500 w-full mx-auto">
                Search by book title, author name, and genre.
            </p>
        </div>
    );
};

export default Hero;