"use client";

import React from "react";
import {AiOutlineSearch} from "react-icons/ai";

const Hero = () => {
    const [input, setInput] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) {
            return;
        }
    }

    return (
        <div className="flex flex-col gap-2 w-full max-w-[90%] mx-auto items-center sm:max-w-xl lg:max-w-2xl">
        <form onSubmit={handleSubmit}
            className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
            <AiOutlineSearch className='text-xl text-gray-500 mr-3 '/>
            <input type='text' className='flex-grow focus:outline-none' placeholder='Search for Books...' value={input} onChange={(e)=>setInput(e.target.value)}/>
            </form>
            <p className="text-center text-xs text-red-500 w-full mx-auto">Search by book title, author name and genre.</p>
        </div>
            );
        };

export default Hero;
