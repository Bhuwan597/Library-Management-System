'use client';
import React, {useEffect, useRef, useState} from "react";

import {AiOutlineSearch} from "react-icons/ai";
import {Books} from './../data/BooksData';
import {useRouter} from "next/navigation";
import Link from "next/link";
import {FaBookOpen} from "react-icons/fa";

const Hero = () => {
        const router = useRouter();
        const [input, setInput] = useState('');
        const [suggestions, setSuggestions] = useState([]);
        const suggestionsRef = useRef();
        const [showList, setShowList] = useState(false);
        const [domLoaded, setDomLoaded] = useState(false);


        const handleSubmit = (e) => {
            e.preventDefault();
            if (!input) {
                return;
            }
            router.push(`/books?search=${input}`);
        };

        useEffect(() => {
            if (typeof window === "undefined") return;
            if (!input) return;

            setShowList(true);

            const filteredSuggestions = Books.filter((book) =>
                book.title.toLowerCase().includes(input.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        }, [input]);


        useEffect(() => {
            if (typeof window === "undefined") return;

            setDomLoaded(true);

            const handler = (e) => {
                if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
                    setShowList(false);
                }
            };

            document.addEventListener("click", handler);

            return () => {
                document.removeEventListener("click", handler);
            };
        }, []);

        return (
            <>
                {domLoaded && <div
                    className="flex flex-col gap-2 w-full max-w-[90%] mx-auto items-center sm:max-w-xl lg:max-w-2xl relative">
                    <form
                        onSubmit={handleSubmit}
                        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl relative z-10"
                    >
                        <AiOutlineSearch className="text-xl text-gray-500 mr-3"/>
                        <input
                            type="text"
                            className="flex-grow focus:outline-none"
                            placeholder="Search for Books..."
                            value={input}
                            onFocus={() => setShowList(true)}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        {showList && suggestions.length > 0 && (
                            <ul
                                ref={suggestionsRef}
                                className="absolute mt-8 left-0 right-0  bg-white border border-gray-200 rounded-md shadow-md max-h-32 overflow-y-auto z-20"
                            >
                                {suggestions.slice(0, 5).map((book, index) => (
                                    <li
                                        key={index}
                                        className="p-2 cursor-pointer flex items-center font-semibold hover:bg-gray-100"
                                    >
                                        <FaBookOpen className="text-xl text-gray-500 mr-3"/>
                                        <Link href={`/books/${book.title.toLowerCase().replace(/\s+/g, '')}`}>
                                            <p>{book.title}</p>
                                            <p className="text-gray-500 text-sm">{`By ${book.author}`}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {showList && input && suggestions.length === 0 && (
                            <div
                                className="absolute mt-8 left-0 right-0 bg-white border border-gray-200 rounded-md shadow-md p-2 text-gray-500 z-20">
                                No suggestions found.
                            </div>
                        )}
                    </form>
                    <p className="text-center text-xs text-red-500 w-full mx-auto">
                        Search by book title, author name, and genre.
                    </p>
                </div>}


            </>


        );
    }
;

export default Hero;
